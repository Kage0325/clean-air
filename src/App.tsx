import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Router } from './Router';
import { theme } from './theme/muiTheme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
}

export default App;
