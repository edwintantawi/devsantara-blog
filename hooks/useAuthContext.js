import { useContext } from 'react';
import { AuthContext } from '../context/authContext/store';

const useAuthContext = () => useContext(AuthContext);

export default useAuthContext;
