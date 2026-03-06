import { z } from "zod";
import { ACCEPTED_IMAGE_TYPES, MAX_IMAGE_SIZE } from "./constants";

export const UploadSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title is too long"),
  author: z
    .string()
    .min(1, "Author name is required")
    .max(100, "Author name is too long"),
  category: z.string().min(1, "Please type a category"),
  contentField: z.string().min(1, "Content is required"),
  coverImage: z
    .instanceof(File)
    .refine(
      (file) => !file || file.size <= MAX_IMAGE_SIZE,
      "Image size must be less than 10MB"
    )
    .refine(
      (file) => !file || ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported"
    ),
});
