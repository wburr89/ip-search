import React from "react";
import "./IpList.css";

const IpList = (props) => {
  return (
    <div className="container list">
      <ul className="list-group">
        {Object.keys(props.returnedList).map((key, index) => {
          return (
            <li className="list-group-item" key={index}>
              {key.toUpperCase()}: {props.returnedList[key]}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default IpList;
