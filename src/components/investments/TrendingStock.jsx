import "./trendingstock.css";

const stocks = [
  { name: "Trivago", price: "$520", return: "+5%" },
  { name: "Canon", price: "$480", return: "+10%" },
  { name: "Uber Food", price: "$350", return: "-3%" },
  { name: "Nokia", price: "$940", return: "+2%" },
  { name: "TikTok", price: "$670", return: "-12%" },
];

export default function TrendingStock() {
  return (
    <div className="trending-stock w-full">
      {/* Title Outside */}
      <h2 className="trending-stock-title text-[22px] font-semibold text-slate-800 mb-4">
        Trending Stock
      </h2>

      {/* Card */}
      <div className="trending-stock-card bg-white rounded-[24px] border border-slate-100 p-5 shadow-sm">
        <div className="trending-stock-table-wrapper overflow-x-auto">
          <table className="trending-stock-table w-full min-w-[320px]">
            <thead>
              <tr className="trending-stock-header border-b border-slate-100 text-left">
                <th className="trending-stock-sl-heading pb-3 text-[15px] font-medium text-[#718EBF]">
                  SL No
                </th>

                <th className="trending-stock-name-heading pb-3 text-[15px] font-medium text-[#718EBF]">
                  Name
                </th>

                <th className="trending-stock-price-heading pb-3 text-[15px] font-medium text-[#718EBF]">
                  Price
                </th>

                <th className="trending-stock-return-heading pb-3 text-[15px] font-medium text-[#718EBF]">
                  Return
                </th>
              </tr>
            </thead>

            <tbody>
              {stocks.map((item, index) => (
                <tr key={item.name} className="trending-stock-row">
                  <td className="trending-stock-sl trending-name py-2 text-[15px] text-slate-900">
                    {String(index + 1).padStart(2, "0")}.
                  </td>

                  <td className="trending-stock-name py-2 text-[16px] font-normal text-slate-800">
                    {item.name}
                  </td>

                  <td className="trending-stock-price py-2 text-[16px] font-normal text-slate-800">
                    {item.price}
                  </td>

                  <td
                    className={`trending-stock-return py-[11px] text-[16px] font-medium ${
                      item.return.startsWith("+")
                        ? "text-emerald-600"
                        : "text-red-500"
                    }`}
                  >
                    {item.return}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}