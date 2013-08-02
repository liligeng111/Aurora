class FavouritesController < ApplicationController
	before_filter :authenticate_user!


	def add
		favourite = current_user.favourites.create(params.permit(:product_id))
		if favourite.save
			redirect_to :controller => :products, :action => :show, :id => params[:product_id]
		else
			flash[:notice] = favourite.errors.first[1]
			redirect_to root_path
		end
	end

	def delete
		condition = ["user_id = ? and product_id = ?", "#{current_user.id}", "#{params[:product_id]}"];
		if Favourite.exists?(condition)
			Favourite.destroy_all(condition);
			redirect_to :controller => :products, :action => :show, :id => params[:product_id]
		else
			flash[:notice] = "您并没有收藏该商品"
			redirect_to root_path
		end		
	end

	def show
		condition = ["user_id = ?", "#{current_user.id}"];
		@favourites = Favourite.find(:all, condition);
	end

end
