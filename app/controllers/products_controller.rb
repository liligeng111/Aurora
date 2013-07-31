class ProductsController < ApplicationController
	http_basic_authenticate_with name: "admin", password: "musicchina", 
					only: [:index, :edit, :new, :create, :update, :destroy]
	
	# protect_from_forgery :except => [:index, :show]	
	# before_filter :authenticate_user!, :only => :purchase

	def search
		@keyword = params[:keyword];
		@products = Product.find(:all, :conditions => ["brand like ? or name like ?", "%#{params[:keyword]}%", "%#{params[:keyword]}%"])
	end

	def purchase
		number = params[:number].to_i
		size = params[:size].to_i
		item_id = params[:item_id].to_i
		session[:cart] = Hash.new if session[:cart] == nil
		session[:cart][item_id] = Hash.new if session[:cart][item_id] == nil
		session[:cart][item_id][size] = 0 if session[:cart][item_id][size] == nil
		session[:cart][item_id][size] += number.to_i
		flash[:notice] = "成功将商品加入购物车"
		redirect_to product_path :id => item_id
	end

	def recommand
		@product = Product.find(params[:id])
	end

	def index
		@products = Product.all
	end

	def show
		@product = Product.find(params[:id])
	end

	def new
		@product = Product.new
	end

	def create
		@product = Product.new(product_params)

		if @product.save
			redirect_to @product
		else
			render 'new'
		end
	end

	def edit
		@product = Product.find(params[:id])
	end

	def update
		@product = Product.find(params[:id])

		if @product.update(params[:product].permit(:name, :brand))
			redirect_to @product
		else
			render 'edit'
		end
	end

	def destroy
		@product = Product.find(params[:id])
		@product.destroy 
		redirect_to products_path
	end

	private
		def product_params
	 		params.require(:product).permit(:name, :brand)
		end
end
