import './App.css';
import { HomePage } from './components/home/HomePage';
import { Login } from './components/user/login/LoginPage';
import { Register } from './components/user/register/RegisterPage';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Register /> */}
      <HomePage />
    </div>
  );
}

export default App;
