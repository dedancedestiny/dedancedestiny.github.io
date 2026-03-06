import { FaWhatsapp } from "react-icons/fa";
import "./FloatingWhatsApp.css";

function FloatingWhatsApp() {
  const phoneNumber = "919894317977";

  const message =
    "Hi DE Dance Destiny Academy, I would like to know about dance classes in Chennai.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="whatsapp-container">

      <span className="whatsapp-tooltip">
        Chat with us
      </span>

      <a
        href={whatsappLink}
        className="whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with DE Dance Destiny Academy on WhatsApp"
      >
        <FaWhatsapp className="whatsapp-icon" />
      </a>

    </div>
  );
}

export default FloatingWhatsApp;