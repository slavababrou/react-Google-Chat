import React, { FC } from "react";
import { IUser } from "../../types/users";
interface IUserItemProps {
  user: IUser;
}
const UserItem: FC<IUserItemProps> = ({ user }) => {
  return (
    <div>
     {user.email}
    </div>
  );
};

export default UserItem;