class Delivery < ActiveRecord::Base
	belongs_to :user

	validates_presence_of :name, :phone, :address
	validates_length_of :name, in: 2..10
	validates_length_of :phone, in: 8..11
	validates_length_of :address, in: 5..100

end
