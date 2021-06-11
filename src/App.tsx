import React, { useState } from "react";
import UserTable from "./component/userTable";
import AddUserForm from "./component/addUserForm";
import EditUserForm from "./component/editUserForm";
import {IBaseUser, IUser} from "./component/interface";
import "./styles.css";

// show users

// Array<IUser> is main:  
// export interface IBaseUser {
//   name: string;
//   profession: string;
//   age: number | string;
// }

const defaultUsers: Array<IUser>= [
  { profession: "lily", name: "lily hh", id: 1, age: 18 },
  { profession: "bob", name: "bob haha", id: 2, age: 20 }
];
const initCurrentUser: IUser = { profession: "", name: "", age: 10, id: 1 };

const App = () => {

  const [users, setUsers] = useState(defaultUsers);

  // edit user
  const [editUser, setEditUser] = useState(initCurrentUser);
  const [editing, setEdit] = useState(false);

  const onAddUser = (newUser: IBaseUser) => {
    const id = users.length + 1;
    setUsers([...users, { ...newUser, id }]);
  };

  const onDeleteUser = (currentUser: IUser) => {
    setUsers(users.filter((i) => i.id !== currentUser.id));
  };

  //edit user
  const onCurrentUser = (user: IUser) => {
    setEditUser(user);
    setEdit(true);
  };

  const onUpdateUser = (id: number, newUser: IUser) => {
    setEdit(false);
    setUsers(users.map((i) => (i.id === id ? newUser : i)));
  };


  return (
    <div className="container">
      <h1>CRUD App with Hooks + Typescript</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          {editing ? (
          <EditUserForm
            user={editUser}
            onUpdateUser={onUpdateUser}
            setEdit={setEdit}
          />
        ) : (
          <AddUserForm onAddUser={onAddUser} />
        )}

        </div>
        <div className="flex-large">
          <h2 style={{marginLeft:"7%"}}>View users</h2>
          <UserTable users={users} onDelete={onDeleteUser} onEdit={onCurrentUser}/>
        </div>
      </div>
    </div>
  );
}

export default App;
