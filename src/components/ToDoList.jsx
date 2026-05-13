import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { useLocalStorage } from "../hooks/useLocalStorage";
import {
  closestCorners,
  DndContext,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import SortableItem from "./SortableItem";

const ToDoList = () => {
  const [darkMode] = useTheme();
  // const inputRef = useRef(null);

  // const [errorText, setErrorText] = useState("");
  const [errorText, setErrorText] = useLocalStorage("errorText", "");
  // const [todosItems, setTodosItem] = useState([])
  const [todosItems, setTodosItem] = useLocalStorage("todosItems", []);
  // const [editingId, setEditingId] = useState(null);
  const [editingId, setEditingId] = useLocalStorage("editingId", null);
  // const [inputValue, setInputValue] = useState("");
  const [inputValue, setInputValue] = useLocalStorage("inputValue", "");

  //   const [isStoreNumbers, setIsStoreNumbers] = useState(() => {
  //   const saved = JSON.parse(localStorage.getItem("StoreNumbers"));
  //   return saved ? saved : [1, 2, 3, 4];
  // })

  /*
// all about understanding on local storage using custom hook called useLocal
  const [isStoreNumbers, setIsStoreNumbers] = useLocal("isStoreNumbers",[1,2,3,4])

  function increaseCounts() {
    setIsStoreNumbers((prevState) => {
      const lastNumber = prevState[prevState.length - 1];
      return [...prevState, lastNumber + 1];
    });
  }
*/

  // useEffect (() => {
  //   localStorage.setItem("StoreNumbers", JSON.stringify(isStoreNumbers))
  // },[isStoreNumbers])

  const addingFunction = () => {
    const trimmedValue = inputValue.trim();

    if (trimmedValue === "") {
      setErrorText({ title: "Please enter a task" });
      return;
    }

    // Update existing item
    if (editingId) {
      setTodosItem((prev) =>
        prev.map((todo) =>
          todo.id === editingId
            ? { ...todo, textContent: trimmedValue, displayStatus: "" }
            : todo,
        ),
      );
      setEditingId(null);
    } else {
      setTodosItem((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          textContent: trimmedValue,
          displayStatus: "",
        },
      ]);
    }

    // setTodosItem((prevState) => [...prevState, {id : crypto.randomUUID(), textContent: inputValue, displayStatus: ""} ])
    // inputRef.current.value = ""

    setInputValue("");
  };

  // console.log(Array.isArray(todosItems))
  // console.log(todosItems)

  function updateTodo(id) {
    const updateTodoList = todosItems.map((check) =>
      check.id === id
        ? {
            ...check,
            displayStatus:
              check.displayStatus === "strikeOutContent"
                ? ""
                : "strikeOutContent",
          }
        : check,
    );
    setTodosItem(updateTodoList);
  }

  function editingRow(rowId) {
    const todoToEdit = todosItems.find((edit) => edit.id === rowId);

    if (todoToEdit) {
      setInputValue(todoToEdit.textContent);
      setEditingId(rowId);
    }
  }

  function removeElement(id) {
    const deleteElement = todosItems.filter((findId) => {
      // console.log(findId.id !== id)
      return findId.id !== id;
    });
    setTodosItem(deleteElement);
  }

  const sensors = useSensors(
    useSensor(PointerSensor, {
      // Require the mouse to move by 10 pixels before activating
      activationConstraint: {
        distance: 10,
      },
    }),
    useSensor(TouchSensor, {
      // Press delay of 250ms, with tolerance of 5px of movement
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    }),
  );

  // function handleDragEnd(event) {
  //   const { active, over } = event;

  //   if (active.id !== over.id) {
  //     setTodosItem((prevState) => {
  //       const oldIndex = prevState.indexOf(active.id);
  //       const newIndex = prevState.indexOf(over.id);

  //       return arrayMove(prevState, oldIndex, newIndex);
  //     });
  //   }
  // }

  const handleDragEnd = (ev) => {
    const { active, over } = ev;
    if (!over || active.id === over.id) return;

    setTodosItem((prev) => {
      const oldIndex = prev.findIndex((obj) => obj.id === active.id);
      const newIndex = prev.findIndex((obj) => obj.id === over.id);
      return arrayMove(prev, oldIndex, newIndex);
    });
  };

  return (
    <section className={`w-full ${darkMode ? "darkModeActive" : ""}`}>
      <div className={`w-full max-w-6xl min-h-[calc(100vh-100px)] p-4 m-auto`}>
        <div
          className={`to-do-app w-full max-w-2xl mx-auto mt-8 rounded-2xl ${
            darkMode ? "darkShadow" : "applyShadow"
          }`}
        >
          <h3 className="text-3xl font-bold text-center py-8">
            List Your <span className="text-amber-500">Plans</span> &amp;{" "}
            <span className="text-sky-300">Goals</span>&nbsp;&nbsp;
            <i className="fa-solid fa-note-sticky" id="change-color"></i>
          </h3>
          <div className="px-8 relative pb-10">
            <input
              className="bg-gray-200 w-full px-4 py-2 text-black outline-0 rounded-xl"
              value={inputValue}
              onChange={(e) => {
                setErrorText("");
                setInputValue(e.target.value);
              }}
              type="text"
              id="input-box"
              placeholder="Add your tasks here"
              //  ref={inputRef}
            />
            <button
              onClick={() => {
                addingFunction();
              }}
              className="px-10 text-black cursor-pointer font-semibold py-2 bg-amber-500  rounded-r-xl absolute top-0 right-8"
            >
              {editingId ? "Update" : "Add"}
            </button>
            <p
              className={` text-sm text-red-500 text-center absolute top-12 right-1/2 ${
                errorText.title ? "visible" : "hidden"
              }`}
            >
              {errorText.title}&nbsp;
              <i className="fa-solid fa-circle-exclamation"></i>
            </p>
          </div>
          <DndContext
            collisionDetection={closestCorners}
            sensors={sensors}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={todosItems}
              strategy={verticalListSortingStrategy}
            >
              <ul className="list-container pb-6">
                {todosItems?.map((todo) => (
                  <SortableItem
                    key={todo.id}
                    todo={todo}
                    updateTodo={updateTodo}
                    editingRow={editingRow}
                    removeElement={removeElement}
                    darkMode={darkMode}
                  />
                ))}
              </ul>
            </SortableContext>
          </DndContext>
        </div>
        {/* 
        //all about local storage understanding
        <div className="mt-10">
           <h3>{isStoreNumbers.join(", ")}</h3>
        <button 
        onClick={() => {
          increaseCounts()
        }}
         className="bg-amber-500 px-8 py-2">Add</button>
        </div> */}
      </div>
    </section>
  );
};

export default ToDoList;
