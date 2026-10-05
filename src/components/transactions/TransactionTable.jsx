import { ArrowUp, ArrowDown, Download } from "lucide-react";
import "./TransactionTable.css";

const transactions = [
  {
    id: "#12548796",
    title: "Spotify Subscription",
    type: "Shopping",
    card: "1234 ****",
    date: "28 Jan, 12:30 AM",
    amount: "-$2,500",
    income: false,
  },
  {
    id: "#12548796",
    title: "Freepik Sales",
    type: "Transfer",
    card: "1234 ****",
    date: "25 Jan, 10:40 PM",
    amount: "+$750",
    income: true,
  },
  {
    id: "#12548796",
    title: "Mobile Service",
    type: "Service",
    card: "1234 ****",
    date: "20 Jan, 10:40 PM",
    amount: "-$150",
    income: false,
  },
  {
    id: "#12548796",
    title: "Wilson",
    type: "Transfer",
    card: "1234 ****",
    date: "15 Jan, 03:29 PM",
    amount: "-$1050",
    income: false,
  },
  {
    id: "#12548796",
    title: "Emilly",
    type: "Transfer",
    card: "1234 ****",
    date: "14 Jan, 10:40 PM",
    amount: "+$840",
    income: true,
  },
];

export default function TransactionTable() {
  return (
    <div className="transaction-table transaction-table-responsive bg-white rounded-[28px] p-6 shadow-sm border border-slate-100 overflow-x-auto">
      <table className="transaction-table-content w-full min-w-[900px]">
        {/* =========================================
            DESKTOP HEADER
        ========================================= */}
        <thead>
          <tr className="table-heading text-left text-[16px] text-[#718EBF] border-b border-slate-200">
            <th className="table-description-heading pb-4 font-medium">
              Description
            </th>

            <th className="transaction-id-heading pb-4 font-medium">
              Transaction ID
            </th>

            <th className="transaction-type-heading pb-4 font-medium">Type</th>

            <th className="transaction-card-heading pb-4 font-medium">Card</th>

            <th className="transaction-date-heading pb-4 font-medium">Date</th>

            <th className="transaction-amount-heading pb-4 font-medium">
              Amount
            </th>

            <th className="transaction-receipt-heading pb-4 font-medium text-center">
              Receipt
            </th>
          </tr>
        </thead>

        {/* =========================================
            TRANSACTIONS
        ========================================= */}
        <tbody>
          {transactions.map((item, index) => (
            <tr
              key={index}
              className="
                table-data
                transaction-row
                border-b
                last:border-0
                border-slate-100
              "
            >
              {/* =====================================
                  DESCRIPTION
              ===================================== */}
              <td className="table-description py-5">
                <div className="download-arrow-space flex items-center gap-3">
                  {/* Arrow */}
                  <div className="download-arrow w-8 h-8 rounded-full border border-emerald-300 flex items-center justify-center">
                    {item.income ? (
                      <ArrowDown
                        size={16}
                        className="transaction-arrow text-emerald-600"
                      />
                    ) : (
                      <ArrowUp
                        size={16}
                        className="transaction-arrow text-emerald-600"
                      />
                    )}
                  </div>

                  {/* Transaction information */}
                  <div className="transaction-mobile-info">
                    {/* Title */}
                    <span
                      className="
                        title-size
                        transaction-title
                        text-[16px]
                        font-normal
                        text-slate-900
                      "
                    >
                      {item.title}
                    </span>

                    {/* Mobile Date */}
                    <span className="transaction-mobile-date">{item.date}</span>
                  </div>
                </div>
              </td>

              {/* =====================================
                  TRANSACTION ID
              ===================================== */}
              <td className="transtion-id transaction-id text-slate-800">
                {item.id}
              </td>

              {/* =====================================
                  TYPE
              ===================================== */}
              <td className="transtion-type transaction-type text-slate-800">
                {item.type}
              </td>

              {/* =====================================
                  CARD
              ===================================== */}
              <td className="transtion-card transaction-card text-slate-800">
                {item.card}
              </td>

              {/* =====================================
                  DESKTOP DATE
              ===================================== */}
              <td className="transtion-date transaction-date text-slate-800">
                {item.date}
              </td>

              {/* =====================================
                  AMOUNT
              ===================================== */}
              <td
                className={`
                  transtion-amount
                  transaction-amount
                  font-semibold
                  ${item.income ? "text-emerald-600" : "text-red-500"}
                `}
              >
                {item.amount}
              </td>

              {/* =====================================
                  RECEIPT
              ===================================== */}
              <td className="transaction-receipt text-center">
                <button
                  className="
                    download-btn
                    px-4
                    cursor-pointer
                    py-2
                    rounded-full
                    border
                    border-emerald-500
                    text-emerald-600
                    text-sm
                    font-medium
                    hover:bg-emerald-50
                    transition
                    flex
                    items-center
                    gap-1
                    mx-auto
                  "
                >
                  <Download size={14} />

                  <span className="download-text">Download</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
