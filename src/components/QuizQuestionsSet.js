export const quizData = [
  {
    "id": 1,
    "question": "What is the Virtual DOM in React?",
    "options": [
      "A direct copy of the real DOM used for styling",
      "A lightweight JavaScript object that represents the actual DOM",
      "A database to store component states",
      "A function that updates props"
    ],
    "answer": "A lightweight JavaScript object that represents the actual DOM"
  },
  {
    "id": 2,
    "question": "Which React hook is used to perform side effects in functional components?",
    "options": [
      "useState",
      "useEffect",
      "useContext",
      "useReducer"
    ],
    "answer": "useEffect"
  },
  {
    "id": 3,
    "question": "What is the correct way to pass data from a parent to a child component in React?",
    "options": [
      "Using Redux store",
      "Using props",
      "Using useState in child",
      "Using context API only"
    ],
    "answer": "Using props"
  },
  {
    "id": 4,
    "question": "In React, what happens when you call setState or setCount in useState?",
    "options": [
      "It directly mutates the state variable",
      "It replaces the component entirely",
      "It schedules a re-render of the component with the updated state",
      "It updates props in parent"
    ],
    "answer": "It schedules a re-render of the component with the updated state"
  },
  {
    "id": 5,
    "question": "Which of the following is the correct syntax to create a React functional component?",
    "options": [
      "function MyComponent() { return <h1>Hello</h1> }",
      "component MyComponent() { return <h1>Hello</h1> }",
      "React.createComponent(MyComponent)",
      "new MyComponent() => <h1>Hello</h1>"
    ],
    "answer": "function MyComponent() { return <h1>Hello</h1> }"
  }
]
