import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import BorderLine from "../UI/BorderLine";
import Input from "../UI/Input";
import Modal from "../UI/Modal";
import List from "../UI/List";
import { IUser } from "../../types/users";
import UserItem from "./UserItem";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { asyncSetUserAction } from "../../store/reducers/action-creators/user";
import Card from "../UI/Card";
import ChatOptionItem from "./ChatOptionItem";
const StyledModalContainer = styled.div`
  position: absolute;
  top: 4.1rem;
  left: 20.2rem;
  background: white;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  z-index: 100;
  cursor: pointer;

  height: 348px;
  width: 240px;
  border-radius: 0.4em;
`;
const StyledInputContainer = styled.div`
  padding: 0 4px;
`;

const AddChatModal: FC<any> = (props: any) => {
  const users = useTypeSelector((state) => state.user.users);
  useEffect(() => {
    dispatch(asyncSetUserAction());
  }, []);
  //   const [searchedUsers, setSearchedUsers] = useState<any[]>(users);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const dispatch = useDispatch();
  const searchedUsers = useMemo(() => {
    return users.filter((user) =>
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const closeHandler = () => {
    props.setClose();
  };

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Modal clickHandler={closeHandler} />
      <StyledModalContainer>
        <StyledInputContainer>
          <Input value={searchQuery} searchHandler={searchHandler} />
        </StyledInputContainer>
        <BorderLine margin="0px" />

        {searchQuery.length === 0 ? (
          <>
            <ChatOptionItem imgUrl="https://www.gstatic.com/dynamite/images/menuoptions/create_spaces.svg">
              Создать чат-группу
            </ChatOptionItem>
            <ChatOptionItem imgUrl="https://www.gstatic.com/dynamite/images/menuoptions/browse_spaces.svg">
              Обзор групп
            </ChatOptionItem>
            <ChatOptionItem imgUrl="https://www.gstatic.com/dynamite/images/menuoptions/request.svg">
              Запросы на переписку
            </ChatOptionItem>
          </>
        ) : (
          <List
            items={searchedUsers}
            renderItem={(user: any) => <UserItem user={user} key={user.id} />}
          />
        )}
      </StyledModalContainer>
    </>
  );
};

export default AddChatModal;
