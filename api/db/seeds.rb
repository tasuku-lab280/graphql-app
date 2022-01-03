# 定数
USER_COUNT = 20
POST_COUNT = 100
POST_FILE_COUNT = 20
TAG_COUNT = 20
POST_TAG_COUNT = 20
TOUCH_COUNT = 20
COMMENT_COUNT = 20
FOLLOW_COUNT = 20


# 会員
results = Array.new(USER_COUNT) do |i|
  num = i + 1
  {
    auth0_id: SecureRandom.base64(8),
    nickname:  "会員#{num}",
    email: "dev+user#{num}@example.com",
  }
end
User.create!(results)
USER_IDS = User.ids


# 投稿
results = Array.new(POST_COUNT) do |i|
  num = i + 1
  {
    user_id: USER_IDS[i % USER_COUNT],
    status: Post.status.values[i % 3],
    body: "サンプル本文#{num}",
  }
end
Post.create!(results)
POST_IDS = Post.ids

# 投稿ファイル
results = Array.new(POST_FILE_COUNT) do |i|
  num = i + 1
  {
    post_id: POST_IDS[i % POST_COUNT],
    kind: :image,
    seq: num,
    file: File.open('app/assets/images/no_image.png'),
  }
end
PostFile.create!(results)


# タグ
results = Array.new(TAG_COUNT) do |i|
  num = i + 1
  {
    name: "サンプルタグ#{num}",
  }
end
Tag.create!(results)
TAG_IDS = Tag.ids


# 投稿タグ
results = Array.new(POST_TAG_COUNT) do |i|
  {
    tag_id: TAG_IDS[i % TAG_COUNT],
    post_id: POST_IDS[i % POST_COUNT],
  }
end
PostTag.create!(results)


# タッチ
results = Array.new(TOUCH_COUNT) do |i|
  {
    user_id: USER_IDS[i % USER_COUNT],
    post_id: POST_IDS[i % POST_COUNT],
    kind: Touch.kind.values[i % 2],
  }
end
Touch.create!(results)


# コメント
results = Array.new(COMMENT_COUNT) do |i|
  num = i + 1
  {
    user_id: USER_IDS[i % USER_COUNT],
    post_id: POST_IDS[i % POST_COUNT],
    body: "サンプル本文#{num}",
  }
end
Comment.create!(results)


# フォロー
results = Array.new(FOLLOW_COUNT) do |i|
  {
    follower_id: USER_IDS[i % USER_COUNT],
    followed_id: USER_IDS[(i + 1) % USER_COUNT],
  }
end
Follow.create!(results)
