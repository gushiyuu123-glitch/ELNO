import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import HomeHeader from "../components/HomeHeader";

const blackImage = "/black1.png";
const grayImage = "/gray.png";
const whiteImage = "/white1.png";

const blackItemImage = "/black-item.png";
const grayItemImage = "/gray-item.png";
const whiteItemImage = "/white-item.png";

const blackImageSp = "/black1-sp.png";
const grayImageSp = "/gray-sp1.png";
const whiteImageSp = "/white1-sp.png";

const heroItems = [
  {
    to: "/black",
    label: "BLACK",
    subcopy: "Quiet strength",
    pcModelImage: blackImage,
    spModelImage: blackImageSp,
    pcItemImage: blackItemImage,
    modelAlt: "Black outerwear model",
    itemAlt: "Black outerwear product",
    overlayClass: "group-hover:bg-black/5",
    align: "left",
  },
  {
    to: "/gray",
    label: "GRAY",
    subcopy: "Soft balance",
    pcModelImage: grayImage,
    spModelImage: grayImageSp,
    pcItemImage: grayItemImage,
    modelAlt: "Gray outerwear model",
    itemAlt: "Gray outerwear product",
    overlayClass: "group-hover:bg-black/5",
    align: "center",
  },
  {
    to: "/white",
    label: "WHITE",
    subcopy: "Light clarity",
    pcModelImage: whiteImage,
    spModelImage: whiteImageSp,
    pcItemImage: whiteItemImage,
    modelAlt: "White outerwear product model",
    itemAlt: "White outerwear product",
    overlayClass: "group-hover:bg-black/10",
    align: "right",
  },
];

