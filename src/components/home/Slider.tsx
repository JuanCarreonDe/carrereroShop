import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

export const Slider = () => {
  return (
    <div className="w-full bg-neutral-900 h-96 rounded-md relative">
      <div className="flex justify-between absolute w-full bottom-0 top-0 items-center p-3">
        <IoIosArrowDropleftCircle className="h-8 w-8" />
        <IoIosArrowDroprightCircle className="h-8 w-8" />
      </div>
    </div>
  );
};
