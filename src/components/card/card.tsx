import { formattedDate } from '../../helpers/formateDate';
import { Article } from '@/types/article';
import { Link } from 'react-router-dom';
import styles from './card.module.scss';
import { slicedText } from '../../helpers/sliceText';

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
          <div className={styles.card__text}>{formattedDate(publishedAt)}</div>
        </div>

        <div>
          <h3 className={styles.card__title}>{title}</h3>
          <p className={styles.card__description}>{slicedText(summary)}</p>
        </div>

        <Link to={`/articles/${id}`} className={styles.card__link}>
          Read more
          <div className={styles.card__arrow}></div>
        </Link>
      </div>
    </div>
  )
}