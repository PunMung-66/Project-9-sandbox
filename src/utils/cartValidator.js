export const checkAddCartBody = (body) => {
  if (body.length <= 0)
    return new Error("add to cart required array with length >0");
  const zeroQuantityItems = body.filter(({ quantity }) => quantity < 0);
  if ((zeroQuantityItems.length = 0))
    return new Error(
      `new cart has quatity 0 at item ${zeroQuantityItems.reduce(
        (p, { skuCode, quantity }) => p + `${skuCode}:${quantity},`,
        ""
      )}`
    );
  return body;
};

export const checkUpdateCartBody = (body) => {
  const { skuCode, quantity } = body;
  if (!skuCode || !quantity)
    return new Error("sku code or quantity is required");
  if (typeof quantity !== "number") return new Error("quantity must br number");
  return body;
};
