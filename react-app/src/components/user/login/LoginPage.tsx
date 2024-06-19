import { Stack } from '@mui/material';
import { UsernameField, PasswordField, SubmitButton } from '../UserUitls';
import '../../util.css';
import { useRef, useState } from 'react';

export function Login() {
	const [showPassword, setShowPassword] = useState(false);
	const usernameRef = useRef<HTMLDivElement>(null);
	const passwordRef = useRef<HTMLDivElement>(null);

	const handleLogin = () => {};

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
				<SubmitButton label='Login' onClick={handleLogin} />
			</Stack>
		</div>
	);
}
