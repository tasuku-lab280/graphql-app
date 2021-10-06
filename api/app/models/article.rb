# == Schema Information
#
# Table name: articles
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  status     :string(255)      default("draft"), not null
#  title      :string(255)      not null
#  body       :text(65535)      not null
#  image      :string(255)
#  note       :text(65535)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

#
# = 記事
#
class Article < ApplicationRecord
  # モジュール
  extend Enumerize
  enumerize :status, in: %i(public private draft), predicates: { prefix: true }, scope: true


  # 定数


  # アクセサ


  # 関連
  belongs_to :user, optional: true


  # 委譲


  # スコープ


  # フック


  # バリデーション
  validates :user_id,               presence: true
                                    # length: { maximum: 32, allow_blank: true }
                                    # uniqueness: false,
                                    # format: false
  validates :status,                presence: true
                                    # length: { maximum: 32, allow_blank: true }
                                    # uniqueness: false,
                                    # format: false
  validates :title,                 presence: true,
                                    length: { maximum: 40, allow_blank: false }
                                    # uniqueness: false,
                                    # format: false
  validates :body,                  presence: true,
                                    length: { maximum: 65535, allow_blank: true }
                                    # uniqueness: false,
                                    # format: false
  # validates :image,                 presence: false,
                                    # length: { maximum: 255 }
                                    # uniqueness: false
                                    # format: false
  validates :note,                  presence: false,
                                    length: { maximum: 1024, allow_blank: true }
                                    # uniqueness: false
                                    # format: false


  # クラス変数


  # クラスメソッド


  # クラスメソッド(Private)


  # メソッド


  # メソッド(Private)
end
