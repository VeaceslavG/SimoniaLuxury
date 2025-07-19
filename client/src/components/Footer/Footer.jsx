import "./footer.scss";
import logo from "../../assets/footer/logo.png";

export default function Footer() {
  const facebookAcc = "https://www.facebook.com/simonia.luxury";
  const instagramAcc = "https://www.instagram.com/simonia_luxury/";
  const tiktokAcc =
    "https://www.tiktok.com/@simonialuxury?is_from_webapp=1&sender_device=pc";

  return (
    <div className="footerBG">
      <footer className="footerContainer">
        <div className="footer__top">
          <div className="footer__logo">
            <img src={logo} alt="Simonia Luxury Logo" />
          </div>

          <div className="footer__menu">
            <a href="#">Beneficii</a>
            <a href="#">Mobilier</a>
            <a href="#">Despre noi</a>
            <a href="#">Contacte</a>
          </div>

          <div className="footer__social">
            <a href={instagramAcc} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={facebookAcc} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href={tiktokAcc} target="_blank" rel="noopener noreferrer">
              TikTok
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__developer">
            <a
              href="https://github.com/VeaceslavG"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#DCD7C9"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .9.1-.6.3-1.1.6-1.4-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.1-3.2-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3.2 1.1.9-.2 1.8-.3 2.7-.3.9 0 1.8.1 2.7.3 2.3-1.4 3.2-1.1 3.2-1.1.6 1.6.2 2.8.1 3.1.7.9 1.1 1.9 1.1 3.2 0 4.5-2.7 5.5-5.3 5.8.3.3.6.8.6 1.6v2.4c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
              </svg>
              <span>Realizat de Veaceslav Gorbuleac</span>
            </a>
          </div>

          <p className="footer__copy">
            &copy; {new Date().getFullYear()} Simonia Luxury. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
