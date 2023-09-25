import { Request, Response } from "express";
import { db } from "../db/setup";
import * as schema from "../db/schema";

const getUsers = async (req: Request, res: Response) => {
  try {
    // const allUsersWithoutEmail = await db
    //   .select({ userId: users.id, userName: users.name })
    //   .from(users);
    const allUsersWithoutEmail = await db.query.users.findMany({
      with: {
        articles: true,
      },
      columns:{
        name:true
      }
    });
    return res.status(200).json({ success: true, data: allUsersWithoutEmail });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, data: null, message: "Unable to get users" });
  }
};

export default getUsers;
