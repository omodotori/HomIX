import React, { useState } from "react";
import "./recommend.css";

const Recommend = ({ theme }) => {
  const [showFilter, setShowFilter] = useState(false);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const closeFilter = (e) => {
    if (e.target.classList.contains("filter-modal")) {
      setShowFilter(false);
    }
  };

  return (
    <div className={`recommendation-container text-${theme}`}>
      <div className="recommendation-header">
        <span>Recommended Property</span>
        <button className="filter-btn" onClick={toggleFilter}>
          Filter
        </button>
      </div>
      <div className="recommendation-list">{/* Список рекомендаций */}</div>
      {showFilter && (
        <div className={`filter-modal text-${theme}`} onClick={closeFilter}>
          <div className={`filter-content text-${theme}`}>
            <h2>Фильтры</h2>
            <form>
              {/* Основные фильтры */}
              <div className="filter-group">
                <label>Тип недвижимости</label>
                <select>
                  <option>Квартира</option>
                  <option>Дом</option>
                  <option>Коммерческая</option>
                  <option>Земельный участок</option>
                </select>
              </div>
              <div className="filter-group">
                <label>Тип сделки</label>
                <select>
                  <option>Покупка</option>
                  <option>Аренда</option>
                </select>
              </div>
              <div className="filter-group">
                <label>Город / Район</label>
                <input type="text" placeholder="Введите город или район" />
              </div>
              <div className="filter-group">
                <label>Цена (От - До)</label>
                <div className="filter-range">
                  <input type="number" placeholder="От" />
                  <input type="number" placeholder="До" />
                </div>
              </div>
              <div className="filter-group">
                <label>Площадь (м²)</label>
                <div className="filter-range">
                  <input type="number" placeholder="От" />
                  <input type="number" placeholder="До" />
                </div>
              </div>
              <div className="filter-group">
                <label>Количество комнат</label>
                <select>
                  <option>Студия</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4+</option>
                </select>
              </div>

              {/* Дополнительные фильтры */}
              <div className="filter-group">
                <label>Этаж / Этажность</label>
                <select>
                  <option>Не первый</option>
                  <option>Не последний</option>
                </select>
              </div>
              <div className="filter-group">
                <label>Год постройки</label>
                <input type="number" placeholder="Введите год" />
              </div>
              <div className="filter-group">
                <label>Мебель</label>
                <select>
                  <option>С мебелью</option>
                  <option>Без мебели</option>
                </select>
              </div>
              <div className="filter-group">
                <label>Дополнительно</label>
                <div>
                  <label>
                    <input type="checkbox" /> Паркинг
                  </label>
                  <label>
                    <input type="checkbox" /> Лифт
                  </label>
                  <label>
                    <input type="checkbox" /> Балкон
                  </label>
                  <label>
                    <input type="checkbox" /> Только с фото
                  </label>
                  <label>
                    <input type="checkbox" /> Новостройка
                  </label>
                  <label>
                    <input type="checkbox" /> Вторичка
                  </label>
                </div>
              </div>

              {/* Сортировка */}
              <div className="filter-group">
                <label>Сортировка</label>
                <select>
                  <option>По цене (возрастание)</option>
                  <option>По цене (убывание)</option>
                  <option>По дате добавления</option>
                  <option>По площади</option>
                </select>
              </div>

              <div className="filter-actions">
                <button type="submit" className="apply-btn">
                  Применить
                </button>
                <button className="close-btn" onClick={toggleFilter}>
                  Закрыть
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recommend;
