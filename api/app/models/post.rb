# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  status     :string(255)      default("draft"), not null
#  body       :text(65535)      not null
#  pv         :integer          default(0), not null
#  note       :text(65535)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

#
# = 投稿
#
class Post < ApplicationRecord
  # モジュール
  extend Enumerize
  enumerize :status, in: %i(public private draft), predicates: { prefix: true }, scope: true


  # 定数


  # アクセサ


  # 関連
  belongs_to :user, optional: true
  has_many :post_files, dependent: :destroy
  has_many :images, -> { with_kind(:image) }, class_name: 'PostFile'
  has_many :files, -> { with_kind(:file) }, class_name: 'PostFile'
  has_many :post_pv_logs, dependent: :destroy
  has_many :touches, dependent: :destroy
  has_many :comments, dependent: :destroy


  # 委譲


  # スコープ


  # フック


  # バリデーション
  validates :user_id,               presence: true
                                    # length: { maximum: 255 }
                                    # uniqueness: false,
                                    # format: false
  validates :status,                presence: true
                                    # length: { maximum: 255 }
                                    # uniqueness: false,
                                    # format: false
  validates :body,                  presence: true,
                                    length: { maximum: 65535 }
                                    # uniqueness: false,
                                    # format: false
  validates :note,                  # presence: false,
                                    length: { maximum: 1024 }
                                    # uniqueness: false
                                    # format: false


  # クラス変数


  # クラスメソッド


  # クラスメソッド(Private)


  # メソッド


  # メソッド(Private)
end
