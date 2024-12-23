import type { PhotoData } from "./photo/[photoId]/page";
import PhotoDisplay from "./photo/[photoId]/PhotoDisplay";

export default async function Home() {
  const response = await fetch("http://localhost:3500/images", {
    cache: "no-store",
  });

  const images: PhotoData[] = await response.json();

  if (!images?.length) {
    return <h1>ไม่พบรูปภาพบนหน้าจอ</h1>;
  }

  return (
    <main className="mx-24">
      <div className="flex flex-wrap gap-4">
        {images.map((photoData) => (
          <PhotoDisplay key={photoData.id} photoData={photoData} />
        ))}
      </div>
    </main>
  );
}
