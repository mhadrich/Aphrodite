import React from "react";
import ReactStars from "react-stars";

interface Props{
  rate : number;
}

export default function Stars(props:Props) {
  const { rate } = props;

  return (
    <div>
      <ReactStars
      count={5}
      value={rate}
      edit={false}
      size={'10px'}
      color1={"#f1f1f1"}
      color2={"#ffad33"} />
    </div>
  );
}
