import SingleNews from "./SingleNews";
import { useNews } from "./hooks";
import { NewsContentProps } from "./types";

const NewsContent: React.FC<NewsContentProps> = () => {
  const { news } = useNews();

  return (
    <>
      {news &&
        news.length > 0 &&
        news.map((el) => <SingleNews {...el} key={el.post_id} />)}
    </>
  );
};

export default NewsContent;
