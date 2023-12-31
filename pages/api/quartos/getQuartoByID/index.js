import clientPromise from "../../../../util/mongo";
import { ObjectId } from 'mongodb';

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("sisteminha");
    const objectid = new ObjectId(req.query.id);

    const getCustomerByID = await db.collection("quartos")
    .find({ _id: objectid })
    .sort({ metacritic: -1 })
    .toArray();

    res.json(getCustomerByID);
  } catch (e) {
    console.error(e);
  }
};
