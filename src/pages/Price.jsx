import { Link } from "react-router-dom";
import PageContainer from "../components/PageContainer";

const blackItemImage = "/black-item.png";
const grayItemImage = "/gray-item.png";
const whiteItemImage = "/white-item.png";

const priceItems = [
  {
    to: "/black",
    label: "BLACK",
    image: blackItemImage,
    alt: "Black outerwear product",
    note: "Quiet strength",
  },
  {
    to: "/gray",
    label: "GRAY",
    image: grayItemImage,
    alt: "Gray outerwear product",
    note: "Soft balance",
  },
  {
    to: "/white",
    label: "WHITE",
    image: whiteItemImage,
    alt: "White outerwear product",
    note: "Light clarity",
  },
];

function PriceCard({ to, label, image, alt, note }) {
  return (
    <Link
      to={to}
      className="group block"
      aria-label={`${label}の商品ページを見る`}
    >
      <div className="overflow-hidden bg-elno-surface/70">
        <img
          src={image}
          alt={alt}
          className="h-[260px] w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.018] md:h-[360px] xl:h-[400px]"
        />
      </div>

      <div className="mt-4 border-b border-elno-line pb-3">
        <div className="flex items-center justify-between">
          <p className="text-[12px] tracking-[0.16em] text-elno-text md:text-[13px]">
            {label}
          </p>
          <span className="text-[10px] tracking-[0.14em] text-elno-text-muted transition-opacity duration-300 group-hover:opacity-100 md:text-[11px] md:opacity-60">
            EXPLORE
          </span>
        </div>

        <p className="mt-2 text-[10px] tracking-[0.16em] text-elno-text-muted/80 md:text-[11px]">
          {note}
        </p>
      </div>
    </Link>
  );
}

function Price() {
  return (
    <PageContainer className="min-h-screen px-5 pb-16 pt-24 md:px-10 md:pb-24 md:pt-32">
      <div className="elno-container">
        {/* HERO */}
        <div className="max-w-[860px]">
          <p className="mb-3 text-[10px] tracking-section text-elno-text-muted md:text-[11px]">
            PRICE
          </p>

          <p className="mb-5 text-[10px] tracking-[0.14em] text-elno-text-muted md:text-[11px]">
            Simple pricing for everyday monochrome.
          </p>

          <h1 className="max-w-[860px] text-[26px] font-medium leading-[1.5] tracking-[0.04em] text-elno-text md:text-[46px] md:whitespace-nowrap">
            日常に取り入れやすく、
            <br className="md:hidden" />
            静かに整う一着。
          </h1>
        </div>

        {/* PRICE BLOCK */}
        <div className="mt-10 border-y border-elno-line py-7 md:mt-14 md:py-10">
          <div className="grid gap-7 md:grid-cols-[minmax(0,1fr)_280px] md:items-end xl:grid-cols-[minmax(0,1fr)_320px]">
            <div>
              <p className="mb-2 text-[10px] tracking-[0.18em] text-elno-text-muted md:text-[11px]">
                PRICE
              </p>

              <h2 className="text-[34px] font-medium tracking-[0.03em] text-elno-text md:text-[62px]">
                ¥4,980
              </h2>

              <p className="mt-2 text-[9px] tracking-[0.2em] text-elno-text-muted/80 md:text-[11px]">
                SIMPLE PRICING FOR QUIET EVERYDAY WEAR
              </p>

              <p className="mt-4 max-w-[560px] text-[13px] leading-[2] text-elno-text-soft md:mt-5 md:text-[15px] md:leading-[2.05]">
                毎日のスタイリングに取り入れやすい価格でありながら、
                <br className="hidden md:block" />
                静かな印象と整った空気感を大切にした一着に仕上げています。
              </p>
            </div>

            <div className="border-t border-elno-line pt-4 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <p className="text-[10px] tracking-[0.18em] text-elno-text-muted md:text-[11px]">
                INFO
              </p>

              <ul className="mt-3 space-y-2 text-[13px] leading-[1.85] text-elno-text-soft md:text-[14px] md:leading-[1.9]">
                <li>税込価格</li>
                <li>ユニセックス</li>
                <li>3カラー展開</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ITEMS */}
        <div className="mt-10 md:mt-14">
          <div className="mb-5 flex items-end justify-between gap-6 md:mb-6">
            <div>
              <p className="mb-2 text-[10px] tracking-[0.18em] text-elno-text-muted md:text-[11px]">
                ITEMS
              </p>
              <h3 className="text-[20px] font-medium leading-[1.5] tracking-[0.04em] text-elno-text md:text-[28px]">
                カラーごとの商品を見る
              </h3>
            </div>

            <p className="hidden text-[12px] tracking-[0.14em] text-elno-text-muted md:block">
              BLACK / GRAY / WHITE
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3 md:gap-5 xl:gap-6">
            {priceItems.map((item) => (
              <PriceCard key={item.label} {...item} />
            ))}
          </div>
        </div>

        {/* FOOT NOTE */}
        <div className="mt-12 grid gap-8 border-t border-elno-line pt-8 md:mt-16 md:grid-cols-[minmax(0,680px)_1fr] md:gap-16 md:pt-12">
          <div className="space-y-4 text-[13px] leading-[2] text-elno-text-soft md:space-y-5 md:text-[15px] md:leading-[2.1]">
            <p>
              特別すぎない。
              <br />
              でも少し整って見える。
            </p>

            <p>
              ELNOでは、そのちょうどよさを
              <br className="hidden md:block" />
              価格設計にも静かに反映しています。
            </p>
          </div>

          <div className="border-t border-elno-line pt-5 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <div className="space-y-6">
              <div>
                <p className="mb-2 text-[10px] tracking-[0.18em] text-elno-text-muted">
                  INFO
                </p>

                <ul className="space-y-2 text-[12px] leading-[1.85] text-elno-text-soft md:text-[14px] md:leading-[1.9]">
                  <li>税込価格</li>
                  <li>ユニセックス対応</li>
                  <li>BLACK / GRAY / WHITE</li>
                </ul>
              </div>

              <div>
                <p className="mb-2 text-[10px] tracking-[0.18em] text-elno-text-muted">
                  NOTE
                </p>

                <p className="max-w-[240px] text-[12px] leading-[1.85] text-elno-text-soft md:text-[14px] md:leading-[1.9]">
                  Everyday ease,
                  <br />
                  quiet presence,
                  <br />
                  balanced pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

export default Price;