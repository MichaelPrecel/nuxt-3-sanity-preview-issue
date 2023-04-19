export const mutationShopifyCreateCart = `
  mutation createCart($cartInput: CartInput!) {
    cartCreate(input: $cartInput) {
      cart {
        ${queryShopifyCartFields}
      }
    }
  }`;

export const mutationShopifyAddLineItems = `
  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ${queryShopifyCartFields}
      }
    }
  }`;

export const mutationShopifyUpdateLineItems = `
  mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ${queryShopifyCartFields}
      }
    }
  }`;
