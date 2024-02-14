// pages/api/productById/[productId].js
import data from "../../../db.json";

export default (req, res) => {
  const { productId } = req.query;
  const product = data.products.find((p) => p.id.toString() === productId);
  res.status(200).json(product || {});
};
