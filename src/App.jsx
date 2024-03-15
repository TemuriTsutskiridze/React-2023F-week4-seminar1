import { useState } from "react";
import data from "./data.json";
import "./App.css";
import Notification from "./components/notification/Notification";

function App() {
  const [notifications, setNotifications] = useState(data);
  const notificationCounter = notifications.filter(
    (notification) => !notification.isRead
  ).length;
  return (
    <>
      <header style={{ display: "flex", alignItems: "center", gap: "5rem" }}>
        <h2>Notifications {notificationCounter}</h2>
        <p
          style={{ cursor: "pointer" }}
          onClick={() => {
            const newNotifications = notifications.map((notification) => {
              return { ...notification, isRead: true };
            });
            setNotifications(newNotifications);
          }}
        >
          Mark all as read
        </p>
      </header>

      <main>
        {notifications.map((notification) => {
          return (
            <Notification
              key={notification.id}
              notification={notification}
              notifications={notifications}
              setNotifications={setNotifications}
            />
          );
        })}
      </main>
    </>
  );
}

export default App;
