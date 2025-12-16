import Image from "next/image";
export default function GalleryGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <Image src="/images/door1.jpg" alt="Door project" width={400} height={300} />
    </div>
  );
}