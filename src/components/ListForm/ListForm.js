import styles from './ListForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
const ListForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
  };
  return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
      Title:
      <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      Description:
      <TextInput
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button>Add List</Button>
    </form>
  );
};
export default ListForm;
