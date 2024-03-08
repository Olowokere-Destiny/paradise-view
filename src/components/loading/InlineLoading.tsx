import { VscLoading } from "react-icons/vsc";
interface Props {
  styling?: string;
}
function InlineLoading({ styling }: Props) {
  return (
    <div className="flex justify-center">
      <VscLoading className={`w-8 h-8 animate-spin m-8 ${styling}`} />
    </div>
  );
}

export default InlineLoading;
