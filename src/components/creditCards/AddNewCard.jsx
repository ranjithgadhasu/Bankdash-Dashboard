import { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./addnew.css"

export default function AddNewCard() {
  const [form, setForm] = useState({
    type: "Classic",
    name: "My Cards",
    number: "",
    expiry: "25 January 2025",
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  return (
    <div className="add-new-card bg-white rounded-[24px] border border-slate-100 p-6 shadow-sm">

      {/* Description */}
      <p className="add-new-card-description">

  {/* Mobile */}
  <span className="description-mobile">
    Credit Card generally means a plastic card issued by Scheduled Commercial
    Banks assigned to a Cardholder, with a credit limit, that can be used to
    purchase goods and services on credit or obtain cash advances.
  </span>

  {/* Tablet + Desktop */}
  <span className="description-desktop">
    Credit Card generally means a plastic card issued by Scheduled Commercial Banks
    <br />
    assigned to a Cardholder, with a credit limit, that can be used to purchase goods
    <br />
    and services on credit or obtain cash advances.
  </span>

</p>

      {/* Form */}
      <div className="add-new-card-form grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Card Type */}
        <div className="add-new-card-field">
          <label className="add-new-card-label block text-[16px] font-normal text-slate-800 mb-2">
            Card Type
          </label>

          <input
            type="text"
            value={form.type}
            onChange={(e) => handleChange("type", e.target.value)}
            className="add-new-card-input w-full h-12 rounded-xl border text-[#718EBF] border-slate-200 px-4 outline-none focus:border-emerald-500"
          />
        </div>

        {/* Name */}
        <div className="add-new-card-field">
          <label className="add-new-card-label block text-[16px] font-normal text-slate-700 mb-2">
            Name On Card
          </label>

          <input
            type="text"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="add-new-card-input w-full h-12 rounded-xl text-[#718EBF] border border-slate-200 px-4 outline-none focus:border-emerald-500"
          />
        </div>

        {/* Card Number */}
        <div className="add-new-card-field">
          <label className="add-new-card-label block text-[16px] font-normal text-slate-700 mb-2">
            Card Number
          </label>

          <input
            type="text"
            placeholder="**** **** **** ****"
            value={form.number}
            onChange={(e) => handleChange("number", e.target.value)}
            className="add-new-card-input w-full h-12 rounded-xl text-[#718EBF] border border-slate-200 px-4 outline-none focus:border-emerald-500"
          />
        </div>

        {/* Expiry */}
        <div className="add-new-card-field">
          <label className="add-new-card-label block text-[16px] font-normal text-slate-700 mb-2">
            Expiration Date
          </label>

          <div className="relative">
            <input
              type="text"
              value={form.expiry}
              onChange={(e) => handleChange("expiry", e.target.value)}
              className="add-new-card-input w-full h-12 rounded-xl border text-[#718EBF] border-slate-200 px-4 pr-10 outline-none focus:border-emerald-500"
            />

            <ChevronDown
              size={18}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>
        </div>
      </div>

      {/* Button */}
      <button className="add-new-card-button mt-6 h-12 px-8 cursor-pointer rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition">
        Add Card
      </button>
    </div>
  );
}