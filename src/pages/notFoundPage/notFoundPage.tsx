import styles from './notFoundPage.module.scss';
import NotFound from '../../styles/icons/NotFound.png';

export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <img src={NotFound} className={styles.container}></img>
    </div>
  );
};
