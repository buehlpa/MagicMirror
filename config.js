/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "de",
	locale: "en-US",   // this variable is provided as a consistent location
			   // it is currently only used by 3rd party modules. no MagicMirror code uses this value
			   // as we have no usage, we  have no constraints on what this field holds
			   // see https://en.wikipedia.org/wiki/Locale_(computer_software) for the possibilities

	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		// {
		// 	module: "updatenotification",
		// 	position: "top_bar"
		// },
		{
			module: "MMM-CoupleDays",
			position: "top_left",
			config: {
				name1: "Sybil",
				name2: "Claudio", // If name2 is "", it only shows the first name (for birthday trackers for exaple)
				date: "2018-08-01", // year-month-day
				transitionDuration: 50000, // in ms
				language: "de", // (filename without the .json from the translations folder)
				textColor: "white" // any valid CSS color value For example, "red," or "#FFA500" (hex color)
			    }
			},
		{
			module: "clock",
			position: "top_right"
		},
		{
			module: "compliments",
			position: "upper_third"
		},
		{
		 module: "MMM-RAIN-MAP",
		 position: "bottom_left",
		 config: {
		  animationSpeedMs: 400,
		  colorScheme: 2,
		  colorizeTime: true,
		  defaultZoomLevel: 8,
		  displayTime: true,
		  displayTimeline: true,
		  displayClockSymbol: true,
		  displayHoursBeforeRain: -1,
		  extraDelayLastFrameMs: 1000,
		  extraDelayCurrentFrameMs: 3000,
		  invertColors: false,
		  markers: [
		   { lat: 47.307520316516026, lng: 8.764449049837246, color: "red" },
		   { lat: 46.43792094504532, lng: 9.764800158674495, color: "green" },
		   { lat: 47.644295827838484, lng: 9.210010036483292, color: "gold" },
		   { lat: 47.38609678847504, lng: 8.057836677496162, color: "yellow" },
		   { lat: 47.56863765986375, lng: 7.5614177634574125, color: "violet" },
		  ],
		  mapPositions: [
		   { lat: 47.307520316516026, lng: 8.764449049837246, zoom: 6, loops: 1 },
		   { lat: 47.307520316516026, lng: 8.764449049837246, zoom: 9, loops: 2 },
		   { lat: 47.307520316516026, lng: 8.764449049837246, zoom: 12, loops: 2 },

		   { lat: 46.43792094504532, lng: 9.764800158674495, zoom: 6, loops: 1 },
		   { lat: 46.43792094504532, lng: 9.764800158674495, zoom: 9, loops: 2 },
		   { lat: 46.43792094504532, lng: 9.764800158674495, zoom: 12, loops: 2 },

		   { lat: 47.644295827838484, lng: 9.210010036483292, zoom: 6, loops: 1 },
		   { lat: 47.644295827838484, lng: 9.210010036483292, zoom: 9, loops: 2 },
		   { lat: 47.644295827838484, lng: 9.210010036483292, zoom: 12, loops: 2 },


		   { lat: 47.38609678847504, lng: 8.057836677496162, zoom: 6, loops: 1 },
		   { lat: 47.38609678847504, lng: 8.057836677496162, zoom: 9, loops: 2 },
		   { lat: 47.38609678847504, lng: 8.057836677496162, zoom: 12, loops: 2 },


		   { lat: 47.56863765986375, lng: 7.5614177634574125, zoom: 6, loops: 1 },
		   { lat: 47.56863765986375, lng: 7.5614177634574125, zoom: 9, loops: 2 },
		   { lat: 47.56863765986375, lng: 7.5614177634574125, zoom: 12, loops: 2 },

		  ],
		  mapUrl: "https://a.tile.openstreetmap.de/{z}/{x}/{y}.png",
		  mapHeight: "420px", // must be a pixel value (no percent)
		  mapWidth: "420px", // must be a pixel value (no percent)
		  maxHistoryFrames: -1,
		  maxForecastFrames: -1,
		  substitudeModules: [],
		  updateIntervalInSeconds: 300,
		 }
		},
		{
			 module: "MMM-ImagesPhotos",
			 position: "bottom_right",
			 config: {
			  opacity: 0.9,
			  animationSpeed: 5000,
			  updateInterval: 50000,
			  maxHeight: "600px",
			  maxWidth:"600px",
			  sequential: false  // process the image list randomly
		 	
}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
