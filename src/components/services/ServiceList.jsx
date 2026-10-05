import banklist from "../../assets/images/banklist.png";
import sevicetwo from "../../assets/images/sevicetwo.png";
import userloanone from "../../assets/images/userloanone.png";
import userloanthree from "../../assets/images/userloanthree.png";
import sevicethree from "../../assets/images/sevicethree.png";
import "./serviceslist.css";

const services = [
  {
    title: "Business Loans",
    description: "It is a long established",
    colOne: "Lorem Ipsum",
    colTwo: "Lorem Ipsum",
    colThree: "Lorem Ipsum",
    colDescriptionOne: "Many publishing",
    colDescriptionTwo: "Many publishing",
    colDescriptionThree: "Many publishing",
    image: banklist,
    bg: "bg-pink-100",
    active: false,
  },
  {
    title: "Checking accounts",
    description: "It is a long established",
    colOne: "Lorem Ipsum",
    colTwo: "Lorem Ipsum",
    colThree: "Lorem Ipsum",
    colDescriptionOne: "Many publishing",
    colDescriptionTwo: "Many publishing",
    colDescriptionThree: "Many publishing",
    image: sevicetwo,
    bg: "bg-amber-100",
    active: false,
  },
  {
    title: "Savings accounts",
    description: "It is a long established",
    colOne: "Lorem Ipsum",
    colTwo: "Lorem Ipsum",
    colThree: "Lorem Ipsum",
    colDescriptionOne: "Many publishing",
    colDescriptionTwo: "Many publishing",
    colDescriptionThree: "Many publishing",
    image: userloanthree,
    bg: "bg-pink-100",
    active: true,
  },
  {
    title: "Debit and credit cards",
    description: "It is a long established",
    colOne: "Lorem Ipsum",
    colTwo: "Lorem Ipsum",
    colThree: "Lorem Ipsum",
    colDescriptionOne: "Many publishing",
    colDescriptionTwo: "Many publishing",
    colDescriptionThree: "Many publishing",
    image: userloanone,
    bg: "bg-blue-100",
    active: false,
  },
  {
    title: "Life Insurance",
    description: "It is a long established",
    colOne: "Lorem Ipsum",
    colTwo: "Lorem Ipsum",
    colThree: "Lorem Ipsum",
    colDescriptionOne: "Many publishing",
    colDescriptionTwo: "Many publishing",
    colDescriptionThree: "Many publishing",
    image: sevicethree,
    bg: "bg-teal-100",
    active: false,
  },
  {
    title: "Business loans",
    description: "It is a long established",
    colOne: "Lorem Ipsum",
    colTwo: "Lorem Ipsum",
    colThree: "Lorem Ipsum",
    colDescriptionOne: "Many publishing",
    colDescriptionTwo: "Many publishing",
    colDescriptionThree: "Many publishing",
    image: banklist,
    bg: "bg-pink-100",
    active: false,
  },
];

