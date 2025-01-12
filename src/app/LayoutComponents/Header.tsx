import { Button } from "../components";
import { classNames } from "../utils";

const Header = () => {
  return (
    <header
      className={classNames(
        "flex w-full p-4 px-8 gap-4 items-center",
        "bg-black text-green-100",
        "shadow-xl border-b-2 border-green-600 rounded-b-xl",
      )}
    >
      <h1 className="text-bold text-[40px] mr-auto border-green-600 border-x px-4 rounded-lg">
        Convertio
      </h1>
      <Button>Home</Button>
      <Button>Conversores</Button>
    </header>
  );
};
export default Header;
