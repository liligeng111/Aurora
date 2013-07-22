function run_top()
{
	input();
	navigation();

	if (document.all)
	{
		$('.ie_bar').fadeIn();
		$('.header').css('paddingTop', '0px');
	}
}

function input()
{
	$('input').each(function(){
		if ($(this).attr('type') == 'submit')
			return;
		$(this).val($(this).attr('prompt'));
		$(this).blur(function()
		{
			if ($(this).val() != '')
				return;
			$(this).val($(this).attr('prompt'));
			if ($(this).val() == ("密码") )
			{
				$(this).attr("type", "text");
			}
		});

		$(this).focus(function()
		{			
			if ($(this).val() != $(this).attr('prompt'))
				return;		
			if ($(this).val() == ("密码") )
			{
				$(this).attr("type", "password");
			}
			$(this).val("");	
		});
	});
}

function navigation()
{
	$('.top_menu_item_wrapper').each(function(){
		$(this).hover(
			function(){
			item_in($(this));
			},
			function(){
			item_out($(this));
			}
		);
	});

	$('.navigation').hover(item_in, item_out);

}

function item_in(item)
{
	fade_navigation = false;
	$('.navigation').fadeIn();
}

function item_out(item)
{
	fade_navigation = true;
	window.setTimeout("fade_out_navigation();", 1000);
}

function fade_out_navigation()
{
	if (fade_navigation)
	{
		$('.navigation').fadeOut();		
	}
}