

// import Title from "../components/Title.jsx"; 
// import BillingDetails from '../components/BillingForm.jsx';
// import ShipAdress from '../components/ShippingForm.jsx';
// import PaymentComponent from '../components/PaymentComponent';
// import CartTable from '../components/CartTable.jsx'
// import { useNavigate } from "react-router-dom";


// import { useSelector } from 'react-redux';
// import { useState } from 'react'; 
// import { placeOrder } from "../services/CheckoutService.jsx";

// const Checkout = () => {
//   const navigate = useNavigate();

//   const cart = useSelector((state)=>state.cart)
//    const [orderPlaced, setOrderPlaced] = useState(false); 
//   const orderData = {
//     id: new Date().toISOString(),  
//     total: cart.total, 
//     subTotal: cart.subTotal, 
//     tax: cart.tax, 
//     items: cart.items.map(item => ({
//       id: item.id,
//       name: item.name,
//       imageName: item.imageName,
//       price: item.price,
//       qty: item.qty
//     })),
//     paymentMethod: "Paypal",
//   };


//   const handlePlaceOrder = async () => {
//     try {
//       placeOrder(orderData);
      
//       setOrderPlaced(true);
//       navigate("/");

      

//     } catch (error) {
//       console.error('Error placing order:', error);
//     }
//   };

//   return (
//     <div>
//       <Title categoryTitle="Checkout" />
//       <div className="single-product-area">
//         <div className="zigzag-bottom" />
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12">
//               <div className="product-content-right">
//                 <div className="woocommerce">
//                   <form
//                     action="#"
//                     className="checkout"
//                     encType="multipart/form-data"
//                     method="post"
//                     name="checkout">
//                     <div className="col2-set" id="customer_details">
//                       <BillingDetails />
//                       <ShipAdress />
//                     </div>
//                     <h3 id="order_review_heading">Your order</h3>
//                     <div
//                       id="order_review"
//                       style={{
//                         position: "relative",
//                       }}>
//                       <CartTable cart={cart} />
//                       <PaymentComponent />
//                       <div className="form-row place-order">
//                         <input
//                           className="button alt"
//                           data-value="Place order"
//                           defaultValue="Place order"
//                           id="place_order"
//                           name="woocommerce_checkout_place_order"
//                           type="button"
//                           onClick={handlePlaceOrder} 
//                         />
//                       </div>
//                       <div className="clear" />
//                     </div>
//                   </form>

//                   {orderPlaced && <div className="order-success-message">Order placed successfully!</div>}

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Title from "../components/Title.jsx"; 
import BillingDetails from '../components/BillingForm.jsx';
import ShipAdress from '../components/ShippingForm.jsx';
import PaymentComponent from '../components/PaymentComponent';
import CartTable from '../components/CartTable.jsx';
import { placeOrder } from "../services/CheckoutService.jsx";
import { clearCartAPI } from "../store/CartSlice";


function Checkout  () {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  // États pour stocker les adresses
  const [billingAddress, setBillingAddress] = useState(null);
  const [shippingAddress, setShippingAddress] = useState(null);
  const [customerInfo, setCustomerInfo] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Callback pour récupérer les données des formulaires
  const handleBillingData = (data) => {
    setBillingAddress(data);
    setCustomerInfo({
      email: data.billing_email,
      phone: data.billing_phone,
      note: data.order_comments || "",
    });
  };

  const handleShippingData = (data) => {
    setShippingAddress(data);
  };

  const handlePlaceOrder = async () => {
    const orderData = {
      id: new Date().toISOString(),
      total: cart.total,
      subTotal: cart.subTotal,
      tax: cart.tax,
      items: cart.items.map(item => ({
        id: item.id,
        name: item.name,
        imageName: item.imageName,
        price: item.price,
        qty: item.qty
      })),
      customer: {
        ...customerInfo,
        billingAdress: billingAddress,
        shippingAdress: shippingAddress || billingAddress, 
      },
      paymentMethod: "Paypal",
    };

    try {
      await placeOrder(orderData);

      dispatch(clearCartAPI());
      setOrderPlaced(true);
      navigate("/");
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };


  return (
    <div>
      <Title categoryTitle="Checkout" />
      <div className="single-product-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-content-right">
                <div className="woocommerce">
                  <form className="checkout">
                    <div className="col2-set" id="customer_details">
                      <BillingDetails onBillingSubmit={handleBillingData} />
                      <ShipAdress onShippingSubmit={handleShippingData} />
                    </div>
                    <h3 id="order_review_heading">Your order</h3>
                    <CartTable cart={cart} />
                    <PaymentComponent />
                    <div className="form-row place-order">
                      <input
                        className="button alt"
                        type="button"
                        value="Place order"
                        onClick={handlePlaceOrder} 
                      />
                    </div>
                    {orderPlaced && <div className="order-success-message">Order placed successfully!</div>}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
