class Product < ActiveRecord::Base
	validates :name, presence: true, length: {minimum: 3}
	validates :brand, presence: true, length: {minimum: 3}
end
