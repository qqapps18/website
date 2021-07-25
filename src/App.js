import "tailwindcss/dist/base.css";
import tw from "twin.macro";
import PrimaryBackground from "./components/hero/TwoColumnWithPrimaryBackground";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Links from "./components/headers/light.js";

const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;
const NavLinks = tw.div`inline-block`;

function App() {
  return (
    <Router>
      <Links />
      <Switch>
        <Route path="website/privacy-policy">
          <PrivacyPolicy />
        </Route>
        <Route path="/support"></Route>
        <Route path="/">
          <PrimaryBackground />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
