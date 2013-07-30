function run_top()
{
	input();
	navigation();

	//for ie users
	if (document.all && navigator.userAgent.indexOf("MSIE 10.0") <= 0)
	{
		$('.ie_bar').fadeIn();
		$('.header').css('paddingTop', '0px');
	}

	//devise alert
	if($('.devise_alert').text() != '')
	{
		$('.devise_alert').fadeIn();
		setTimeout("$('.devise_alert').fadeOut();", 3000);
	}
}

function input()
{
	$('input').each(function(){
		if ($(this).attr('type') == 'submit')
			return;
		if ($(this).attr('type') == 'hidden')
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
	$('.navigation_wrapper').hover(
			function(){
			$('.shopping_cart_list').fadeOut();
			item_in($('.navigation'));
			},
			function(){
			item_out($('.navigation'));
			}
		);

	$('.shopping_cart_wrapper').hover(
			function(){
			$('.navigation').fadeOut();
			item_in($('.shopping_cart_list'));
			},
			function(){
			item_out($('.shopping_cart_list'));
			}
		);


	$('.top_menu_window').hover(
			function(){
			item_in($(this));
			},
			function(){
			item_out($(this));
			}
		);

}

function item_in(item)
{
	fade_navigation = false;
	item.fadeIn();
}

function item_out(item)
{
	fade_navigation = true;
	window.setTimeout("fade_out_window();", 1000);
}

function fade_out_window()
{
	if (fade_navigation)
	{
		$('.top_menu_window').fadeOut();		
	}
}


function sign_in_click()
{
	if ($('#user_email').val() == '注册邮箱')
	{
		window.location=$("#sign_in_page").attr("href");
	}
	else
	{
		$('.top_menu form').submit(); 
	}
	return false;
}
