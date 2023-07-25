import axios from "axios";

export const getMainCardList = async (title: string) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    if (title === "패션") {
      const result = response.data
        .filter(
          (item: any) => item.category === "men's clothing" || item.category === "women's clothing",
        )
        .slice(0, 4);
      return result;
    } else if (title === "액세서리") {
      const result = response.data.filter((item: any) => item.category === "jewelery").slice(0, 4);
      return result;
    } else if (title === "디지털") {
      const result = response.data
        .filter((item: any) => item.category === "electronics")
        .slice(0, 4);
      return result;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getCategoryCardList = async (title: string) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    if (title === "패션") {
      const result = response.data.filter(
        (item: any) => item.category === "men's clothing" || item.category === "women's clothing",
      );
      return result;
    } else if (title === "액세서리") {
      const result = response.data.filter((item: any) => item.category === "jewelery");
      return result;
    } else if (title === "디지털") {
      const result = response.data.filter((item: any) => item.category === "electronics");
      return result;
    }
  } catch (error) {
    console.log(error);
  }
};
