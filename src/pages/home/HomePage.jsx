import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { USERS_DATA, fetchUsers } from '../../entities/userCard/model/userSlice';
import Loader from '../../shared/ui/loader/loader';
import Modal from '../../shared/ui/modal/modal';
import UsersList from '../../entities/usersList/usersList';

export const HomePage = () => {
    const dispatch = useDispatch();
    const { users, status, error } = useSelector((state) => state.users);
    const [isError, setError] = useState(error);

    const loadUsers = (users) => {
      if (users.length === 0) {
         dispatch(fetchUsers())
      } else {
        return;
      }
    }
    useEffect(() => {
      loadUsers(users);

      return () => {
        localStorage.removeItem(USERS_DATA);
      }
    }, [users]);

  const content = (
    <>
      <UsersList users={users} title="Активные" type="active" />
      <UsersList users={users} title="Архив" type="archive" />
    </>
  );

  return (
    <>
      {isError && <Modal style={"error"} setChange={setError} />}
      {status === "loading" && <Loader />}
      {status != "loading" && users && content}
    </>
  );
}

