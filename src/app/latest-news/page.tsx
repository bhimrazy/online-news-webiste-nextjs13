import NewsContent from "./newsContent";

export default function LatestNews() {
  return (
    <main className="flex flex-col max-w-7xl w-full mx-auto">
      <h1 className="text-5xl text-black py-6">Latest News</h1>
      <NewsContent />
    </main>
  );
}
