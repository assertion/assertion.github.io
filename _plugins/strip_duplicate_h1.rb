# Posts with `headline` already render that string as the layout <h1>.
# The markdown body often starts with its own # heading, which becomes a
# second <h1>. Strip that first body heading after conversion.

Jekyll::Hooks.register :posts, :post_convert do |post|
  next if post.data["headline"].to_s.strip.empty?
  post.content = post.content.sub(/\A\s*<h1\b[^>]*>.*?<\/h1>\s*/m, "")
end
