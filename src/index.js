import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// redux store
import store from './store/Store';

// made components
import Loading from './component/LoadingScreen';

const App = lazy(() => import('./containers/App'));

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </Provider>,
  document.getElementById('root')
);
