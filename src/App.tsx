import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import { Router } from './Router';
import { theme } from './theme/muiTheme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider
        autoHideDuration={2000}
        maxSnack={3}
      >
        <Router />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
