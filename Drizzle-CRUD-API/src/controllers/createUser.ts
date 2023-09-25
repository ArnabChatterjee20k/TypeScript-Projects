import { db } from "../db/setup";
import { users } from "../db/schema";
import { Request, Response } from "express";
export const createUser = async (req: Request, res: Response) => {
  const { name, email }: { name: string; email: string } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, data: null, message: "Name is required" });
  }
  if (!email) {
    return res
      .status(400)
      .json({ success: false, data: null, message: "Email is required" });
  }

  try {
    await db.insert(users).values({ name: name, email: email });

    return res.status(201).json({
      success: true,
      data: { name, email },
      message: "Added Successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, data: null, message: "Unable to add" });
  }
};