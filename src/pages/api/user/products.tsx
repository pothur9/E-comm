// pages/api/products.js
import { connectToDatabase} from '@/lib/dbConnect';

export const getProducts = async () => {
  await connectToDatabase();
  const products = await Product.find({}); // Use the Product model
  return products;
};

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      await connectToDatabase();

      const products = await getProducts();

      res.status(200).json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).end();
  }
}
