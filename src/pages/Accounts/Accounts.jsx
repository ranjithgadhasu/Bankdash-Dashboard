import StatsCards from "../../components/accounts/StatsCards";
import LastTransaction from "../../components/accounts/LastTransaction";
import DebitCreditChart from "../../components/accounts/DebitCreditChart";
import InvoiceList from "../../components/accounts/InvoiceList";
import BankCardTwo from "../../components/accounts/BankCardTwo";
import "./account.css"

const Accounts = () => {
  return (
    <>
      <div className="space-y-6">
        <StatsCards />

        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7">
            <LastTransaction />
          </div>

          <div className="bankkcard-two lg:col-span-5">
            <BankCardTwo />
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7">
            <DebitCreditChart />
          </div>

          <div className="lg:col-span-5">
            <InvoiceList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Accounts;
