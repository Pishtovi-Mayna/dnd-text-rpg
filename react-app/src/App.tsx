import './App.css';
import { HomePage } from './components/home/HomePage';
import { ImageUpload } from './components/play-area/ImageUpload';
import { PlayerList } from './components/play-area/PlayerList';
import { Login } from './components/user/login/LoginPage';
import { Register } from './components/user/register/RegisterPage';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <HomePage /> */}
      {/* <ImageUpload /> */}
      <PlayerList />
    </div>
  );
}

export default App;
