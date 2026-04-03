import PageContainer from "../components/PageContainer";

function ColorPage({
  eyebrow,
  title,
  description,
  subDescriptionEn,
  keywords = [],
  image,
  imageAlt,
  bgClass = "bg-white",
  textClass = "text-neutral-900",
}) {
  const hasMeta = Boolean(subDescriptionEn) || keywords.length > 0;

  return (
    <PageContainer className={`min-h-screen ${bgClass} ${textClass}`}>
      <div className="px-5 pb-14 pt-24 md:px-10 md:pb-20 md:pt-32">
        <div className="mx-auto grid max-w-[1280px] gap-10 md:grid-cols-[0.84fr_1.16fr] md:items-center xl:gap-16">
          {/* LEFT */}
          <div className="max-w-[520px] md:self-center">
            <p className="mb-3 text-[10px] tracking-[0.24em] text-neutral-500 md:mb-4 md:text-[11px]">
              {eyebrow}
            </p>

            <h1 className="text-[25px] font-medium leading-[1.28] tracking-[0.11em] text-neutral-900 md:text-[56px] md:leading-[1.18] md:tracking-[0.12em]">
              {title}
            </h1>

            <div className="mt-5 h-px w-8 bg-neutral-900/12 md:mt-7 md:w-10" />

            <p className="mt-5 max-w-[500px] text-[13px] leading-[2.02] text-neutral-700 md:mt-7 md:text-[15px] md:leading-[2.08]">
              {description}
            </p>

            <div className="mt-8 md:mt-9">
              {hasMeta && (
                <div className="border-t border-neutral-900/[0.08] pt-5 md:pt-6">
                  {subDescriptionEn && (
                    <p className="max-w-[460px] text-[9px] leading-[1.9] tracking-[0.14em] text-neutral-500/78 md:text-[11px] md:leading-[1.95]">
                      {subDescriptionEn}
                    </p>
                  )}

                  {keywords.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-x-3 gap-y-[6px] md:mt-5 md:gap-x-4 md:gap-y-2">
                      {keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="text-[10px] tracking-[0.18em] text-neutral-500/88 md:text-[11px]"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <div className={`${hasMeta ? "mt-6 md:mt-7" : "mt-1"}`}>
                <button
                  type="button"
                  className="
                    group inline-flex items-center gap-3
                    text-[10px] tracking-[0.18em] text-neutral-900
                    transition-all duration-500
                    md:text-[11px]
                  "
                >
                  <span className="h-px w-7 bg-neutral-900/22 transition-all duration-500 group-hover:w-9 group-hover:bg-neutral-900/36" />
                  <span>購入する</span>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex min-h-[320px] items-end justify-center overflow-hidden rounded-[2px] bg-neutral-100/55 md:min-h-[720px] md:self-end">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/55" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-black/[0.03]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-black/[0.03]" />
            <div className="pointer-events-none absolute inset-x-[10%] bottom-[12%] h-px bg-black/[0.035] md:bottom-[10%]" />

            <div className="pointer-events-none absolute left-[-12%] top-[10%] h-[120px] w-[120px] rounded-full bg-white/45 blur-[44px] md:h-[180px] md:w-[180px] md:blur-[60px]" />
            <div className="pointer-events-none absolute right-[-10%] bottom-[4%] h-[140px] w-[140px] rounded-full bg-black/[0.035] blur-[56px] md:h-[220px] md:w-[220px] md:blur-[80px]" />

            <img
              src={image}
              alt={imageAlt}
              className="relative z-[1] h-auto max-h-[52vh] w-full object-contain object-bottom md:max-h-[760px]"
            />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

export default ColorPage;