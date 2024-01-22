// Import necessary modules
import { connectToDatabase } from '@/lib/dbConnect';
import { addProduct } from '@/lib/db';


// Your route handler
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Destructure data from the request body
      const { name, price, description, image } = req.body;

      // Connect to the database
      await connectToDatabase();

      // Create a new product instance
      const newProduct = new addProduct({ name, description, price, image });

      // Save the new product to the database
      const result = await newProduct.save();

      // Respond with the inserted document
      res.status(201).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    // Return a 405 Method Not Allowed for non-POST requests
    res.status(405).end();
  }
}
