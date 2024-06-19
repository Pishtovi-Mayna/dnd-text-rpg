import { Visibility, VisibilityOff } from '@mui/icons-material';
import { TextField, InputAdornment, IconButton, Button } from '@mui/material';
import { ForwardedRef, forwardRef, useState } from 'react';

type InputProps = {};

type PasswordProps = InputProps & {
	label: string;
	showPassword: boolean;
	handleClick: () => void;
	passwordsMatch?: boolean;
};

type SubmitButtonProps = {
	label: string;
	handleClick: () => void;
};

export const UsernameField = forwardRef(function UsernameField(
	prosp: InputProps,
	ref: ForwardedRef<HTMLDivElement>
) {
	return (
		<TextField
			ref={ref}
			id='username'
			label='Username'
			variant='filled'
			fullWidth
		/>
	);
});

export const PasswordField = forwardRef(function PasswordField(
	{ label, showPassword, handleClick, passwordsMatch }: PasswordProps,
	ref: ForwardedRef<HTMLDivElement>
) {
	return (
		<TextField
			id='password'
			error={!passwordsMatch}
			ref={ref}
			label={label}
			variant='filled'
			type={showPassword ? 'text' : 'password'}
			InputProps={{
				endAdornment: (
					<InputAdornment position='end'>
						<IconButton onClick={handleClick}>
							{showPassword ? <Visibility /> : <VisibilityOff />}
						</IconButton>
					</InputAdornment>
				),
			}}
		/>
	);
});

export function SubmitButton({ label, handleClick }: SubmitButtonProps) {
	return (
		<Button
			type='submit'
			variant='contained'
			sx={{ height: '48px' }}
			onClick={handleClick}
		>
			{label}
		</Button>
	);
}
