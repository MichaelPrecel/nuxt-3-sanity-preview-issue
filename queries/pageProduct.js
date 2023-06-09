import { builder } from "./snippets/builder";
import { image } from "./snippets/media";
import { richText } from "./snippets/richText";

export const queryPageProduct = groq`*[_type == "product" && store.slug.current == $slug]| order(_updatedAt desc)[0]{
  title,
  shortTitle,
  reviewsCount,
  reviewsAverage, 
  usps[]->{
    title,
    text,
    icon
  },
  thumbnail,
  images[]{
    ${image}
  },
  descriptions[]{
    title,
    text[]{
      ${richText}
    }
  },
  featuredReview,
  productSwitcher[]{
    product->{
      store{
        previewImageUrl,
        title,
        id,
        slug,
      }
    },
    variant->{
      store{
        previewImageUrl,
        title,
        id
      }
    }
  },
  ${builder},
  store{
    descriptionHtml,
    id,
    options,
    previewImageUrl,
    priceRange,
    productType,
    slug,
    status,
    tags,
    title,
    variants[]->{
      store{
        compareAtPrice,
        id,
        inventory,
        isDeleted,
        option1,
        option2,
        option3,
        previewImageUrl,
        price,
        productId,sky,
        status,
        title
      }
    },
  },
  seo
}`;
