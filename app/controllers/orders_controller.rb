class OrdersController < ApplicationController
	before_filter :authenticate_user!

	def new
		condition = ["user_id = ?", "#{current_user.id}"];
		if Delivery.exists?(condition)
			@deliveries = Delivery.find(:all, condition);
		else
			flash[:notice] = "请添加一个送货地址"
			redirect_to user_delivery_path
		end
	end

end
