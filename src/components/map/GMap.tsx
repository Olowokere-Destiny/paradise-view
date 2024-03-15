"use client";
interface Props {
  lat: number;
  lon: number;
  zoom: number;
}
function GMap({ lat, lon, zoom }: Props) {
  const key = process.env.NEXT_PUBLIC_MAP_KEY;
  return (
    <div>
      <iframe
        src={`https://www.google.com/maps/embed/v1/place?key=${key}&q=${lat},${lon}&zoom=${zoom}`}
        className="border-none h-[500px] w-full"
      ></iframe>
    </div>
  );
}

export default GMap;
