"use client";
interface Props {
  params: {
    hotelId: string;
  };
}
function Hotel({ params: { hotelId } }: Props) {
  return <div>Hotel: {hotelId}</div>;
}

export default Hotel;
