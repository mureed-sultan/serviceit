import { setAuth } from '../slices/authSlice';
import { AppDispatch } from '../store';

export function setAuthInfo(
  name: string,
  email: string,
  userId: string,
  imageUrl:string
): (dispatch: AppDispatch) => void {
  return (dispatch: AppDispatch) => {
    dispatch(setAuth({ name, email, userId, imageUrl }));
  };
}
