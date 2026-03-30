import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { clearSelectedUser } from "./userDetailsSlice";

function SelectedUserDetails() {
  const dispatch = useDispatch();

  const selectedUserId = useSelector((state: any) => state.userDetails.selectedUserId);

  const users = useSelector((state: any) => state.userList.users);

  if (!selectedUserId) {
    return <p>No user selected</p>;
  }

  const user = users.find((user: any) => user.id === selectedUserId);

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div className="selected-user-details">
      <h2>Selected User</h2>
      <p>
        <strong>Name: </strong>
        {user.name}
      </p>
      <p>
        <strong>Email: </strong>
        {user.email}
      </p>

      <button className="clear-btn" onClick={(e: React.MouseEvent<HTMLButtonElement>) => dispatch(clearSelectedUser())}>
        Clear Selection
      </button>
    </div>
  );
}

export default SelectedUserDetails;
