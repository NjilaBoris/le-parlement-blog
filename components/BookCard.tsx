import Link from "next/link";
import { BookCardProps } from "@/types";
import Image from "next/image";

const BookCard = ({
  title,
  author,
  coverURL,
  slug,
  category,
}: BookCardProps) => {
  return (
    <Link href={`/books/${slug}`}>
      <article className="w-full max-w-[420px] mx-auto group cursor-pointer">
        {/* Image */}
        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl">
          <Image
            src={coverURL}
            alt={title}
            width={133}
            height={200}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="mt-4 space-y-2">
          {/* Category + Date */}
          <p className="text-xs sm:text-sm text-gray-500">
            <span className="font-medium text-gray-600">{category}</span>
            <span className="mx-2">•</span>
            {author}
          </p>

          {/* Title */}
          <h2 className="text-base sm:text-lg md:text-xl font-semibold leading-snug text-gray-900">
            {title}
          </h2>
        </div>
      </article>
    </Link>
  );
};
export default BookCard;
