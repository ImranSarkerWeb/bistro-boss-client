const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="w-3/12 mx-auto my-12">
      <p className="text-amber-400 text-center italic mb-2">{subHeading}</p>
      <h3 className="uppercase text-4xl text-center border-y-4 py-3">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
