import { SingleNewsProps } from "./types";
import { getDate } from "./utils";

const SingleNews: React.FC<SingleNewsProps> = ({
  comment_count,
  content,
  post_id,
  title,
  user_name,
  created_at,
}) => {
  return (
    <div>
      <div>Tytuł: {title}</div>
      <div>
        <div>Autor: {user_name}</div>
        <div>Data: {getDate(created_at)}</div>
      </div>
      <div>{content}</div>
      <div>
        <div></div>
        <div>Komentarze: {comment_count}</div>
      </div>
    </div>
  );
};

export default SingleNews;
