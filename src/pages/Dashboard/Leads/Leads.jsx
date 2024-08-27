import { Routes, Route } from "react-router-dom";
import LeadsTable from "./components/LeadsTable.jsx";

const Leads = () => {
  return (
    <Routes>
      <Route path="/" element={<LeadsTable />} />
    </Routes>
  )
}

export default Leads