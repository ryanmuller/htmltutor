var Wami = window.Wami || {};

// A place to store non-anonymous callback functions.
Wami._callbacks = Wami._callbacks || {};

// This method ensures that a WAMI recorder is operational, and that
// the following API is available in the Wami namespace. All functions
// must be named (i.e. cannot be anonymous).
//
// Wami.startPlaying(url, startfn = null, finishedfn = null, failedfn = null);
// Wami.stopPlaying()
//
// Wami.startRecording(url, startfn = null, finishedfn = null, failedfn = null);
// Wami.stopRecording()
//
// Wami.getRecordingLevel() // Returns a number between 0 and 100
// Wami.getPlayingLevel() // Returns a number between 0 and 100
//
// Wami.hide()
// Wami.show()
//
// Manipulate the WAMI recorder's settings. Some settings will have
// to vary between Flash/Android/iPhone. In Flash, for instance,
// we need to check if the microphone permission has been granted.
// We might also set/return sample rate here, etc.
//
// Wami.getSettings();
// Wami.setSettings(options);
//
// Optional way to set up browser so that it's constantly listening
// This is to prepend audio in case the user starts talking before
// they click-to-talk.
//
// Wami.startListening()
// Wami.stopListening()
//
Wami.setup = function(id, callback) {
	if (Wami.startRecording) {
		// Wami's already defined
		callback();
		return;
	}

	function supportsTransparency() {
		// Detecting the OS is a big no-no in Javascript programming, but
		// I can't think of a better way to know if wmode is supported or
		// not... since NOT supporting it (like Flash on Ubuntu) is a bug.
		return (navigator.platform.indexOf("Linux") == -1);
	}

	// Embed the WAMI SWF and call the named callback function when loaded.
	function embedWamiSWF(id, initfn) {
		var flashVars = {
			visible : false,
			loadedCallback : initfn
		}

		var params = {
			allowScriptAccess : "always"
		}

		if (supportsTransparency()) {
			params.wmode = "transparent";
		}

		if (console) {
			flashVars.console = true;
		}

		var version = '10.0.0';
		document.getElementById(id).innerHTML = "WAMI requires Flash "
				+ version
				+ " or greater<br />https://get.adobe.com/flashplayer/";

		// This is the minimum size due to the microphone security panel
		swfobject.embedSWF("swf/Wami.swf", id, 214, 137, version, null, flashVars,
				params);

		// Without this line, Firefox has a dotted outline of the flash
		swfobject.createCSS("#" + id, "outline:none");
	}

	// To check if the microphone settings were 'remembered', we
	// must actually embed an entirely new Wami client and check
	// whether its microphone is granted. If it is, it was remembered.
	function checkRemembered(finishedfn) {
		var id = "Wami-SWF" + Math.random();
		var div = document.createElement('div');
		div.style.top = '-999px';
		div.style.left = '-999px';
		div.setAttribute('id', id);
		var body = document.getElementsByTagName('body').item(0);
		body.appendChild(div);

		Wami._callbacks[id] = function() {
			var swf = document.getElementById(id);
			Wami._remembered = swf.getSettings().microphone.granted;
			var div = document.getElementById(id);
			swfobject.removeSWF(id);
			eval(finishedfn + "()");
		};
		
		embedWamiSWF(id, "Wami._callbacks['" + id + "']");
	}

	// Attach all the audio methods to the Wami namespace in the callback.
	function delegateWamiAPI() {
		var recorder = document.getElementById(id);

		function delegate(name) {
			Wami[name] = function() {
				return recorder[name].apply(recorder, arguments);
			}
		}

		delegate('startPlaying');
		delegate('stopPlaying');
		delegate('startRecording');
		delegate('stopRecording');
		delegate('startListening');
		delegate('stopListening');
		delegate('getRecordingLevel');
		delegate('getPlayingLevel');
		delegate('setSettings');

		// Append extra information about whether mic settings are sticky
		Wami.getSettings = function() {
			var settings = recorder.getSettings();
			settings.microphone.remembered = Wami._remembered;
			return settings;
		}

		Wami.showSecurity = function(panel, startfn, finishedfn, failfn) {
			Wami._callbacks['securitypanelclosed'] = function() {
				checkRemembered(finishedfn);
			}

			recorder.showSecurity(panel, startfn,
					"Wami._callbacks['securitypanelclosed']", failfn);
		}

		Wami.show = function() {
			if (!supportsTransparency()) {
				recorder.style.visibility = "visible";
			}
		}

		Wami.hide = function() {
			// Hiding flash in all the browsers is tricky. Please read:
			// https://code.google.com/p/wami-recorder/wiki/HidingFlash
			if (!supportsTransparency()) {
				recorder.style.visibility = "hidden";
			}
		}

		// If we already have permissions, they were previously 'remembered'
		Wami._remembered = recorder.getSettings().microphone.granted;

		callback();
	}

	//
	// These lines initialize the SWF you see for security settings...
	//
	Wami._callbacks['initswf'] = delegateWamiAPI;
	embedWamiSWF(id, "Wami._callbacks['initswf']");
}
