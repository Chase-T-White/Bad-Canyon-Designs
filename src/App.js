import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Gallery,
  Story,
  Studio,
  Shop,
  SingleProduct,
  Cart,
  Checkout,
  Login,
  Error,
} from "./pages";
import { Footer } from "./components";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
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
                <Login />
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
