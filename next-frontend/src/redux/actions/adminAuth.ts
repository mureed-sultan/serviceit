import { setAdmin } from '../slices/adminSlice';
import { AppDispatch } from '../store';

export function setAdminInfo(
  name: string,
  userId: string,
  imageUrl:string
): (dispatch: AppDispatch) => void {
  return (dispatch: AppDispatch) => {
    dispatch(setAdmin({ name, userId, imageUrl }));
  };
}
