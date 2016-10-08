var _ = require('lodash');
var serialport = require('serialport');

function SerialConnection(opts) {
	var self = this;

	this.opts = _.defaultsDeep(opts, {
		checkInterval: 100,

		devicePattern: {},

		serialOptions: {
			baudRate: 57600,
		},
	});

	// Open Connection will be saved here.
	this.connection = null;

	//
	// Called every time the connection closes
	// 
	this.connectionClosed = function (data) {
		console.log('Closed connection'.red);

		this.connection = null;

		// Notify callback
		this.opts.onConnect && this.opts.onConnect(null);

		// Check for new connection
		this.checkConnection();
	}


	//
	// Called every time the connection closes
	// 
	this.connectionOpened = function (connection) {
		console.log('Opened connection'.green);

		// Notify callback
		this.opts.onConnect && this.opts.onConnect(this.connection);
	}


	// 
	// Checks the connection, and connects if not connected
	// 
	this.checkConnection = function () {
		// console.log('Checking connection...');

		if(this.connection && this.connection.isOpen())
			return;
		
		serialport.list(function (err, ports) {
			console.log(ports);
			if(err) return console.log('Error: '.red + err);

			// Find matching device
			var port = _.findWhere(ports, self.opts.devicePattern);

			if(!port)
				return;
			
			console.log('Connecting to '+port.comName);

			self.connectTo(port.comName);
		})

	};


	// 
	// Tryies to connect to the defined Path, and close any
	// connection before doing it.
	// 
	this.connectTo = function (path) {
		var newlyConn;

		if(this.connection && this.connection.isOpen())
			this.connection.close(thenConnect);
		else
			thenConnect();


		function thenConnect (err){
			if(err) return console.error('Error', err);

			self.connection = new serialport.SerialPort(path, self.opts.serialOptions);
				
			self.connection.on('open', self.connectionOpened.bind(self));
			self.connection.on('close', self.connectionClosed.bind(self));
		};
	};


	// 
	// Pings the Connection
	// 
	setInterval(this.checkConnection.bind(this), this.opts.checkInterval);
}

module.exports = SerialConnection;