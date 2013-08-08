class WelcomeController < ApplicationController

	# caches_page  :about

	def index  	
		@products = Product.all
	end

	def about
	end

end
