class DeliveriesController < ApplicationController

	before_filter :authenticate_user!

	def add
		delivery = current_user.deliveries.create(params.permit(:name, :phone, :address))
		if delivery.save
			redirect_to user_delivery_path
		else
			flash[:notice] = delivery.errors.full_messages[0]
			redirect_to user_delivery_path
		end
	end

	def delete
		condition = ["user_id = ? and id = ?", "#{current_user.id}", "#{params[:delivery_id]}"];
		if Delivery.exists?(condition)
			Delivery.destroy_all(condition);
			redirect_to user_delivery_path
		else
			flash[:notice] = "无效的地址编号"
			redirect_to user_delivery_path
		end		
	end

	def show
		condition = ["user_id = ?", "#{current_user.id}"];
		@deliveries = Delivery.find(:all, condition);
	end
end
