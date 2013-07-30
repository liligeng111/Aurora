class Favourite < ActiveRecord::Base
  belongs_to :user

  validates :item_id, presence: true
end
