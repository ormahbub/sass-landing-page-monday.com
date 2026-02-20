import { RiArrowDownSLine } from "react-icons/ri";

const NavLink = ({ text, url, dropdown }) => {
  return (
    <a className="flex items-center gap-2 text-[var(--text-color)]" href={url}>
      {text}
      {dropdown ? (
        <span>
          <RiArrowDownSLine />
        </span>
      ) : (
        ""
      )}
    </a>
  );
};

export default NavLink;
