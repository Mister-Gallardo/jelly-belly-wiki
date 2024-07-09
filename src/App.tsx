import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Beans from "./pages/Beans";
import Facts from "./pages/Facts";
import Recipes from "./pages/Recipes";
import Combinations from "./pages/Combinations";
import History from "./pages/History";

function App() {
  const Layout = ({ children }: { children: React.ReactElement | null }) => (
    <>
      <Header />
      {children}
    </>
  );

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/beans" Component={Beans} />
          <Route path="/facts" Component={Facts} />
          <Route path="/recipes" Component={Recipes} />
          <Route path="/combinations" Component={Combinations} />
          <Route path="/history" Component={History} />
          <Route path="*" element={<Navigate to="/beans" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
