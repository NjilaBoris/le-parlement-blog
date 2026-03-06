import UploadForm from "@/components/UploadForm";

const Page = () => {
  return (
    <main className="new-book">
      <section className="flex flex-col gap-5 text-center">
        <h1 className="page-title-xl">Add a New Articles</h1>
        <p className="subtitle">Write your article and be brief</p>
      </section>

      <UploadForm />
    </main>
  );
};

export default Page;
