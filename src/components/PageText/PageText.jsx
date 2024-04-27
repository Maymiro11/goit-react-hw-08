import css from "./PageText.module.css";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export default function PageText() {
  return (
    <div className={css.wrapper}>
       
      <div>
        <b>This site was created by Maiia Myronenko </b>
        <p>My social media:</p>
        <ul className={css.list}>
          <li>
            <a className={css.link} href="https://github.com/Maymiro11">
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              className={css.link}
              href="https://www.linkedin.com/in/maja-myronenko"
            >
              <CiLinkedin />
            </a>
          </li>
          <li>
            <a className={css.link} href="https://t.me/Maja_Myronenko">
              <FaTelegram />
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  );
}