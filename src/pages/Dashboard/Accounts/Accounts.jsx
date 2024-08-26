import AccountOverview from "./components/AccountOverview";
import AccountsTable from "./components/AccountsTable";
import { Routes, Route } from "react-router-dom";

const Accounts = () => {
  return (
    <Routes>
      <Route path="/" element={<AccountsTable />} />
      <Route path="accounts/:id" element={<AccountOverview />} />
    </Routes>
  );
};

export default Accounts;
