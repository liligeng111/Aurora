class CreateFavourites < ActiveRecord::Migration
  def change
    create_table :favourites do |t|
      t.string :item_id
      t.references :user, index: true

      t.timestamps
    end
  end
end
