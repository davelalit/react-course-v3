import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectUser } from "../userDetails/userDetailSlice";
import { deleteUser, fetchData } from "./userListSlice";

function UserList() {
  const users = useSelector((state: any) => state.userData.users);
  const loading = useSelector((state: any) => state.userData.loading);
  const error = useSelector((state: any) => state.userData.error);

  const dispatch = useDispatch() as any;

  return (
    <div className="user-list">
      <h2>User List</h2>

      {/* Кнопка загрузки */}
      <button className="load-btn" onClick={(e: React.MouseEvent<HTMLButtonElement>) => dispatch(fetchData())}>
        Load Users
      </button>

      {loading && <p>Loading...</p>}
      {error && <p>Error... {error}</p>}

      <ul>
        {users.map((user: any) => (
          <li key={user.id}>
            <span>
              {user.name} - {user.email}
            </span>

            <div className="btn-group">
              <button className="select-btn" onClick={(e: React.MouseEvent<HTMLButtonElement>) => dispatch(selectUser(user.id))}>
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
