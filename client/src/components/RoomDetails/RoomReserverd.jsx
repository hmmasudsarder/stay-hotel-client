import { formatDistance } from "date-fns";
import Button from "../Button/Button";
import Calender from "./Calender";

const RoomReserverd = ({ room }) => {
//   const [value, setValue] = useState({
//     startDate: new Date(room?.from),
//     endDate: new Date(room?.to),
//     key: "selection",
//   });

//   const totalDay = parseInt(
//     formatDistance(new Date(room.to), new Date(room.from)).split(" ")[0]
//   );
//   const totalPrice = room.price * totalDay;
//   console.log(totalPrice);

  return (
    <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
      <div className="flex items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {room.price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
      <div className="flex justify-center">
        <Calender  />
      </div>
      <hr />
      <div className="p-4">
        <Button label={"Reserve"} />
      </div>
      <hr />
      <div className="p-4 flex items-center justify-between font-semibold text-xl">
        <div>Total</div>
        <div>$ {room.price}</div>
      </div>
    </div>
  );
};

export default RoomReserverd;
