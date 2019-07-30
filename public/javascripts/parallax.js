jQuery(document).ready(function(){
	var containers = [];
	var sensitivityMultiplier = 0.005;

	$('.parallax').each(function(index) {
  		var wrapperOffset = $(this).offset();
		var CenterX = wrapperOffset.left + ($(this).width()/2);
		var CenterY = wrapperOffset.top + ($(this).height()/2);

		containers.push(
		{	
			depth: Math.abs($(this).attr("parallax")) || 1,
			s: $(this),
			centerX: CenterX,
			centerY: CenterY,
		})  
	});

	$(window).mousemove(function(e) {
		var mouseX = e.pageX;
		var mouseY = e.pageY;

		for(var i=0;i<containers.length;i++)  {
			doAwesomeness(mouseX, mouseY, containers[i]);
		}
	});

	$('body').addClass('load')
	for(var i=0;i<containers.length;i++) {
		doAwesomeness(0, 0, containers[i]);
	}


	function doAwesomeness(mouseX,mouseY, container) {
		var RelX = ( ( mouseX - container.centerX )) * sensitivityMultiplier * container.depth;
		var RelY = ( ( mouseY - container.centerY )) * sensitivityMultiplier * container.depth;
		container.s.css('-webkit-transform', 'translateY(' + RelY + 'px) translateX(' + RelX + 'px)' );
		container.s.css('transform', 'translateY(' + RelY + 'px) translateX(' + RelX + 'px)' );
	};

})