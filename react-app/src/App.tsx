import './App.css';
import { HomePage } from './components/home/HomePage';
import { ItemCard } from './components/items/ItemCard';
import { ImageUpload } from './components/play-area/ImageUpload';
import { PlayerList } from './components/play-area/PlayerList';
import { TextBox } from './components/text-box/TextBox';
import { Login } from './components/user/login/LoginPage';
import { Register } from './components/user/register/RegisterPage';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <HomePage />  */}
      {/* <ImageUpload /> */}
      {/* <PlayerList /> */}
      {/* <ItemCard title='Acid Splash' description="
					You hurl a bubble of acid. Choose one or two creatures you
					can see within range. If you choose two, they must be within
					5 feet of each other. A target must succeed on a Dexterity
					saving throw or take 1d6 acid damage. This spell's damage
					increases by 1d6 when you reach 5th level (2d6), 11th level
					(3d6), and 17th level (4d6).
          "
      /> */}
      <TextBox />
    </div>
  );
}

export default App;
