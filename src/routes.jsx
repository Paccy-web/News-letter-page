import Home from "./pages/Home"
import Register from "./pages/register"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function Routers() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}
export default Routers