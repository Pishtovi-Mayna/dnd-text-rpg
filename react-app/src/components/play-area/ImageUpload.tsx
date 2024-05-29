import { Box, Button, Container, Input, Typography } from '@mui/material';
import { useState } from 'react';

export const ImageUpload = () => {
	const [selectedFile, setSelectedFile] = useState<File | null>(null);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files.length > 0) {
			setSelectedFile(event.target.files[0]);
		}
	};

	const handleUpload = () => {};

	return (
		<Container maxWidth='sm'>
			<Typography variant='h4' align='center' gutterBottom>
				File Upload Form
			</Typography>
			<Box mt={2}>
				<Input
					type='file'
					onChange={handleFileChange}
					inputProps={{ accept: 'image/**' }}
				/>
			</Box>
			<Box mt={2} textAlign='center'>
				<Button
					variant='contained'
					color='primary'
					onClick={handleUpload}
				>
					Upload
				</Button>
			</Box>
		</Container>
	);
};
