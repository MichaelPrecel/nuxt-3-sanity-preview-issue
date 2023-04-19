import { video } from "./snippets/media";
import { internalLink } from "./snippets/internalLink";
import { builder } from "./snippets/builder";

export const queryPageHome = groq`*[_type == "home"] | order(_updatedAt desc)[0] {
  landing{
    ...,
    video{
      ${video}
    },
    button{
      title,
      reference->{
        ${internalLink}
      }
    }
  },
  ${builder},
  seo
}`;
