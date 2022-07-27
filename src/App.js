import "./styles.css";

// useReducer:
// 1. init State:
const initState = {
  job: "",
  job: []
};

// 2. Actions:

// 3. Reducer
// 4. Dispatch

export default function App() {
  return (
    <div className="App">
      <h2> Todo List App </h2>
      <input placeholder="input job..." />
      <button> Add </button>
      <ul>
        <li> rua bat &times; </li>
        <li> nau com &times; </li>
        <li> giat quan ao &times; </li>
      </ul>
    </div>
  );
}
