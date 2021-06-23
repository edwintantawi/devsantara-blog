import { useContext } from 'react';
import { AppContext } from '../context/appContext/store';

const useAppContext = () => useContext(AppContext);

export default useAppContext;
