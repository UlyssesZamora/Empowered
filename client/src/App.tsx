import LoginPage from "./pages/login";
import UserProfile from "./pages/UserProfile";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import TestPage from "./pages/testPage";
import CompanyProfile from "./pages/companyprofile";
import AccountSelection from "./pages/accountSelection";
import CoffeeChat from "./pages/CoffeeChat";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <Routes>
        <Route path="/" element={<AccountSelection />} />
        <Route path="/create" element={<TestPage />}></Route>
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/coffeechat" element={<CoffeeChat />}></Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/userprofile/:id" element={<UserProfile />}></Route>
          <Route
            path="/companyprofile/:id"
            element={<CompanyProfile />}
          ></Route>
        </Route>
        <Route path="*" element={<p>Error</p>} />
      </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
