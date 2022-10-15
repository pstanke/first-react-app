import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';
const Card = ({ title, isFavorite, id }) => {
  const dispatch = useDispatch();
  const changeFavorite = (id) => {
    dispatch(toggleCardFavorite(id));
  };

  return (
    <li className={styles.card}>
      {title}
      <button
        className={clsx('fa fa-star-o', isFavorite && styles.isFavorite)}
        onClick={() => changeFavorite(id)}
      ></button>
    </li>
  );
};
export default Card;
