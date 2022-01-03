# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  post_id    :integer          not null
#  body       :text(65535)      not null
#  note       :text(65535)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

#
# = コメント
#
class Comment < ApplicationRecord
  # モジュール


  # 定数


  # アクセサ


  # 関連
  belongs_to :user, optional: true
  belongs_to :post, optional: true


  # 委譲


  # スコープ


  # フック


  # バリデーション
  validates :user_id,             presence: true
                                  # length: { maximum: 255 },
                                  # uniqueness: { scope: [:post_id] }
                                  # format: false
  validates :post_id,             presence: true
                                  # length: { maximum: 255 },
                                  # uniqueness: { scope: :post_id }
                                  # format: false
  validates :body,                presence: true,
                                  length: { maximum: 255 }
                                  # uniqueness: { scope: :group_id }
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
