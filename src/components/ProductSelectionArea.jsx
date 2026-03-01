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
        <div className="checkbox-gird flex justify-between items-center flex-wrap bg-[var(--bg-color)] w-[400px] gap-y-1 p-4 rounded-xl shadow-xl">
          <ProductSelectionItem
            className={"product-and-takks"}
            productName={"Product & Tasks"}
            idNum={1}
          />
          <ProductSelectionItem
            className={"product-and-takks"}
            productName={"Product & Tasks"}
            idNum={2}
          />
          <ProductSelectionItem
            className={"product-and-takks"}
            productName={"Product & Tasks"}
            idNum={3}
          />
          <ProductSelectionItem
            className={"product-and-takks"}
            productName={"Product & Tasks"}
            idNum={4}
          />
          <ProductSelectionItem
            className={"product-and-takks"}
            productName={"Product & Tasks"}
            idNum={5}
          />
          <ProductSelectionItem
            className={"product-and-takks"}
            productName={"Product & Tasks"}
            idNum={6}
          />
          <ProductSelectionItem
            className={"product-and-takks"}
            productName={"Product & Tasks"}
            idNum={7}
          />
          <ProductSelectionItem
            className={"product-and-takks"}
            productName={"Product & Tasks"}
            idNum={8}
          />
          <ProductSelectionItem
            className={"product-and-takks"}
            productName={"Product & Tasks"}
            idNum={9}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductSelectionArea;
