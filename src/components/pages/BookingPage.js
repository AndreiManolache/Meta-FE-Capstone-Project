import ReservationForm from "../sections/BookingForm";
import { useReducer } from "react";
import { fetchAPI } from "../../bookingsAPI";
import ReservationsHero from "../sections/ReservationHero";
import AboutSection from "../sections/About";
export default function BookingPage() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <ReservationsHero />
      <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} />
      <AboutSection />
    </>
  );
}
