import { useEffect, useId, useRef, useState } from "react";
import { ArrowUpRight, Download, X } from "lucide-react";
import { buttonIconClass, pillButtonClass } from "../../utils/tailwindClasses";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const BrochureDownloadDialog = ({ brochureUrl, fileName, buttonLabel = "View Brochure" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const dialogRef = useRef(null);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    dialogRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const closeDialog = () => {
    setIsOpen(false);
    setErrors({});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};

    if (!name.trim()) nextErrors.name = "Please enter your name.";
    if (!email.trim()) nextErrors.email = "Please enter your email address.";
    else if (!emailPattern.test(email.trim())) nextErrors.email = "Please enter a valid email address.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const downloadLink = document.createElement("a");
    downloadLink.href = brochureUrl;
    downloadLink.download = fileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();
    closeDialog();
  };

  return (
    <>
      <button className={`${pillButtonClass} mt-10`} type="button" onClick={() => setIsOpen(true)}>
        {buttonLabel}
        <span className={buttonIconClass} aria-hidden="true">
          <ArrowUpRight size={15} />
        </span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[1000] grid place-items-center overflow-y-auto bg-[#0d1c38]/70 px-4 py-8 backdrop-blur-sm"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeDialog();
          }}
        >
          <div
            ref={dialogRef}
            className="relative w-full max-w-[470px] rounded-[28px] bg-white p-8 text-left shadow-[0_28px_80px_rgba(13,28,56,0.32)] outline-none max-sm:rounded-[22px] max-sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
          >
            <button
              className="absolute right-5 top-5 grid size-10 place-items-center rounded-full bg-[#eef9f8] text-[#1b3156] transition hover:bg-[#d8f5f2]"
              type="button"
              aria-label="Close brochure form"
              onClick={closeDialog}
            >
              <X size={19} />
            </button>

            <span className="grid size-12 place-items-center rounded-2xl bg-[#30c8bb]/15 text-[#24b8ac]">
              <Download size={23} />
            </span>
            <h2 id={titleId} className="mt-5 pr-10 text-[28px] font-bold leading-tight text-[#1b3156]">
              Download Brochure
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-[#6d7480]">
              Fill in your details to download the product brochure.
            </p>

            <form className="mt-7 space-y-5" onSubmit={handleSubmit} noValidate>
              <div>
                <label className="mb-2 block text-[13px] font-bold text-[#1b3156]" htmlFor={`${titleId}-name`}>
                  Name <span className="text-[#e25555]">*</span>
                </label>
                <input
                  id={`${titleId}-name`}
                  className={`h-12 w-full rounded-xl border bg-white px-4 text-[14px] text-[#1b3156] outline-none transition placeholder:text-[#a4aab3] focus:border-[#30c8bb] focus:ring-4 focus:ring-[#30c8bb]/10 ${errors.name ? "border-[#e25555]" : "border-[#dce2e8]"}`}
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                    if (errors.name) setErrors((current) => ({ ...current, name: undefined }));
                  }}
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && <p className="mt-1.5 text-xs font-medium text-[#d64545]">{errors.name}</p>}
              </div>

              <div>
                <label className="mb-2 block text-[13px] font-bold text-[#1b3156]" htmlFor={`${titleId}-email`}>
                  Email <span className="text-[#e25555]">*</span>
                </label>
                <input
                  id={`${titleId}-email`}
                  className={`h-12 w-full rounded-xl border bg-white px-4 text-[14px] text-[#1b3156] outline-none transition placeholder:text-[#a4aab3] focus:border-[#30c8bb] focus:ring-4 focus:ring-[#30c8bb]/10 ${errors.email ? "border-[#e25555]" : "border-[#dce2e8]"}`}
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (errors.email) setErrors((current) => ({ ...current, email: undefined }));
                  }}
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && <p className="mt-1.5 text-xs font-medium text-[#d64545]">{errors.email}</p>}
              </div>

              <button
                className="flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full bg-[#30c8bb] px-6 text-[14px] font-bold text-white shadow-[0_12px_28px_rgba(48,200,187,0.28)] transition hover:-translate-y-0.5 hover:bg-[#28bcb0] focus:outline-none focus:ring-4 focus:ring-[#30c8bb]/25"
                type="submit"
              >
                Submit
                <Download size={18} aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default BrochureDownloadDialog;
