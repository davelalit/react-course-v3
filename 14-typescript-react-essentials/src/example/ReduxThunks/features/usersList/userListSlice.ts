const API: string = "https://jsonplaceholder.typicode.com/users";

interface User {
  id: number;
  name: string;
  // Add other user properties as needed
}

interface InitialState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  users: [],
  loading: false,
  error: null,
};

type Action =
  | { type: "userList/fetchData"; payload: Promise<void> }
  | { type: "userList/fetchSuccess"; payload: User[] }
  | { type: "userList/fetchError"; payload: string }
  | { type: "userList/addUser"; payload: User }
  | { type: "userList/deleteUser"; payload: number };

export default function userListReducer(state = initialState, action: Action): InitialState {
  switch (action.type) {
    case "userList/fetchData":
      return { ...state, loading: true, error: null };
    case "userList/fetchSuccess":
      return { ...state, loading: false, users: action.payload };
    case "userList/fetchError":
      return { ...state, loading: false, error: action.payload };

    case "userList/addUser": {
      return { ...state, users: [...state.users, action.payload] };
    }
    case "userList/deleteUser": {
      return { ...state, users: state.users.filter((user) => user.id !== action.payload) };
    }
    default:
      return state;
  }
}

export function fetchData() {
  return async function (dispatch: any): Promise<void> {
    dispatch({ type: "userList/fetchData" });
    try {
      const res = await fetch(API);
      const data = await res.json();
      dispatch({ type: "userList/fetchSuccess", payload: data });
    } catch (error) {
      dispatch({ type: "userList/fetchError", payload: (error as Error).message });
    }
  };
}

export function addUser(user: User): Action {
  return { type: "userList/addUser", payload: user };
}

export function deleteUser(id:number): Action {
  return { type: "userList/deleteUser", payload:id };
}