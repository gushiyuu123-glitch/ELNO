import ColorPage from "./ColorPage";

const blackImage = "/black2.png";

function Black() {
  return (
    <ColorPage
      eyebrow="ELNO / BLACK"
      title="BLACK"
      description="輪郭をすっきり見せながら、静かな強さをまとえる黒。ELNOの中でもいちばん印象が締まり、落ち着いた空気の中にわずかなモード感を加えてくれます。日常に取り入れやすく、それでいて着こなし全体をきれいに整えて見せるカラーです。"
      subDescriptionEn="The sharpest tone in the ELNO line, quiet and clean with a subtle mode edge."
      keywords={["Sharp silhouette", "Quiet strength", "Subtle mode"]}
      image={blackImage}
      imageAlt="Black outerwear model"
      bgClass="bg-[#f3f3f1]"
      textClass="text-neutral-900"
    />
  );
}

export default Black;