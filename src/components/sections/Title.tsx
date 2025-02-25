import { cn } from "@/lib/utils";

interface TitleProps {
  text: string;
  extraClass?: string;
}
const Title = ({ text, extraClass }: TitleProps) => {
  return <div className={cn("text-[32px] font-black", extraClass)}>{text}</div>;
};
export default Title;
