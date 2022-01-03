# == Schema Information
#
# Table name: post_pv_logs
#
#  id         :bigint           not null, primary key
#  post_id    :integer          not null
#  ip_address :string(255)
#  user_agent :text(65535)
#  note       :text(65535)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

#
# = 投稿PVログ
#
class PostPvLog < ApplicationRecord
  # モジュール


  # 定数


  # アクセサ


  # 関連
  belongs_to :post


  # 委譲


  # スコープ


  # フック


  # バリデーション
  validates :post_id,             presence: true
                                  # length: { maximum: 255 }
                                  # uniqueness: true
                                  # format: false
  validates :ip_address,          # presence: true
                                  length: { maximum: 225 }
                                  # uniqueness: { scope: :group_id }
                                  # format: false
  validates :user_agent,          # presence: true
                                  length: { maximum: 65535 }
                                  # uniqueness: false
                                  # format: false


  # クラス変数


  # クラスメソッド
  def self.cleanup!
    where('post_pv_logs.created_at < ?', 1.year.ago).destroy_all
  end


  # クラスメソッド(Private)


  # メソッド


  # メソッド(Private)
end
