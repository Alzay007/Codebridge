import { useAppDispatch, useAppSelector } from "../../features/hooks/hooks";
import { fetchOneArticle } from "../../features/reducers/actionCreators";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import styles from './articlePage.module.scss'
import { Loader } from "../../components/loader";

export const ArticlePage = () => {
  const { id = '' } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOneArticle(+id));
  }, []);

  const { article, isLoading, isError } = useAppSelector(state => state.articlesReducer);

  return (
    <>
      {isLoading && <Loader />}

      <div className={styles.article}>
        <img
          src={article?.imageUrl}
          alt="article image"
          className={styles.article__img}
        />

        <div className={styles.article__container}>
          <div className={styles.article__wrapper}>
            <h2 className={styles.article__title}>{article?.title}</h2>

            <p className={styles.article__description}>{`${article?.summary}`}</p>
          </div>

          <Link to="/" className={styles.article__link}>
            <span className={styles.article__icon}></span>
            Back to homepage
          </Link>
        </div>
      </div>
    </>
  )
}