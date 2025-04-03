import React, { useState } from "react";
import { Link } from "react-router-dom";
import listings from "../../data/listings.json";
import "./recommend.css";
import city from "../../assets/city.png";

const Recommend = ({ theme }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState({
    type: "",
    dealType: "",
    city: "",
    minPrice: "",
    maxPrice: "",
  });

  const [filteredListings, setFilteredListings] = useState(listings);

  const toggleFilter = (e) => {
    e.preventDefault();
    setShowFilter(!showFilter);
  };

  const closeFilter = (e) => {
    if (e.target.classList.contains("filter-modal")) {
      setShowFilter(false);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const applyFilter = (e) => {
    e.preventDefault();
    const filtered = listings.filter((ad) => {
      const matchesType = filters.type ? ad.type === filters.type : true;
      const matchesDealType = filters.dealType
        ? ad.deal_type === filters.dealType
        : true;
      const matchesCity = filters.city
        ? ad.city.toLowerCase().includes(filters.city.toLowerCase())
        : true;
      const matchesMinPrice = filters.minPrice
        ? parseInt(ad.price.replace(/\D/g, "")) >= parseInt(filters.minPrice)
        : true;
      const matchesMaxPrice = filters.maxPrice
        ? parseInt(ad.price.replace(/\D/g, "")) <= parseInt(filters.maxPrice)
        : true;

      return (
        matchesType &&
        matchesDealType &&
        matchesCity &&
        matchesMinPrice &&
        matchesMaxPrice
      );
    });
    setFilteredListings(filtered);
    setShowFilter(false);
  };

  const resetFilter = () => {
    setFilters({
      type: "",
      dealType: "",
      city: "",
      minPrice: "",
      maxPrice: "",
    });
    setFilteredListings(listings);
  };

  return (
    <div className={`recommendation-container text-${theme}`}>
      <div className="recommendation-header">
        <span>Recommended Property</span>
        <button className="filter-btn" onClick={toggleFilter}>
          Filter
        </button>
      </div>
      <div className="recommendation-list">
        {filteredListings.map((ad) => {
          return (
            <Link
              to={`/ads/${ad.id}`}
              key={ad.id}
              className={`ad_container text-${theme}`}
            >
              <img src={ad.img} alt={ad.type} className="ad_image" />
              <h1 className="ad_type">{ad.type}</h1>
              <p className="ad_descrption">{ad.description}</p>
              <div className="ad_info">
                <p className="ad_city">
                  <img src={city} alt="city" />
                  {ad.city}
                </p>
                <p className="ad_price">
                  {ad.price}{" "}
                  <span className="ad_price_type">{ad.price_type}</span>
                </p>
              </div>
            </Link>
          );
        })}
      </div>
      {showFilter && (
        <div className={`filter-modal text-${theme}`} onClick={closeFilter}>
          <div className={`filter-content text-${theme}`}>
            <h2>Фильтры</h2>
            <form onSubmit={applyFilter}>
              <div className="filter-group">
                <label>Тип недвижимости:</label>
                <select
                  name="type"
                  value={filters.type}
                  onChange={handleFilterChange}
                >
                  <option value="">Все</option>
                  <option value="Квартира">Квартира</option>
                  <option value="Дом">Дом</option>
                  <option value="Коммерческая недвижимость">
                    Коммерческая недвижимость
                  </option>
                  <option value="Земельный участок">Земельный участок</option>
                </select>
              </div>
              <div className="filter-group">
                <label>Тип сделки:</label>
                <select
                  name="dealType"
                  value={filters.dealType}
                  onChange={handleFilterChange}
                >
                  <option value="">Все</option>
                  <option value="Покупка">Покупка</option>
                  <option value="Аренда">Аренда</option>
                </select>
              </div>
              <div className="filter-group">
                <label>Город:</label>
                <input
                  type="text"
                  name="city"
                  value={filters.city}
                  onChange={handleFilterChange}
                  placeholder="Введите город"
                />
              </div>
              <div className="filter-group">
                <label>Цена (от - до):</label>
                <div className="filter-range">
                  <input
                    type="number"
                    name="minPrice"
                    value={filters.minPrice}
                    onChange={handleFilterChange}
                    placeholder="От"
                  />
                  <input
                    type="number"
                    name="maxPrice"
                    value={filters.maxPrice}
                    onChange={handleFilterChange}
                    placeholder="До"
                  />
                </div>
              </div>
              <div className="filter-actions">
                <div className="left-buttons">
                  <button type="submit" className="apply-btn">
                    Применить фильтр
                  </button>
                  <button
                    type="button"
                    className="close-btn"
                    onClick={resetFilter}
                  >
                    Сбросить фильтр
                  </button>
                </div>
                <button
                  type="button"
                  className="close-filter-btn"
                  onClick={toggleFilter}
                >
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
