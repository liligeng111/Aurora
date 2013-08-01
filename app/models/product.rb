class Product < ActiveRecord::Base
	has_many :favourites
	
	validates :name, presence: true, length: {minimum: 3}
	validates :brand, presence: true, length: {minimum: 3}
end
