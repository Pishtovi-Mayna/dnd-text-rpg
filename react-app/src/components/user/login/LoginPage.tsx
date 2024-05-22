import { Stack } from '@mui/material';
import { UsernameField, PasswordField, SubmitButton } from '../UserUitls';
import '../../util.css';
import { useState } from 'react';

export function Login() {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className='center'>
			<Stack
				direction='column'
				spacing={2}
				component='form'
				p='24px'
				method='post'
				action='/users/login'
			>
				<UsernameField />
				<PasswordField
					showPassword={showPassword}
					handleClick={() => setShowPassword(!showPassword)}
					label='Password'
				/>
				<SubmitButton />
			</Stack>
		</div>
	);
}
