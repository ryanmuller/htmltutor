var Wami = window.Wami || {};
Wami.Button = function(guiID, type) {
	var self = this;
	self.active = false;

	// Get the background button image position
	// Index: 1) normal 2) pressed 3) mouse-over
	function background(index) {
		if (index == 1)
			return "-56px 0px";
		if (index == 2)
			return "0px 0px";
		if (index == 3)
			return "-112px 0";
		alert("Background not found: " + index);
	}

	// Get the type of meter and its state
	// Index: 1) enabled 2) meter 3) disabled
	function meter(index, offset) {
		var top = 5;
		if (offset)
			top += offset;
		if (self.type == Wami.Button.RECORD) {
			if (index == 1)
				return "-169px " + top + "px";
			if (index == 2)
				return "-189px " + top + "px";
			if (index == 3)
				return "-249px " + top + "px";
		} else {
			if (index == 1)
				return "-269px " + top + "px";
			if (index == 2)
				return "-298px " + top + "px";
			if (index == 3)
				return "-327px " + top + "px";
		}
		alert("Meter not found: " + self.type + " " + index);
	}

	function silhouetteWidth() {
		if (self.type == Wami.Button.RECORD) {
			return "20px";
		} else {
			return "29px";
		}
	}

	function mouseHandler(e) {
		var rightclick;
		if (!e)
			var e = window.event;
		if (e.which)
			rightclick = (e.which == 3);
		else if (e.button)
			rightclick = (e.button == 2);

		if (!rightclick) {
			if (self.active && self.onstop) {
				self.active = false;
				self.onstop();
			} else if (!self.active && self.onstart) {
				self.active = true;
				self.onstart();
			}
		}
	}

	function init(guiID, type) {
		self.type = type;
		if (!self.type) {
			self.type = Wami.Button.record;
		}

		var div = document.createElement("div");
		div.style.position = 'relative';

		var elem = document.getElementById(guiID);
		if (elem) {
			elem.appendChild(div);
		} else {
			alert('Could not find element on page named ' + guiID);
		}

		self.guidiv = document.createElement("div");
		self.guidiv.style.width = '56px';
		self.guidiv.style.height = '63px';
		self.guidiv.style.cursor = 'pointer';
		self.guidiv.style.background = "url(images/buttons.png) no-repeat";
		self.guidiv.style.backgroundPosition = background(1);
		div.appendChild(self.guidiv);

		// margin auto doesn't work in IE quirks mode
		// http://stackoverflow.com/questions/816343/why-will-this-div-img-not-center-in-ie8
		// text-align is a hack to force it to work even if you forget the
		// doctype.
		self.guidiv.style.textAlign = 'center';

		self.meterDiv = document.createElement("div");
		self.meterDiv.style.width = silhouetteWidth();
		self.meterDiv.style.height = '63px';
		self.meterDiv.style.margin = 'auto';
		self.meterDiv.style.cursor = 'pointer';
		self.meterDiv.style.position = 'relative';
		self.meterDiv.style.background = "url(images/buttons.png) no-repeat";
		self.meterDiv.style.backgroundPosition = meter(2);
		self.guidiv.appendChild(self.meterDiv);

		self.coverDiv = document.createElement("div");
		self.coverDiv.style.width = silhouetteWidth();
		self.coverDiv.style.height = '63px';
		self.coverDiv.style.margin = 'auto';
		self.coverDiv.style.cursor = 'pointer';
		self.coverDiv.style.position = 'relative';
		self.coverDiv.style.background = "url(images/buttons.png) no-repeat";
		self.coverDiv.style.backgroundPosition = meter(1);
		self.meterDiv.appendChild(self.coverDiv);

		self.active = false;
		self.guidiv.onmousedown = mouseHandler;
	}
	
	self.isActive = function() {
		return self.active;
	}

	self.setActivity = function(level) {
		self.guidiv.onmouseout = function() {
		};
		self.guidiv.onmouseover = function() {
		};
		self.guidiv.style.backgroundPosition = background(2);
		self.coverDiv.style.backgroundPosition = meter(1, 5);
		self.meterDiv.style.backgroundPosition = meter(2, 5);

		var totalHeight = 31;
		var maxHeight = 9;

		// When volume goes up, the black image loses height,
		// creating the perception of the colored one increasing.
		var height = (maxHeight + totalHeight - Math.floor(level / 100
				* totalHeight));
		self.coverDiv.style.height = height + "px";
	}

	self.setEnabled = function(enable) {
		var guidiv = self.guidiv;
		self.active = false;
		if (enable) {
			self.coverDiv.style.backgroundPosition = meter(1);
			self.meterDiv.style.backgroundPosition = meter(1);
			guidiv.style.backgroundPosition = background(1);
			guidiv.onmousedown = mouseHandler;
			guidiv.onmouseover = function() {
				guidiv.style.backgroundPosition = background(3);
			};
			guidiv.onmouseout = function() {
				guidiv.style.backgroundPosition = background(1);
			};
		} else {
			self.coverDiv.style.backgroundPosition = meter(3);
			self.meterDiv.style.backgroundPosition = meter(3);
			guidiv.style.backgroundPosition = background(1);
			guidiv.onmousedown = null;
			guidiv.onmouseout = function() {
			};
			guidiv.onmouseover = function() {
			};
		}
	}

	init(guiID, type);
}

// The types of buttons we can show:
Wami.Button.RECORD = "record";
Wami.Button.PLAY = "play";
