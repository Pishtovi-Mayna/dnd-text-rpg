import { NorthEast } from '@mui/icons-material';
import {
	Container,
	IconButton,
	Paper,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import './text-box.css';

interface Action {
	id: number;
	text: string;
	type: 'message' | 'action';
}

type ActionProps = {
	action: Action;
};

const ActionBox = ({ action }: ActionProps) => {
	const fontWeightMap = new Map([
		['message', '400'],
		['action', '600'],
	]);

	return (
		<Typography fontWeight={fontWeightMap.get(action.type)} sx={{ wordWrap: 'break-word'}}>
			{action.text}
		</Typography>
	);
};

export function TextBox() {
	const [actions, setActions] = useState<Array<Action>>([]);
	const textFieldRef = useRef<HTMLInputElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	const scrollToBottom = () => {
		if (containerRef.current) {
			containerRef.current.scrollTop = containerRef.current.scrollHeight;
		}
	};

	const handleSubmit = (actionType: 'message' | 'action') => {
		const inputValue = textFieldRef.current?.value;
		if (inputValue) {
			const action: Action = {
				id: actions.length,
				text: inputValue,
				type: actionType,
			};
			setActions([...actions, action]);
			textFieldRef.current.value = '';
			setTimeout(() => scrollToBottom, 0);
		}
	};

	useEffect(() => {
		scrollToBottom();
	}, [actions]);

	return (
		<Paper elevation={3}>
			<Container ref={containerRef} className='container-chat'>
				<Stack>
					{actions.map((action) => (
						<ActionBox action={action} />
					))}
				</Stack>
			</Container>
			<TextField
				inputRef={textFieldRef}
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						handleSubmit('message');
					}
				}}
				variant='standard'
				fullWidth
				InputProps={{
					endAdornment: (
						<IconButton onClick={() => handleSubmit('message')}>
							<NorthEast />
						</IconButton>
					),
				}}
			/>
		</Paper>
	);
}
