import Card from "../Card/Card";
import "./CardList.scss";
import useStarWarsSrvice from "../../services/useStarWarsSrvice";
import { useEffect, useState, useCallback } from "react";
import { throttle } from "lodash";

export default function CardList() {
  const { getAllProducts, loading, error } = useStarWarsSrvice();
  const [productsList, setProductsList] = useState([]);
  const [page, setPage] = useState(1);

  const onScroll = useCallback(() => {
    const height = document.body.offsetHeight;
    const screenHeight = window.innerHeight;
    const scrolled = window.scrollY;

    const threshold = height - screenHeight / 5;

    const position = scrolled + screenHeight;

    if (position >= threshold) {
      setPage(page + 1);
    }
  }, []);

  useEffect(() => {
    productLoading();
    return productLoading();
  }, [page]);

  const productLoading = () => {
    getAllProducts(page).then(onProductListLoaded);
  };

  const onProductListLoaded = (newProductList) => {
    setProductsList([...productsList, ...newProductList]);
  };

  const errorMessage = error ? <>Error</> : null;
  const loadingMessage = loading ? <>Loading</> : null;

  // Generate Cards
  const items = productsList.map((product) => {
    return (
      <Card
        key={product.id}
        id={product.id}
        name={product.name}
        price={product.price / 100}
        image={product.image}
        shortDescription={product.shortDescription}
      />
    );
  });

  window.addEventListener("scroll", throttle(onScroll, 1000));

  return (
    <section className="card-list">
      {errorMessage}
      {loadingMessage}
      {items}
    </section>
  );
}
