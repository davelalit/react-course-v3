import { useDispatch } from "react-redux";
import { addUser } from "./userListSlice";
import { useState } from "react";

function AddUserForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const dispatch = useDispatch();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newUser = { id: Date.now(), name, email };
    dispatch(addUser(newUser));
    setName("");
    setEmail("");
  }

  return (
    <form className="add-user-form">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Add User
      </button>
    </form>
  );
}

export default AddUserForm;
