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
  return (
    <PageContainer className={`min-h-screen ${bgClass} ${textClass}`}>
      <div className="px-5 pb-14 pt-24 md:px-10 md:pb-20 md:pt-32">
        <div className="mx-auto grid max-w-[1280px] gap-9 md:grid-cols-[0.88fr_1.12fr] md:items-center xl:gap-16">
          {/* LEFT */}
          <div className="max-w-[520px] md:self-center">
            <p className="mb-3 text-[10px] tracking-[0.22em] text-neutral-500 md:mb-4 md:text-[11px] md:tracking-[0.24em]">
              {eyebrow}
            </p>

            <h1 className="text-[26px] font-medium tracking-[0.1em] text-neutral-900 md:text-[56px] md:tracking-[0.12em]">
              {title}
            </h1>

            <div className="mt-5 h-px w-9 bg-neutral-900/12 md:mt-7 md:w-10" />

            <p className="mt-5 text-[13px] leading-[2] text-neutral-700 md:mt-7 md:max-w-[500px] md:text-[15px] md:leading-[2.15]">
              {description}
            </p>

            {(subDescriptionEn || keywords.length > 0 || true) && (
              <div className="mt-7 border-t border-neutral-900/8 pt-5 md:mt-8 md:pt-6">
                {subDescriptionEn && (
                  <p className="text-[9px] leading-[1.8] tracking-[0.12em] text-neutral-500/80 md:text-[11px] md:leading-[1.9] md:tracking-[0.14em]">
                    {subDescriptionEn}
                  </p>
                )}

                {keywords.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2 md:mt-5 md:gap-x-4">
                    {keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="text-[10px] tracking-[0.16em] text-neutral-500 md:text-[11px] md:tracking-[0.18em]"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                )}

                <button
                  type="button"
                  className="mt-6 inline-flex min-w-[148px] items-center justify-center border border-neutral-900/12 px-5 py-[11px] text-[10px] tracking-[0.16em] text-neutral-900 transition-all duration-500 hover:border-neutral-900/24 hover:bg-neutral-900/[0.025] md:mt-7 md:min-w-[160px] md:px-6 md:text-[11px] md:tracking-[0.18em]"
                >
                  購入する
                </button>
              </div>
            )}
          </div>

          {/* RIGHT */}
          <div className="flex min-h-[320px] items-end justify-center overflow-hidden rounded-[2px] bg-white/35 md:min-h-[720px] md:self-end">
            <img
              src={image}
              alt={imageAlt}
              className="h-auto max-h-[52vh] w-full object-contain object-bottom md:max-h-[760px]"
            />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

export default ColorPage;