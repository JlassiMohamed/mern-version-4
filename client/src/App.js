import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Pages/Cart/Cart";
import Errors from "./Pages/Errors/Errors";
import Landpage from "./Pages/Landpage/Landpage";
import Order from "./Pages/Order/Order";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import AddRestaurant from "./Pages/AddRestaurant/AddRestaurant";
import Checkout from "./Pages/Checkout/Checkout";
import PrivateRoute from "./router/PrivateRoute";
import UserRoute from "./router/UserRoute";
import { currentUser } from "./JS/actions/user";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(currentUser());
    }
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <main className="App">
        <Switch>
          <Route exact path="/" component={Landpage} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route
            path={["/addrestaurant", "/setting"]}
            component={AddRestaurant}
          />
          <PrivateRoute
            path={["/order/:sellerId", "/seller/dashboard/:sellerId"]}
            render={(props) => <Order {...props} />}
          />
          <UserRoute path="/cart" component={Cart} />
          <PrivateRoute path="/checkout" component={Checkout} />
          {/* <Route path="" component={} /> */}
          <Route path="/*" component={Errors} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
