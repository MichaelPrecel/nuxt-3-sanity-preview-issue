import { richText } from "./snippets/richText";

export const queryPageInfo = groq`*[_type == "pageInfo" && slug.current == $slug]| order(_updatedAt desc)[0]{
  title,
  slug,
  lede,
  body[]{
    ${richText}
  },
  seo
}`;
