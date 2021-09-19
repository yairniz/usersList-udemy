import Card from "../UI/Card";
import UserItem from "./UserItem";
import classes from './UsersList.module.css'

const UsersList = (props) => {
  return (
   <Card className={classes.users}>
      <ul>
        {props.users?.length >0 && props.users.map((user, idx) => (<UserItem key={idx} username={user.username} age={user.age}></UserItem>))}
      </ul>
   </Card>
  );
};
export default UsersList;
