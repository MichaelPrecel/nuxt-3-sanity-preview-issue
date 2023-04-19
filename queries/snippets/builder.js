import { internalLink } from "./internalLink";
import { richText } from "./richText";
import { image, imageVideo } from "./media";
import { button } from "./button";
import { product, productWithVariant } from "./product";
import { moduleFaq } from "./modules";

export const builder = `builder[]{
  // Global values
  _type,

  // Text Block Centered
  _type == "module.textCentred" => {
    images,
    title,
    text,
    ${button},
  },

  // Grid
  _type == "module.grid" => {
    title,
    subtitle,
    text[]{
      ${richText}
    },
    linkInternal{
      title,
      reference->{
        ${internalLink}
      }
    },
    centeredHeader,
    blocks[]{
      ${productWithVariant},
      link->{
        ${internalLink}
      },
      mediaPrimary{
        ${imageVideo}
      },
      mediaSecondary{
        ${imageVideo}
      },
      imageRatio,
      title,
      text[]{
        ${richText}
      }
    }
  },

  // USPs
  _type == "module.usp" => {
    title,
    text,
    image{
      ${imageVideo}
    },
    ${button},
    usps[]->{
      title,
      text,
      icon
    }
  },

  // Reviews
  _type == "module.reviews" => {
    title,
    reviews[]->{
      authorImage,
      authorName,
      rating,
      text,
      ${product}
    },
  },

  // Logo Carousel
  _type == "module.logoCarousel" => {
    title,
    subtitle,
    images[]{
      ${image}
    }
  },

  // Cinematic
  _type == "module.cinematic" => {
    title,
    subtitle[]{
      ${richText}
    },
    linkInternal{
      title,
      reference->{
        ${internalLink}
      }
    },
    media{
      ${imageVideo}
    },
    caption[]{
      ${richText}
    },
    fullbleed
  },

  // UGCs
  _type == "module.ugcs" => {
    title,
    subtitle,
    ${button},
    "ugcs": *[_type == "globals.ugc"][]|order(orderRank){
      media{
        ${imageVideo}
      },
      imageRatio
    }
  },

  // Text Cols
  _type == "module.textCols" => {
    title,
    subtitle,
    navTitle,
    cols[]{
      media{
        ${imageVideo}
      },
      imageRatio,
      text[]{
        ${richText}
      },
      sticky
    },
    layout
  },

  // Faq
  ${moduleFaq},

  // Annotator
  _type == "module.annotator" => {
    title,
    text,
    image,
    showHotspots,
    imageHotspots[]{
      title,
      text,
      x,
      y
    },
    ${button}
  }
}`;
