import { title } from 'process';
import './App.css';
import { HomePage } from './components/home/HomePage';
import { CardList } from './components/home/modules/CardDisplay';
import { ItemCard } from './components/items/ItemCard';
import { ImageUpload } from './components/play-area/ImageUpload';
import { PlayerList } from './components/play-area/PlayerList';
import { TextBox } from './components/text-box/TextBox';
import { Login } from './components/user/login/LoginPage';
import { Register } from './components/user/register/RegisterPage';
import Image from './components/home/dice.png';
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
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
      {/* <TextBox /> */}
      {/* <CampaignCard title='Wassup' image='not found' /> */}
      <CardList type='campaign' items={[
        {
          title: 'A title',
          image: Image
        },
        {
          title: 'Another title',
          image: Image
        },
        {
          title: 'Yet another title',
          image: Image
        },
      ]} />
    </div>
  );
}

export default App;
