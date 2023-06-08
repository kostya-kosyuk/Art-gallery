import { Navigate, Route, Routes } from 'react-router-dom';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import Artists from './pages/Artists';
import Artworks from './pages/Artworks';
import Checkout from './pages/Checkout';
import Favorites from './pages/Favorites';
import PageNotFound from './pages/PageNotFound';
import ArtWorkPage from './pages/ArtworkPage';
import Header from './components/Header/Header';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff',
    },
    secondary: {
      main: '#6c757d',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'relative',
        }}
      >

        <Header />

        <Box component='main'>
          <div>
            <Routes>
              <Route path="/" element={<Artworks />} />
              <Route path="home" element={<Navigate to="/" replace />} />

              <Route path="artists" element={<Artists />} />

              <Route path="artworks/artwork" element={<ArtWorkPage />} />

              <Route path="checkout" element={<Checkout />} />

              <Route path="favourites" element={<Favorites />} />

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </Box>

        {/* <Footer /> */}
      </Box>
      </ ThemeProvider>
  );
}

export default App;
