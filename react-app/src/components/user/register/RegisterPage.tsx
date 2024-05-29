import { Stack } from '@mui/material';
import '../../util.css';
import { UsernameField, PasswordField, SubmitButton } from '../UserUitls';
import { useState } from 'react';

export function Register() {
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
				<PasswordField showPassword={showPassword} handleClick={() => setShowPassword(!showPassword)} label='Password' />
				<PasswordField showPassword={showPassword} handleClick={() => setShowPassword(!showPassword)} label='Confirm Password' />
				<SubmitButton label='Register' />
			</Stack>
		</div>
	);
}
