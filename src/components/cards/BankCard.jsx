import chipWhite from "../../assets/images/chipcard.png";
import masterCard from "../../assets/images/Group.png";
import "./bank.css"

export default function BankCard() {
  return (
    <div className="bank-card relative w-full h-[235px] rounded-[28px] overflow-hidden bg-gradient-to-br from-[#16A34A] via-[#10B981] to-[#047857] text-white shadow-xl">
      <div className="bank-card-content p-4 flex flex-col justify-between h-[150px]">
        <div className="flex items-start justify-between">
          <div>
            <p className="bank-card-balance-label text-md text-white">
              Balance
            </p>
            <h2 className="bank-card-balance text-[20px] font-bold mt-1">
              $5,756
            </h2>
          </div>

          <img
            src={chipWhite}
            alt="chip"
            className="bank-card-chip w-12 h-12"
          />
        </div>

        <div className="holder-can grid grid-cols-2">
          <div>
            <p className="bank-card-label text-[12px] uppercase text-green-100">
              Card Holder
            </p>

            <h4 className="bank-card-name text-[15px] font-semibold mt-1">
              Eddy Cusuma
            </h4>
          </div>

          <div>
            <p className="bank-card-label text-[12px] uppercase text-green-100">
              Valid Thru
            </p>

            <h4 className="bank-card-name text-[15px] font-semibold mt-1">
              12/22
            </h4>
          </div>
        </div>
      </div>

      <div className="bank-card-footer absolute bottom-0 left-0 w-full h-[82px] px-6 flex items-center justify-between bg-white/10 backdrop-blur-md border-t border-white/10">
        <h3 className="bank-card-number text-[20px] font-semibold tracking-wide">
          3778 **** **** 1234
        </h3>

        <img
          src={masterCard}
          alt="mastercard"
          className="bank-card-master w-[52px] h-[32px]"
        />
      </div>
    </div>
  );
}
