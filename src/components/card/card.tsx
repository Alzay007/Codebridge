import { convertedDate } from '../../helpers/convertDate';
import { Article } from '@/types/article';
import { Link } from 'react-router-dom';
import styles from './card.module.scss';
import { slicedText } from '../../helpers/sliceText';
import Highlighter from 'react-highlight-words';

interface Props {
  article: Article;
  value: string;
}

export const Card: React.FC<Props> = ({ article, value }) => {

  const { id, title, imageUrl, summary, publishedAt } = article;

  return (
    <div className={styles.card}>
      <img src={imageUrl} alt="photo" className={styles.card__img} />

      <div className={styles.card__content}>
        <div className={styles.card__date}>
          <div className={styles.card__icon}></div>
          <div className={styles.card__text}>{convertedDate(publishedAt)}</div>
        </div>

        <div className={styles.card__title}>
          <Highlighter
            searchWords={[value]}
            autoEscape={true}
            textToHighlight={title}
          >
            {title}
          </Highlighter>
        </div>

        <div className={styles.card__description}>
          <Highlighter
            searchWords={[value]}
            autoEscape={true}
            textToHighlight={slicedText(summary)}
          >
            {title}
          </Highlighter>
        </div>

        <Link to={`/articles/${id}`} className={styles.card__link}>
          Read more
          <div className={styles.card__arrow}></div>
        </Link>
      </div>
    </div>
  )
}