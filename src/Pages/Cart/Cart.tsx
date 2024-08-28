import React, { useContext } from "react";
import "./Cart.css";
import Header from "../../Components/Header/Header";
import { AiFillStar, AiOutlineDelete, AiOutlineStar } from "react-icons/ai";
import { CartContext } from "../../Context/CartContext";

export default function Cart() {
  const context = useContext(CartContext);

  const removeAllProduct = () => {
    swal({
      title: "حذف همه محصولات",
      icon: 'succes',
      buttons: ['خیر', 'بله']
    }).then((res) => {
      if (res) {
        context.removeAll()
      }

    })
  };

  const removeProduct = (id: number) => {
    swal({
      title: 'آیا میخواهید این محصول حذف شود؟',
      icon: 'succes',
      buttons: ['خیر', 'بله']
    }).then((res) => {
      if (res) {
        context.removeProduct(id);
      }

    })
  };

  return (
    <>
      <Header />
      <div>
        {context.UserCart.length ? (
          <>
            <div className="cart-topbar">
              <h3>محصولات داخل سبد خرید:</h3>
              <button onClick={() => removeAllProduct()}>
                حذف همه محصولات <AiOutlineDelete className="delete-icon" />
              </button>
            </div>
            <main className="card-index">
              {context.UserCart.map((product) => (
                <div key={product.id} className="card">
                  <img src={product.image} alt={product.title} />
                  <main>
                    <div className="cart-title">
                      {product.title.slice(0, 15)}...
                    </div>
                    <div className="cart-price-rating">
                      <div className="cart-price">{product.price} تومان</div>
                      <div className="cart-rating">
                        {Array.from({ length: 5 }, (_, index) =>
                          index < product.rating.rate ? (
                            <AiFillStar
                              key={index}
                              className="star"
                              style={{ color: "gold" }}
                            />
                          ) : (
                            <AiOutlineStar
                              key={index}
                              className="star"
                              style={{ color: "lightgray" }}
                            />
                          )
                        )}
                      </div>
                    </div>
                    <div className="product-count">
                      تعداد: {product.count}
                    </div>
                    <button
                      className="cart-remove"
                      onClick={() => removeProduct(product.id)}
                    >
                      حذف کردن
                    </button>
                  </main>
                </div>
              ))}
            </main>
          </>
        ) : (
          <div className="emptyBasket">
            <img
              src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/shopping_basket.png"
              alt="سبد خرید خالی"
            />
            <p>سبد خرید شما خالی است :(</p>
          </div>
        )}
      </div>
    </>
  );
}
