export const SITE_URL = "https://ngc.bio";
export const SITE_NAME = "Next Generation Chemistry";
export const SITE_DESCRIPTION =
  "We are redefining the future of the textile industry through the power of nature. Our mission is to transform the textile sector into a cleaner, more sustainable, and environmentally-friendly industry by replacing traditional chemical products with innovative bio-based alternatives.";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/home.jpg`;
export const TWITTER_HANDLE = "@NGC_bio";

type BuildMetaArgs = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: string;
  noindex?: boolean;
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildMeta({
  title,
  description = SITE_DESCRIPTION,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noindex = false,
}: BuildMetaArgs = {}) {
  const pageTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} — Bio-based chemistry for textiles`;
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return [
    { title: pageTitle },
    { name: "description", content: description },
    {
      name: "robots",
      content: noindex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    { name: "author", content: SITE_NAME },
    { name: "theme-color", content: "#0B3D2E" },
    { tagName: "link", rel: "canonical", href: url },
    { property: "og:type", content: type },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: "en_US" },
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: imageUrl },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: pageTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
    { name: "twitter:site", content: TWITTER_HANDLE },
  ];
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    alternateName: "NGC",
    url: SITE_URL,
    logo: absoluteUrl("/images/logo.svg"),
    email: "hello@ngc.bio",
    telephone: "+351927812110",
    sameAs: [
      "https://www.linkedin.com/company/ngc-bio",
      "https://x.com/NGC_bio",
    ],
    description: SITE_DESCRIPTION,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua do Progresso, 145",
      postalCode: "4455-533",
      addressLocality: "Perafita",
      addressCountry: "PT",
    },
  };
}

export const INDEXABLE_ROUTES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about-us", priority: "0.8", changefreq: "monthly" },
  { path: "/contacts", priority: "0.8", changefreq: "monthly" },
  { path: "/bioshade", priority: "0.8", changefreq: "monthly" },
  { path: "/projects/ecoCleanTex", priority: "0.7", changefreq: "monthly" },
  { path: "/projects/no-petrol", priority: "0.7", changefreq: "monthly" },
  { path: "/projects/plantcovid", priority: "0.7", changefreq: "monthly" },
] as const;
