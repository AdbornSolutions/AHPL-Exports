import whatsappIcon from "../../assets/icon/watsapp.png";

const WhatsAppButton = () => (
  <a
    className="fixed bottom-5 right-5 z-[60] grid size-14 place-items-center transition duration-200 hover:-translate-y-1 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] max-[480px]:bottom-4 max-[480px]:right-4 max-[480px]:size-12"
    href="https://wa.me/918920279982"
    target="_blank"
    rel="noreferrer"
    aria-label="Chat with us on WhatsApp at +91 89202 79982"
    title="Chat with us on WhatsApp"
  >
    <img
      className="size-14 object-contain max-[480px]:size-12"
      src={whatsappIcon}
      alt=""
      aria-hidden="true"
    />
  </a>
);

export default WhatsAppButton;
