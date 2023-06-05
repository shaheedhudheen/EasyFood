export default function filterData(searchInput, restaurants) {
  return restaurants.filter((restaurant) => {
    return restaurant.data?.name
      ?.toLowerCase()
      .includes(searchInput.toLowerCase());
  });
}
