import { useAppDispatch, useAppSelector } from "../../features/hooks/hooks";
import { fetchArticles } from "../../features/reducers/actionCreators";
import { Article } from "../../types/article";
import { useEffect } from "react";
import { Card } from "../card/card"
import styles from './cardList.module.scss';
import { Loader } from "../loader";
import { ErrorModal } from "../errorModal";

interface Props {
  articles: Article[];
  value: string;
}

export const CardList: React.FC<Props> = ({ articles, value }) => {
  const dispatch = useAppDispatch();
  const { isError, isLoading } = useAppSelector(state => state.articlesReducer)

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  return (
    <>
      {isLoading && <Loader />}

      {isError && <ErrorModal />}

      <div className={styles.cardlist}>
        {articles.map(article => (
          <Card
            key={article.id}
            article={article}
            value={value}
          />
        ))}
      </div>
    </>
  )
}