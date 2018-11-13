function openSideMenu() {
	document.getElementById('side-menu').style.width='250px';
	document.getElementById('main').style.marginLeft='250px';
}

function closeSideMenu() {
	document.getElementById('side-menu').style.width='0';
	document.getElementById('main').style.marginLeft='0';
}

var slider={
	
	//define slide variables
	el: {
	    slider: $("#slider"),
	    allSlides: $(".slide")
	},

	//initial function, scroll slider
	init: function() {
	    this.el.slider.on("scroll",function(event) {
		slider.moveSlidePosition(event);
	    });
	},

	//helper function for scroll
	moveSlidePosition: function(event) {
	     this.el.allSlides.css({
		"background-position": $(event.target).scrollLeft()/6-100+ "px 0"
	     });
	}
};

//initialize slider
slider.init();


