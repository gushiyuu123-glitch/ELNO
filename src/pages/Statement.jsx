import PageContainer from "../components/PageContainer";

function Statement() {
  return (
    <PageContainer className="min-h-screen bg-[#f5f5f2] px-5 pb-16 pt-24 text-elno-text md:px-10 md:pb-24 md:pt-32">
      <div className="mx-auto max-w-[980px]">
        {/* HERO */}
        <div className="text-center">
          <p className="mb-4 text-[10px] tracking-[0.24em] text-elno-text-muted md:text-[11px]">
            STATEMENT
          </p>

          <p className="mb-5 text-[10px] tracking-[0.16em] text-elno-text-muted/75 md:mb-6 md:text-[11px]">
            Quiet tones, clear presence.
          </p>

          <h1 className="mx-auto max-w-[760px] text-[24px] font-medium leading-[1.7] tracking-[0.05em] text-elno-text md:text-[40px] md:leading-[1.85] md:tracking-[0.06em]">
            派手に見せるのではなく、
            <br />
            静かに整って見えること。
          </h1>

          <div className="mx-auto mt-8 h-px w-10 bg-elno-line md:mt-10 md:w-12" />
        </div>

        {/* BODY */}
        <div className="mx-auto mt-12 max-w-[700px] md:mt-16">
          <div className="space-y-6 text-[13px] leading-[2] text-elno-text-soft md:space-y-7 md:text-[15px] md:leading-[2.2]">
            <p>
              ELNOが大切にしているのは、
              強く飾ることではなく、
              <br className="md:hidden" />
              静かな印象の中で
              <br className="md:hidden" />
              輪郭や空気感を整えることです。
            </p>

            <p>
              黒、グレー、白。
              <br />
              どれもベーシックな色ですが、
              <br className="md:hidden" />
              わずかな違いで見え方や雰囲気は
              <br className="md:hidden" />
              変わっていきます。
              <br />
              ELNOではその差を、
              <br className="md:hidden" />
              ただの色の違いではなく、
              <br className="md:hidden" />
              印象の整い方として捉えています。
            </p>
          </div>

          <div className="mt-8 border-t border-elno-line/70 pt-7 md:mt-10 md:pt-8">
            <div className="space-y-4 text-[13px] leading-[2] text-elno-text-soft md:space-y-5 md:text-[15px] md:leading-[2.2]">
              <p>
                少しモードに見えること。
                <br />
                落ち着いて見えること。
                <br />
                無理をしていないのに、
                <br />
                自然ときれいに見えること。
              </p>

              <p>
                その静かなバランスを、
                <br />
                日常の服として形にしています。
              </p>

              <p>
                主張しすぎず、
                でも埋もれない。
                <br />
                ELNOは、
                <br className="md:hidden" />
                そんな静かな存在感をつくるための
                <br className="md:hidden" />
                モノトーンウェアを提案します。
              </p>
            </div>
          </div>
        </div>

        {/* FOOT WORDS */}
        <div className="mx-auto mt-12 max-w-[720px] border-t border-elno-line pt-7 md:mt-20 md:pt-10">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[9px] tracking-[0.16em] text-elno-text-muted/85 md:gap-x-5 md:text-[11px] md:tracking-[0.18em]">
            <span>QUIET TONES</span>
            <span>SOFT BALANCE</span>
            <span>CLEAN SILHOUETTE</span>
            <span>MINIMAL AIR</span>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

export default Statement;