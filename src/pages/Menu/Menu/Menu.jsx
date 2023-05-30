import Cover from "../../Shared/Cover/Cover";
import imgMenu from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soups = menu.filter((item) => item.category === "soup");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const offereds = menu.filter((item) => item.category === "offered");
  const salads = menu.filter((item) => item.category === "salad");
  return (
    <div>
      <Cover image={imgMenu} heading={"our menu"}></Cover>
      <SectionTitle
        subHeading={"---Don't miss---"}
        heading={"TODAY's Offer"}
      ></SectionTitle>
      <MenuCategory items={offereds}></MenuCategory>
      <MenuCategory
        items={desserts}
        title={"Desserts"}
        img={dessertImg}
      ></MenuCategory>
      <MenuCategory
        items={pizzas}
        title={"Pizzas"}
        img={pizzaImg}
      ></MenuCategory>
      <MenuCategory
        items={salads}
        title={"Salads"}
        img={saladImg}
      ></MenuCategory>
      <MenuCategory items={soups} title={"Soups"} img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
