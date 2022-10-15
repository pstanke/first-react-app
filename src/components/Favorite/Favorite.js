import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import styles from './Favorite.module.scss';
import { getFavoriteCards } from '../../redux/store';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
const Favorite = () => {
  const favoriteCards = useSelector((state) => getFavoriteCards(state));

  if (!favoriteCards.length > 0) return <Navigate to='/' />;
  return (
    <div className={styles.container}>
      <PageTitle>Favorite</PageTitle>
      <article className={styles.column}>
        <ul className={styles.cards}>
          {favoriteCards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              isFavorite={card.isFavorite}
              id={card.id}
            />
          ))}
        </ul>
      </article>
    </div>
  );
};
export default Favorite;
