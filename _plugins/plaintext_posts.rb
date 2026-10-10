# Write a plain-markdown copy of each post next to the HTML:
#   /YYYY/MM/DD/slug.md
#
# Cloudflare Pages builds can have a non-UTF-8 default external encoding
# (e.g. LANG=C). File.read without an explicit encoding then raises on
# Chinese source, and a blanket rescue produced empty bodies (~177 bytes).
# Always read the raw source file as UTF-8, strip YAML with Jekyll's own
# front-matter regexp, and keep a pre_render stash as fallback.

module PlaintextPosts
  module_function

  def source_path(site, post)
    candidates = [
      post.path,
      site.in_source_dir(post.relative_path),
      File.join(site.source.to_s, post.relative_path.to_s),
      File.join(site.source.to_s, "_posts", File.basename(post.path.to_s))
    ].compact.uniq
    candidates.find { |p| File.file?(p) }
  end

  def strip_front_matter(raw)
    if raw =~ Jekyll::Document::YAML_FRONT_MATTER_REGEXP
      $POSTMATCH
    else
      raw.sub(/\A---\s*\n.*?\n---\s*\n/m, "")
    end
  end

  def read_markdown_body(site, post)
    cached = post.instance_variable_get(:@plaintext_markdown)
    return cached if cached && !cached.empty?

    path = source_path(site, post)
    unless path
      Jekyll.logger.warn "Plaintext:", "missing source for #{post.relative_path}"
      return ""
    end

    raw = File.read(path, encoding: "UTF-8")
    body = strip_front_matter(raw)
    if body.to_s.strip.empty?
      Jekyll.logger.warn "Plaintext:", "empty body after front-matter strip: #{path}"
    end
    body
  end
end

Jekyll::Hooks.register :posts, :pre_render do |post|
  site = post.site
  path = PlaintextPosts.source_path(site, post)
  body = nil
  if path
    raw = File.read(path, encoding: "UTF-8")
    body = PlaintextPosts.strip_front_matter(raw)
  end
  # pre_render content is already the unconverted markdown body
  body = post.content.dup if body.to_s.strip.empty? && post.content
  post.instance_variable_set(:@plaintext_markdown, body.to_s)
end

Jekyll::Hooks.register :site, :post_write do |site|
  site.posts.docs.each do |post|
    title = post.data["headline"] || post.data["title"] || ""
    date  = post.data["date"] ? post.data["date"].strftime("%Y-%m-%d") : ""
    lang  = post.data["lang"] || "zh"
    canonical = "#{site.config['url']}#{site.config['baseurl']}#{post.url}"
    body = PlaintextPosts.read_markdown_body(site, post)

    content = "# #{title}\n\nDate: #{date}\nLanguage: #{lang}\nCanonical: #{canonical}\n\n---\n\n#{body}"

    dest = File.join(site.dest, post.url + ".md")
    FileUtils.mkdir_p(File.dirname(dest))
    File.write(dest, content, encoding: "UTF-8")
  end
end
