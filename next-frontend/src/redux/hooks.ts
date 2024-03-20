import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store'; // Assuming you have defined RootState and AppDispatch in your store file

// Define a typed useSelector hook
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

// Export the useDispatch hook with the correct type
export const useAppDispatch = () => useDispatch<AppDispatch>();
