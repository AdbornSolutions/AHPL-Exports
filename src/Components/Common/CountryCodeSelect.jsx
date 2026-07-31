import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { countryCodes } from "../../config/countryCodes";

const CountryCodeSelect = ({ value, onChange, className = "" }) => {
  const [open, setOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (!selectRef.current?.contains(event.target)) setOpen(false);
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, []);

  return (
    <div className={`relative ${className}`} ref={selectRef}>
      <button
        className="flex h-full w-16 items-center justify-center gap-0.5 border-0 border-r border-[#c8c8c8] bg-transparent px-1 text-[13px] font-semibold text-[#27344b] outline-none"
        type="button"
        aria-label="Select country calling code"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {value}
        <ChevronDown className={`size-3 transition ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>

      {open && (
        <div className="absolute left-0 top-[calc(100%_+_6px)] z-30 max-h-[180px] w-56 overflow-y-auto rounded-lg border border-[#d9e1e5] bg-white py-1 shadow-[0_12px_26px_rgba(13,45,81,0.18)]">
          {countryCodes.map(([country, code]) => (
            <button
              className={`flex w-full items-center gap-3 px-3 py-2 text-left text-[13px] transition hover:bg-[#eef8f8] ${value === code ? "bg-[#eef8f8] font-semibold text-[#20a99f]" : "text-[#183255]"}`}
              type="button"
              key={`${country}-${code}`}
              onClick={() => {
                onChange(code);
                setOpen(false);
              }}
            >
              <span className="w-10 shrink-0 font-semibold">{code}</span>
              <span>{country}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountryCodeSelect;
