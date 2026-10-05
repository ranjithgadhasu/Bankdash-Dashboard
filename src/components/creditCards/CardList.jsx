import creditlistone from "../../assets/images/creditlistone.png";
import creditlisttwo from "../../assets/images/creditlisttwo.png";
import creditlistthree from "../../assets/images/creditlistthree.png";
import "./cardlist.css";

const cards = [
  {
    type: "Secondary",
    bank: "DBL Bank",
    number: "**** **** 5600",
    holder: "William",
    image: creditlistone,
    bg: "bg-emerald-100",
  },
  {
    type: "Secondary",
    bank: "BRC Bank",
    number: "**** **** 4300",
    holder: "Michel",
    image: creditlisttwo,
    bg: "bg-green-100",
  },
  {
    type: "Secondary",
    bank: "ABM Bank",
    number: "**** **** 7560",
    holder: "Edward",
    image: creditlistthree,
    bg: "bg-teal-100",
  },
];

export default function CardList() {
  return (
    <div className="card-list card-list-responsive space-y-4">

      {cards.map((card, index) => (
        <div
          key={index}
          className="card-list-item card-list-item-responsive w-full bg-white rounded-[20px] border border-slate-100 p-[26.5px] shadow-sm"
        >

          <div className="card-list-row card-list-row-responsive grid grid-cols-1 md:grid-cols-12 gap-4 items-center">

            {/* Image */}
            <div className="card-list-icon-column card-list-icon-column-responsive md:col-span-1 flex justify-center md:justify-start">
              <div
                className={`card-list-icon card-list-icon-responsive w-14 h-14 rounded-2xl ${card.bg} flex items-center justify-center`}
              >
                <img
                  src={card.image}
                  alt={card.bank}
                  className="card-list-icon-image card-list-icon-image-responsive w-7 h-7 object-contain"
                />
              </div>
            </div>
            {/* Card Type */}
            <div className="card-list-type card-list-type-responsive md:col-span-2 text-center md:text-left">
              <p className="card-list-label card-list-label-responsive text-[16px] font-medium text-[#02050c] mb-1">
                Card Type
              </p>
              <h4 className="card-list-value card-list-value-responsive font-medium text-[16px] text-[#718EBF]">
                {card.type}
              </h4>
            </div>
            {/* Bank */}
            <div className="card-list-bank card-list-bank-responsive md:col-span-2 text-center md:text-left">
              <p className="card-list-label card-list-label-responsive text-[16px] font-medium text-[#02050c] mb-1">
                Bank
              </p>

              <h4 className="card-list-value card-list-value-responsive font-medium text-[#718EBF]">
                {card.bank}
              </h4>
            </div>

            {/* Card Number */}
            <div className="card-list-number card-list-number-responsive md:col-span-3 text-center md:text-left">
              <p className="card-list-label card-list-label-responsive text-[16px] font-medium text-[#070e1b] mb-1">
                Card Number
              </p>

              <h4 className="card-list-value card-list-value-responsive font-semibold text-[#718EBF]">
                {card.number}
              </h4>
            </div>

            {/* Holder */}
            <div className="card-list-holder card-list-holder-responsive md:col-span-2 text-center md:text-left">
              <p className="card-list-label card-list-label-responsive text-[16px] font-medium text-[#070e1b] mb-1">
                Name on Card
              </p>

              <h4 className="card-list-value card-list-value-responsive font-semibold text-[#718EBF]">
                {card.holder}
              </h4>
            </div>

            {/* Action */}
            <div className="card-list-action card-list-action-responsive md:col-span-2 flex justify-center md:justify-end">
              <button className="card-list-action-button text-emerald-600 hover:text-emerald-700 font-semibold text-sm transition">
                View Details
              </button>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}