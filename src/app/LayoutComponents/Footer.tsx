import { FaGithub, FaLinkedin } from "react-icons/fa";
import { classNames } from "../utils";

const Footer = () => {
  return (
    <footer
      className={classNames(
        "border-green-600 text-green-100",
        "border-t-2 p-4 h-24 mt-auto rounded-t-xl flex",
      )}
    >
      <div className="ml-auto grid gap-2 place-items-end">
        <a
          className="flex items-center gap-2 hover:underline cursor-pointer"
          href="https://github.com"
          target="_blank"
        >
          Github
          <FaGithub className="size-5" />
        </a>
        <a
          className="flex items-center gap-2 hover:underline cursor-pointer"
          href="https://github.com"
          target="_blank"
        >
          Linkedin
          <FaLinkedin className="size-4" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
