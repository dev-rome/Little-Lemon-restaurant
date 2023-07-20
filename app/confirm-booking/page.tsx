import { AiOutlineCheck } from "react-icons/ai";

export default function ConfirmBooking() {
  return (
    <section className="py-36">
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center">
          <h3 className="text-32">Booking Is Confirmed</h3>
          <AiOutlineCheck className="text-40 text-primary-darkGreen" />
        </div>
      </div>
    </section>
  );
}
