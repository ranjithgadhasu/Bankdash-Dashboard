import chipWhite from "../../assets/images/chipcard.png";
import masterCard from "../../assets/images/Group.png";
import "./bankcardthree.css"

export default function BankCardThree() {
  return (
    <>
      <div className="bank-card-three relative w-[400px] h-[235px] rounded-[28px] overflow-hidden bg-gradient-to-br from-[#2feb74] via-[#2eeaab] to-[#067226] text-white shadow-xl">

        <div className="bank-card-three-content p-5 flex flex-col justify-between h-[150px]">

          <div className="flex items-start justify-between">
            <div>
              <p className="bank-card-three-balance-label text-md text-white">
                Balance
              </p>

              <h2 className="bank-card-three-balance text-[20px] font-bold mt-1">
                $5,756
              </h2>
            </div>

            <img
              src={chipWhite}
              alt="chip"
              className="bank-card-three-chip w-12 h-12"
            />
          </div>

          <div className="grid grid-cols-2 mt-4">
            <div>
              <p className="bank-card-three-label text-[12px] uppercase text-green-100">
                Card Holder
              </p>

              <h4 className="bank-card-three-name text-[15px] font-semibold mt-1">
                Eddy Cusuma
              </h4>
            </div>

            <div>
              <p className="bank-card-three-label text-[12px] uppercase text-green-100">
                Valid Thru
              </p>

              <h4 className="bank-card-three-name text-[15px] font-semibold mt-1">
                12/22
              </h4>
            </div>
          </div>

        </div>

        <div className="bank-card-three-footer absolute bottom-0 left-0 w-full h-[82px] px-6 flex items-center justify-between bg-white/10 backdrop-blur-md border-t border-white/10">

          <h3 className="bank-card-three-number text-[20px] font-semibold tracking-wide">
            3778 **** **** 1234
          </h3>

          <img
            src={masterCard}
            alt="mastercard"
            className="bank-card-three-master w-[52px] h-[32px]"
          />

        </div>
      </div>
    </>
  );
}