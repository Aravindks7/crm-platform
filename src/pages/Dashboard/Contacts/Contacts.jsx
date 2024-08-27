import ContactsOverview from "./components/ContactsOverview";
import ContactssTable from "./components/ContactssTable";
import { Routes, Route } from "react-router-dom";

const Accounts = () => {
  return (
    <Routes>
      <Route path="/" element={<ContactssTable />} />
      <Route path="accounts/:id" element={<ContactsOverview />} />
    </Routes>
  );
};

export default Accounts;
