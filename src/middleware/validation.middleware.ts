import { Request, Response, NextFunction } from "express";

interface NoteBody {
  title: string;
  content: string;
  category: string;
}

export const validateNote =
  <T extends NoteBody>() =>
  (
    req: Request<{}, {}, T>,
    res: Response,
    next: NextFunction
  ) => {
    const { title, content, category } = req.body;

    if (!title || !content || !category) {
      return res.status(400).json({
        success: false,
        message:
          "title, content and category are required",
      });
    }

    next();
  };