const ProductSelectionItem = ({ className, productName, idNum }) => {
  return (
    <div
      className={`${className} w-[32.5%] h-[120px] border-[1px] rounded-[4px] border-[#dddddd]`}
    >
      <label
        className="flex flex-col justify-center items-center gap-y-2 h-full w-full"
        htmlFor={`checkbox_000${idNum}`}
      >
        <input
          className="h-[20px] w-[20px]"
          id={`checkbox_000${idNum}`}
          name={`checkbox_000${idNum}`}
          type="checkbox"
        />
        <span className="text-[13px]">{productName}</span>
      </label>
    </div>
  );
};

export default ProductSelectionItem;
