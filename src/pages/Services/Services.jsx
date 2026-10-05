import ServiceStats from "../../components/services/ServiceStats";
import ServiceList from "../../components/services/ServiceList";

export default function Services() {
  return (
    <div className="w-full space-y-6">
      {/* Top Service Cards */}
      <ServiceStats />

      {/* Services List */}
      <ServiceList />
    </div>
  );
}