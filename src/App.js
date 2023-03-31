import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  Gallery,
  SubGallery,
  PiecePage,
  Story,
  Studio,
  Shop,
  SingleProduct,
  Cart,
  Checkout,
  Login,
  Error,
} from "./pages";
import { NavigationBar, Footer } from "./components";
import { useSelector } from "react-redux";
import useScript from "./hooks/useScript";

function App() {
  useScript("/scripts/pixelEffects.js");
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="gallery/:category" element={<SubGallery />} />
          <Route path="gallery/:category/:id" element={<PiecePage />} />
          <Route path="story" element={<Story />} />
          <Route path="studio" element={<Studio />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:id" element={<SingleProduct />} />
          <Route path="cart" element={<Cart />} />
          <Route
            path="checkout"
            element={
              isLoggedIn ? (
                // <PrivateRoute>
                <Checkout />
              ) : (
                /* </PrivateRoute> */
                <Navigate to={"../login"} />
              )
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
