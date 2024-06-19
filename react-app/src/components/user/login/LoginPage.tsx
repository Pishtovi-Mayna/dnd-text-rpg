import { Stack } from '@mui/material';
import { UsernameField, PasswordField, SubmitButton } from '../UserUitls';
import '../../util.css';
import { useRef, useState } from 'react';
import axios from 'axios';

export function Login() {
	const [showPassword, setShowPassword] = useState(false);
	const usernameRef = useRef<HTMLDivElement>(null);
	const passwordRef = useRef<HTMLDivElement>(null);

	const handleLogin = () => {
		const username = (
			usernameRef.current?.lastChild?.firstChild as HTMLInputElement
		).value;
		const password = (
			passwordRef.current?.lastChild?.firstChild as HTMLInputElement
		).value;

		const user = {
			username: username,
			password: password,
		};

		axios.get('http://localhost:4000/users').then(console.log);
	};

	return (
		<div className='center'>
			<Stack direction='column' spacing={2} p='24px'>
				<UsernameField ref={usernameRef} />
				<PasswordField
					ref={passwordRef}
					showPassword={showPassword}
					handleClick={() => setShowPassword(!showPassword)}
					label='Password'
					passwordsMatch={true}
				/>
				<SubmitButton label='Login' handleClick={handleLogin} />
			</Stack>
		</div>
	);
}
