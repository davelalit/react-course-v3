const initialState: { selectedUserId: number | null } = {
  selectedUserId: null,
};

export default function userDetailReducer(state = initialState, action: { type: string; payload?: number }): typeof initialState {
  switch (action.type) {
    case "userDetail/selectUser": {
      return { ...state, selectedUserId: action.payload || null };
    }
    case "userDetail/clearSelectedUser": {
      return { ...state, selectedUserId: null };
    }
    default: {
      return state;
    }
  }
}

export function selectUser(userId: number): { type: string; payload: number } {
  return { type: "userDetail/selectUser", payload: userId };
}

export function clearSelectedUser(): { type: string } {
  return { type: "userDetail/clearSelectedUser" };
}