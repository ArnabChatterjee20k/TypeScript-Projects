import { Request, Response } from "express";
import { eq } from "drizzle-orm";
import { db } from "../db/setup";
import { users } from "../db/schema";

const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    await db.delete(users).where(eq(users.id, Number(userId)));
    return res
      .status(200)
      .json({ success: true, message: "Delete Successfully" });
  } catch (error) {
    return res.status(500).json({ success: true, message: "Cannot Delete" });
  }
};

export default deleteUser;