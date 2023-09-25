import { Request, Response } from "express";
import { eq } from "drizzle-orm";
import { users } from "../db/schema";
import { db } from "../db/setup";

const updateUser = async (req: Request, res: Response) => {
  const { name, email }: { name: string; email: string } = req.body;
  const { userId } = req.params;

  try {
    if (!userId) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide user_id to update" });
    }
    if (!name && !email) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide field to update" });
    }
    const updateData: { name?: string; email?: string } = {};

    if (name) {
      updateData.name = name;
    }
    if (email) {
      updateData.email = email;
    }
    await db
      .update(users)
      .set(updateData)
      .where(eq(users.id, Number(userId)));
    return res
      .status(200)
      .json({ success: true, message: "Updated Successfully" });
  } catch (error) {
    return res.status(500).json({ success: true, message: "Cannot Update" });
  }
};

export default updateUser;