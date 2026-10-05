import Vectorapple from "../../assets/images/Vectorapple.png";
import gooleicone from "../../assets/images/gooleicone.png";
import Tesla from "../../assets/images/Tesla.png";
import "./investmentlist.css"

const list = [
  {
    name: "Apple Store",
    category: "E-commerce, Marketplace",
    value: "$54,000",
    return: "+16%",
    image: Vectorapple,
    bg: "bg-pink-100",
  },
  {
    name: "Samsung Mobile",
    category: "E-commerce, Marketplace",
    value: "$25,300",
    return: "-4%",
    image: gooleicone,
    bg: "bg-indigo-100",
  },
  {
    name: "Tesla Motors",
    category: "Electric Vehicles",
    value: "$8,200",
    return: "+25%",
    image: Tesla,
    bg: "bg-amber-100",
  },
];

export default function InvestmentList() {
  return (
    <div className="investment-list w-full">
      <h2 className="investment-list-title text-[22px] font-semibold text-slate-800 mb-4">
        My Investment
      </h2>

      <div className="investment-list-items space-y-5">
        {list.map((item) => (
          <div
            key={item.name}
            className="investment-list-card w-full bg-white rounded-[24px] border border-slate-100 p-3 shadow-sm"
          >
            <div className="investment-list-row grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              {/* Company */}
              <div className="investment-company md:col-span-6 flex items-center gap-4">
                <div
                  className={`investment-company-icon w-16 h-16 rounded-3xl ${item.bg} flex items-center justify-center flex-shrink-0`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="investment-company-image w-8 h-8 object-contain"
                  />
                </div>

                <div className="investment-company-info">
                  <h3 className="investment-company-name text-[15px] font-medium text-slate-800">
                    {item.name}
                  </h3>

                  <p className="investment-company-category text-[15px] font-normal text-[#718EBF] mt-1">
                    {item.category}
                  </p>
                </div>
              </div>

              {/* Investment Value */}
              <div className="investment-value md:col-span-3">
                <p className="investment-value-amount text-[16px] font-medium text-slate-800">
                  {item.value}
                </p>

                <p className="investment-value-label text-[15px] font-normal text-[#718EBF] mt-1">
                  Investment Value
                </p>
              </div>

              {/* Return */}
              <div className="investment-return md:col-span-3">
                <p
                  className={`investment-return-value text-[16px] font-medium ${
                    item.return.startsWith("+")
                      ? "text-emerald-500"
                      : "text-red-500"
                  }`}
                >
                  {item.return}
                </p>

                <p className="investment-return-label text-[15px] font-normal text-[#718EBF] mt-1">
                  Return Value
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
