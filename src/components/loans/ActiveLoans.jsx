import "./loans.css";
import "./activeloan.css";

const loans = [
  {
    loan: "$100,000",
    repay: "$40,500",
    duration: "8 Months",
    interest: "12%",
    installment: "$2,000 / month",
  },
  {
    loan: "$500,000",
    repay: "$250,000",
    duration: "36 Months",
    interest: "10%",
    installment: "$8,000 / month",
  },
  {
    loan: "$900,000",
    repay: "$40,500",
    duration: "12 Months",
    interest: "12%",
    installment: "$5,000 / month",
  },
  {
    loan: "$50,000",
    repay: "$40,500",
    duration: "25 Months",
    interest: "5%",
    installment: "$2,000 / month",
  },
  {
    loan: "$50,000",
    repay: "$40,500",
    duration: "5 Months",
    interest: "16%",
    installment: "$10,000 / month",
  },
  {
    loan: "$80,000",
    repay: "$25,500",
    duration: "14 Months",
    interest: "8%",
    installment: "$2,000 / month",
  },
  {
    loan: "$12,000",
    repay: "$5,500",
    duration: "9 Months",
    interest: "13%",
    installment: "$500 / month",
  },
  {
    loan: "$160,000",
    repay: "$100,800",
    duration: "3 Months",
    interest: "12%",
    installment: "$900 / month",
  },
];

export default function ActiveLoans() {
  return (
    <div className="active-loans w-full">

      {/* =========================================
          TITLE
      ========================================= */}

      <h2 className="active-loans-title text-[22px] sm:text-[22px] font-semibold text-slate-800 mb-4">
        Active Loans Overview
      </h2>


      {/* =========================================
          DESKTOP / TABLET TABLE
      ========================================= */}

      <div className="active-loans-table-wrapper hidden md:block bg-white rounded-[22px] border border-slate-100 shadow-sm overflow-hidden">

        <div className="active-loans-table-scroll overflow-x-auto">

          <table className="active-loans-table w-full border-collapse">

            <thead className="active-loans-thead">

              <tr className="active-loans-header-row text-left text-[#718EBF] text-[16px] border-b border-slate-100">

                <th className="active-loans-th active-loans-th-sl px-5 py-4 font-medium">
                  SL No
                </th>

                <th className="active-loans-th active-loans-th-loan px-4 py-4 font-medium">
                  Loan Money
                </th>

                <th className="active-loans-th active-loans-th-repay-left px-4 py-4 font-medium">
                  Left to repay
                </th>

                <th className="active-loans-th active-loans-th-duration px-4 py-4 font-medium">
                  Duration
                </th>

                <th className="active-loans-th active-loans-th-interest px-4 py-4 font-medium">
                  Interest rate
                </th>

                <th className="active-loans-th active-loans-th-installment px-4 py-4 font-medium">
                  Installment
                </th>

                <th className="active-loans-th active-loans-th-action px-4 py-4 font-medium">
                  Repay
                </th>

              </tr>

            </thead>


            <tbody className="active-loans-tbody">

              {loans.map((item, index) => (
                <tr
                  key={index}
                  className="active-loans-row border-b border-slate-100 last:border-b-0 hover:bg-slate-50 transition-colors"
                >

                  <td className="active-loans-cell active-loans-cell-sl px-5 py-4 text-[16px] text-slate-700">
                    {String(index + 1).padStart(2, "0")}.
                  </td>

                  <td className="active-loans-cell active-loans-cell-loan px-4 py-4 text-[16px] text-slate-700">
                    {item.loan}
                  </td>

                  <td className="active-loans-cell active-loans-cell-repay-left px-4 py-4 text-[16px] text-slate-700">
                    {item.repay}
                  </td>

                  <td className="active-loans-cell active-loans-cell-duration px-4 py-4 text-[16px] text-slate-700">
                    {item.duration}
                  </td>

                  <td className="active-loans-cell active-loans-cell-interest px-4 py-4 text-[16px] text-slate-700">
                    {item.interest}
                  </td>

                  <td className="active-loans-cell active-loans-cell-installment px-4 py-4 text-[16px] text-slate-700 whitespace-nowrap">
                    {item.installment}
                  </td>

                  <td className="active-loans-cell active-loans-cell-action px-4 py-4">

                    <button
                      type="button"
                      className="active-loans-repay-button px-5 py-1.5 rounded-full border border-emerald-500 text-emerald-600 text-[15px] font-medium hover:bg-emerald-50 transition-colors"
                    >
                      Repay
                    </button>

                  </td>

                </tr>
              ))}


              {/* Total */}

              <tr className="active-loans-total-row text-red-500">

                <td className="active-loans-total-cell active-loans-total-label px-5 py-4 text-[16px] font-medium">
                  Total
                </td>

                <td className="active-loans-total-cell active-loans-total-loan px-4 py-4 text-[16px] font-medium">
                  $125,000
                </td>

                <td className="active-loans-total-cell active-loans-total-repay px-4 py-4 text-[16px] font-medium">
                  $750,000
                </td>

                <td className="active-loans-total-cell active-loans-total-duration"></td>

                <td className="active-loans-total-cell active-loans-total-interest"></td>

                <td className="active-loans-total-cell active-loans-total-installment px-4 py-4 text-[16px] font-medium whitespace-nowrap">
                  $50,000 / month
                </td>

                <td className="active-loans-total-cell active-loans-total-action"></td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>


      {/* =========================================
          MOBILE SINGLE CARD
      ========================================= */}

      <div className="active-loans-mobile md:hidden">

        {/* -----------------------------------------
            HEADER
        ----------------------------------------- */}

        <div className="active-loans-mobile-header">

          <span className="active-loans-mobile-header-loan">
            Loan Money
          </span>

          <span className="active-loans-mobile-header-repay">
            Left to repay
          </span>

          <span className="active-loans-mobile-header-action">
            Repay
          </span>

        </div>


        {/* -----------------------------------------
            LOAN ROWS
        ----------------------------------------- */}

        <div className="active-loans-mobile-rows">

          {loans.map((item, index) => (
            <div
              key={index}
              className="active-loans-mobile-row"
            >

              {/* Loan Money */}

              <p className="active-loans-mobile-value">
                {item.loan}
              </p>


              {/* Left to repay */}

              <p className="active-loans-mobile-value">
                {item.repay}
              </p>


              {/* Repay Button */}

              <button
                type="button"
                className="active-loans-mobile-repay-button"
              >
                Repay
              </button>

            </div>
          ))}

        </div>


        {/* -----------------------------------------
            MOBILE TOTAL
        ----------------------------------------- */}

        <div className="active-loans-mobile-total">

          {/* Total Loan */}

          <div className="active-loans-mobile-total-item">

            <p className="active-loans-mobile-total-label">
              Total Loan
            </p>

            <p className="active-loans-mobile-total-value">
              $125,000
            </p>

          </div>


          {/* Total Repay */}

          <div className="active-loans-mobile-total-item">

            <p className="active-loans-mobile-total-label">
              Total Repay
            </p>

            <p className="active-loans-mobile-total-value">
              $750,000
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}