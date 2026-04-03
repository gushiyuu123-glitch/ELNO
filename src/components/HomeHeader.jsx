import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/about", label: "ABOUT", no: "01" },
  { to: "/price", label: "PRICE", no: "02" },
  { to: "/black", label: "BLACK", no: "03" },
  { to: "/gray", label: "GRAY", no: "04" },
  { to: "/white", label: "WHITE", no: "05" },
];

function HomeHeader() {
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) =>
    [
      "group relative inline-flex items-center gap-3 transition-all duration-500",
      isActive ? "opacity-100" : "opacity-38 hover:opacity-100",
    ].join(" ");

  const mobileNavClass = ({ isActive }) =>
    [
      "flex items-center justify-between border-b border-black/6 py-4 transition-opacity duration-300",
      isActive ? "opacity-100" : "opacity-72",
    ].join(" ");

  return (
    <header className="pointer-events-none fixed inset-0 z-50">
      {/* =========================
          PC
      ========================= */}
      <div className="hidden md:block">
        {/* LEFT BRAND */}
        <div className="absolute left-6 top-10 pointer-events-auto md:left-8 md:top-12 xl:left-16 xl:top-16">
          <Link
            to="/"
            className="group inline-flex flex-col items-start text-elno-text"
            aria-label="ELNO home"
          >
            <span className="flex flex-col text-[18px] font-medium leading-[0.98] tracking-[0.18em] md:text-[19px] xl:text-[20px]">
              <span className="animate-elno-letter-left transition-transform duration-500 group-hover:translate-x-[1px]">
                E
              </span>
              <span className="animate-elno-letter-right transition-transform duration-500 group-hover:-translate-x-[1px]">
                L
              </span>
              <span className="animate-elno-letter-left-2 transition-transform duration-500 group-hover:translate-x-[1px]">
                N
              </span>
              <span className="animate-elno-letter-right-2 transition-transform duration-500 group-hover:-translate-x-[1px]">
                O
              </span>
            </span>

            <span className="mt-4 h-px w-7 bg-elno-text/16 transition-all duration-500 group-hover:w-9 group-hover:bg-elno-text/28 animate-elno-brand-line" />
          </Link>
        </div>

        {/* RIGHT NAV */}
        <nav
          className="absolute right-6 top-16 pointer-events-auto flex flex-col items-end animate-elno-nav-in md:right-8 md:top-20 xl:right-10 xl:top-24"
          aria-label="Primary navigation"
        >
          <div className="flex flex-col items-end gap-[18px] text-[11px] tracking-[0.18em] text-elno-text md:text-[11.5px] xl:text-xs">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navClass}>
                {({ isActive }) => (
                  <>
                    <span
                      className={[
                        "text-[9px] tracking-[0.22em] transition-all duration-500",
                        isActive
                          ? "opacity-45"
                          : "opacity-0 group-hover:opacity-28",
                      ].join(" ")}
                    >
                      {item.no}
                    </span>

                    <span className="relative">
                      {item.label}
                      <span
                        className={[
                          "absolute -bottom-[6px] left-0 h-px bg-elno-text transition-all duration-500",
                          isActive
                            ? "w-full opacity-22"
                            : "w-0 opacity-0 group-hover:w-full group-hover:opacity-14",
                        ].join(" ")}
                      />
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* SUB BLOCK */}
          <div className="mt-9 flex flex-col items-end pt-6 animate-elno-subnav-in">
            <span className="mb-5 h-px w-8 bg-elno-text/10" />

            <NavLink
              to="/statement"
              className="text-[10px] tracking-[0.2em] text-elno-text/45 transition-all duration-500 hover:text-elno-text/75"
            >
              STATEMENT
            </NavLink>
          </div>
        </nav>
      </div>

      {/* =========================
          SP
      ========================= */}
      <div className="block md:hidden">
        {/* top bar */}
        <div className="pointer-events-none absolute left-0 top-0 w-full px-5 pt-4">
          <div className="flex items-start justify-between">
            {/* brand */}
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="pointer-events-auto group inline-flex translate-y-[1px] flex-col items-start text-elno-text"
              aria-label="ELNO home"
            >
              <span className="pt-[3px] text-[15px] font-medium leading-none tracking-[0.22em]">
                ELNO
              </span>
              <span className="mt-3 h-px w-7 bg-elno-text/18" />
            </Link>

            {/* menu button */}
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="pointer-events-auto flex min-h-[44px] min-w-[44px] items-center justify-center text-elno-text"
              aria-label={open ? "メニューを閉じる" : "メニューを開く"}
              aria-expanded={open}
              aria-controls="home-mobile-menu"
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

        {/* panel */}
        <div
          id="home-mobile-menu"
          className={[
            "absolute left-4 right-4 top-[78px] overflow-hidden rounded-[22px] border border-black/8 bg-[rgba(245,245,242,0.88)] shadow-[0_18px_60px_rgba(0,0,0,0.08)] backdrop-blur-[14px] transition-all duration-400",
            open
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0",
          ].join(" ")}
        >
          <div className="px-5 pb-5 pt-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[10px] tracking-[0.2em] text-elno-text/40">
                MENU
              </span>
              <span className="h-px w-8 bg-black/10" />
            </div>

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
                      <span className="text-[10px] tracking-[0.18em] text-elno-text/38">
                        {item.no}
                      </span>
                      <span className="text-[13px] tracking-[0.16em] text-elno-text">
                        {item.label}
                      </span>
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="pt-4">
              <NavLink
                to="/statement"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-3 text-[11px] tracking-[0.18em] text-elno-text/58 transition-opacity duration-300"
              >
                <span className="h-px w-6 bg-black/12" />
                <span>STATEMENT</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;