function run_top()
{
	input();
	// navigation();
	show_cart_count();

	//for ie users
	if (document.all)
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

function show_cart_count()
{
	var cart_count= 0;
	var first_item = true;
	for (var v in $.cookie())
	{
		//filter other cookies
		if (v.slice(0,4) != 'cart')
			continue;

		var id = v.slice(4);
		//build list
		var item_wrapper = $("<li class='item_wrapper'></li>");
		var item = $("<div class='item'></div>");
		item_wrapper.append(item);
		$('.shopping_cart_list').append(item_wrapper);
		if (first_item)
		{
			first_item = false;
			item_wrapper.addClass('first');
		}

		//item pic
		var pic = $("<div class='img_wrapper'><img src='/assets/" + id + ".jpg'></div>");

		//item link
		var link = $("<div class='link_wrapper'><a class='link' href='/products/" + id +"'>hi</a></div>");

		item.append(pic);
		item.append(link);

		var count = $.cookie()[v].split(',');
		for (var i = 0; i < count.length; i++)
		{
			var n = 0;
			try
			{
				n = parseInt(count[i]);
			}
			catch(e)
			{
				n = 0;
			}

			if (!isNaN(n))
				cart_count += n;
		}
	}

	$('.shopping_cart_count').text(cart_count);
}
