import Image from "next/image";

type MediaImageProps = {
  src: string;
  alt: string;
  aspect?: "wide" | "portrait" | "tall" | "square";
  className?: string;
  fit?: "cover" | "contain";
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

const aspectMap = {
  wide: "aspect-[16/9]",
  portrait: "aspect-[4/5]",
  tall: "aspect-[3/4]",
  square: "aspect-square"
};

export function MediaImage({
  src,
  alt,
  aspect = "wide",
  className = "",
  fit = "cover",
  imageClassName = "",
  priority = false,
  sizes = "(min-width: 1024px) 45vw, 100vw"
}: MediaImageProps) {
  return (
    <div className={`relative overflow-hidden border border-white/10 bg-carbon shadow-panel ${aspectMap[aspect]} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`${fit === "contain" ? "object-contain" : "object-cover"} ${imageClassName}`}
      />
    </div>
  );
}
