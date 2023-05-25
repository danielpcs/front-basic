import './App.css';
import logoImage from './logo.svg';
import { Feed, Logo } from './components';

function App() {
  return (
    <div className='App'>
      <Logo image={logoImage}/>
      <Feed endpoint={process.env.REACT_APP_FEED_API}/>
    </div>
  );
}

export default App;
