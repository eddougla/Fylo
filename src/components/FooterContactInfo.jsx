import { memo } from "react";

function FooterContactInfo({
  phoneIcon,
  phoneNumber,
  emailIcon,
  emailAddress,
}) {
  return (
    <address className="mt-10 space-y-6 not-italic">
      <div className="flex items-center space-x-3 md:-mt-10">
        <div className="w-6">
          <img src={phoneIcon} alt="" className="scale-10" aria-hidden="true" />
        </div>
        <a href={`tel:${phoneNumber}`} className="hover:text-accentCyan">
          {phoneNumber}
        </a>
      </div>
      <div className="flex items-center space-x-3">
        <div className="w-6">
          <img src={emailIcon} alt="" className="scale-10" aria-hidden="true" />
        </div>
        <a href={`mailto:${emailAddress}`} className="hover:text-accentCyan">
          {emailAddress}
        </a>
      </div>
    </address>
  );
}
export default memo(FooterContactInfo);
