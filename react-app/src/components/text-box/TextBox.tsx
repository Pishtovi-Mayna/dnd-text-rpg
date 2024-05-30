import { NorthEast, Send } from '@mui/icons-material';
import { IconButton, Stack, TextField, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';

interface Action {
	id: number;
	text: string;
	type: 'message' | 'action';
}

type ActionProp = {
	action: Action;
};

const ActionBox = ({ action }: ActionProp) => {
	const fontWeightMap = new Map([
		['message', '400'],
		['action', '600'],
	]);

	return (
		<Typography fontWeight={fontWeightMap.get(action.type)}>
			{action.text}
		</Typography>
	);
};

export function TextBox() {
	const [actions, setActions] = useState<Array<Action>>([]);
	const textFieldRef = useRef<HTMLInputElement>(null);

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
		}
	};

	return (
		<Stack>
			{actions.map((action) => (
				<ActionBox action={action} />
			))}
			<TextField
				inputRef={textFieldRef}
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						handleSubmit('message');
					}
				}}
				InputProps={{
					endAdornment: (
						<IconButton onClick={() => handleSubmit('message')}>
							<NorthEast />
						</IconButton>
					),
				}}
			></TextField>
		</Stack>
	);
}
