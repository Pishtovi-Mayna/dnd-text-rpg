import { createContext, useEffect, useState } from 'react';
import './App.css';
import { HomePage } from './components/home/modules/logged-in/HomePage';
import { Navbar } from './components/util/navbar/Navbar';
import { User } from './components/user/User';
import { NotLoggedIn } from './components/home/modules/not-logged-in/NotLoggedIn';
import { AddCharacter } from './components/character/AddCharacter';
import { Register } from './components/user/register/RegisterPage';
import { Login } from './components/user/login/LoginPage';

const UserContext = createContext<User | null>(null);

function App() {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		setUser({
			username: 'Ha',
			email: '123',
			password: '24',
		});
	}, []);

	return (
		<UserContext.Provider value={user}>
			<div className='App'>
				{/* <Navbar /> */}
				<Login />
				{/* <Register /> */}
				{/* {user ? <HomePage /> : <NotLoggedIn />} */}
				{/* <AddCharacter /> */}
			</div>
		</UserContext.Provider>
	);
}

export default App;
