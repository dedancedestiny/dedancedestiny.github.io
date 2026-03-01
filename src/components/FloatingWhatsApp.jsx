import { FaWhatsapp } from "react-icons/fa";

function FloatingWhatsApp() {
  const phoneNumber = "919894317977";
  const message =
    "Hi DE Dance Destiny Academy, I would like to know about dance classes in Chennai.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      className="whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with DE Dance Destiny Academy on WhatsApp"
    >
      <FaWhatsapp size={28}/>
    </a>
  );
}

export default FloatingWhatsApp;