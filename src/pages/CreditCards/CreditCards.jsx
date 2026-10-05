import ExpensePieChart from "../../components/creditCards/ExpensePieChart";
import CardList from "../../components/creditCards/CardList";
import AddNewCard from "../../components/creditCards/AddNewCard";
import CardSettings from "../../components/creditCards/CardSettings";

import BankCard from "../../components/cards/BankCard";
import BankCardOne from "../../components/cards/BankCardOne";
import BankCardThree from "../../components/creditCards/BankCardThree";

import "./creditcards.css";

export default function CreditCards() {
  return (
    <div className="credit-cards-page space-y-7">

      {/* My Cards */}
      <div className="credit-cards-my-cards">
        <h2 className="credit-cards-title text-[22px] font-semibold text-slate-800 mb-5">
          MyCard
        </h2>

        <div className="credit-cards-grid grid grid-cols-12 gap-5">

          <div className="credit-card-item col-span-12 xl:col-span-4 min-w-0">
            <BankCardThree />
          </div>

          <div className="credit-card-item col-span-12 md:col-span-6 xl:col-span-4 min-w-0">
            <BankCard />
          </div>

          <div className="credit-card-item col-span-12 md:col-span-6 xl:col-span-4 min-w-0">
            <BankCardOne />
          </div>

        </div>
      </div>
{/* Card Expense Statistics + Card List */}
<div className="credit-cards-middle">

  <div className="credit-card-expense">
    <h2 className="text-[22px] font-semibold text-slate-800 mb-4">
      Card Expense Statistics
    </h2>

    <ExpensePieChart />
  </div>

  <div className="credit-card-list-section">
    <h2 className="text-[22px] font-semibold text-slate-800 mb-4">
      Card List
    </h2>

    <CardList />
  </div>

</div>

    {/* Add New Card + Card Setting */}
<div className="credit-cards-bottom grid grid-cols-12 gap-6 ">
  <div className="add-new-car col-span-12 xl:col-span-8">
    <h2 className="text-[22px] font-semibold text-slate-800 mb-4">
      Add New Card
    </h2>
    <AddNewCard />
  </div>
  <div className="card-settings-main col-span-12 xl:col-span-4">
    <h2 className="card-settings-main-title text-[22px] font-semibold text-slate-800 mb-4">
      Card Setting
    </h2>
    <CardSettings />
  </div>

</div>
    </div>
  );
}