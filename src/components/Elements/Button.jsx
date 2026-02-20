import { HiOutlineArrowRight } from "react-icons/hi";

const Button = ({ text, url, style, icon }) => {
  const bgColor = () => {
    if (style === "btn-outline") {
      return "bg-transparent text-[var(--primary-color)]";
    } else if (style === "btn-solid") {
      return "bg-[var(--primary-color)] text-white";
    }
  };

  const linkClasses = `btn border border-[var(--primary-color)] py-2 px-4 rounded-4xl ${bgColor()} flex items-center gap-2`;

  return (
    <>
      <a className={linkClasses} href={url}>
        {text}
        {icon ? (
          <span>
            <HiOutlineArrowRight />
          </span>
        ) : (
          ""
        )}
      </a>
    </>
  );
};

export default Button;
