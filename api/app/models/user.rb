# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  sub        :string(255)      not null
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


  # クラス変数


  # クラスメソッド
  def self.from_token_payload(payload)
    find_by(sub: payload['sub']) || create!(sub: payload['sub'])
  end


  # クラスメソッド(Private)


  # メソッド


  # メソッド(Private)
end
