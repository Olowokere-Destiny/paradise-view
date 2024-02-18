import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("../map/Map"), {
  ssr: false,
});
export default DynamicMap;
