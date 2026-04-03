import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/about", label: "ABOUT" },
  { to: "/price", label: "PRICE" },
  { to: "/black", label: "BLACK" },
  { to: "/gray", label: "GRAY" },
  { to: "/white", label: "WHITE" },
];

function InnerHeader() {
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) =>
    [
      "group relative transition-all duration-300",
      "after:absolute after:left-0 after:top-full after:mt-[6px] after:h-px after:w-0 after:bg-current after:transition-all after:duration-300",
      isActive
        ? "opacity-100 after:w-full"
        : "opacity-55 hover:opacity-100 hover:after:w-full",
    ].join(" ");

  const mobileNavClass = ({ isActive }) =>
    [
      "flex items-center justify-between border-b border-elno-line/40 py-4 transition-opacity duration-300",
      isActive ? "opacity-100" : "opacity-72",
    ].join(" ");

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-elno-line/50 bg-elno-bg/80 backdrop-blur-[10px]">
      {/* =========================
          PC
      ========================= */}
      <div className="hidden md:block">
        <div className="mx-auto flex max-w-[1520px] items-center justify-between px-6 pb-4 pt-5 md:px-8 md:pb-5 md:pt-6 xl:px-10 xl:pb-6 xl:pt-7">
          {/* LEFT */}
          <Link
            to="/"
            className="group inline-flex flex-col items-start text-elno-text transition-opacity duration-300 hover:opacity-75"
            aria-label="ELNO home"
          >
            <span className="text-sm font-medium tracking-[0.18em]">
              ELNO
            </span>
            <span className="mt-2 h-px w-6 bg-elno-text/16 transition-all duration-500 group-hover:w-8 group-hover:bg-elno-text/28" />
          </Link>

          {/* RIGHT */}
          <div className="flex items-center gap-8 md:gap-10 xl:gap-12">
            <nav
              className="flex items-center gap-5 text-[11px] tracking-[0.16em] text-elno-text md:gap-6 md:text-xs xl:gap-7"
              aria-label="Primary navigation"
            >
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} className={navClass}>
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <NavLink
              to="/statement"
              className={({ isActive }) =>
                [
                  "relative text-[10px] tracking-[0.2em] transition-all duration-300",
                  "after:absolute after:left-0 after:top-full after:mt-[6px] after:h-px after:w-0 after:bg-current after:transition-all after:duration-300",
                  isActive
                    ? "opacity-70 after:w-full"
                    : "opacity-35 hover:opacity-70 hover:after:w-full",
                ].join(" ")
              }
            >
              STATEMENT
            </NavLink>
          </div>
        </div>
      </div>

      {/* =========================
          SP
      ========================= */}
      <div className="block md:hidden">
        <div className="px-4 pb-3 pt-4">
          <div className="flex items-center justify-between">
            {/* LEFT */}
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="group inline-flex flex-col items-start text-elno-text transition-opacity duration-300"
              aria-label="ELNO home"
            >
              <span className="pt-[2px] text-[15px] font-medium leading-none tracking-[0.22em]">
                ELNO
              </span>
              <span className="mt-3 h-px w-7 bg-elno-text/18" />
            </Link>

            {/* RIGHT */}
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center text-elno-text"
              aria-label={open ? "メニューを閉じる" : "メニューを開く"}
              aria-expanded={open}
              aria-controls="inner-mobile-menu"
            >
              <span className="relative block h-4 w-7">
                <span
                  className={[
                    "absolute left-0 top-0 h-px w-7 bg-elno-text transition-all duration-300",
                    open ? "translate-y-[7px] rotate-45" : "",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-[7px] h-px w-7 bg-elno-text transition-all duration-300",
                    open ? "opacity-0" : "opacity-100",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-[14px] h-px w-7 bg-elno-text transition-all duration-300",
                    open ? "-translate-y-[7px] -rotate-45" : "",
                  ].join(" ")}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          id="inner-mobile-menu"
          className={[
            "overflow-hidden border-t border-elno-line/30 bg-elno-bg/92 backdrop-blur-[14px] transition-all duration-300",
            open
              ? "max-h-[420px] opacity-100"
              : "max-h-0 opacity-0 pointer-events-none",
          ].join(" ")}
        >
          <div className="px-4 pb-5 pt-2">
            <nav aria-label="Mobile primary navigation">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={mobileNavClass}
                >
                  {({ isActive }) => (
                    <>
                      <span className="text-[13px] tracking-[0.16em] text-elno-text">
                        {item.label}
                      </span>
                      <span
                        className={[
                          "h-px transition-all duration-300",
                          isActive
                            ? "w-8 bg-elno-text/40"
                            : "w-5 bg-elno-text/12",
                        ].join(" ")}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="pt-4">
              <NavLink
                to="/statement"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [
                    "inline-flex items-center gap-3 text-[11px] tracking-[0.18em] transition-opacity duration-300",
                    isActive ? "opacity-70" : "opacity-45",
                  ].join(" ")
                }
              >
                <span className="h-px w-6 bg-elno-text/14" />
                <span>STATEMENT</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default InnerHeader;