class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.references :user, index: true
      t.references :product, index: true
      t.references :delivery, index: true
      t.integer :order_number
      t.integer :size
      t.integer :quantity
      t.integer :status

      t.timestamps
    end
  end
end
