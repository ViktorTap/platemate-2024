import { connectDB } from "../data/dbConnector";

import User from "../data/model/user.model";

export default async function getInfoByEmail(email: string | null | undefined) {
  try {
    await connectDB();

    const user = await User.findOne({ email: email });

    return user;
  } catch (error) {
    console.log(error);
  }
}
