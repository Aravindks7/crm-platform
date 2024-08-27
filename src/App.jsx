import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { logoData } from "./data/CompanyLogo"
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Contacts from "./pages/Dashboard/Contacts/Contacts";
import Home from "./pages/Dashboard/Home/Home";
import Leads from "./pages/Dashboard/Leads/Leads";
import Accounts from "./pages/Dashboard/Accounts/Accounts";
import Deals from "./pages/Dashboard/Deals/Deals";
import Meetings from "./pages/Dashboard/Meetings/Meetings";

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar logoSrc={logoData.logoSrc} logoName={logoData.logoName}/>
          <div className="flex flex-1">
            <Sidebar />
            <div className="flex-1">
              <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/contacts/*" element={<Contacts />} />
                <Route path="/leads/*" element={<Leads />} />
                <Route path="/accounts/*" element={<Accounts />} />
                <Route path="/deals/*" element={<Deals />} />
                <Route path="/meetings/*" element={<Meetings />} /> 
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
