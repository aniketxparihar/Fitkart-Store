
import { useFilter } from "../../Context/Filter-Context";
const funcFilter = (prod) => {
    const { state, dispatch } = useFilter();
  return prod
    ?.filter((product) => {
      return (
        product.categoryName.some((value) => {
          if ([...state.category].length > 0 && state.categoryFilter) {
            return [...state.category].includes(value);
          } else {
            return true;
          }
        }) &&
        product.rating >= state.rating &&
        product.price <= state.maxPrice
        // product.title.includes(searchFilterString)
      );
    })
    .sort((a, b) => {
      if (state.sort === "LOW_TO_HIGH") {
        return Number(a.price) - Number(b.price);
      }
      if (state.sort === "HIGH_TO_LOW") {
        return Number(b.price) - Number(a.price);
      }
      return 0;
    });
};
export default funcFilter;