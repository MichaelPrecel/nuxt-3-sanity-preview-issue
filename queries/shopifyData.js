export const queryShopifyData = `
query allProducts {
	collection(handle: "squeezes") {
		products(first: 50) {
			edges {
				node {
					id
					handle
					title
					requiresSellingPlan
					priceRange{
						minVariantPrice{
							amount
						}
					}
					reviewsCount: metafield(namespace: "stamped", key: "reviews_count") {
						value
						type
					}
					reviewsAverage: metafield(namespace: "stamped", key: "reviews_average") {
						value
						type
					}

					variants(first:50){
						edges {
							node {
								id
								title
								price {
									amount
									currencyCode
								}
								sellingPlanAllocations(first:50) {
									edges {
										node {
											sellingPlan {
												id
												name
												options {
													name
													value
												}
											}
											priceAdjustments {
												price {
													amount
													currencyCode
												}
												compareAtPrice {
													amount
													currencyCode
												}
												perDeliveryPrice {
													amount
													currencyCode
												}
												unitPrice {
													amount
													currencyCode
												}
											}
										}
									}
								}
							}
						}
					}

					sellingPlanGroups(first: 50) {
						edges {
							node {
								name
								options {
									name
									values
								}
								sellingPlans(first: 50) {
									edges {
										node {
											name
											id
											priceAdjustments {
												adjustmentValue {
													... on SellingPlanPercentagePriceAdjustment {
														adjustmentPercentage
													}
													... on SellingPlanFixedAmountPriceAdjustment {
														adjustmentAmount {
															amount
															currencyCode
														}
													}
													... on SellingPlanFixedPriceAdjustment {
														price {
															amount
															currencyCode
														}
													}
												}
											}
											options {
												name
												value
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}`;
