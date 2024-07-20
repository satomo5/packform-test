import GlobalStyles from "../assets/styles/GlobalStyle";
import Home from "../components/pages/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NetAssets from "../components/pages/NetAssets";

/**
 * The main application component. It renders the global styles and the router.
 *
 * @returns {JSX.Element} The main application component.
 */
function App() {
  return (
    // The main component is a fragment, which is a shorthand for multiple child elements.
    <>
      {/* Render the global styles */}
      <GlobalStyles />

      {/* Render the router */}
      <Router>
        {/* Define the routes for the application */}
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<Home />} />
          {/* Route for the net assets page */}
          <Route path="/assets" element={<NetAssets />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
