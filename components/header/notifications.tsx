import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { BellDot } from "lucide-react";

const Notifications = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="aspect-square rounded-full border-white/0 bg-transparent p-2 text-white hover:bg-white/10 hover:text-white"
        >
          <BellDot className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full">
        <div className="">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            sint, tempora fugiat, ipsam autem quae eaque ratione modi doloremque
            veritatis cupiditate dolorem beatae sit.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Notifications;
