const fetchProducts = async (searchValue) => {
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${searchValue}`);
    const data = await response.json();
    return data.results
  } catch (err) {
    console.error(err);
  }
};

export default fetchProducts