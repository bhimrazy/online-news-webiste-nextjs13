import Image from "next/image";
import { Article, getNews } from "./news";
import { getRelativeTime } from "../utils";

type Props = {
  category: string;
};

export default function NewsGrid({ category }: Props) {
  const news = getNews(category);
  return (
    <>
      {news && (
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-8">
          <div className="lg:col-span-2 order-3 lg:order-none flex flex-col divide-y-2 divide-stone-300 space-y-4">
            <Card article={news[0]} />
            <Card article={news[1]} />
          </div>
          <div className="lg:col-span-4 order-2 lg:order-none flex flex-col divide-y-2 divide-stone-300 space-y-4">
            <Card article={news[2]} />
          </div>
          <div className="lg:col-span-2 order-1 lg:order-none flex flex-col divide-y-2 divide-stone-300 space-y-4">
            <div className="flex flex-col text-white/80 bg-primary space-y-4 mt-6 p-6">
              <p className="uppercase flex justify-between text-sm font-light">
                <span>Number of the day</span> <span>----------</span>
              </p>
              <div className="space-y-2">
                <span className="text-2xl">$100,000</span>
                <p className="text-sm font-light ">
                  was earned by the company in the first quarter of the year,
                  exceeding expectations and marking a new milestone.
                </p>
              </div>
            </div>
            <Card article={news[3]} />
          </div>
        </div>
      )}
    </>
  );
}

const Card = ({ article }: { article: Article }) => {
  return (
    <article className="flex flex-col space-y-4 py-6">
      {article?.image && (
        <Image
          src={article?.image}
          className="bg-cover cursor-pointer transition-all hover:scale-[1.01]"
          width={800}
          height={600}
          alt={article.title}
        />
      )}
      <div className="flex flex-col space-y-3">
        <h2 className="text-xl text-black cursor-pointer">{article?.title}</h2>
        <p className="text-sm text-gray-700 leading-6 ">
          {article?.excerpt}{" "}
          <span className="text-stone-400">
            {getRelativeTime(article?.createdAt)}
          </span>
        </p>
      </div>
      <div className="flex flex-row space-x-4 items-center">
        {article?.author?.image && (
          <Image
            src={article?.author?.image}
            className=" object-cover aspect-square rounded-full"
            width={45}
            height={45}
            alt={article?.author?.name}
          />
        )}
        {article?.author && (
          <div className="flex flex-col">
            <span className="text-black">{article?.author?.name}</span>
            <span className="text-stone-400 text-sm">Newsman</span>
          </div>
        )}
      </div>
    </article>
  );
};
