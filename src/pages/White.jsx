import ColorPage from "./ColorPage";
import whiteImage from "../assets/white2.png";

function White() {
  return (
    <ColorPage
      eyebrow="ELNO / WHITE"
      title="WHITE"
      description="空気をやわらかく含みながら、全体の印象を明るく整えてくれる白。軽さと清潔感を加えつつ、静かに抜けのある雰囲気をつくるカラーです。重く見えすぎず、着こなし全体に自然な余白を残してくれます。"
      subDescriptionEn="A light white that adds softness, clarity, and quiet air."
      keywords={["Light clarity", "Soft air", "Clean impression"]}
      image={whiteImage}
      imageAlt="White outerwear model"
      bgClass="bg-[#f6f6f4]"
      textClass="text-neutral-900"
    />
  );
}

export default White;