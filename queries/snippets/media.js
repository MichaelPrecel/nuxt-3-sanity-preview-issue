import { richText } from "./richText";

export const image = `
  ...,
  hotspot,
  "dimensions": asset->metadata.dimensions,
  caption[]{
    ${richText}
  }
`;

export const video = `
  "mp4": mp4.asset->url,
  "webm": webm.asset->url,
  alt
`;

export const imageVideo = `
  image{
    ${image}
  },
  video{
    ${video}
  }
`;
