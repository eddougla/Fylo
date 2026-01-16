import { mainNavigation } from "../data/mainNavigation";

function MainNavigation() {
  return (
    <ul className="flex space-x-2">
      {mainNavigation.map((link) => (
        <li key={link.label}>
          <a href={link.href} className="hover:text-accentCyan focus:outline-none focus:ring-2 focus:ring-accentCyan focus:ring-offset-2 rounded-sm">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
export default MainNavigation;
