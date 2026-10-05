import BankCard from "../../components/cards/BankCard";
import BankCardOne from "../../components/cards/BankCardOne";
import ExpenseSummary from "../../components/transactions/ExpenseSummary";
import TransactionTabs from "../../components/transactions/TransactionTabs";
import TransactionTable from "../../components/transactions/TransactionTable";
import Pagination from "../../components/transactions/Pagination";
import "./transaction.css"

export default function Transactions() {
  return (
    <div className="transactions-page space-y-7">

      {/* Top Section */}
      <div className="transactions-top-section grid grid-cols-1 xl:grid-cols-12 gap-6">

        <div className="transactions-cards-section xl:col-span-8">

          <div className="transactions-cards-header flex items-center justify-between mb-4">
            <h2 className="my-cards text-[22px] font-semibold text-[#1B2559]">
              My Cards
            </h2>

            <button className="add-card text-emerald-600 font-medium">
              + Add Card
            </button>
          </div>

          <div className="transactions-bank-cards grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bank-card-transwith">
                <BankCard />
            </div>
            <BankCardOne />
          </div>
        </div>

        <div className="transactions-expense-section xl:col-span-4">

          <h2 className="transactions-expense-text text-[22px] font-semibold text-[#1B2559] mb-4">
            My Expense
          </h2>

          <ExpenseSummary />
        </div>
      </div>

      {/* Transactions */}
      <div className="transactions-list-section">

        <h2 className="text-[22px] font-semibold text-[#1B2559] mb-4">
          Recent Transactions
        </h2>

        <TransactionTabs />
        <TransactionTable />
        <Pagination />

      </div>
    </div>
  );
}