class FavouritesController < ApplicationController
	before_filter :authenticate_user!


	def add
		condition = ["user_id = ? and item_id = ?", "#{current_user.id}", "#{params[:item_id]}"];
		unless Favourite.exists?(condition)
			favourite = current_user.favourites.create(params.permit(:item_id))
			if favourite.save?
				flash[:notice] = "已将商品加入您的收藏"
			else
				falsh[:notice] = '无效的商品编号'
			end
		else
			flash[:notice] = "该商品已在您的收藏之中"
		end		
			redirect_to :controller => :products, :action => :show, :id => params[:item_id]
	end

	def delete
		condition = ["user_id = ? and item_id = ?", "#{current_user.id}", "#{params[:item_id]}"];
		if Favourite.exists?(condition)
			Favourite.destroy_all(condition);
			flash[:notice] = "已将商品移出您的收藏"
		else
			flash[:notice] = "您并没有收藏该商品"
		end		
			redirect_to :controller => :products, :action => :show, :id => params[:item_id]
	end

	def show
		condition = ["user_id = ?", "#{current_user.id}"];
		@favourites = Favourite.find(:all, condition);
	end

end
