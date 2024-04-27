import Image from "next/image";

export default function FeaturesBanner() {
  return (
    <div className="bg-yellow-light flex w-full items-end justify-center rounded-2xl">
      <Image
        src="/features.png"
        alt="Features"
        width={1080}
        height={500}
        quality={100}
      />
    </div>
  );
}
