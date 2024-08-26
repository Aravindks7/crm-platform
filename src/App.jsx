import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Accounts from "./pages/Dashboard/Accounts/Accounts";
import Home from "./pages/Dashboard/Home/Home";
function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex flex-1">
            <Sidebar />
            <div className="flex-1">
              <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/accounts/*" element={<Accounts />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
