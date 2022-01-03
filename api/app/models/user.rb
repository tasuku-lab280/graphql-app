# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  auth0_id   :string(255)      not null
#  nickname   :string(255)
#  email      :string(255)
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
  has_many :posts, dependent: :destroy


  # 委譲


  # スコープ


  # フック


  # バリデーション
  validates :auth0_id,              presence: true,
                                    # length: { maximum: 255 }
                                    uniqueness: { case_sensitive: true }
                                    # format: false
  validates :email,                 presence: true,
                                    length: { maximum: 255 },
                                    uniqueness: { case_sensitive: true },
                                    # format: false
                                    unless: -> { validation_context == :create }
  validates :nickname,              presence: true,
                                    length: { maximum: 32, allow_blank: true },
                                    # uniqueness: false,
                                    # format: false
                                    unless: -> { validation_context == :create }
  


  # クラス変数


  # クラスメソッド
  def self.from_token_payload(payload)
    return if payload.blank?

    find_or_create_by!(auth0_id: payload['sub'])
  end


  # クラスメソッド(Private)


  # メソッド


  # メソッド(Private)
end
