"use client";

import React, { useState } from "react";

interface IDish {
  _id: string;
  dishName: string;
  description: string;
  price: number;
  meal: string;
  image: string;
}

interface IDishProps {
  dish: IDish;
}
interface IModalProps extends IDishProps {
  onClose?: () => void; // Optional prop for handling close actions
}

export default function Modal({ onClose, dish }: IModalProps) {
  return (
    <div className="dish-modal-main-container">
      <section className="dish-modal-content">
        <h1>This is Modal</h1>

        <button onClick={onClose}>X</button>
        <div>{dish.dishName}</div>
      </section>
    </div>
  );
}
