import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [error, setError] = useState();

  const [enteredInput, setEnteredInput] = useState({
    username: "",
    age: "",
  });

  const inputsChangeHandler = ({ target: { id, value } }) => {
    setEnteredInput((prevInputsObj) => {
      return { ...prevInputsObj, [id]: value };
    });
  };

  const closeButtonHandler = () => {
    setError();
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    if (
      enteredInput.username.trim().length == 0 ||
      enteredInput.age.trim().length == 0
    ) {
      setError({
        title: "InValid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredInput.age < 1) {
      setError({
        title: "InValid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    } 
    props.onAddUser(enteredInput.username, enteredInput.age);
    setEnteredInput({
      username: "",
      age: "",
    });
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onCloseButton={closeButtonHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enteredInput.username}
            onChange={inputsChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            value={enteredInput.age}
            onChange={inputsChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};
export default AddUser;
