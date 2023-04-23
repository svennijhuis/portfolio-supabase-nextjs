import Image from "next/image";

interface SingleImageProps {
  alt: string;
  src: string;
}

const SingleImage = ({ alt, src }: SingleImageProps) => {
  return (
    <Image
      className="rouded-3xl min-h-350px aspect-video h-auto w-full object-cover"
      src={src}
      alt={alt}
      width={500}
      height={500}
    />
  );
};

export default SingleImage;
