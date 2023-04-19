import { product, variant } from "./snippets/product";
import { builder } from "./snippets/builder";

export const queryPageShop = groq`*[_type == "shop"]| order(_updatedAt desc)[0]{
  title,
  featured{
    title,
    subtitle,
    products[]{
      ${product},
      ${variant}
    }
  },
  products[]{
    ${product},
    ${variant}
  },
  sections[]{
    title,
    products[]{
      ${product},
      ${variant}
    }
  },
  ${builder},
  seo
}`;
