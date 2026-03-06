import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MicOff, Mic } from "lucide-react";

import { getBookBySlug } from "@/lib/actions/book.action";

export default async function BookDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const { slug } = await params;
  const result = await getBookBySlug(slug);

  if (!result.success || !result.data) {
    redirect("/");
  }

  const book = result.data;
  const { title, author, coverURL, category, content } = book;

  return (
    <div className="book-page-container p-8! md:mx-auto md:max-w-4xl lg:max-w-5xl">
      <Link href="/" className="back-btn-floating">
        <ArrowLeft className="size-6 text-[#212a3b]" />
      </Link>
      <div className="w-full h-full py-10 text-left space-y-5">
        <div className="text-red-600 bg-red-200 w-fit p-2">
          <p className="text-xs md:text-sm">{category}</p>
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#212a3b]">
          {title}
        </h1>
        <div className="flex items-center gap-5">
          <p className="text-sm text-gray-500">By {author}</p>
          <div className="bg-red-600 size-3" />
          <p className="text-sm text-gray-500">3 min read</p>
        </div>
      </div>
      <div className="w-full h-80">
        <Image
          height={600}
          width={900}
          src={coverURL}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mx-auto max-w-xl">
        <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  );
}
