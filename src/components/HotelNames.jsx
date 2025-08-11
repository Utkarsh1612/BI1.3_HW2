import { useState } from "react";
import useFetch from "../useFetch";

const HotelNames = () => {
  const [message, setMessage] = useState("");
  const { data, loading, error } = useFetch(
    "https://be-4-4-hw-2-hotels-xi.vercel.app/hotels"
  );
  const handleDelete = async (id) => {
    const response = await fetch(
      `https://be-4-4-hw-2-hotels-xi.vercel.app/hotels/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = response.json();
    if (data) {
      setMessage("Hotel deleted successfully! ✅");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  };
  return (
    <>
      <h1>Hotels</h1>
      <ul>
        {data &&
          data.map((hotel) => (
            <li key={hotel._id}>
              {hotel.name}{" "}
              <button onClick={() => handleDelete(hotel._id)}>Delete</button>
            </li>
          ))}
      </ul>
      {message && <p>{message}</p>}
    </>
  );
};

export default HotelNames;
