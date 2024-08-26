import AccountsTable from "./components/AccountsTable";
import { Routes, Route } from "react-router-dom";

const Accounts = () => {
  return (
    <Routes>
      <Route path="/" element={<AccountsTable />} />
    </Routes>
  );
};

export default Accounts;
