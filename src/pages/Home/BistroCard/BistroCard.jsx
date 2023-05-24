import "./BistroCard.css";
const BistroCard = () => {
  return (
    <div className="bistro-card h-96 relative  bg-fixed my-20">
      <div className=" w-[80%] left-32 absolute top-12   shadow-lg  p-12  bg-white">
        <div>
          <h1 className="text-center z-0 uppercase text-4xl my-3 ">
            Bistro Boss
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
            natus! Delectus quia dignissimos nam minima id, placeat tempore
            deleniti amet culpa perspiciatis repellendus debitis laudantium
            similique unde alias ex facilis? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Dolores cupiditate ducimus soluta
            itaque aperiam! Praesentium eveniet delectus eius suscipit aperiam!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BistroCard;
