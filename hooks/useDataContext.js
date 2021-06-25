import { useContext } from 'react';
import { AuthContext } from '../context/authContext/store';

const useDataContext = () => useContext(AuthContext);

export default useDataContext;
