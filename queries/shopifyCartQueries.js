export const queryShopifyCartFields = `
  id
  checkoutUrl
  lines(first: 50) {
    edges {
      node {
        id
        quantity
        merchandise {
          ... on ProductVariant {
            id
            title
            product {
              id
              title
              handle
              requiresSellingPlan
            }
            price {
              amount
              currencyCode
            }
            availableForSale
            image{
              url
              width
              height
              altText
            }
          }
        }
        sellingPlanAllocation {
          sellingPlan {
            id
            name
          }
          priceAdjustments {
            price {
              amount
            }
            compareAtPrice {
              amount
            }
          }
        }
      }
    }
  }
  cost {
    totalAmount {
      amount
      currencyCode
    }
    subtotalAmount {
      amount
      currencyCode
    }
    totalTaxAmount {
      amount
      currencyCode
    }
    totalDutyAmount {
      amount
      currencyCode
    }
  }
  `;

export const queryShopifyCart = `query retrieveCart($id: ID!) {
  cart(id: $id) {
    ${queryShopifyCartFields}
  }
}`;
