import LoanStats from "../../components/loans/LoanStats";
import ActiveLoans from "../../components/loans/ActiveLoans";
import "./loan.css";

export default function Loans() {
  return (
    <div className="w-full space-y-6">

      {/* Loan Statistics */}
      <LoanStats />

      {/* Active Loans */}
      <ActiveLoans />

    </div>
  );
}