import { useSortable } from "@dnd-kit/sortable";
import React from "react";
import {CSS} from '@dnd-kit/utilities';


const SortableItem = ({
  todo,
  updateTodo,
  editingRow,
  removeElement,
  darkMode,
}) => {
  const { id, displayStatus, textContent } = todo;

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    // cursor: "grab",
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <li
      id={id}
      //   key={index}
      ref={setNodeRef}
      style={style}
      onClick={() => {
        updateTodo(id);
      }}
      className={`mx-7 px-4 py-2 mb-4 rounded-xl flex items-center justify-between cursor-pointer ${
        darkMode ? "darkShadow" : "applyShadow"
      }`}
    >
      <span>
        <i
          className={`fa-regular  mr-10 ${
            displayStatus === ""
              ? "fa-circle"
              : "fa-circle-check text-green-600"
          }`}
        ></i>
        <span
          className={`${
            displayStatus === "" ? "" : "line-through decoration-amber-500"
          }`}
        >
          {textContent}
        </span>
      </span>
      <div onClick={(e) => {
        e.stopPropagation()
      }}>
        <i
          onClick={(e) => {
            // e.stopPropagation();
            editingRow(id);
          }}
          title="Edit the Task"
          className="fa-regular fa-pen-to-square inline-block mr-4 hover:text-amber-500"
        ></i>
        <i
          onClick={(e) => {
            // e.stopPropagation();
            removeElement(id);
            // console.log(id)
          }}
          title="Delete the Task"
          className="fa-solid fa-circle-xmark text-gray-400 mr-4 hover:text-red-500"
        ></i>
        <i 
        // onClick={(e) => {
        //     e.stopPropagation()
        // }}
         {...attributes}
      {...listeners} className={`fa-solid fa-grip-vertical text-gray-400 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`} title="Drag to Reorder"></i>
      </div>
    </li>
  );
};

export default SortableItem;
