import { Visibility, VisibilityOff } from '@mui/icons-material';
import { TextField, InputAdornment, IconButton, Button } from '@mui/material';

type PasswordProps = {
	label: string;
	showPassword: boolean;
	handleClick?: () => void;
};

export function UsernameField() {
	return (
		<TextField id='username' label='Username' variant='filled' fullWidth />
	);
}

export function PasswordField(props: PasswordProps) {

	return (
		<TextField
			id='username'
			label={props.label}
			variant='filled'
			type={props.showPassword ? 'text' : 'password'}
			InputProps={{
				endAdornment: (
					<InputAdornment position='end'>
						<IconButton onClick={props.handleClick}>
							{props.showPassword ? <Visibility /> : <VisibilityOff />}
						</IconButton>
					</InputAdornment>
				),
			}}
		/>
	);
}

export function SubmitButton() {
	return (
		<Button type='submit' variant='contained' sx={{ height: '48px' }}>
			Log in
		</Button>
	);
}
