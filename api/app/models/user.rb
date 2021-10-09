# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  email      :string(255)      not null
#  nickname   :string(255)      not null
#  image      :string(255)
#  note       :text(65535)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

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
  validates :auth_id,               presence: true,
                                    # length: { maximum: 255 }
                                    uniqueness: { case_sensitive: false }
                                    # format: false
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
  def self.from_token_payload(payload)
    return if payload.blank?

    self.find_or_create_by!(
      auth_id: payload['sub'],
      email: payload['email'],
      nickname: payload['name'],
    )
  end


  # クラスメソッド(Private)


  # メソッド


  # メソッド(Private)
end
