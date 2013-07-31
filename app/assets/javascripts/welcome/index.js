$(function() {run_index();});
$(window).bind('page:change', function() {
  run_index();
})

function run_index()
{
	if ($('body').attr('controller') != 'welcome' || $('body').attr('action') != 'index')
		return;
	
	var gallery = $('.gallery img');
	gallery_pivot = 1;
	$(gallery.get(0)).css('margin-left', '-1480px');
	$(gallery.get(1)).css('margin-left', '-490px');
	$(gallery.get(2)).css('margin-left', '500px');

	for (var i = 3; i < gallery.length; i++)
	{
		$(gallery.get(i)).css('margin-left', '1490px');
	}

	timerID = setTimeout("gallery_animate(1)", 5000);
	gallery_button_last_click = 0;

	//button
	$('.gallery .right_button').click(function(){
		var time = new Date();
		if (time.getTime() - gallery_button_last_click < 500)
			return;
		clearTimeout(timerID);
		gallery_animate(1);
	});

	$('.gallery .left_button').click(function(){
		var time = new Date();
		if (time.getTime() - gallery_button_last_click < 500)
			return;
		clearTimeout(timerID);
		gallery_animate(-1);
	});
}

function gallery_animate(direction)
{
	var gallery = $('.gallery img');
	position = ['-2470px', '-1480px', '-490px', '500px', '1490px'];

	for (var i = direction; Math.abs(i) <= 2; i -= direction)
	{
		if (i == direction && gallery.length ==3)
		{
			continue;
		} 
		var n = (i + gallery_pivot) % gallery.length;
		$(gallery.get(n)).css('margin-left', position[i + 2])
		$(gallery.get(n)).animate({marginLeft: position[i + 2 + direction]}, 500);
	}

	var time = new Date();
	gallery_button_last_click = time.getTime();

	gallery_pivot -= direction;
	gallery_pivot = gallery_pivot % gallery.length;

	timerID = setTimeout("gallery_animate(1)", 5000);
}
