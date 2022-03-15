import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useStarWarsSrvice from "../../services/useStarWarsSrvice";
import Card from "../Card/Card";
import "./Product.scss";

export default function Product() {
  const { productId } = useParams();
  const { getProduct, postPreOrder,  loading, error } = useStarWarsSrvice();
  const [productCard, setProductCard] = useState(null);
  const [email, setEmail] = useState('');

  useEffect(() => {
    getProduct(productId).then(setProductCard);
  }, [productId]);

  const onSubmit = (e) => {
    e.preventDefault();
    postPreOrder(productId, email).then(res => (console.log(res.data)));
    setEmail('');
  }

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const errorMessage = error ? <>Error</> : null;
  const loadingMessage = loading ? <>Loading</> : null;
  const content = !(error || loading || !productCard) ? (
    <View
      product={productCard.product}
      relatedProducts={productCard.relatedProducts}
      onSubmit={onSubmit}
      onEmailChange={onEmailChange}
      email={email}
    />
  ) : null;

  return (
    <>
      {errorMessage}
      {loadingMessage}
      {content}
    </>
  );
}

const View = ({ product, relatedProducts, onSubmit, onEmailChange, email }) => {
  const { description, image, name } = product;
  const relProducts = relatedProducts.map((product) => (
    <Card
      key={product.id}
      id={product.id}
      image={product.image}
      name={product.name}
      price={product.price}
      shortDescription={product.shortDescription}
    />
  ));
  return (
    <section className="product">
      <div className="product__wrapper">
        <section className="product__form">
          <img
            src={require(`../../resources/img${image}`)}
            alt=""
            className="product__img"
          />
          <section className="product__inner">
            <h1 className="product__name">Exclusive {name}</h1>
            <p className="product__desc">{description}</p>
            <section className="product__form-order">
              <form onSubmit={onSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="product__form-email"
                  onChange={onEmailChange}
                  value={email}
                />
                <input
                  type="submit"
                  value="Pre-order Now"
                  className="product__form-submit"
                />
              </form>
            </section>
          </section>
        </section>
        <section className="product__related">
          <h3 className="product__related-caption">Related Figures</h3>
          <div className="product__related-wrapper"></div>
          {relProducts}
        </section>
      </div>
    </section>
  );
};
