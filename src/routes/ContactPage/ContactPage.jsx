import { Link } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitleComponent";
import "./contact-page.css";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

const whatsAppUrl = "https://wa.me/551191921408";
const instagramUrl = "https://www.instagram.com/gabifoxgames/";

const handleClick = (link) => {
  window.open(link, "_link", "noopener,noreferrer");
};

function ContactPage() {
  return (
    <>
      <PageTitle valor="Página de Contatos" />
      <div id="contact-list">
        <Link onClick={() => handleClick(whatsAppUrl)}>
          <BsWhatsapp className="menu-icons"/> WhatsApp
        </Link>
        <Link onClick={() => handleClick(instagramUrl)}>
          <BsInstagram className="menu-icons"/> Instagram
        </Link>
      </div>
    </>
  );
}

export default ContactPage;
