import React, { useState } from "react";
import { IBaseUser } from "./interface";

interface IProps {
  onAddUser: (user: IBaseUser) => void;
}

const AddUserForm: React.FunctionComponent<IProps> = (props) => {
  
  // khoi tao gia tri ronng cho the input
  const initUser = { profession: "", name: "", age: "" };

  // lay gia tri rong lam value cua form va setSate
  const [formValue, setFormValue] = useState(initUser);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onAddUser(formValue);
    setFormValue(initUser);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <div className="user-form">
      <form className="form-edit" onSubmit={onFormSubmit}>
        <div className="form-row">
          <label>Name</label>
          <input
            type="text"
            placeholder="please input name"
            name="name"
            value={formValue.name}
            onChange={onInputChange}
          />
        </div>
        <div className="form-row">
          <label>Profession</label>
          <input
            type="text"
            placeholder="please input profession"
            name="profession"
            value={formValue.profession}
            onChange={onInputChange}
          />
        </div>
        <div className="form-row">
          <label>Age</label>
          <input
            type="number"
            placeholder="please input age"
            name="age"
            value={formValue.age}
            onChange={onInputChange}
          />
        </div>
        <div className="form-row">
          <button>Add new user</button>
        </div>
      </form>
    </div>
  );
};

export default AddUserForm;
