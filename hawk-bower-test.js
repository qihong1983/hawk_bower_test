define(function (require, exports, module) {

	function Widget() {
		this.name = 'widget';		
	}


	Widget.prototype = {
	
		init: function () {
			console.log(this.name);	
		}
	}

	
});
