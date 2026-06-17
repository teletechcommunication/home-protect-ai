import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="container-wide py-4 flex items-center gap-2 text-[10px] font-mono-label uppercase tracking-widest text-muted-foreground">
      <Link to="/" className="hover:text-foreground transition-colors flex items-center gap-1">
        <Home className="w-3 h-3" />
        <span>Home</span>
      </Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return (
          <div key={to} className="flex items-center gap-2">
            <ChevronRight className="w-3 h-3 opacity-30" />
            {last ? (
              <span className="text-foreground font-semibold">{value.replace(/-/g, " ")}</span>
            ) : (
              <Link to={to} className="hover:text-foreground transition-colors">
                {value.replace(/-/g, " ")}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};
