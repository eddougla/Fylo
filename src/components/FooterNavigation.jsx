import { memo } from "react";
import footerNavigation from "../data/footerNavigation";

function FooterNavigation({ ariaLabel }) {
  return (
    <nav
      className="flex flex-col space-y-10 text-xl md:text-base md:space-x-20 md:space-y-0 md:flex-row"
      aria-label={ariaLabel}
    >
      {footerNavigation.map((list) => (
        <ul key={list.id} className="flex flex-col space-y-3">
          {list.columns.map((column) => (
            <li key={column.label}>
              <a href={column.href} className="hover:text-accentCyan focus:outline-none focus:ring-2 focus:ring-accentCyan focus:ring-offset-2 focus:ring-offset-darkBlue2 rounded-sm">
                {column.label}
              </a>
            </li>
          ))}
        </ul>
      ))}
    </nav>
  );
}
export default memo(FooterNavigation);
