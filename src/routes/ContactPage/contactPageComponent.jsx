import PageTitle from "../../components/PageTitle/PageTitleComponent";
import "./index.css";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

function ContactPage() {
  return (
    <>
      <PageTitle valor="Página de Contatos" />
      <div id="contact-list">
        <ul>
          <a href="https://wa.me/5511919214083">
            <li>
              <BsWhatsapp /> WhatsApp
            </li>
          </a>
          <a href="https://www.instagram.com/gabifoxgames/">
            <li>
              <BsInstagram /> Instagram
            </li>
          </a>
        </ul>
      </div>
    </>
  );
}

export default ContactPage;
