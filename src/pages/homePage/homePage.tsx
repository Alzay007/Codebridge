import { useAppSelector } from "../../features/hooks/hooks";
import { CardList } from "../../components/cardList"
import { FilterField } from "../../components/filterField";
import { useCallback, useState } from "react";
import styles from './homePage.module.scss'
import { Article } from "@/types/article";

export const HomePage = () => {
  const [value, setValue] = useState<string>('');
  const { articles } = useAppSelector(state => state.articlesReducer)

  const onChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value.trimStart());
    },
    []
  );

  const filterdText = (text: string, values: string) => {
    return text.toLowerCase().includes(values.toLowerCase());
  };

  let result = 10;

  return (
    <div className={styles.homepage}>
      <div className={styles.container}>
        <FilterField
          value={value}
          onChange={onChangeHandler}
          result={result}
        />
        <CardList articles={articles} value={value} />
      </div>
    </div>
  );
};