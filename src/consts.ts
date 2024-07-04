// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = "CineBuzZBD";
export const SITE_TITLE = "CineBuzZBD";
export const SITE_DESCRIPTION = "Latest movies download for free...";

// Tags Page Metadata, src/pages/tags/index.astro
export const Tags_TITLE = "CineBuzZBD - Categories";
export const Tags_DESCRIPTION =
  "CineBuzZBD - Latest movies download for free...";

// Tags Page Metadata, src/pages/tags/[tag]/[page].astro
export function getTagMetadata(tag: string) {
  return {
    title: `All articles on '${tag}' tag in CineBuzZBD`,
    description: ` ${tag} Movies.`,
  };
}

// Category Page Metadata, src/pages/category/[category]/[page].astro
export function getCategoryMetadata(category: string) {
  return {
    title: `All articles in '${category}' category in AstroVerse`,
    description: `Browse all articles under the ${category} category in AstroVerse`,
  };
}

// Header Links, src/components/Header.astro
export const HeaderLinks = [
  { href: "/category/One/1/", title: "Bangla" },
  { href: "/category/Two/1/", title: "Hindi" },
  { href: "/category/Three/1/", title: "Dubbed" },
];

// Footer Links, src/components/Footer.astro
export const FooterLinks = [
  { href: "/tags/", title: "Categories" },
];

// Social Links, src/components/Footer.astro
export const SocialLinks = [
  { href: "/rss.xml", icon: "tabler:rss", label: "RSS" },
];

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} -  Search`;
export const SEARCH_PAGE_DESCRIPTION = `Search all content on ${SITE_TITLE}`;
