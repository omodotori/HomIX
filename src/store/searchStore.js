// store.js
import { create } from "zustand";
import { listings } from "../Components/recommend/Recommend";

const useSearchStore = create((set) => ({
  query: "",
  filters: {
    type: "",
    dealType: "",
    city: "",
    minPrice: "",
    maxPrice: "",
  },
  filteredListings: listings,
  setQuery: (value) =>
    set((state) => {
      const filtered = listings.filter((ad) => {
        const matchesQuery =
          (ad.title && ad.title.toLowerCase().includes(value.toLowerCase())) ||
          (ad.description &&
            ad.description.toLowerCase().includes(value.toLowerCase()));
        return matchesQuery && applyFilters(ad, state.filters);
      });
      return { query: value, filteredListings: filtered };
    }),
  setFilters: (newFilters) =>
    set((state) => {
      const filtered = listings.filter((ad) => {
        const matchesQuery =
          (ad.title &&
            ad.title.toLowerCase().includes(state.query.toLowerCase())) ||
          (ad.description &&
            ad.description.toLowerCase().includes(state.query.toLowerCase()));
        return matchesQuery && applyFilters(ad, newFilters);
      });
      return { filters: newFilters, filteredListings: filtered };
    }),
}));

const applyFilters = (ad, filters) => {
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
};

export default useSearchStore;
export const useFilteredListings = () =>
  useSearchStore((state) => state.filteredListings);
