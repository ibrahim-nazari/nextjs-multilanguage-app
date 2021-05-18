import connectDB from "../../middleware/db";
import Product from "../../models/product";
const handler = async (req, res) => {
  if (req.method === "POST") {
    console.log("server", req.body);

    try {
      var product = new Product(req.body);

      var productsave = await product.save();
      return res.status(200).send(productsave);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error.message);
    }
  } else {
    Product.find({}, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  }
};

export default connectDB(handler);
