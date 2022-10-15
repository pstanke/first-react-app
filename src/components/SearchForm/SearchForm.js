import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchstring } from '../../redux/searchStringRedux';

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const search = (e) => {
    e.preventDefault();
    dispatch(updateSearchstring(searchValue));
  };
  useEffect(() => {
    dispatch(updateSearchstring(searchValue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form className={styles.searchForm} onSubmit={search}>
      <TextInput
        placeholder='Search…'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Button>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

export default SearchForm;
