import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Dashboard from "../pages/Dashboard/Dashboard";
import Transactions from "../pages/Transactions/Transactions";
import Accounts from "../pages/Accounts/Accounts";
import Investments from "../pages/Investments/Investments";
import CreditCards from "../pages/CreditCards/CreditCards";
import Loans from "../pages/Loans/Loans";
import Services from "../pages/Services/Services";
import Privileges from "../pages/Privileges/Privileges";
import Settings from "../pages/Settings/Settings";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="accounts" element={<Accounts />} />
        <Route path="investments" element={<Investments />} />
        <Route path="credit-cards" element={<CreditCards />} />
        <Route path="loans" element={<Loans />} />
        <Route path="services" element={<Services />} />
        <Route path="privileges" element={<Privileges />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}