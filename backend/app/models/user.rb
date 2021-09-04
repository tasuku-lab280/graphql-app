#
# = 会員
#
class User < ApplicationRecord
  # モジュール


  # 定数


  # アクセサ


  # 関連
  has_many :articles, dependent: :destroy


  # 委譲


  # スコープ


  # フック


  # バリデーション
  validates :nickname,              presence: true,
                                    length: { maximum: 32, allow_blank: true }
                                    # uniqueness: false,
                                    # format: false
  # validates :image,                 presence: false,
                                    # length: { maximum: 255 }
                                    # uniqueness: false
                                    # format: false
  validates :note,                  # presence: false,
                                    length: { maximum: 1024, allow_blank: true }
                                    # uniqueness: false
                                    # format: false


  # クラス変数


  # クラスメソッド


  # クラスメソッド(Private)


  # メソッド


  # メソッド(Private)
end
