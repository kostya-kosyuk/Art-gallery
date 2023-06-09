import { Navigate, Route, Routes } from 'react-router-dom';
import Artists from './pages/Artists';
import Artworks from './pages/Artworks';
import Checkout from './pages/Checkout';
import Favorites from './pages/Favorites';
import PageNotFound from './pages/PageNotFound';
import ArtWorkPage from './pages/ArtworkPage';

function App() {
  return (
        <>
          <header />

          <main>
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
          </main>

          {/* <Footer /> */}
        </>
  );
}

export default App;
