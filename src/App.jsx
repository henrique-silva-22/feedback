import { createBrowserRouter, Router, RouterProvider } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import {theme} from "./styles/theme.js"
import {Home} from "./pages/Home"

const router = createBrowserRouter([
  {
  path: "/",
  element:  <Home />
  }
])

export function App() {
  return (
    <ThemeProvider theme={theme}> 
          <RouterProvider router={router} />

    </ThemeProvider>
  )
}
