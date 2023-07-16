import Image from "next/image";

interface BannerCardProps {
  title: string;
  img: string;
}

const BannerCard: React.FC<BannerCardProps> = ({ title, img }) => {
  return (
    <div className="w-full overflow-hidden rounded-lg">
      <Image
        src={`/banners/${img}`}
        loading="eager"
        alt={title}
        width={730}
        height={280}
        className=""
      />
    </div>
  );
};

export default BannerCard;
