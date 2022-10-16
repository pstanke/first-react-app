import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';
const Card = ({ title, isFavorite, id }) => {
  const dispatch = useDispatch();
  const changeFavorite = (id) => {
    dispatch(toggleCardFavorite(id));
  };
  const deleteCard = (id) => {
    dispatch(removeCard(id));
  };

  return (
    <li className={styles.card}>
      {title}
      <div>
        <button
          className={clsx('fa fa-star-o', isFavorite && styles.isFavorite)}
          onClick={() => changeFavorite(id)}
        ></button>
        <button
          className={'fa fa-trash'}
          onClick={() => deleteCard(id)}
        ></button>
      </div>
    </li>
  );
};
export default Card;
