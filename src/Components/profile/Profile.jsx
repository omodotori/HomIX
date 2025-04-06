import React, { useState } from "react";
import EditProfile from "./EditProfile";
import "./profile.css";
import user_avatar from "../../assets/user_avatar.png";

const Profile = ({ theme, onLogout }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "Имя Пользователя",
    email: "user@example.com",
    city: "Алматы",
    registrationDate: "01.01.2023",
  });

  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => setIsEditing(false);
  const handleSave = (updatedUser) => {
    setUser(updatedUser);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <EditProfile user={user} onSave={handleSave} onCancel={handleCancel} />
    );
  }

  return (
    <div className={`profile-container ${theme}`}>
      <div className="profile-header">
        <img
          src={user_avatar}
          alt="User Avatar"
          className="profile-avatar"
        />
        <h1 className={`profile-name ${theme}`}>{user.name}</h1>
        <p className={`profile-email ${theme}`}>{user.email}</p>
      </div>
      <div className="profile-body">
        <div className={`profile-section ${theme}`}>
          <h2>Информация</h2>
          <p>
            <strong>Город:</strong> {user.city}
          </p>
          <p>
            <strong>Дата регистрации:</strong> {user.registrationDate}
          </p>
        </div>
        <div className={`profile-section ${theme}`}>
          <h2>Действия</h2>
          <button className="profile-btn primary-btn" onClick={handleEdit}>
            Редактировать профиль
          </button>
          <button className="profile-btn secondary-btn" onClick={onLogout}>
            Выйти
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
