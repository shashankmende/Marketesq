import React from "react";
import "./Form.css";
import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import {
  updateName,
  updatePhone,
  updateAdult,
  updateChildren,
  updateEmail,
} from "../../store/slices/UserSlice";

const Form = () => {
  const user = useSelector((state) => state.user);
  const { name, email, phone, adults, children } = user;

  const dispatch = useDispatch();

  return (
    <div className="form-section">
      <div className="container">
        <form action="">
          <div className="input-control">
            <input
              required
              value={name}
              type="text"
              placeholder="name"
              onChange={(e) => dispatch(updateName(e.target.value))}
            />
          </div>

          <div className="input-control">
            <input
              required
              value={email}
              type="text"
              placeholder="email"
              onChange={(e) => dispatch(updateEmail(e.target.value))}
            />
          </div>
          <div className="input-control">
            <input
              required
              value={phone}
              type="text"
              placeholder="number"
              onChange={(e) => dispatch(updatePhone(e.target.value))}
            />
          </div>
          <div className="two-col--grid">
            <input
              required
              value={adults}
              type="text"
              placeholder="Adults count"
              onChange={(e) => dispatch(updateAdult(e.target.value))}
            />
            <input
              required
              value={children}
              type="text"
              placeholder="Children count"
              onChange={(e) => dispatch(updateChildren(e.target.value))}
            />
          </div>
        </form>
        <div className="form-card--container">
          <Card page={"form"} />
        </div>
      </div>
    </div>
  );
};

export default Form;
