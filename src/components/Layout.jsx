import { Outlet, useLocation } from "react-router-dom";
import InnerHeader from "./InnerHeader";
import ScrollToTop from "./ScrollToTop";

function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="min-h-screen overflow-x-hidden bg-elno-bg text-elno-text">
      <ScrollToTop />
      {!isHome && <InnerHeader />}

      <main
        className={`relative w-full ${
          isHome ? "min-h-[100svh] overflow-hidden" : "min-h-screen"
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;