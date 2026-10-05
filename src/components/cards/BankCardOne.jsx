import chipDark from "../../assets/images/Chip_Card.png";
import GroupOne from "../../assets/images/Groupone.png";
import "./bank.css"

export default function BankCardOne() {
  return (
    <div className="bank-card-one bankcard-one-layer  relative w-full h-[235px] rounded-[28px] overflow-hidden bg-white border border-[#D6EBDC] text-[#065F46] shadow-sm">

      <div className="bank-card-one-content p-4 flex flex-col justify-between h-[150px]">
        <div className="flex items-start justify-between">
          <div>
            <p className="bank-card-one-label text-[12px] text-[#6B9F8B]">
              Balance
            </p>

            <h2 className="bank-card-one-balance text-[20px] font-bold mt-1">
              $5,756
            </h2>
          </div>

          <img
            src={chipDark}
            alt="chip"
            className="bank-card-one-chip w-12 h-12"
          />
        </div>

        <div className="grid grid-cols-2 mt-4">
          <div>
            <p className="bank-card-one-label text-[12px] uppercase text-[#6B9F8B]">
              Card Holder
            </p>

            <h4 className="bank-card-one-name text-[15px] font-semibold mt-1">
              Eddy Cusuma
            </h4>
          </div>

          <div>
            <p className="bank-card-one-label text-[12px] uppercase text-[#6B9F8B]">
              Valid Thru
            </p>

            <h4 className="bank-card-one-name text-[15px] font-semibold mt-1">
              12/22
            </h4>
          </div>
        </div>
      </div>

      <div className="bank-card-one-footer absolute bottom-0 left-0 w-full h-[82px] px-6 flex items-center justify-between bg-[#F7FCF9] border-t border-[#D6EBDC]">
        <h3 className="bank-card-one-number text-[20px] font-semibold tracking-wide">
          3778 **** **** 1234
        </h3>

        <img
          src={GroupOne}
          alt="mastercard"
          className="bank-card-one-master w-[52px] h-[32px]"
        />
      </div>
    </div>
  );
}