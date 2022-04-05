import { InstagramSvg } from "components/svg/inst";
import { WhatsAppSvg } from "components/svg/whatsapp";
import "./index.scss";
export const FooterComponent = () => {
  return (
    <div className="footer">
      <div className="left-side">
        <h1>Помощь и поддержка</h1>
        <p>Цена доставки</p>
        <p>Возврат товара</p>
        <p>Как отследить товар</p>
      </div>
      <div className="right-side">
        <h1>Связаться с нами</h1>
        <div className="contact-svgs">
          <InstagramSvg />
          <WhatsAppSvg />
        </div>

        <p>Подпишитесь на новости</p>
        <div className="subscribe-input">
          <input placeholder="Введите почту" type="text" />
          <button>ok</button>
        </div>
      </div>
    </div>
  );
};
