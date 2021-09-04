COUNT = 10
USER_IDS = [1, 2, 3]

# 会員
results = Array.new(COUNT) do |i|
  num = i + 1
  {
    nickname:  "会員#{num}",
    email: "dev+user#{num}@example.com",
  }
end
User.create!(results)

# 記事
results = Array.new(COUNT) do |i|
  num = i + 1
  {
    user_id: USER_IDS[i % 3],
    status: Article.status.values[i % 3],
    title: "サンプルタイトル#{num}",
    body: "サンプル本文#{num}",
  }
end
Article.create!(results)
