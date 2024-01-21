import {BackIcon} from '../../shared/icons/back-icon';
import styles from './profilePage.module.scss';
import profileIcon from "../../shared/assets/user_profile_icon.png";
import Category from '../../shared/ui/category/category';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserById } from '../../entities/profileForm/model/profileFormSlice';
import Modal from '../../shared/ui/modal/modal';
import { categories } from '../../shared/lib/mock/mock-data';
import ProfileForm from '../../entities/profileForm/profileForm';

export const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {id} = useParams();
  const { profile, status, error } = useSelector((state) => state.profile);
  const [isChanged, setChange] = useState(false);

  useEffect(() => { dispatch(getUserById(id)) }, [dispatch]);

  const changeModal = () => setChange(true);

  return (
    <>
      {status === "loading" && <div>Loading...</div>}
      {status === "failed" && <div>Error: {error}</div>}
      {isChanged && <Modal style={status} setChange={setChange} />}
      {status !== "loading" && status !== "failed" && (
        <div className={styles["profile__container"]}>
          <span className={styles.button} onClick={() => navigate("/")}>
            <BackIcon />
            Назад
          </span>
          <div className={styles["profile__content"]}>
            <div className={styles.profile__left}>
              <div
                style={{
                  backgroundImage: `url(${profileIcon})`,
                }}
                className={styles.profile__img}
              ></div>
              <div className={styles.categories}>
                {categories.map(({ id, title }) => (
                  <Category text={title} key={id} />
                ))}
              </div>
            </div>
            <div className={styles.profile__right}>
              <ProfileForm
                profile={profile}
                setChange={changeModal}
                isChanged={isChanged}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}