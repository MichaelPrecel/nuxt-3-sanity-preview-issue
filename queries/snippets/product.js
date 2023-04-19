import { imageVideo } from "./media";

export const productInner = `
  thumbnail,
  shortTitle,
  reviewsCount,
  reviewsAverage,
  hoverVideo{
    ${imageVideo}
  },
  store{
    previewImageUrl,
    title,
    priceRange,
    id,
    slug,
    productType,
    descriptionHtml
  }
`;

export const product = `product->{
  ${productInner}
}`;

export const variant = `variant->{
  store{
    previewImageUrl,
    title,
    id,
    price,
  }
}`;

export const productWithVariant = `productWithVariant{
  ${product},
  ${variant}
}`;
