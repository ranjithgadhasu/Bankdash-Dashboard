import seviceone from "../../assets/images/seviceone.png";
import sevicetwo from "../../assets/images/sevicetwo.png";
import sevicethree from "../../assets/images/sevicethree.png";
import "./services.css";

const services = [
  {
    title: "Life Insurance",
    description: "Unlimited protection",
    image: seviceone,
    bg: "bg-emerald-100",
    color: "text-emerald-600",
  },
  {
    title: "Shopping",
    description: "Buy. Think. Grow.",
    image: sevicetwo,
    bg: "bg-lime-100",
    color: "text-lime-600",
  },
  {
    title: "Safety",
    description: "We are your allies",
    image: sevicethree,
    bg: "bg-teal-100",
    color: "text-teal-600",
  },
];

export default function ServiceStats() {
  return (
    <div className="service-stats-grid grid grid-cols-1 md:grid-cols-3 gap-4">
      {services.map((item) => {
        return (
          <div
            key={item.title}
            className="service-stats-card w-full bg-white rounded-[22px] p-5 flex items-center gap-4 border border-slate-100 shadow-sm"
          >
            {/* Icon */}
            <div
              className={`service-stats-icon w-14 h-14 rounded-full ${item.bg} flex items-center justify-center flex-shrink-0`}
            >
              <img
                src={item.image}
                alt={item.title}
                className={`service-stats-icon-image ${item.color}`}
              />
            </div>

            {/* Content */}
            <div className="service-stats-content min-w-0">
              <h3 className="service-stats-title text-[20px] font-semibold text-slate-800">
                {item.title}
              </h3>

              <p className="service-stats-description text-[16px] font-normal text-[#718EBF] mt-1">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}