import Image from "next/image";
import Link from "next/link";
import type { PhotoData } from "./page";

type Props = {
  photoData: PhotoData;
};

const PhotoDisplay = ({ photoData }: Props) => {
  return (
    <div className="flex flex-col gap-4 w-64 mx-auto">
      <Link href={`/photo/${photoData.id}`}>
        <div className="border-2 rounded-xl overflow-hidden w-64 h-64 relative ">
          <Image
            src={photoData.path}
            alt={photoData.title}
            sizes="256px"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </Link>
      <h1 className="text-1xl font-semibold uppercase text-center">
        {photoData.title}
      </h1>
    </div>
  );
};

export default PhotoDisplay;
