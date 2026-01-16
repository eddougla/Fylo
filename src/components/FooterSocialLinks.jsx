import footerSocialLinks from "../data/footerSocialLinks";

function FooterSocialLinks({ ariaLabel }) {
  return (
    <nav aria-label={ariaLabel}>
      <ul className="flex justify-center pb-10 space-x-3">
        {footerSocialLinks.map((link) => (
          <li key={link.platform}>
            <a href={link.url} aria-label={link.platform}>
              <img
                src={link.icon}
                alt={link.platform}
                className="p-2 bg-darkBlue rounded-full ficon"
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default FooterSocialLinks;
