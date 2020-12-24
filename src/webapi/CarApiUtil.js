import EPaceImage from "../assets/items/e-pace.jpg";
import FPaceImage from "../assets/items/f-pace.jpg";
import XJImage from "../assets/items/xj.jpg";
import XFImage from "../assets/items/xf.jpg";

const axios = require("axios");

const images = [EPaceImage, FPaceImage, XJImage, XFImage];

const getItems = (setLoading) => {
  let cars = [];
  axios
    .get("http://localhost:8080/api/v1/car")
    .then(function (response) {
      response.data.forEach((it, index) => {
        var car = {
          id: it.id,
          title: it.name,
          price: it.price,
          year: it.price,
          img: images[index],
        };
        cars.push(car);
      });
    })
    .then(() => setLoading(true))
    .catch(function (error) {
      console.log(error);
    });
  return cars;
};

export default getItems;
