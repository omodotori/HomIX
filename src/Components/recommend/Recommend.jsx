import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./recommend.css";
import city from "../../assets/city.png";
import useSearchStore from "../../store/searchStore";
// Импорт изображений
import img1 from "../../assets/1.jpeg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/6.jpg";
import img7 from "../../assets/7.jpg";
import img8 from "../../assets/8.jpg";
import img9 from "../../assets/9.jpg";
import img10 from "../../assets/10.jpg";
import img11 from "../../assets/11.jpg";
import img12 from "../../assets/12.jpg";
import img13 from "../../assets/13.jpg";
import img14 from "../../assets/14.jpg";
import img15 from "../../assets/15.jpg";
import img16 from "../../assets/16.jpg";
import img17 from "../../assets/17.jpg";
import img18 from "../../assets/18.jpg";
import img19 from "../../assets/19.jpg";
import img20 from "../../assets/20.jpg";

export const listings = [
  {
    id: 1,
    title: "Уютная квартира в центре",
    description: "Уютная квартира в центре города с хорошим ремонтом.",
    img: img1,
    type: "Квартира",
    deal_type: "Аренда",
    city: "Астана",
    price: "25,000 ₸",
    price_type: "\\ месяц",
    phone: "+7 701 123 45 67",
  },
  {
    id: 2,
    title: "Просторный дом с участком",
    description: "Просторный дом с большим участком и гаражом.",
    img: img2,
    type: "Дом",
    deal_type: "Покупка",
    city: "Алматы",
    price: "45,000,000 ₸",
    phone: "+7 702 234 56 78",
  },
  {
    id: 3,
    title: "Коммерческое помещение в центре",
    description: "Коммерческое помещение в центре города, идеальное под офис.",
    img: img3,
    type: "Коммерческая недвижимость",
    deal_type: "Аренда",
    city: "Шымкент",
    price: "350,000 ₸",
    price_type: "\\ месяц",
    phone: "+7 701 123 45 67",
  },
  {
    id: 4,
    title: "Земельный участок под строительство",
    description:
      "Отличный земельный участок в пригороде для строительства дома.",
    img: img6,
    type: "Земельный участок",
    deal_type: "Покупка",
    city: "Караганда",
    price: "10,000,000 ₸",
    phone: "+7 701 123 45 67",
  },
  {
    id: 5,
    title: "Современная студия",
    description: "Небольшая уютная студия в новом доме.",
    img: img4,
    type: "Квартира",
    deal_type: "Аренда",
    city: "Актобе",
    price: "80,000 ₸",
    price_type: "\\ месяц",
    phone: "+7 701 123 45 67",
  },
  {
    id: 6,
    title: "Коттедж у реки",
    description: "Прекрасный коттедж на берегу реки с панорамными окнами.",
    img: img5,
    type: "Дом",
    deal_type: "Покупка",
    city: "Павлодар",
    price: "60,000,000 ₸",
    area: 300,
    rooms: 6,
    floor: 2,
    total_floors: 2,
    built_year: 2012,
    phone: "+7 701 123 45 67",
  },
  {
    id: 7,
    title: "Элитная квартира с видом на море",
    description: "Роскошная квартира с панорамным видом на море.",
    img: img7,
    type: "Квартира",
    deal_type: "Покупка",
    city: "Актау",
    price: "120,000,000 ₸",
    area: 150,
    rooms: 4,
    floor: 10,
    total_floors: 15,
    built_year: 2021,
    phone: "+7 701 123 45 67",
  },
  {
    id: 8,
    title: "Складское помещение",
    description: "Большое складское помещение в промышленной зоне.",
    img: img8,
    type: "Коммерческая недвижимость",
    deal_type: "Аренда",
    city: "Костанай",
    price: "500,000 ₸",
    price_type: "\\ месяц",
    area: 1000,
    rooms: 0,
    floor: 1,
    total_floors: 1,
    built_year: 2000,
    phone: "+7 701 123 45 67",
  },
  {
    id: 9,
    title: "Дача у озера",
    description: "Уютная дача с садом и выходом к озеру.",
    img: img9,
    type: "Дом",
    deal_type: "Покупка",
    city: "Кокшетау",
    price: "15,000,000 ₸",
    area: 80,
    rooms: 3,
    floor: 1,
    total_floors: 1,
    built_year: 1995,
    phone: "+7 701 123 45 67",
  },
  {
    id: 10,
    title: "Офис в центре города",
    description: "Современный офис с мебелью и техникой.",
    img: img10,
    type: "Коммерческая недвижимость",
    deal_type: "Аренда",
    city: "Астана",
    price: "700,000 ₸",
    price_type: "\\ месяц",
    area: 200,
    rooms: 5,
    floor: 4,
    total_floors: 10,
    built_year: 2018,
    phone: "+7 701 123 45 67",
  },
  {
    id: 11,
    title: "Квартира в новостройке",
    description: "Квартира с черновой отделкой в новом жилом комплексе.",
    img: img11,
    type: "Квартира",
    deal_type: "Покупка",
    city: "Тараз",
    price: "18,000,000 ₸",
    area: 65,
    rooms: 2,
    floor: 3,
    total_floors: 9,
    built_year: 2022,
    phone: "+7 701 123 45 67",
  },
  {
    id: 12,
    title: "Гараж в центре",
    description: "Гараж в удобном месте рядом с жилыми домами.",
    img: img12,
    type: "Гараж",
    deal_type: "Покупка",
    city: "Шымкент",
    price: "2,500,000 ₸",
    area: 20,
    rooms: 0,
    floor: 0,
    total_floors: 0,
    built_year: 2010,
    phone: "+7 701 123 45 67",
  },
  {
    id: 13,
    title: "Земельный участок у реки",
    description: "Участок для строительства дома с видом на реку.",
    img: img13,
    type: "Земельный участок",
    deal_type: "Покупка",
    city: "Усть-Каменогорск",
    price: "8,000,000 ₸",
    area: 600,
    rooms: 0,
    floor: 0,
    total_floors: 0,
    built_year: 0,
    phone: "+7 701 123 45 67",
  },
  {
    id: 14,
    title: "Коттедж в элитном районе",
    description: "Просторный коттедж с бассейном и садом.",
    img: img14,
    type: "Дом",
    deal_type: "Покупка",
    city: "Алматы",
    price: "150,000,000 ₸",
    area: 400,
    rooms: 7,
    floor: 2,
    total_floors: 2,
    built_year: 2015,
    phone: "+7 701 123 45 67",
  },
  {
    id: 15,
    title: "Комната в общежитии",
    description: "Небольшая комната в общежитии для студентов.",
    img: img15,
    type: "Комната",
    deal_type: "Аренда",
    city: "Караганда",
    price: "15,000 ₸",
    price_type: "\\ месяц",
    area: 18,
    rooms: 1,
    floor: 2,
    total_floors: 5,
    built_year: 1980,
    phone: "+7 701 123 45 67",
  },
  {
    id: 16,
    title: "Торговое помещение",
    description: "Помещение под магазин в торговом центре.",
    img: img16,
    type: "Коммерческая недвижимость",
    deal_type: "Аренда",
    city: "Актобе",
    price: "1,000,000 ₸",
    price_type: "\\ месяц",
    area: 150,
    rooms: 0,
    floor: 1,
    total_floors: 3,
    built_year: 2017,
    phone: "+7 701 123 45 67",
  },
  {
    id: 17,
    title: "Дом в горах",
    description: "Уютный дом в горах с видом на природу.",
    img: img17,
    type: "Дом",
    deal_type: "Покупка",
    city: "Алматы",
    price: "75,000,000 ₸",
    area: 200,
    rooms: 4,
    floor: 2,
    total_floors: 2,
    built_year: 2010,
    phone: "+7 701 123 45 67",
  },
  {
    id: 18,
    title: "Квартира с дизайнерским ремонтом",
    description: "Современная квартира с дизайнерским ремонтом и мебелью.",
    img: img18,
    type: "Квартира",
    deal_type: "Покупка",
    city: "Астана",
    price: "35,000,000 ₸",
    area: 80,
    rooms: 3,
    floor: 6,
    total_floors: 12,
    built_year: 2019,
    phone: "+7 701 123 45 67",
  },
  {
    id: 19,
    title: "Загородный дом с бассейном",
    description: "Просторный загородный дом с бассейном и садом.",
    img: img19,
    type: "Дом",
    deal_type: "Покупка",
    city: "Алматы",
    price: "90,000,000 ₸",
    area: 350,
    rooms: 6,
    floor: 2,
    total_floors: 2,
    built_year: 2016,
    phone: "+7 701 123 45 67",
  },
  {
    id: 20,
    title: "Офис в бизнес-центре",
    description: "Офисное помещение в современном бизнес-центре.",
    img: img20,
    type: "Коммерческая недвижимость",
    deal_type: "Аренда",
    city: "Шымкент",
    price: "450,000 ₸",
    price_type: "\\ месяц",
    area: 150,
    rooms: 4,
    floor: 5,
    total_floors: 10,
    built_year: 2015,
    phone: "+7 701 123 45 67",
  },
].map((ad, index) => ({
  id: ad.id || `generated-id-${index}`, // Генерируем уникальный id, если отсутствует
  ...ad,
}));

const Recommend = ({ theme }) => {
  const { filteredListings, filters, setFilters } = useSearchStore();
  const [showFilter, setShowFilter] = useState(false);

  const toggleFilter = () => setShowFilter(!showFilter);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const resetFilter = () => {
    setFilters({
      type: "",
      dealType: "",
      city: "",
      minPrice: "",
      maxPrice: "",
    });
  };

  return (
    <div className={`recommendation-container text-${theme}`}>
      <div className="recommendation-header">
        <span>Recommended Property</span>
        <button className="filter-btn" onClick={toggleFilter}>
          Фильтр
        </button>
      </div>
      <div className="recommendation-list">
        {filteredListings.map((ad) => (
          <Link
            to={`/ads/${ad.id}`}
            key={ad.id} // Уникальный ключ для каждого элемента
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
        ))}
      </div>
      {showFilter && (
        <div className={`filter-modal text-${theme}`}>
          <div className={`filter-content text-${theme}`}>
            <h2>Фильтры</h2>
            <form>
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
                <button type="button" className="apply-btn" onClick={toggleFilter}>
                  Закрыть
                </button>
                <button type="button" className="close-btn" onClick={resetFilter}>
                  Сбросить фильтр
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
