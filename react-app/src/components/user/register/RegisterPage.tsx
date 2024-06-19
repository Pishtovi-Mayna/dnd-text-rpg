import { Stack } from '@mui/material';
import '../../util.css';
import { UsernameField, PasswordField, SubmitButton } from '../UserUitls';
import { useRef, useState } from 'react';
import axios from 'axios';

export function Register() {
	const [showPassword, setShowPassword] = useState(false);
	const usernameRef = useRef<HTMLDivElement>(null);
	const passwordRef = useRef<HTMLDivElement>(null);
	const confirmPasswordRef = useRef<HTMLDivElement>(null);

	const handleRegister = () => {

		console.log(usernameRef.current);
		console.log(passwordRef.current);
		console.log(confirmPasswordRef.current);

		// const user = {
		// 	username: usernameRef.current?.firstChild?
		// }

		// axios.post("http://localhost:4000/users", { user })
		// .then();
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
				/>
				<PasswordField
					ref={confirmPasswordRef}
					showPassword={showPassword}
					handleClick={() => setShowPassword(!showPassword)}
					label='Confirm Password'
				/>
				<SubmitButton label='Register' onClick={handleRegister} />
			</Stack>
		</div>
	);
}
