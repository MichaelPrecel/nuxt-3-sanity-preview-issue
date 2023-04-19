import { builder } from "./snippets/builder";

export const queryPage = groq`*[_type == "page" && slug.current == $slug]| order(_updatedAt desc)[0]{
  title,
  secondaryTitle,
  ${builder},
  seo
}`;
