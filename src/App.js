import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Gallery,
  Story,
  Studio,
  Shop,
  SingleProduct,
  Cart,
  Error,
} from "./pages";
import { Footer } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="story" element={<Story />} />
          <Route path="studio" element={<Studio />} />
          <Route path="shop" element={<Shop />}>
            <Route path=":id" element={<SingleProduct />} />
          </Route>
          <Route path="cart" element={<Cart />} />
          {/* <Route
            path="checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          /> */}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
