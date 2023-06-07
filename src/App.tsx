import { Navigate, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Artists from './pages/Artists';
import Artworks from './pages/Artworks';
import Checkout from './pages/Checkout';
import Favorites from './pages/Favorites';
import PageNotFound from './pages/PageNotFound';
import ArtWorkPage from './pages/ArtworkPage';
import Header from './components/Header';

function App() {
  return (
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
  );
}

export default App;
