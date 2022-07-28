import "./styles.css";
import { useReducer, useRef } from "react";

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

const setJob = (payload) => {
  return {
    type: SET_JOBS,
    payload: payload
  };
};

//add job
const addJob = (payload) => {
  return {
    type: ADD_JOBS,
    payload: payload
  };
};

//delete job
const deleteJob = (payload) => {
  return {
    type: DELETE_JOBS,
    payload: payload
  };
};

// 3. Reducers
const reducer = (state, action) => {
  console.log("action", action);
  console.log("prev state", state);

  let newState;

  switch (action.type) {
    case SET_JOBS:
      newState = {
        ...state,
        job: action.payload
      };
      break;
    case ADD_JOBS:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload]
      };
      break;
    case DELETE_JOBS:
      const newJobs = [...state.jobs];

      newJobs.splice(action.payload, 1);

      newState = {
        ...state,
        jobs: newJobs
      };
      break;

    default:
      throw new Error("Invalid Action!");
  }

  console.log("new state", newState);

  return newState;
};

// 4. Dispatch

export default function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;

  const inputRef = useRef();

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob("")); // xoa chu nhap trong input
    inputRef.current.focus(); // sau khi xoa chu nhap trong input thi focus lai
  };

  return (
    <div className="App">
      <h2> Todo List App </h2>
      <input
        ref={inputRef}
        value={job}
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
        placeholder="input job..."
      />
      <button onClick={handleSubmit}> Add </button>
      <ul>
        {" "}
        {jobs.map((job, index) => (
          <li key={index}>
            {" "}
            {job}
            <span onClick={() => dispatch(deleteJob(index))}> &times; </span>
          </li>
        ))}{" "}
      </ul>
    </div>
  );
}
