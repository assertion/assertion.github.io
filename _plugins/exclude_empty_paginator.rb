# jekyll-paginate counts ZH+EN twins, so it emits an extra page (e.g. /page4/)
# whose unique-ZH slice is empty. That page is already noindex; keep it out
# of sitemap.xml as well. jekyll-sitemap 1.4 honors `sitemap: false` at render
# time, so this runs after paginate (:lowest, _plugins load after gems) and
# again on :pre_render as a backstop.

module Jekyll
  class ExcludeEmptyPaginatorPages < Generator
    safe true
    priority :lowest

    def generate(site)
      ExcludeEmptyPaginatorPages.apply(site)
    end

    def self.apply(site)
      unique_total = site.posts.docs.count { |p| p.data["lang"].to_s != "en" }
      per_page = (site.config["paginate"] || 15).to_i
      per_page = 15 if per_page <= 0
      unique_pages = (unique_total + per_page - 1) / per_page

      site.pages.each do |page|
        pager = page.pager
        next unless pager

        zh_on_page = pager.posts.any? { |p| p.data["lang"].to_s != "en" }
        page.data["sitemap"] = false if pager.page > unique_pages || !zh_on_page
      end
    end
  end
end

Jekyll::Hooks.register :site, :pre_render do |site|
  Jekyll::ExcludeEmptyPaginatorPages.apply(site)
end
