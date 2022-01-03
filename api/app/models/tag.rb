# == Schema Information
#
# Table name: tags
#
#  id         :bigint           not null, primary key
#  name       :string(255)      not null
#  note       :text(65535)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

#
# = タグ
#
class Tag < ApplicationRecord
  # モジュール


  # 定数


  # アクセサ


  # 関連
  has_many :post_tags, dependent: :destroy


  # 委譲


  # スコープ


  # フック


  # バリデーション
  validates :name,                presence: true,
                                  length: { maximum: 255 }
                                  # uniqueness: { scope: :post_id }
                                  # format: false
  validates :note,                # presence: false
                                  length: { maximum: 1024 }
                                  # uniqueness: { scope: :group_id }
                                  # format: false



  # クラス変数


  # クラスメソッド


  # クラスメソッド(Private)


  # メソッド


  # メソッド(Private)
end
