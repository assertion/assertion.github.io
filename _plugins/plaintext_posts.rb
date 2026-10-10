Jekyll::Hooks.register :site, :post_write do |site|
  site.posts.docs.each do |post|
    title = post.data["headline"] || post.data["title"] || ""
    date  = post.data["date"] ? post.data["date"].strftime("%Y-%m-%d") : ""
    lang  = post.data["lang"] || "zh"
    canonical = "#{site.config['url']}#{site.config['baseurl']}#{post.url}"

    begin
      raw = File.read(post.path)
      body = raw.sub(/\A---.*?---\s*/m, "")
    rescue
      body = ""
    end

    content = "# #{title}\n\nDate: #{date}\nLanguage: #{lang}\nCanonical: #{canonical}\n\n---\n\n#{body}"

    dest = File.join(site.dest, post.url + ".md")
    FileUtils.mkdir_p(File.dirname(dest))
    File.write(dest, content)
  end
end
