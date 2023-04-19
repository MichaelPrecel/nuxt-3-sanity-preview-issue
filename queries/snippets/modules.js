import { richTextInner } from "./richText";

export const moduleFaq = `
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
  }
`;
