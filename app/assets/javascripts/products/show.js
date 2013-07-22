factor = 5;

function run_product()
{
	offset_left = $('.product_img').offset().left;
	offset_top = $('.product_img').offset().top;

	$('.product_img').hover(img_in, img_out);

	$('.product_img').mousemove(img_move);

	$('.magnifier_lens').hover(
		function(){fade_magnifier = false;},
		img_out
	);

	$('.magnifier_lens').mousemove(img_move);

	//select size
	$('.product_meta .size').click(function(){
		$('.product_meta .size').removeClass('selected');
		$(this).addClass('selected');
	});
}

function img_in()
{
	fade_magnifier = false;
	$('.magnifier_lens').fadeIn();
	$('.magnifier').fadeIn();
}

function img_out()
{
	fade_magnifier = true;
	window.setTimeout("magnifier_fade_out();", 500);
}

function img_move()
{
	e = window.event;
	x = e.pageX - offset_left - 49;
	y = e.pageY - offset_top - 49;
	x = Math.min(401, Math.max(1, x));
	y = Math.min(401, Math.max(1, y));
	$('.magnifier_lens').css('top', y);	
	$('.magnifier_lens').css('left', x);	
	position = -factor * x + "px " + -factor * y + "px";
	$('.magnifier').css('background-position', position);
}

function magnifier_fade_out()
{
	if (fade_magnifier)
	{
		$('.magnifier_lens').fadeOut();
		$('.magnifier').fadeOut();
	}
}

function value_minus(index, oldvalue)
{
	var value = parseInt(oldvalue);
	return Math.max(value - 1, 1);
}

function value_plus(index, oldvalue)
{
	var value = parseInt(oldvalue);
	return value + 1;
}