# Jekyll 3.9 has no :post_convert hook. Posts with `headline` already
# render that string as the layout <h1>; strip the body's first <h1>
# from the converted HTML via a Liquid filter.

module StripLeadingH1
  def strip_leading_h1(input)
    input.to_s.sub(/\A\s*<h1\b[^>]*>.*?<\/h1>\s*/m, "")
  end
end

Liquid::Template.register_filter(StripLeadingH1)
