class Order < ActiveRecord::Base
	belongs_to :user
	belongs_to :product

	validates_presence_of :product_id, :message => '无效的产品编号'
	validates_associated :product, :message => '无效的产品编号'
	validates_presence_of :product, :message => '无效的产品编号'
end
