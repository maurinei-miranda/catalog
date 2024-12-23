import PageTitle from "../../components/PageTitle/PageTitleComponent";
import "./index.css";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

const whatsAppUrl = 'https://wa.me/551191921408'
const instagramUrl = 'https://www.instagram.com/gabifoxgames/'

const handleClick = (link) => {
  window.open(link, '_link', 'noopener,noreferrer')

}

function ContactPage() {
  return (
    <>
      <PageTitle valor="Página de Contatos" />
      <div id="contact-list">
        <ul>
            <li onClick={() => handleClick(whatsAppUrl)}>
              <BsWhatsapp /> WhatsApp
            </li>
            <li onClick={() => handleClick(instagramUrl)}>
              <BsInstagram /> Instagram
            </li>
        </ul>
      </div>
    </>
  );
}

export default ContactPage;
