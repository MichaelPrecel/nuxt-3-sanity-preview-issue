import { internalLink } from "./snippets/internalLink";
import { richTextInner } from "./snippets/richText";
import { productInner } from "./snippets/product";
import { imageVideo } from "./snippets/media";

export const querySite = groq`*[_type == 'settings']| order(_updatedAt desc)[0]{
  menu{
    links[]{
      title,
      reference->{
        ${internalLink}
      },
      url,
      newWindow
    },
    shopLinks[]{
      _key,
      title,
      products[]->{
        ${productInner}
      }
    },
    shopPreview{
      ${imageVideo}
    }
  },
  footer{
    ...,
    links[]{
      heading,
      links[]{
        title,
        reference->{
          ${internalLink}
        },
        url,
        newWindow
      }
    }
  },
  announcer{
    ...,
    "internalLink": @.internalLink->{
      slug,
      _type
    }
  },
  links[]{
    ...,
    heading,
    links[]->{
      _type,
      title,
      slug
    }
  },
  navProducts[]->{
    thumbnail,
    thumbnailSecondary,
    title,
    productType,
    slug{current}
  },
  marquee,
  newsletter,
  "announcement": *[_id == "announcement"][0]{
    _updatedAt,
    alwaysLive,
    text[]{
      ${richTextInner}
    },
    maxAge
  },
  seo,
  "slugs": {
    "pages": *[_type == "page"][]{
      "slug": "/" + slug.current
    },
    "infoPages": *[_type == 'pageInfo'][]{
      "slug": "/about/" + slug.current
    },
    "products": *[_type == "product"][]{
      "slug": "/shop/" + store.slug.current
    },
  }
}`;
