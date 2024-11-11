import React from "react";
import "./Card.css";
import { CiCircleMinus } from "react-icons/ci";
import { FaCirclePlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { incrementRooms, decrementRooms, setCheckInDate, setCheckOutDate } from '../../store/slices/QuantitySlices';

const Card = ({ page }) => {
  const dispatch = useDispatch();

  // Access the `card` slice in the Redux store
  const { rooms, checkInDate, checkOutDate } = useSelector((state) => state.card);

  const btnText = page === "home" ? "Book" : page === "form" ? "Pay" : "completed";

  return (
    <div className="card-container">
      <div className="card-1--div">
        <p>Check-in</p>
        <input
          type="date"
          value={checkInDate}
          placeholder="Check-in date"
          onChange={(e) => dispatch(setCheckInDate(e.target.value))}
        />
      </div>
      <div className="card-1--div">
        <p>Check-out</p>
        <input
          type="date"
          value={checkOutDate}
          placeholder="Check-out date"
          onChange={(e) => dispatch(setCheckOutDate(e.target.value))}
        />
      </div>

      <div className="cards-room--container">
        <h3>Rooms</h3>
        <div className="rooms-quantity--container">
          <div className="icon" onClick={() => dispatch(decrementRooms())}>
            <CiCircleMinus size={20} />
          </div>
          <p>{rooms}</p>
          <div className="icon" onClick={() => dispatch(incrementRooms())}>
            <FaCirclePlus size={20} fill="gray" />
          </div>
        </div>
      </div>

      <div>
        <button>
          <Link to={`/${btnText}`}>{btnText}</Link>
        </button>
      </div>
    </div>
  );
};

export default Card;