import { useSelector } from "react-redux";
import { deleteUser, fetchUsers } from "./userListSlice";
import { useDispatch } from "react-redux";
import { selectedUser } from "../userDetails/userDetailsSlice";

function UserList() {
  const users = useSelector((state: any) => state.userList.users);
  const dispatch = useDispatch() as any;

  return (
    <div className="user-list">
      <h2>User List</h2>

      {/* Кнопка загрузки */}
      <button className="load-btn" onClick={(e: React.MouseEvent<HTMLButtonElement>) => dispatch(fetchUsers())}>
        Load Users
      </button>

      <ul>
        {users.map((user: any) => (
          <li key={user.id}>
            <span>
              {user.name} - {user.email}
            </span>

            <div className="btn-group">
              <button className="select-btn" onClick={(e: React.MouseEvent<HTMLButtonElement>) => dispatch(selectedUser(user.id))}>
                Select
              </button>

              <button className="delete-btn" onClick={(e: React.MouseEvent<HTMLButtonElement>) => dispatch(deleteUser(user.id))}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
