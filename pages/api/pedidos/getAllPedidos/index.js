import clientPromise from "../../../../util/mongo";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("sisteminha");

    const customer = await db
      .collection("pedidos")
      .find({ })
      .sort({ metacritic: -1 })
      .toArray();

    res.json(customer);
  } catch (e) {
    console.error(e);
  }
};