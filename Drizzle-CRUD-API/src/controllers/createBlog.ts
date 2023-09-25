import { db } from "../db/setup";
import { blogs, users } from "../db/schema";
import e, { Request, Response } from "express";
import { eq } from "drizzle-orm";

export const createBlog = async (req: Request, res: Response) => {
  const { content, userId }: { content: string; userId: number } = req.body;
  if (!content) {
    return res
      .status(400)
      .json({ success: false, data: null, message: "Content is required" });
  }
  if (!userId) {
    return res
      .status(400)
      .json({ success: false, data: null, message: "userId is required" });
  }

  try {
    await db.insert(blogs).values({ content: content, userId: userId });
    console.log(await db.query.blogs.findMany({
      with: {
        author: true,
      },
    }))
    return res.status(201).json({
      success: true,
      data: { content },
      message: "Added Successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, data: null, message: "Unable to add" });
  }
};
