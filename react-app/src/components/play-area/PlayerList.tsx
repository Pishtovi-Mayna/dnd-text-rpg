import {
	Avatar,
	List,
	ListItem,
	ListItemAvatar,
	ListItemButton,
	ListItemProps,
	ListItemText,
} from '@mui/material';
import React from 'react';

type PlayerProps = ListItemProps & {
	characterName: string;
	playerName: string;
	avatar: string;
};

export function PlayerList() {
	return (
        <List sx={{ width: '24rem' }}>
            <Player characterName='Baldrazor' playerName='Pesho Petzata' avatar={''}/>
        </List>
	);
}

const Player: React.FC<PlayerProps> = ({ characterName, playerName, avatar, ...props }: PlayerProps) => {
	return (
		<ListItem {...props}>
			<ListItemButton>
				<ListItemAvatar>
					<Avatar src={avatar}></Avatar>
				</ListItemAvatar>
				<ListItemText primary={characterName} secondary={playerName} />	
			</ListItemButton>
		</ListItem>
	);
}
