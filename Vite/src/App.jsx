import './App.css'
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home';
import Page from "./Pages/Page";
import AppState from "./Context/AppContext/AppState";
import Login from './Pages/Login/Login';
import ErrorPage from './Pages/ErrorPage';
import Layout from './Pages/Layout';

function App() {

  const router = createBrowserRouter([
    {
      path : "/",
      element : <Layout />,
      children: [
        {
          index : true,
          element : <Login />,
          errorElement : <ErrorPage />
        },
        {
          path : "login",
          element : <Login />,
          errorElement : <ErrorPage />
        },
        {
          path : "home",
          element : <Home />,
          errorElement : <ErrorPage />
        },
        {
          path : "page",
          element : <Page />,
          errorElement : <ErrorPage />
        }
      ]
    },
    {
      path : "*",
      element : <ErrorPage />
    }
  ])

  return (
    <>
    <AppState>
      <RouterProvider router={router} />
    </AppState>
    </>
  )
}

export default App