export default function ServiceList() {
  return (
    <div className="service-list w-full">
      {/* Title */}
      <h2 className="service-list-title text-[22px] font-semibold text-slate-800 mb-4">
        Bank Services List
      </h2>

      {/* =====================================================
          DESKTOP / TABLET
      ====================================================== */}
      <div className="service-list-desktop hidden md:block space-y-3">
        {services.map((item) => (
          <div
            key={item.title}
            className="
              service-list-card
              w-full
              bg-white
              rounded-[18px]
              border
              border-slate-100
              shadow-sm
              p-4
            "
          >
            <div className="service-list-row grid grid-cols-12 gap-4 items-center">
              {/* Service */}
              <div className="service-list-service col-span-3 flex items-center gap-3 min-w-0">
                <div
                  className={`
                    service-list-icon
                    w-11 h-11
                    rounded-[14px]
                    ${item.bg}
                    flex
                    items-center
                    justify-center
                    flex-shrink-0
                  `}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="service-list-icon-image w-5 h-5 object-contain"
                  />
                </div>

                <div className="service-list-content min-w-0">
                  <h4 className="service-list-service-title text-[16px] font-medium text-slate-800 truncate">
                    {item.title}
                  </h4>

                  <p className="service-list-service-description text-[15px] font-normal text-[#718EBF] mt-1 truncate">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Column 1 */}
              <div className="service-list-column col-span-2 min-w-0">
                <p className="service-list-column-title text-[16px] font-medium text-slate-700 truncate">
                  {item.colOne}
                </p>

                <p className="service-list-column-description text-[15px] font-normal text-[#718EBF] mt-1 truncate">
                  {item.colDescriptionOne}
                </p>
              </div>

              {/* Column 2 */}
              <div className="service-list-column col-span-2 min-w-0">
                <p className="service-list-column-title text-[16px] font-medium text-slate-700 truncate">
                  {item.colTwo}
                </p>

                <p className="service-list-column-description text-[15px] font-normal text-[#718EBF] mt-1 truncate">
                  {item.colDescriptionTwo}
                </p>
              </div>

              {/* Column 3 */}
              <div className="service-list-column col-span-2 min-w-0">
                <p className="service-list-column-title text-[16px] font-medium text-slate-700 truncate">
                  {item.colThree}
                </p>

                <p className="service-list-column-description text-[15px] font-medium text-[#718EBF] mt-1 truncate">
                  {item.colDescriptionThree}
                </p>
              </div>

              {/* View Details */}
              <div className="service-list-action col-span-3 flex justify-end">
                <button
                  type="button"
                  className={`
                    service-list-button
                    w-[150px]
                    px-6
                    py-2
                    rounded-full
                    border
                    bg-transparent
                    text-[15px]
                    font-medium
                    transition-all
                    duration-200

                    ${
                      item.active
                        ? `
                          border-emerald-500
                          text-emerald-600
                          hover:border-emerald-600
                          hover:text-emerald-700
                        `
                        : `
                          border-[#D5E0F0]
                          text-[#718EBF]
                          hover:border-emerald-400
                          hover:text-emerald-600
                        `
                    }
                  `}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* =====================================================
          MOBILE
      ====================================================== */}
      <div className="service-list-mobile md:hidden space-y-3">
        {services.map((item) => (
          <div
            key={item.title}
            className="
              service-list-mobile-card
              w-full
              bg-white
              rounded-[18px]
              border
              border-slate-100
              shadow-sm
              p-4
            "
          >
            {/* Header */}
            <div className="service-list-mobile-header flex items-center gap-3">
              <div
                className={`
                  service-list-mobile-icon
                  w-11 h-11
                  rounded-[14px]
                  ${item.bg}
                  flex
                  items-center
                  justify-center
                  flex-shrink-0
                `}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="service-list-mobile-icon-image w-5 h-5 object-contain"
                />
              </div>

              <div className="service-list-mobile-content min-w-0">
                <h4 className="service-list-mobile-title text-[14px] font-medium text-slate-800 truncate">
                  {item.title}
                </h4>

                <p className="service-list-mobile-description text-[11px] text-[#718EBF] mt-1 truncate">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Details */}
            <div
              className="
                service-list-mobile-details
                grid
                grid-cols-3
                gap-3
                mt-4
                pt-4
                border-t
                border-slate-100
              "
            >
              <div className="min-w-0">
                <p className="service-list-mobile-label text-[11px] text-[#718EBF]">
                  Service
                </p>

                <p className="service-list-mobile-value text-[12px] text-slate-700 mt-1 truncate">
                  {item.colOne}
                </p>
              </div>

              <div className="min-w-0">
                <p className="service-list-mobile-label text-[11px] text-[#718EBF]">
                  Details
                </p>

                <p className="service-list-mobile-value text-[12px] text-slate-700 mt-1 truncate">
                  {item.colTwo}
                </p>
              </div>

              <div className="min-w-0">
                <p className="service-list-mobile-label text-[11px] text-[#718EBF]">
                  Info
                </p>

                <p className="service-list-mobile-value text-[12px] text-slate-700 mt-1 truncate">
                  {item.colThree}
                </p>
              </div>
            </div>

            {/* Mobile Button */}
            <button
              type="button"
              className={`
                service-list-mobile-button
                w-full
                mt-4
                py-2
                rounded-full
                border
                bg-transparent
                text-[12px]
                font-medium
                transition-all
                duration-200

                ${
                  item.active
                    ? `
                      border-emerald-500
                      text-emerald-600
                      hover:border-emerald-600
                      hover:text-emerald-700
                    `
                    : `
                      border-[#D5E0F0]
                      text-[#718EBF]
                      hover:border-emerald-400
                      hover:text-emerald-600
                    `
                }
              `}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
