import InvestmentStats from "../../components/investments/InvestmentStats";
import YearlyInvestmentChart from "../../components/investments/YearlyInvestmentChart";
import MonthlyRevenueChart from "../../components/investments/MonthlyRevenueChart";
import InvestmentList from "../../components/investments/InvestmentList";
import TrendingStock from "../../components/investments/TrendingStock";
import "./investments.css"

export default function Investments() {
  return (
    <div className="investments-page space-y-6">
      {/* Investment Stats */}
      <div className="investments-stats">
        <InvestmentStats />
      </div>

      {/* Charts */}
      <div className="investments-charts grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="investments-yearly-chart">
          <YearlyInvestmentChart />
        </div>
        <div className="investments-monthly-chart">
          <MonthlyRevenueChart />
        </div>
      </div>

      {/* Investments + Trending Stock */}
      <div className="investments-bottom grid grid-cols-1 xl:grid-cols-5 gap-6">
        <div className="investments-list xl:col-span-3">
          <InvestmentList />
        </div>

        <div className="investments-trending-stock xl:col-span-2">
          <TrendingStock />
        </div>
      </div>
    </div>
  );
}
