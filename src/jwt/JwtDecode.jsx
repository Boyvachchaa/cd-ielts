import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';

import { loginUserSuccess } from '../slice/auth'

const decoded = jwt_decode(response.access);
useDispatch(loginUserSuccess({ token: response.access, user: decoded }));