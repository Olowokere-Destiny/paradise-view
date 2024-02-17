import { VscLoading } from "react-icons/vsc";

function InlineLoading() {
  return (
    <div className="flex justify-center">
      <VscLoading className="w-8 h-8 animate-spin m-8" />
    </div>
  );
}

export default InlineLoading;
