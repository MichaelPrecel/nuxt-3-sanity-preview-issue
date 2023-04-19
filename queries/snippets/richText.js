import { internalLink } from "./internalLink";

export const richTextInner = `
...,
markDefs[]{
  ...,
  _type == "annotationLinkInternal" => {
    ...,
    reference->{
      ${internalLink}
    }
  }
}`;

export const richText = `
  ${richTextInner},

  _type == "imageVideo" => {
    image{
      ...,
      hotspot,
      "dimensions": asset->metadata.dimensions,
      caption[]{
        ${richTextInner}
      }
    },
    video{
      "mp4": mp4.asset->url,
      "webm": webm.asset->url,
      alt
    }
  },

  _type == "module.faq" => {
    title,
    subtitle[]{
      ${richTextInner}
    },
    questions[]->{
      question,
      answer[]{
        ${richTextInner}
      }
    }
  },

  _type == "richTable" => {
    rows[]{
      columns[]{
        text[]{
          ${richTextInner}
        }
      }
    }
  }
`;
