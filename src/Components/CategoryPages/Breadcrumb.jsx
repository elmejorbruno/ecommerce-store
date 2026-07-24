import { Link } from "react-router-dom";

export default function Breadcrumb({ items = [] }) {
  return (
    <nav
      className="w-full py-4 px-6 md:px-20 text-sm"
      style={{ backgroundColor: "var(--color-fondo-beige)" }}
      aria-label="breadcrumb"
    >
      <ol className="flex flex-wrap items-center gap-2 text-[#090425] opacity-80">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center">
              {!isLast ? (
                <Link
                  to={item.href || "/"}
                  className="hover:opacity-60 transition-opacity"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-semibold">{item.label}</span>
              )}

              {!isLast && (
                <span className="mx-2 text-[#090425] opacity-50">/</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
