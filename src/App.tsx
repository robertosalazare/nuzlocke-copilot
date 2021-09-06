import { Root } from './containers/root';
import { store } from './app/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

export default App;
