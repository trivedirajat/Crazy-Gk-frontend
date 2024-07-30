import { Provider, useDispatch, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import Routing from './navigation/routing';
import { persistor, store } from './store/configureStore';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Root from './navigation';

// const dispatch = useDispatch();

//   const loginSelector = useSelector(state => state.login);
//   useEffect(() => {

//     // const authval = localStorage.getItem("AuthToken");
//     //const authval = localStorage.removeItem("AuthToken");
//     // console.log('authval: vv', authval);

//     if (loginSelector.response == null ) {
//       tokenGenrate()
//     } else {
//       // setDefaultHeader("token", loginSelector?.response?.token);
//     }

//   }, [loginSelector])

//   async function tokenGenrate() {

//     dispatch(jwtTokenGenrate())
//     // try {
//     //   // const { data } = await apiCall("get", apiEndPoints.JWTTOKEN);
//     //   // if (data) {
//     //   //   await localStorage.setItem("token", data.token);
//     //   //   await setDefaultHeader("token", data.token);
//     //   // }
//     // } catch (error) {
//     //   console.log(error);
//     // }
//   }
function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
    />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Root />
        </PersistGate>
      </Provider>
      <ToastContainer />
    </>
  );
}

export default App;