function HeroText({ label, subcopy, align }) {
  if (align === "left") {
    return (
      <>
        {/* PC */}
        <div className="absolute bottom-4 left-4 z-10 hidden md:block md:bottom-6 md:left-8 xl:bottom-7 xl:left-9">
          <p className="absolute left-0 top-0 translate-x-[-20px] translate-y-8 rotate-[-10deg] text-[36px] font-semibold tracking-[0.22em] text-black/20 opacity-0 transition-all duration-700 group-hover:translate-x-[6px] group-hover:translate-y-[6px] group-hover:opacity-100 md:text-[58px] xl:text-[64px]">
            {label}
          </p>

          <p className="relative translate-x-[-14px] translate-y-6 rotate-[-8deg] text-[36px] font-semibold tracking-[0.22em] text-black opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-[-3deg] group-hover:opacity-100 md:text-[58px] xl:text-[64px]">
            {label}
          </p>

          <p className="mt-3 translate-x-[-2px] text-[10px] tracking-[0.18em] text-neutral-700/70 opacity-0 transition-all duration-500 delay-75 group-hover:translate-x-0 group-hover:opacity-100 md:text-[11px]">
            {subcopy}
          </p>
        </div>

        {/* SP */}
        <div className="absolute bottom-5 left-4 z-10 md:hidden">
          <p className="text-[24px] font-semibold tracking-[0.18em] text-black/92">
            {label}
          </p>
          <p className="mt-1 text-[9px] tracking-[0.16em] text-neutral-700/72">
            {subcopy}
          </p>
        </div>
      </>
    );
  }

  if (align === "center") {
    return (
      <>
        {/* PC */}
        <div className="absolute bottom-4 left-1/2 z-10 hidden -translate-x-1/2 md:block md:bottom-6 xl:bottom-7">
          <p className="absolute left-1/2 top-0 -translate-x-1/2 translate-y-8 text-[36px] font-semibold tracking-[0.22em] text-gray-500/25 opacity-0 transition-all duration-700 group-hover:translate-y-[6px] group-hover:opacity-100 md:text-[58px] xl:text-[64px]">
            {label}
          </p>

          <p className="relative translate-y-6 text-[36px] font-semibold tracking-[0.22em] text-gray-500 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:text-[58px] xl:text-[64px]">
            {label}
          </p>

          <p className="mt-3 text-center text-[10px] tracking-[0.18em] text-neutral-700/70 opacity-0 transition-all duration-500 delay-75 group-hover:opacity-100 md:text-[11px]">
            {subcopy}
          </p>
        </div>

        {/* SP */}
        <div className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 text-center md:hidden">
          <p
            className="text-[24px] font-semibold tracking-[0.18em] text-gray-600"
            style={{ WebkitTextStroke: "0.20px rgba(255,255,255,0.60)" }}
          >
            {label}
          </p>
          <p
            className="mt-1 text-[9px] tracking-[0.16em] text-neutral-700/72"
            style={{ WebkitTextStroke: "0.20px rgba(255,255,255,0.72)" }}
          >
            {subcopy}
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      {/* PC */}
      <div className="absolute bottom-4 right-4 z-10 hidden md:block md:bottom-6 md:right-8 xl:bottom-7 xl:right-9">
        <p className="absolute right-0 top-0 translate-x-[20px] translate-y-8 rotate-[10deg] text-[36px] font-semibold tracking-[0.22em] text-white/25 opacity-0 transition-all duration-700 group-hover:translate-x-[6px] group-hover:translate-y-[6px] group-hover:opacity-100 md:text-[58px] xl:text-[64px]">
          {label}
        </p>

        <p className="relative translate-x-[14px] translate-y-6 rotate-[8deg] text-[36px] font-semibold tracking-[0.22em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-[3deg] group-hover:opacity-100 md:text-[58px] xl:text-[64px]">
          {label}
        </p>

        <p className="mt-3 text-right text-[10px] tracking-[0.18em] text-white/80 opacity-0 transition-all duration-500 delay-75 group-hover:opacity-100 md:text-[11px]">
          {subcopy}
        </p>
      </div>

      {/* SP */}
      <div className="absolute bottom-5 right-4 z-10 text-right md:hidden">
        <p className="text-[24px] font-semibold tracking-[0.18em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.24)]">
          {label}
        </p>
        <p className="mt-1 text-[9px] tracking-[0.16em] text-white/78">
          {subcopy}
        </p>
      </div>
    </>
  );
}

function HeroColumn({
  to,
  label,
  subcopy,
  pcModelImage,
  spModelImage,
  pcItemImage,
  modelAlt,
  itemAlt,
  overlayClass,
  align,
  isVisible,
}) {
  return (
    <Link
      to={to}
      className={[
        "group relative overflow-hidden rounded-[18px]",
        "h-[24svh] min-h-[180px] max-h-[240px]",
        "md:h-full md:min-h-[540px] md:max-h-none md:rounded-none",
        "transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
        isVisible
          ? "translate-x-0 translate-y-0 scale-100 opacity-100"
          : align === "left"
            ? "-translate-x-5 translate-y-0 scale-[0.985] opacity-0"
            : align === "right"
              ? "translate-x-5 translate-y-0 scale-[0.985] opacity-0"
              : "translate-x-0 translate-y-5 scale-[0.985] opacity-0",
      ].join(" ")}
      style={{
        transitionDelay:
          align === "left"
            ? "0ms"
            : align === "right"
              ? "120ms"
              : "240ms",
      }}
      aria-label={`${label}の商品ページを見る`}
    >
      {/* PC model */}
      <img
        src={pcModelImage}
        alt={modelAlt}
        className="absolute inset-0 hidden h-full w-full object-cover transition-all duration-500 group-hover:scale-[1.015] group-hover:opacity-0 md:block"
      />

      {/* PC item */}
      <img
        src={pcItemImage}
        alt={itemAlt}
        className="absolute inset-0 hidden h-full w-full object-cover opacity-0 transition-all duration-500 group-hover:scale-[1.02] group-hover:opacity-100 md:block"
      />

      {/* SP model */}
      <img
        src={spModelImage}
        alt={modelAlt}
        className="absolute inset-0 h-full w-full object-cover md:hidden"
      />

      {/* overlays */}
      <div
        className={`absolute inset-0 hidden bg-black/0 transition-colors duration-500 md:block ${overlayClass}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-black/0 to-white/0 md:hidden" />

      <HeroText label={label} subcopy={subcopy} align={align} />
    </Link>
  );
}

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsVisible(true);
    }, 80);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <HomeHeader />

      <section className="relative flex min-h-[100svh] flex-col overflow-hidden md:min-h-[100svh]">
        <div className="h-[92px] md:h-[92px] xl:h-[88px]" />

        {/* atmosphere */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          {/* PC */}
          <div className="hidden md:block">
            <div className="absolute inset-x-[18%] top-[14%] h-[52%] rounded-full bg-white/40 blur-[90px]" />
            <div className="absolute left-[-8%] top-[18%] h-[42%] w-[26%] rounded-full bg-white/20 blur-[100px]" />
            <div className="absolute right-[-8%] top-[18%] h-[42%] w-[26%] rounded-full bg-black/[0.018] blur-[120px]" />
            <div className="absolute inset-y-[10%] left-[10%] w-px bg-black/[0.028]" />
            <div className="absolute inset-y-[6%] left-[22%] w-px bg-black/[0.018]" />
            <div className="absolute inset-y-[8%] right-[21%] w-px bg-black/[0.018]" />
            <div className="absolute inset-y-[12%] right-[9%] w-px bg-black/[0.026]" />
            <div className="absolute left-[8%] right-[8%] top-[62%] h-px bg-black/[0.02]" />
          </div>

          {/* SP */}
          <div className="md:hidden">
            <div className="absolute inset-x-[10%] top-[8%] h-[28%] rounded-full bg-white/45 blur-[64px]" />
            <div className="absolute left-[-20%] top-[18%] h-[22%] w-[56%] rounded-full bg-white/22 blur-[70px]" />
            <div className="absolute right-[-24%] bottom-[10%] h-[24%] w-[60%] rounded-full bg-black/[0.03] blur-[88px]" />
            <div className="absolute left-[7%] right-[7%] top-[34%] h-px bg-black/[0.024]" />
            <div className="absolute left-[7%] right-[7%] bottom-[22%] h-px bg-black/[0.02]" />
          </div>
        </div>

        <section className="relative z-[1] flex flex-1 items-start justify-center px-4 pb-5 pt-2 md:items-center md:px-6 md:pb-6 xl:px-7 xl:pb-7">
          {/* SP */}
          <div className="grid w-full grid-cols-1 gap-3 md:hidden">
            {heroItems.map((item, index) => (
              <HeroColumn
                key={item.label}
                {...item}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>

          {/* PC */}
          <div className="hidden w-full max-w-[1520px] grid-cols-3 gap-3 md:grid md:h-[calc(100svh-92px-24px)] md:gap-4 xl:grid-cols-[0.97fr_1.06fr_0.97fr] xl:gap-5">
            {heroItems.map((item, index) => (
              <HeroColumn
                key={item.label}
                {...item}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </section>
      </section>
    </>
  );
}

export default Home;