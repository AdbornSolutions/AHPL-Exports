import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    className="fixed bottom-5 right-5 z-[60] grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_rgba(37,211,102,0.38)] transition duration-200 hover:-translate-y-1 hover:scale-105 hover:bg-[#20bf5a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] max-[480px]:bottom-4 max-[480px]:right-4 max-[480px]:size-12"
    href="https://wa.me/918920279982"
    target="_blank"
    rel="noreferrer"
    aria-label="Chat with us on WhatsApp at +91 89202 79982"
    title="Chat with us on WhatsApp"
  >
    <MessageCircle className="size-7 max-[480px]:size-6" strokeWidth={2.4} aria-hidden="true" />
  </a>
);

export default WhatsAppButton;
