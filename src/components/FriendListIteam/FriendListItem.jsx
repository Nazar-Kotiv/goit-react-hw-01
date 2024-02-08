import css from "../FriendList/FriendList.module.css";

export const FriendListItem = ({ data: { avatar, name, isOnline } }) => {
  return (
    <div className={css.card}>
      <img
        className={css.avatar_friends}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={css.friend_name}> {name}</p>
      <p className={`status ${isOnline ? css.online : css.offline}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};
