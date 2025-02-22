
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
import {useForm,FormProvider} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  customer: yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup.string().required("phone number is required"),
  }),
  billingAddress: yup.object().shape({
    civility: yup.string().required("Civility is required"),
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    city: yup.string().required("City is required"),
    county: yup.string().required("County is required"),
    zipCode: yup.string().required("Zip Code is required"),
  }),
  shippingAddress: yup.object().shape({
   
  }),
  paymentMethod: yup.string().required("Please select a payment method"),
});


function Checkout  () {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const methods = useForm({ resolver: yupResolver(schema) });

  const cart = useSelector((state) => state.cart);
  const [orderPlaced, setOrderPlaced] = useState(false);



  const onSubmit = async (data) => {
   
    const orderData = {
      total: cart.total,
      subTotal: cart.subTotal,
      tax: cart.tax,
      items: cart.items,
      customer: {
        email: data.email,
        phone: data.phone, 
        billingAddress: {
          civility: data.billingAddress?.civility,
          firstName: data.billingAddress?.firstName,
          lastName: data.billingAddress?.lastName,
          zipCode: data.billingAddress?.zipCode,
          street: data.billingAddress?.street,
          companyName: data.billingAddress?.companyName || "",
          county: data.billingAddress?.county,
          city: data.billingAddress?.city,
        },
        shippingAddress: 
           {
              civility: data.shippingAddress?.civility,
              firstName: data.shippingAddress?.firstName,
              lastName: data.shippingAddress?.lastName,
              zipCode: data.shippingAddress?.zipCode,
              street: data.shippingAddress?.street,
              companyName: data.shippingAddress?.companyName || "",
              county: data.shippingAddress?.county,
              city: data.shippingAddress?.city,
            }
     
      },
      paymentMethod: data.paymentMethod,
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
      <Title title="Checkout" />
      <div className="single-product-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-content-right">
                <div className="woocommerce">
                <FormProvider {...methods}>
                <form
                    onSubmit={methods.handleSubmit(
                      (data) => {
                        console.log("Submitting order with data:", data);
                        onSubmit(data);
                      },
                      (errors) => {
                        console.error("Form validation errors:", errors); 
                      }
                    )}
                    className="checkout"
                  >
                    <div className="col2-set" id="customer_details">
                      <BillingDetails  />
                      <ShipAdress  />
                    </div>
                    <h3 id="order_review_heading">Your order</h3>
                    <CartTable cart={cart} />
                    <PaymentComponent />
                    <div className="form-row place-order">
                      {/* <input
                        className="button alt"
                        type="button"
                        value="Place order"
                        onClick={handlePlaceOrder} 
                      /> */}
                      <button type="submit" className="button alt">
                        Place Order
                      </button>
                    </div>
                    {orderPlaced && <div className="order-success-message">Order placed successfully!</div>}
                  </form>
                  </FormProvider>
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
