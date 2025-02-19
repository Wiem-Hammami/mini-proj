 import ShopTable from '../components/ShopTable.jsx';
 function Cart(){
    return (
        <div className="single-product-area">
  <div className="zigzag-bottom" />
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="product-content-right">
          <div className="woocommerce">
            <table cellSpacing={0} className="shop_table cart">
              <thead>
                <tr>
                  <th className="product-remove">&nbsp;</th>
                  <th className="product-thumbnail">&nbsp;</th>
                  <th className="product-name">Product</th>
                  <th className="product-price">Price</th>
                  <th className="product-quantity">Quantity</th>
                  <th className="product-subtotal">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="cart_item">
                  <td className="product-remove">
                    <a title="Remove this item" className="remove" href="#">
                      ×
                    </a>
                  </td>
                  <td className="product-thumbnail">
                    <a href="single-product.html">
                      <img
                        width={145}
                        height={145}
                        alt="poster_1_up"
                        className="shop_thumbnail"
                        src="img/product-thumb-2.jpg"
                      />
                    </a>
                  </td>
                  <td className="product-name">
                    <a href="single-product.html">Ship Your Idea</a>
                  </td>
                  <td className="product-price">
                    <span className="amount">15.00€</span>
                  </td>
                  <td className="product-quantity">
                    <div className="quantity buttons_added">
                      <input type="button" className="minus" defaultValue="-" />
                      <input
                        type="number"
                        size={4}
                        className="input-text qty text"
                        title="Qty"
                        defaultValue={1}
                        min={0}
                        step={1}
                      />
                      <input type="button" className="plus" defaultValue="+" />
                    </div>
                  </td>
                  <td className="product-subtotal">
                    <span className="amount">15.00 €</span>
                  </td>
                </tr>
                <tr>
                  <td className="actions" colSpan={6}>
                    <input
                      type="button"
                      //onclick="location.href='checkout.html'"
                      defaultValue="Checkout"
                      name="proceed"
                      className="checkout-button button alt wc-forward"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            {/* <ShopTable/> */}

            <div className="cart-collaterals">
              <div className="cross-sells">
                <h2>You may be interested in...</h2>
                <ul className="products">
                  <li className="product">
                    <a href="single-product.html">
                      <img
                        width={325}
                        height={325}
                        alt="T_4_front"
                        className="attachment-shop_catalog wp-post-image"
                        src="img/product-2.jpg"
                      />
                      <h3>Ship Your Idea</h3>
                      <span className="price">
                        <span className="amount">20.00 €</span>
                      </span>
                    </a>
                    <a
                      className="add_to_cart_button"
                      data-quantity={1}
                      data-product_sku=""
                      data-product_id={22}
                      rel="nofollow"
                      href="single-product.html"
                    >
                      Add to Cart
                    </a>
                  </li>
                  <li className="product">
                    <a href="single-product.html">
                      <img
                        width={325}
                        height={325}
                        alt="T_4_front"
                        className="attachment-shop_catalog wp-post-image"
                        src="img/product-4.jpg"
                      />
                      <h3>Ship Your Idea</h3>
                      <span className="price">
                        <span className="amount">20.00 €</span>
                      </span>
                    </a>
                    <a
                      className="add_to_cart_button"
                      data-quantity={1}
                      data-product_sku=""
                      data-product_id={22}
                      rel="nofollow"
                      href="single-product.html"
                    >
                      Add to Cart
                    </a>
                  </li>
                </ul>
              </div>
              <div className="cart_totals ">
                <h2>Cart Totals</h2>
                <table cellSpacing={0}>
                  <tbody>
                    <tr className="cart-subtotal">
                      <th>Cart Subtotal</th>
                      <td>
                        <span className="amount">15.00 €</span>
                      </td>
                    </tr>
                    <tr className="shipping">
                      <th>Taxe (20%)</th>
                      <td>20.23 €</td>
                    </tr>
                    <tr className="order-total">
                      <th>Order Total</th>
                      <td>
                        <strong>
                          <span className="amount">15.00 €</span>
                        </strong>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
 };
 export default Cart;