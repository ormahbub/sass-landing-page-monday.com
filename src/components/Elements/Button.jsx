import { GoArrowRight } from "react-icons/go";

const Button = ({ text, url, style, icon }) => {
  const bgColor = () => {
    if (style === "btn-outline") {
      return "bg-transparent";
    } else if (style === "btn-solid") {
      return "bg-[var(--primary-color)]";
    }
  };

  const linkClasses = `btn border border-[var(--primary-color)] text-[var(--primary-color)] py-2 px-4 rounded-4xl ${bgColor()}`;

  return (
    <>
      <a className={linkClasses} href={url}>
        {text}
        {icon ? (
          <span>
            <GoArrowRight />
          </span>
        ) : (
          ""
        )}
      </a>
    </>
  );
};

export default Button;
