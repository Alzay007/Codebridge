import { Route, Routes } from 'react-router-dom';
import { ArticlePage } from './pages/articlePage';
import { HomePage } from './pages/homePage';
import { NotFoundPage } from './pages/notFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/articles/:id" element={<ArticlePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
