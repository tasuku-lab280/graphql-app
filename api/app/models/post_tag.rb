# == Schema Information
#
# Table name: post_tags
#
#  id         :bigint           not null, primary key
#  tag_id     :integer          not null
#  post_id    :integer          not null
#  note       :text(65535)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

#
# = 投稿タグ
#
class PostTag < ApplicationRecord
  # モジュール


  # 定数


  # アクセサ


  # 関連
  belongs_to :post, optional: true
  belongs_to :tag, optional: true


  # 委譲


  # スコープ


  # フック


  # バリデーション
  validates :post,                presence: true
                                  # length: false
                                  # uniqueness: false
                                  # format: false
  validates :tag,                 presence: true
                                  # length: false
                                  # uniqueness: false
                                  # format: false
  validates :note,                # presence: true
                                  length: { maximum: 1024 }
                                  # uniqueness: false
                                  # format: false


  # クラス変数


  # クラスメソッド


  # クラスメソッド(Private)


  # メソッド


  # メソッド(Private)
end
