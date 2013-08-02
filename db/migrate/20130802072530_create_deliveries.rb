class CreateDeliveries < ActiveRecord::Migration
  def change
    create_table :deliveries do |t|
      t.references :user, index: true
      t.string :name
      t.integer :phone
      t.string :address
      t.integer :postal_code
      t.boolean :show

      t.timestamps
    end
  end
end
