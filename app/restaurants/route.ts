import { connectDB } from "../data/dbConnector";
import User from "@/app/data/model/user.model";

export async function GET() {
  console.log("this is restaurants route.ts");

  try {
    connectDB();

    const users = await User.find({});

    console.log(users);
  } catch (error) {
    console.error("restaurants route.ts connector error:", error);
  }

  return new Response("Hello Restaurants route.ts ! ! !");
}
