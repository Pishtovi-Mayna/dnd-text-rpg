import { Stack } from '@mui/material';
import '../../util.css';
import { UsernameField, PasswordField, SubmitButton } from '../UserUitls';
import { useRef, useState } from 'react';
import axios from 'axios';

export function Register() {
	const [showPassword, setShowPassword] = useState(false);
	const [passwordsMatch, setPasswordsMatch] = useState(true);
	const usernameRef = useRef<HTMLDivElement>(null);
	const passwordRef = useRef<HTMLDivElement>(null);
	const confirmPasswordRef = useRef<HTMLDivElement>(null);

	const handleRegister = () => {
		const username = (
			usernameRef.current?.lastChild?.firstChild as HTMLInputElement
		).value;
		const password = (
			passwordRef.current?.lastChild?.firstChild as HTMLInputElement
		).value;
		const confirmPassword = (
			confirmPasswordRef.current?.lastChild
				?.firstChild as HTMLInputElement
		).value;

		if (password !== confirmPassword) {
			setPasswordsMatch(false);
		} else {
			setPasswordsMatch(true);
		}

		const user = {
			username: username,
			password: password,
		};

		axios.post('http://localhost:4000/users', { user }).then((res) => {
			console.log(res);
		});
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
					passwordsMatch={passwordsMatch}
				/>
				<PasswordField
					ref={confirmPasswordRef}
					showPassword={showPassword}
					handleClick={() => setShowPassword(!showPassword)}
					label='Confirm Password'
					passwordsMatch={passwordsMatch}
				/>
				<SubmitButton label='Register' handleClick={handleRegister} />
			</Stack>
		</div>
	);
}
