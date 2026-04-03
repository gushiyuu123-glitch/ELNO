import PageContainer from "../components/PageContainer";

function About() {
  return (
    <PageContainer className="min-h-screen px-5 pb-16 pt-24 md:px-10 md:pb-24 md:pt-32">
      <div className="elno-container">
        <div className="max-w-[780px]">
          <p className="mb-3 text-[10px] tracking-section text-elno-text-muted md:text-[11px]">
            ABOUT
          </p>

          <p className="mb-4 text-[10px] tracking-[0.14em] text-elno-text-muted md:text-[11px]">
            Quiet monochrome for everyday balance.
          </p>

          <h1 className="max-w-[760px] text-[26px] font-medium leading-[1.55] tracking-[0.04em] text-elno-text md:text-[46px]">
            静かな色で、
            <br className="md:hidden" />
            日常を整える。
          </h1>

          <p className="mt-4 text-[9px] tracking-[0.2em] text-elno-text-muted/80 md:text-[11px]">
            QUIET TONES FOR EVERYDAY BALANCE
          </p>
        </div>

        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-[minmax(0,680px)_1fr] md:gap-16">
          <div className="space-y-4 text-[13px] leading-[2] text-elno-text-soft md:space-y-5 md:text-[15px] md:leading-[2.1]">
            <p>
              ELNOは、
              派手さではなく整い方で印象をつくる、
              <br className="md:hidden" />
              ユニセックスのモノトーンウェアを提案するブランドです。
            </p>

            <p>
              黒、グレー、白。
              <br />
              どれもベーシックな色ですが、
              <br className="md:hidden" />
              見え方や空気感は少しずつ違います。
              <br />
              ELNOではその違いを、
              ただの色ではなく、
              <br className="md:hidden" />
              気分や雰囲気の差として捉えています。
            </p>

            <p>
              輪郭をきれいに見せること。
              <br />
              落ち着いて見えること。
              <br />
              無理に飾らなくても、
              自然と整って見えること。
              <br />
              その静かなバランスを大切にしています。
            </p>

            <p>
              韓国っぽさのある
              ミニマルな空気感をベースにしながら、
              <br />
              性別にとらわれず、
              <br className="md:hidden" />
              日常の中で着やすい一着に仕上げています。
            </p>
          </div>

          <div className="border-t border-elno-line pt-5 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <div className="space-y-6">
              <div>
                <p className="mb-2 text-[10px] tracking-[0.18em] text-elno-text-muted">
                  KEYWORDS
                </p>

                <ul className="space-y-2 text-[12px] leading-[1.85] text-elno-text-soft md:text-[14px] md:leading-[1.9]">
                  <li>Monotone</li>
                  <li>Minimal</li>
                  <li>Unisex</li>
                  <li>Quiet balance</li>
                </ul>
              </div>

              <div>
                <p className="mb-2 text-[10px] tracking-[0.18em] text-elno-text-muted">
                  DIRECTION
                </p>

                <p className="max-w-[220px] text-[12px] leading-[1.85] text-elno-text-soft md:text-[14px] md:leading-[1.9]">
                  派手さではなく、
                  <br />
                  整って見える印象を
                  <br className="md:hidden" />
                  静かにつくる。
                </p>
              </div>

              <div>
                <p className="mb-2 text-[10px] tracking-[0.18em] text-elno-text-muted">
                  NOTE
                </p>

                <p className="max-w-[220px] text-[10px] leading-[1.8] tracking-[0.14em] text-elno-text-muted/80 md:text-[11px] md:leading-[1.9] md:tracking-[0.16em]">
                  Less noise,
                  <br className="md:hidden" />
                  better balance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

export default About;