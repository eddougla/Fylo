import { memo } from "react";

function TestimonialCard({ quote, avatar, name, title }) {
  return (
    <article className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 md:w-1/3">
      <blockquote className="text-sm leading-5 md:text-lg">
        <p>{quote}</p>
      </blockquote>
      <footer className="flex space-x-4">
        <img src={avatar} alt={name} className="w-10 h-10 rounded-full" />
        <div>
          <cite className="text-sm font-semibold not-italic">{name}</cite>
          <p className="text-xs font-extralight">{title}</p>
        </div>
      </footer>
    </article>
  );
}
export default memo(TestimonialCard);
