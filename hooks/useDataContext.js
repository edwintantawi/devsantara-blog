import { useContext } from 'react';
import { DataContext } from '../context/dataContext/store';

const useDataContext = () => useContext(DataContext);

export default useDataContext;
