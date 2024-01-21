import React from 'react'
import { Section } from '../../app/features/section';
import UserCard from '../userCard/userCard';

const UsersList = ({users, title, type}) => {

    const filterUsers = (users, section) => {
      if (section === "active") {
        return users?.filter((user) => user.isArchived === false);
      } else if (section === "archive") {
        return users?.filter((user) => user.isArchived === true);
      }
    };

  return (
    <>
      <Section title={title}>
        {filterUsers(users, type).map((user) => (
          <UserCard user={user} key={user.id} isArchived={user.isArchived} />
        ))}
      </Section>
    </>
  );
}

export default UsersList;