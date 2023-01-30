import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { AppFooter, AppHeader } from '../components/app';

export const App = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh'
            }}
        >
            <AppHeader />
            <Box sx={{ flex: 1 }}>
                <Outlet />
            </Box>
            <AppFooter />
        </Box>
    );
};