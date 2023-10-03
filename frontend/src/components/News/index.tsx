import SingleNews from "./SingleNews";
import { useNews } from "./hooks";
import { NewsContentProps } from "./types";
import * as S from "./styles";

const NewsContent: React.FC<NewsContentProps> = () => {
  const { news } = useNews();

  return (
    <S.NewsWrapper>
      {news &&
        news.length > 0 &&
        news.map((el) => <SingleNews {...el} key={el.post_id} />)}
    </S.NewsWrapper>
  );
};

export default NewsContent;
