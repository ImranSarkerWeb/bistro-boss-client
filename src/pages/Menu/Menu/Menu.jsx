import Cover from "../../Shared/Cover/Cover";
import imgMenu from "../../../assets/menu/banner3.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Menu = () => {
  return (
    <div>
      <Cover image={imgMenu} heading={"our menu"}></Cover>
      <SectionTitle
        subHeading={"---Don't miss---"}
        heading={"TODAY's Offer"}
      ></SectionTitle>
    </div>
  );
};

export default Menu;
