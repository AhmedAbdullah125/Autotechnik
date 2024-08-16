import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Pages/Layout/Layout';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Product from './Pages/product/Product';



function App() {
  const routes = createBrowserRouter([{
    path: '', element: <Layout></Layout>, children: [
      { index: true, element: <Home></Home> },
      { path: 'login', element: <Login></Login> },
      { path: 'product', element: <Product></Product> },
      
      { path: '*', element: <NotFound></NotFound> },
    ]
  }
  ])

  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
