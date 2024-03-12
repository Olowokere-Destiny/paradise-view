import { VscLoading } from "react-icons/vsc";
interface Props {
  styling?: string;
  style?: {} | {[key:string]: string | number}
}
function InlineLoading({ styling, style }: Props) {
  return (
    <div className="flex justify-center">
      <VscLoading style={style} className={`w-8 h-8 animate-spin m-8 ${styling}`} />
    </div>
  );
}

export default InlineLoading;
