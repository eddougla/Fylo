import { mainNavigation } from "../data/mainNavigation";

function MainNavigation() {
  return (
    <ul className="flex space-x-2">
      {mainNavigation.map((link) => (
        <li key={link.label}>
          <a href={link.href} className="hover:text-accentCyan">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
export default MainNavigation;
