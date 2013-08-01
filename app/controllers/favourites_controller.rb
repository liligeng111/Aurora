class FavouritesController < ApplicationController
	before_filter :authenticate_user!


	def add
		favourite = current_user.favourites.create(params.permit(:product_id))
		if favourite.save
			flash[:notice] = "已将商品加入您的收藏"
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
			flash[:notice] = "已将商品移出您的收藏"
		else
			flash[:notice] = "您并没有收藏该商品"
		end		
			redirect_to :controller => :products, :action => :show, :id => params[:product_id]
	end

	def show
		condition = ["user_id = ?", "#{current_user.id}"];
		@favourites = Favourite.find(:all, condition);
	end

end
