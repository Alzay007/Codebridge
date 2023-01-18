import { useAppSelector } from "../../features/hooks/hooks";
import { CardList } from "../../components/cardList"
import { FilterField } from "../../components/filterField";
import { useCallback, useState } from "react";
import styles from './homePage.module.scss'
import { Article } from "@/types/article";
import { slicedText } from "../../helpers/sliceText";

export const HomePage = () => {
  const [query, setQuery] = useState<string>('');
  const { articles } = useAppSelector(state => state.articlesReducer)

  const onChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value.trimStart());
    },
    []);

  const getVisibleArticles = (articles: Article[], query: string) => {
    const filteredByTitle = articles
      .filter(article => article.title.toLowerCase().includes(query.toLowerCase()));

    const filteredBySummary = articles
      .filter(article => slicedText(article.summary).toLowerCase().includes(query.toLowerCase()));

    return Array.from(new Set((filteredByTitle.concat(filteredBySummary))))
  }


  const visibleArticles = getVisibleArticles(articles, query);

  return (
    <div className={styles.homepage}>
      <div className={styles.container}>
        <FilterField
          value={query}
          onChange={onChangeHandler}
          result={visibleArticles.length}
        />
        <CardList articles={visibleArticles} value={query} />
      </div>
    </div>
  );
};