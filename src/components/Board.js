import React, { useState } from "react";
import Square from "./Square";

const Board = ({ squares }) => {
  return <div className="board">{squares}</div>;
};

export default Board;
