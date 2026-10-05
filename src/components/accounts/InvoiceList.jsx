import Apple from "../../assets/images/apple.png";
import Play from "../../assets/images/Play.png";
import usertspesifc from "../../assets/images/usertspesifc.png";
import Vector from "../../assets/images/Vector.png";
import "./invoice.css"

const invoices = [
  {
    title: "Apple Store",
    time: "5h ago",
    amount: "$450",
    image: Apple,
    bg: "bg-emerald-100",
  },
  {
    title: "Michael",
    time: "2 days ago",
    amount: "$160",
    image: usertspesifc,
    bg: "bg-green-100",
  },
  {
    title: "Playstation",
    time: "5 days ago",
    amount: "$1085",
    image: Play,
    bg: "bg-teal-100",
  },
  {
    title: "William",
    time: "10 days ago",
    amount: "$90",
    image: Vector,
    bg: "bg-lime-100",
  },
];

export default function InvoiceList() {
  return (
    <div className="invoice-list ml-30">

      <h2 className="invoice-list-title text-[22px] font-semibold text-slate-800 mb-4">
        Invoices Sent
      </h2>

      <div className="invoice-list-card max-w-[400px] h-90 bg-white rounded-3xl p-5 border border-slate-100 shadow-sm">

        <div className="invoice-list-items space-y-4">

          {invoices.map((item) => (
            <div
              key={item.title}
              className="invoice-list-item flex items-center justify-between"
            >

              {/* Left */}
              <div className="invoice-list-left flex items-center gap-3">

                <div
                  className={`invoice-list-icon w-12 h-12 mt-3 rounded-full ${item.bg} flex items-center justify-center`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="invoice-list-icon-image w-6 h-6 object-contain"
                  />
                </div>

                <div className="invoice-list-info">
                  <h4 className="invoice-list-name font-medium text-slate-700 text-[15px]">
                    {item.title}
                  </h4>

                  <p className="invoice-list-time text-xs text-slate-400">
                    {item.time}
                  </p>
                </div>

              </div>

              {/* Right */}
              <span className="invoice-list-amount font-semibold text-slate-700 text-[15px]">
                {item.amount}
              </span>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}