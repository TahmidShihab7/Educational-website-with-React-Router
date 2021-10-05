import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
import ContactUs from "./component/ContactUs/ContactUs";
import Footer from "./component/Footer/Footer";

import Home from "./component/Home/Home";
import Navigation from "./component/Navigation/Navigation";
import NotFound from "./component/NotFound/NotFound";
import Services from "./component/Services/Services";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/contact">
            <ContactUs></ContactUs>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
