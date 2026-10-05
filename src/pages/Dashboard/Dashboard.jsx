import BankCard from "../../components/cards/BankCard";
import TransactionCard from "../../components/cards/TransactionCard";
import WeeklyActivityChart from "../../components/cards/charts/WeeklyActivityChart";
import ExpenseChart from "../../components/cards/charts/ExpenseChart";
import TransferUser from "../../components/cards/TransferUser";
import BalanceHistoryChart from "../../components/cards/charts/BalanceHistoryChart";
import BankCardOne from "../../components/cards/BankCardOne";

import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard w-full space-y-4 sm:space-y-5 lg:space-y-4 xl:space-y-6">

      {/* =========================
          Top Row
      ========================== */}
      <div className="dashboard-top-row grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-4 xl:gap-6">

        {/* My Cards */}
        <div className="dashboard-my-cards min-w-0 lg:col-span-2">
          <div className="flex items-center justify-between mb-3 lg:mb-3 xl:mb-4">
            <h2 className="dashboard-section-title text-lg lg:text-[18px] xl:text-[22px] font-semibold text-slate-800">
              My Cards
            </h2>

            <button
              type="button"
              className="see-all-text text-xs lg:text-xs xl:text-sm font-medium text-emerald-600"
            >
              See All
            </button>
          </div>

          <div className="dashboard-bank-cards grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-3 xl:gap-4">
            <div className="dashboard-bank-card-wrapper min-w-0">
              <BankCard variant="primary" />
            </div>

            <div className="dashboard-bank-card-wrapper min-w-0 bank-card-one-main-layer">
              <BankCardOne variant="light" />
            </div>
          </div>
        </div>

        {/* Recent Transaction */}
        <div className="dashboard-recent min-w-0">
          <h2 className="dashboard-section-title text-lg lg:text-[18px] xl:text-[22px] font-semibold text-slate-800 mb-3 lg:mb-3 xl:mb-4 recent-transaction">
            Recent Transaction
          </h2>

          <div className="dashboard-transaction-wrapper">
            <TransactionCard />
          </div>
        </div>
      </div>

      {/* =========================
          Middle Row
      ========================== */}
      <div className="dashboard-middle-row grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-4 xl:gap-6">

        {/* Weekly Activity */}
        <div className="dashboard-weekly min-w-0 lg:col-span-2">
          <h2 className="dashboard-section-title text-lg lg:text-[18px] xl:text-[22px] font-semibold text-slate-800 mb-3 lg:mb-3 xl:mb-4">
            Weekly Activity
          </h2>

          <div className="dashboard-weekly-card w-full min-w-0 bg-white rounded-2xl xl:rounded-3xl shadow-sm">
            <WeeklyActivityChart />
          </div>
        </div>

        {/* Expense Statistics */}
        <div className="dashboard-expense min-w-0">
          <h2 className="dashboard-section-title text-lg lg:text-[18px] xl:text-[22px] font-semibold text-slate-800 mb-3 lg:mb-3 xl:mb-4">
            Expense Statistics
          </h2>

          <div className="dashboard-expense-card w-full min-w-0 bg-white rounded-2xl xl:rounded-3xl shadow-sm">
            <ExpenseChart />
          </div>
        </div>
      </div>

      {/* =========================
          Bottom Row
      ========================== */}
      <div className="dashboard-bottom-row grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-4 xl:gap-6">

        {/* Quick Transfer */}
        <div className="dashboard-transfer min-w-0">
          <h2 className="dashboard-section-title text-lg lg:text-[18px] xl:text-[22px] font-semibold text-slate-800 mb-3 lg:mb-3 xl:mb-4">
            Quick Transfer
          </h2>

          <div className="dashboard-transfer-card ">
            <TransferUser />
          </div>
        </div>

        {/* Balance History */}
        <div className="dashboard-balance min-w-0 lg:col-span-2">
          <h2 className="dashboard-section-title dashboard-section-title-history text-lg lg:text-[18px] xl:text-[22px] font-semibold text-slate-800 mb-3 lg:mb-3 xl:mb-4 dashboard-section">
            Balance History
          </h2>

          <div className="dashboard-balance-card p-5 w-full min-w-0 bg-white rounded-2xl xl:rounded-3xl shadow-sm">
            <BalanceHistoryChart />
          </div>
        </div>
      </div>
    </div>
  );
}