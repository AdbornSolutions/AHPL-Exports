import { Check, CircleAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FormStatusToast = ({ status, successMessage, errorMessage, onDismiss }) => {
  const isSuccess = status === "success";
  const isError = status === "error";
  const navigate = useNavigate();

  if (!isSuccess && !isError) return null;

  const handleConfirmation = () => {
    onDismiss();
    if (isSuccess) navigate("/");
  };

  return (
    <div
      className="absolute inset-0 z-20 grid place-items-center p-4 text-center"
      role={isError ? "alert" : "status"}
      aria-live={isError ? "assertive" : "polite"}
    >
      <div className="w-full max-w-[300px] rounded-[18px] border border-[#dce7ea] bg-white px-6 py-7 shadow-[0_20px_55px_rgba(15,42,82,0.22)]">
        <span
          className={`mx-auto grid size-[60px] place-items-center rounded-full ${
            isSuccess ? "bg-[#30c8bb] text-white" : "bg-red-100 text-red-600"
          }`}
        >
          {isSuccess ? <Check size={32} strokeWidth={3} aria-hidden="true" /> : <CircleAlert size={30} aria-hidden="true" />}
        </span>

        <p className={`mt-4 text-[21px] font-bold leading-tight ${isSuccess ? "text-[#183255]" : "text-red-800"}`}>
          {isSuccess ? "Thank you for reaching out!" : "Submission failed"}
        </p>
        <p className="mt-2 text-[14px] leading-5 text-[#647184]">
          {isSuccess ? successMessage : errorMessage}
        </p>

        <button
          className={`mt-5 min-h-10 min-w-[105px] rounded-full px-6 text-[14px] font-semibold text-white transition hover:-translate-y-0.5 ${
            isSuccess ? "bg-[#30c8bb] hover:bg-[#28b9ad]" : "bg-red-600 hover:bg-red-700"
          }`}
          type="button"
          onClick={handleConfirmation}
        >
          {isSuccess ? "Okay" : "Close"}
        </button>
      </div>
    </div>
  );
};

export default FormStatusToast;
