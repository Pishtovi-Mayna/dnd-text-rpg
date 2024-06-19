import { Visibility, VisibilityOff } from '@mui/icons-material';
import { TextField, InputAdornment, IconButton, Button } from '@mui/material';

type InputProps = {
	ref: React.RefObject<HTMLDivElement>;
};

type PasswordProps = InputProps & {
	label: string;
	showPassword: boolean;
	handleClick?: () => void;
};

type SubmitButtonProps = {
	label: string;
	onClick: () => void;
};

export function UsernameField({ ref }: InputProps) {
	return (
		<TextField
			ref={ref}
			id='username'
			label='Username'
			variant='filled'
			fullWidth
		/>
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
							{props.showPassword ? (
								<Visibility />
							) : (
								<VisibilityOff />
							)}
						</IconButton>
					</InputAdornment>
				),
			}}
		/>
	);
}

export function SubmitButton({ label, onClick }: SubmitButtonProps) {
	return (
		<Button type='submit' variant='contained' sx={{ height: '48px' }} onClick={onClick}>
			{label}
		</Button>
	);
}
