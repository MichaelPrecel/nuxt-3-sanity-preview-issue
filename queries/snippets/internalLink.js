export const internalLink = `
  _type != "product" => {
    _type,
    title,
    slug
  },

  _type == "product" => {
    _type,
    "title": @.store.title,
    "slug": @.store.slug
  }
`;
