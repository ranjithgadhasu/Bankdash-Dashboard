import { useState } from "react"; 
import "./TransactionTable.css"

export default function TransactionTabs() {
  const [active, setActive] = useState("all");

  const tabs = [
    { id: "all", label: "All Transactions" },
    { id: "income", label: "Income" },
    { id: "expense", label: "Expense" },
  ];

  return (
    <div className="border-b border-slate-200 mb-6">
      <div className="flex gap-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`tarans-tabs pb-3 text-[16px] font-medium transition ${
              active === tab.id
                ? "text-emerald-600 border-b-2 border-emerald-600"
                : "text-[#718EBF] hover:text-emerald-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}