const InventoryItem = ({ _id, image, text, description, price }) => {
  return (
    <div key={_id} className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pb-8 bg-white">
      {/* Use the destructured properties to access the values passed from the parent component */}
      <img
        className="pt-12 w-20 mx-auto pb-4"
        src={image}
        alt={description}
      />
      <p className=" py-[60px] text-l font-medium inline mx-6">
        {text}
      </p>
      <br />
      <p className=" py-[60px] text-l font-medium inline mx-6">
        {price}
      </p>
    </div>
  );
};

export default InventoryItem;