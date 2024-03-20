// src/pages/test.tsx
import { Provider } from 'react-redux';
import store from '../redux/store';
import { RootState } from '../redux/store';
import { setAuthInfo } from '../redux/actions/authAction';
import { useDispatch, useSelector } from 'react-redux';
import React,{useEffect} from 'react';
interface TestProps {
  // any props if needed
}

const Test: React.FC<TestProps> = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const fetchData = () => {
      // fetch data from an API or any other source
      const userData = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
      };

      // add the data to the Redux store
      dispatch(setAuthInfo(userData.name, userData.email, userData.password));

      // fetch the data from the Redux store and log it to the console
      console.log('User:', user);
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* render the component */}
    </div>
  );
};

const TestWithProvider: React.FC<TestProps> = () => {
  return (
    <Provider store={store}>
      <Test />
    </Provider>
  );
};

export default TestWithProvider;