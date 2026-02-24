import productAndTasks from "../assets/images/product-selection-images/Product and Tasks.jpg";
import ProductSelectionItem from "./Elements/ProductSelectionItem";

const ProductSelectionArea = () => {
  return (
    <section
      id="ProductSelectionArea"
      className="product-selection-area relative"
    >
      <div className="product-selection-content">
        <img
          className="w-[932px] mt-4"
          src={productAndTasks}
          alt="Product and Tasks"
        />
      </div>
      <div className="product-selection-gird absolute top-[0]">
        <div className="checkbox-gird flex justify-space-between items-center flex-wrap bg-[var(--bg-color)] w-[400px]">
          <ProductSelectionItem
            className={"product-and-takks"}
            productName={"Product & Tasks"}
          />
          <ProductSelectionItem
            className={"product-and-takks"}
            productName={"Product & Tasks"}
          />
          <ProductSelectionItem
            className={"product-and-takks"}
            productName={"Product & Tasks"}
          />
          <ProductSelectionItem
            className={"product-and-takks"}
            productName={"Product & Tasks"}
          />
          <ProductSelectionItem
            className={"product-and-takks"}
            productName={"Product & Tasks"}
          />
          <ProductSelectionItem
            className={"product-and-takks"}
            productName={"Product & Tasks"}
          />
          <ProductSelectionItem
            className={"product-and-takks"}
            productName={"Product & Tasks"}
          />
          <ProductSelectionItem
            className={"product-and-takks"}
            productName={"Product & Tasks"}
          />
          <ProductSelectionItem
            className={"product-and-takks"}
            productName={"Product & Tasks"}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductSelectionArea;
