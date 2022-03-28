# == Schema Information
#
# Table name: post_files
#
#  id         :bigint           not null, primary key
#  post_id    :integer          not null
#  kind       :string(255)      default("image"), not null
#  seq        :string(255)
#  file       :string(255)      not null
#  note       :text(65535)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

#
# = 投稿ファイル
#
class PostFile < ApplicationRecord
  # モジュール
  extend Enumerize
  mount_uploader :file, PostFileUploader
  enumerize :kind, in: %i(image file), predicates: { prefix: true }, scope: true


  # 定数


  # アクセサ


  # 関連
  belongs_to :post, optional: true


  # 委譲


  # スコープ


  # フック
  before_validation :set_max_seq, if: :new_record?, unless: :seq?
  before_validation :set_kind


  # バリデーション
  validates :post,                presence: true
                                  # length: { maximum: 255 }
                                  # uniqueness: false
                                  # format: false
  validates :seq,                 # presence: false
                                  # length: { maximum: 255 }
                                  uniqueness: { scope: :post_id }
                                  # format: false
  validates :file,                presence: true
                                  # length: { maximum: 255 }
                                  # uniqueness: false
                                  # format: false
  validates :note,                # presence: false
                                  length: { maximum: 1024 }
                                  # uniqueness: false
                                  # format: false

  # クラス変数


  # クラスメソッド


  # クラスメソッド(Private)


  # メソッド
  def file_name
    file.filename
  end

  def file_extension
    file.file.try!(:extension)
  end


  # メソッド(Private)

  private

  def set_max_seq
    return if post.blank?
    max = post.post_files.map(&:seq).compact.max.to_i + 1 # maximum(:seq)だと複数画像を投稿した際に上手くいかない
    assign_attributes(seq: max)
  end

  def set_kind
    assign_attributes(kind: %w(jpg jpeg gif png).include?(file_extension) ? :image : :file)
  end
end
