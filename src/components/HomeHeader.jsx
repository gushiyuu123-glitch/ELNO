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
      "group flex items-center justify-between border-b border-black/[0.075] py-[14px] transition-all duration-300",
      isActive ? "opacity-100" : "opacity-80 hover:opacity-100",
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
              className="pointer-events-auto inline-flex translate-y-[1px] flex-col items-start text-elno-text"
              aria-label="ELNO home"
            >
              <span className="pt-[3px] text-[14px] font-medium leading-none tracking-[0.24em]">
                ELNO
              </span>
              <span className="mt-[10px] h-px w-6 bg-elno-text/20" />
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
              <span className="relative block h-[14px] w-6">
                <span
                  className={[
                    "absolute left-0 top-0 h-px w-6 bg-elno-text transition-all duration-300",
                    open ? "translate-y-[6px] rotate-45" : "",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-[6px] h-px w-6 bg-elno-text transition-all duration-300",
                    open ? "opacity-0" : "opacity-100",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-[12px] h-px w-6 bg-elno-text transition-all duration-300",
                    open ? "-translate-y-[6px] -rotate-45" : "",
                  ].join(" ")}
                />
              </span>
            </button>
          </div>
        </div>

        {/* veil */}
        <div
          className={[
            "absolute inset-0 bg-black/[0.14] transition-opacity duration-300",
            open
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0",
          ].join(" ")}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />

        {/* panel */}
        <div
          id="home-mobile-menu"
          className={[
            "absolute left-5 right-5 top-[72px] overflow-hidden",
            "border border-black/[0.10] bg-[rgba(243,243,239,0.975)]",
            "shadow-[0_18px_42px_rgba(0,0,0,0.055)]",
            "transition-all duration-300",
            open
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-[8px] opacity-0",
          ].join(" ")}
        >
          {/* fine lines */}
          <div className="absolute inset-x-0 top-0 h-px bg-white/58" />
          <div className="absolute inset-y-0 left-0 w-px bg-black/[0.035]" />
          <div className="absolute inset-y-0 right-0 w-px bg-black/[0.035]" />
          <div className="absolute inset-x-[7%] top-[52px] h-px bg-black/[0.045]" />

          {/* quiet atmosphere */}
          <div className="pointer-events-none absolute -left-[18%] top-[10%] h-[92px] w-[92px] rounded-full bg-white/[0.24] blur-[30px]" />
          <div className="pointer-events-none absolute right-[-20%] bottom-[8%] h-[110px] w-[110px] rounded-full bg-black/[0.03] blur-[44px]" />

          <div className="px-5 pb-5 pt-4">
            <div className="mb-3 flex items-center justify-end">
              <span className="h-px w-7 bg-black/[0.10]" />
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
                      <span
                        className={[
                          "text-[9px] tracking-[0.2em] transition-all duration-300",
                          isActive ? "text-elno-text/42" : "text-elno-text/26",
                        ].join(" ")}
                      >
                        {item.no}
                      </span>

                      <span className="flex items-center gap-[10px]">
                        <span
                          className={[
                            "h-px transition-all duration-300",
                            isActive
                              ? "w-5 bg-black/24"
                              : "w-0 bg-black/0 group-hover:w-4 group-hover:bg-black/16",
                          ].join(" ")}
                        />
                        <span
                          className={[
                            "text-[12px] tracking-[0.20em] transition-all duration-300",
                            isActive
                              ? "text-elno-text"
                              : "text-elno-text/78 group-hover:text-elno-text/92",
                          ].join(" ")}
                        >
                          {item.label}
                        </span>
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
                className="inline-flex items-center gap-3 text-[10px] tracking-[0.22em] text-elno-text/48 transition-all duration-300 hover:text-elno-text/72"
              >
                <span className="h-px w-5 bg-black/[0.12]" />
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