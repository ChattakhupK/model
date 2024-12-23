import PhotoDisplay from "@/app/photo/[photoId]/PhotoDisplay";
import type { PhotoData } from "@/app/photo/[photoId]/page";
import Modal from "@/components/Modal";

type Props = {
  params: {
    photoId: string;
  };
};

const Photo = async ({ params: { photoId } }: Props) => {
  const response = await fetch(`http://localhost:3500/images/${photoId}`, {
    cache: "no-store",
  });

  const photoData: PhotoData = await response.json();

  if (!photoData?.id) {
    return <h1 className="text-center">ไม่พบรูปภาพของไอดีนี้</h1>;
  }

  return (
    <Modal>
      <PhotoDisplay photoData={photoData} />
    </Modal>
  );
};

export default Photo;
