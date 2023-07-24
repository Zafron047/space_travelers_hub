import './App.css';
import { Provider } from 'react-redux';
import newConfig from './redux/store';
import Nav from './components/Nav';

function App() {
  return (
    <Provider store={newConfig}>
      <Nav />
    </Provider>
  );
}

export default App;
