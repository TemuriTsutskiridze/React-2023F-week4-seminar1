import "./notification.css";
import PropTypes from "prop-types";

export default function Notification({
  notification,
  notifications,
  setNotifications,
}) {
  return (
    <div
      className="notification"
      style={!notification.isRead ? { backgroundColor: "#F7FAFD" } : {}}
      onClick={() => {
        console.log(notification.id);
        const newNotifications = notifications.map((currentMessage) => {
          if (notification.id === currentMessage.id) {
            return {
              ...currentMessage,
              isRead: true,
            };
          }
          return currentMessage;
        });

        setNotifications(newNotifications);
      }}
    >
      <img src={notification.profilePic} alt="" />
      <span>
        {notification.username} {notification.action}{" "}
        {notification.post ? (
          <span className="post">{notification.post}</span>
        ) : null}{" "}
        {notification.groupName ? (
          <span className="group-name">{notification.groupName}</span>
        ) : null}
      </span>

      <p>{notification.time}</p>

      {notification.text ? <p>{notification.text}</p> : null}

      {notification.userPicture ? (
        <img src={notification.userPicture} alt="" />
      ) : null}

      {!notification.isRead ? <div className="read"></div> : null}
    </div>
  );
}

Notification.propTypes = {
  notification: PropTypes.shape({
    id: PropTypes.number.isRequired,
    profilePic: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    post: PropTypes.string,
    groupName: PropTypes.string,
    time: PropTypes.string.isRequired,
    text: PropTypes.string,
    userPicture: PropTypes.string,
    isRead: PropTypes.bool.isRequired,
  }).isRequired,
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profilePic: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      action: PropTypes.string.isRequired,
      post: PropTypes.string,
      groupName: PropTypes.string,
      time: PropTypes.string.isRequired,
      text: PropTypes.string,
      userPicture: PropTypes.string,
      isRead: PropTypes.bool.isRequired,
    })
  ).isRequired,
  setNotifications: PropTypes.func.isRequired,
};
