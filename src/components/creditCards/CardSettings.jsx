import blockcardone from "../../assets/images/blockcardone.png";
import blockcardtwo from "../../assets/images/blockcardtwo.png";
import blockcardthree from "../../assets/images/blockcardthree.png";
import apple from "../../assets/images/apple.png";
import "./cardsetting.css"

const settings = [
  {
    title: "Block Card",
    desc: "Instantly block your card",
    image: blockcardone,
    bg: "bg-amber-100",
  },
  {
    title: "Change Pin Code",
    desc: "Choose another pin code",
    image: blockcardtwo,
    bg: "bg-indigo-100",
  },
  {
    title: "Add to Google Pay",
    desc: "Withdraw without any card",
    image: blockcardthree,
    bg: "bg-emerald-100",
  },
  {
    title: "Add to Apple Pay",
    desc: "Withdraw without any card",
    image: apple,
    bg: "bg-teal-100",
  },
  {
    title: "Add to Apple Store",
    desc: "Withdraw without any card",
    image: apple,
    bg: "bg-green-100",
  },
];

export default function CardSettings() {
  return (
    <div className="card-settings w-full">

      <div className="card-settings-card bg-white rounded-[24px] border border-slate-100 p-8 shadow-sm">

        <div className="card-settings-list space-y-4">

          {settings.map((item) => (
            <div
              key={item.title}
              className="card-settings-item flex items-center gap-4"
            >
              {/* Image Background */}
              <div
                className={`card-settings-icon w-12 h-12 sm:w-14 sm:h-14 rounded-full ${item.bg} flex items-center justify-center flex-shrink-0`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="card-settings-icon-image w-6 h-6 sm:w-7 sm:h-7 object-contain"
                />
              </div>

              {/* Content */}
              <div className="card-settings-content min-w-0">
                <h4 className="card-settings-title text-[16px] sm:text-[15px] font-medium text-slate-800">
                  {item.title}
                </h4>

                <p className="card-settings-desc text-[15px] font-normal sm:text-[13px] text-[#718EBF] mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}