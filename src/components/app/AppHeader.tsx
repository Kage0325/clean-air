import { Box, Stack } from '@mui/material';

export const AppHeader = () => {
    return (
        <Stack
            alignItems='center'
            my={7}
        >
            <Box
                component='img'
                src='/images/logoGreen.png'
                width='120px'
                height='auto'
            />
        </Stack>
    );
};