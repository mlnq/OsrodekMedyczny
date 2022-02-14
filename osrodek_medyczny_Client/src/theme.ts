import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DataGrid,plPL } from '@mui/x-data-grid';

const theme = createTheme(
  {
    palette: {
      primary: { main: "#1976d2" },
      secondary: {main: "#07813A"},
    },
  },
  plPL
);

export default theme;