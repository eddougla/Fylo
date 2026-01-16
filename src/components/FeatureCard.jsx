import { memo } from "react";

function FeatureCard({ icon, iconAlt, title, description }) {
  return (
    <article className="flex flex-col items-center space-y-2 md:w-1/2">
      <div className="flex items-center justify-center h-24 mb-6">
        <img src={icon} alt={iconAlt} />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="max-w-md">{description}</p>
    </article>
  );
}
export default memo(FeatureCard);
