//Layout
import RootLayout from './layouts/RootLayout';
import ContactLayout from './layouts/ContactLayout';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/help/Faq';
import Form from './pages/help/Form';
import PageNotFound from './pages/PageNotFound';

// react-router-dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
// styles
import './App.css';

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactLayout />}>
          <Route path="faq" element={<Faq />} />
          <Route path="form" element={<Form />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
