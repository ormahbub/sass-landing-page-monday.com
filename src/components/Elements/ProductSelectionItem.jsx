const ProductSelectionItem = ({ className, productName }) => {
  return (
    <div className={`${className} w-[31%]`}>
      <input type="checkbox" />
      <span>{productName}</span>
    </div>
  );
};

export default ProductSelectionItem;
