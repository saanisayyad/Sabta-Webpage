import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/971555826436"  // ← your WhatsApp number here
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed 
        bottom-6 
        right-6 
        bg-green-500 
        hover:bg-green-600 
        text-black 
        p-4 
        rounded-full 
        shadow-lg 
        z-50 
        transition 
        duration-300 
        flex 
        items-center 
        justify-center
      "
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;
