import "./styles.css";
import { useReducer } from "react";

// useReducer:
// 1. init State:
const initState = {
  job: "",
  jobs: []
};

// 2. Actions:
const SET_JOBS = "set_job";
const ADD_JOBS = "add_job";
const DELETE_JOBS = "delete_job";

// 3. Reducers
const reducer = (state, action) => {};

// 4. Dispatch

export default function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;

  return (
    <div className="App">
      <h2> Todo List App </h2>
      <input value={job} onChange={(e) => {}} placeholder="input job..." />
      <button> Add </button>
      <ul>
        {" "}
        {jobs.map((job, index) => (
          <li key={index}> {job} </li>
        ))}{" "}
      </ul>
    </div>
  );
}
