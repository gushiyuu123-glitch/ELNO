import ColorPage from "./ColorPage";

const grayImage = "/gray1.png";

function Gray() {
  return (
    <ColorPage
      eyebrow="ELNO / GRAY"
      title="GRAY"
      description="コントラストをやわらげながら、全体の空気を静かに整えるグレー。黒よりもやわらかく、白よりも落ち着いた、洗練と抜け感のバランスがちょうどいいカラーです。強さを出しすぎず、着こなし全体を自然にまとめてくれます。"
      subDescriptionEn="A balanced gray that softens contrast and keeps the look calm and refined."
      keywords={["Soft contrast", "Urban balance", "Quiet refinement"]}
      image={grayImage}
      imageAlt="Gray outerwear model"
      bgClass="bg-[#f1f1ef]"
      textClass="text-neutral-900"
    />
  );
}

export default Gray;