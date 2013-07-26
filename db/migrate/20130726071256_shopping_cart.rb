class ShoppingCart < ActiveRecord::Migration
  def change
  	add_column(:users, "shopping_cart", :string)
  end
end
