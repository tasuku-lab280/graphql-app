# == Schema Information
#
# Table name: touches
#
#  id         :bigint           not null, primary key
#  user_id    :integer
#  post_id    :integer          not null
#  kind       :string(255)      not null
#  note       :text(65535)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

#
# = タッチ
#
class Touch < ApplicationRecord
  # モジュール
  extend Enumerize
  enumerize :kind, in: %i(like check), predicates: { prefix: true }, scope: true


  # 定数


  # アクセサ


  # 関連
  belongs_to :user, optional: true
  belongs_to :post, optional: true


  # 委譲


  # スコープ
  scope :touch_count, ->(kind) { where(kind: kind).count }


  # フック


  # バリデーション
  validates :user_id,             presence: true,
                                  # length: { maximum: 255 }
                                  uniqueness: { scope: %i(post_id kind) }
                                  # format: false
  validates :post_id,             presence: true
                                  # length: { maximum: 255 }
                                  # uniqueness: { scope: :post_id }
                                  # format: false
  validates :kind,                presence: true,
                                  length: { maximum: 255 }
                                  # uniqueness: false
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
