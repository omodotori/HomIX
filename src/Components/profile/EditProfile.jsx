import React, { useState } from "react";
import "./profile.css";

const EditProfile = ({ user, onSave, onCancel }) => {
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="edit-profile-container">
      <h2>Редактировать профиль</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Имя:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Город:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="profile-btn primary-btn">
            Сохранить
          </button>
          <button
            type="button"
            className="profile-btn secondary-btn"
            onClick={onCancel}
          >
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
