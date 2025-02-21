

// import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import CartTable from '../components/CartTable';
// import Title from '../components/Title.jsx';
// import FormSection from '../components/FormSection.jsx';
// import PaymentComponent from '../components/PaymentComponent.jsx';
// import { useForm, FormProvider } from 'react-hook-form';
// import { useNavigate } from "react-router-dom";
// import {placeOrder} from "../services/CheckoutService.jsx"
// import BillingForm from "../components/BillingForm.jsx"
// import ShippingForm from '../components/ShippingForm.jsx';



// function Checkout() {
//   const cart = useSelector((state) => state.cart);
//   const [isShippingDifferent, setIsShippingDifferent] = useState(false);
//   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("bacs");
//   const navigate = useNavigate();

//   const methods = useForm();

//   const onSubmit = async (data) => {
//     const orderData = {
//       id: "5239eb84-4a00-40c0-938d-e63d2abede7d",
//       total: cart.total,
//       subTotal: cart.subTotal,
//       tax: cart.tax,
//       items: cart.items.map(item => ({
//         id: item.id,
//         name: item.name,
//         imageName: item.imageName,
//         price: item.price,
//         qty: item.qty,
//       })),
//       customer: {
//         email: data.billing.email,
//         phone: data.billing.phone,
//         note: data.billing.order_notes || "",
//         billingAdress: {
//           civility: data.billing.civility,
//           firstName: data.billing.first_name,
//           lastName: data.billing.last_name,
//           zipCode: data.billing.zipCode,
//           street: data.billing.address,
//           companyName: data.billing.company || "",
//           county: data.billing.country,
//           city: data.billing.city,
//         },
//         shippingAdress: {
//           civility: data.shipping.civility,
//           firstName: data.shipping.first_name,
//           lastName: data.shipping.last_name,
//           zipCode: data.shipping.zipCode,
//           street: data.shipping.address,
//           companyName: data.shipping.company || "",
//           county: data.shipping.country,
//           city: data.shipping.city,
//         }
//       },
//       paymentMethod: selectedPaymentMethod,
//     };

//     try {
//       const response = await fetch("http://localhost:3000/orders", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(orderData),
//       });

//       if (response.ok) {
//         navigate("/"); // Redirect to home page
//       } else {
//         console.error("Failed to place order");
//       }
//     } catch (error) {
//       console.error("Error placing order:", error);
//     }
//   };

  
  
//   return (
//     <>
//       <div className="product-big-title-area">
//         <Title title="Checkout" />
//       </div>
//       <FormProvider {...methods}>
//       <form onSubmit={methods.handleSubmit(onSubmit)}>

//         <div className="single-product-area">
//         <div className="zigzag-bottom" />
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12">
//               <div className="product-content-right">
//                 <div className="woocommerce">
//                   <form encType="multipart/form-data" action="#" className="checkout" method="post" name="checkout">
//                     <div id="customer_details" className="col2-set">

//                       <div className="col-6">
//                         <div className="woocommerce-billing-fields">
//                           <h3>Billing Details</h3>
//                           <BillingForm/>
//                         </div>
//                       </div>

//                       <div className="col-6">
//                         <div className="woocommerce-shipping-fields">
//                           <h3 id="ship-to-different-address">
//                             <label className="checkbox" htmlFor="ship-to-different-address-checkbox">
//                               Ship to a different address?
//                             </label>
//                             <input
//                               type="checkbox"
//                               name="ship_to_different_address"
//                               checked={isShippingDifferent}
//                               onChange={() => setIsShippingDifferent(!isShippingDifferent)}
//                               className="input-checkbox"
//                               id="ship-to-different-address-checkbox"
//                             />
//                           </h3>

//                           {isShippingDifferent && (
//                             <div className="shipping_address">
//                               <ShippingForm/>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     </div>

//                     <h3 id="order_review_heading">Your order</h3>
//                     <div id="order_review" style={{ position: "relative" }}>
//                       <CartTable cart={cart} />
//                       <div id="payment">
//                       <PaymentComponent />

//                       <div className="form-row place-order">
//                         <button type="submit">Place Order</button>
                       
//           {/* <input
//             type="button"
//             data-value="Place order"
//             defaultValue="Place order"
//             id="place_order"
//             name="woocommerce_checkout_place_order"
//             className="button alt"
//           /> */}
//         </div>
//         <div className="clear" />
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//         </form>
//       </FormProvider>
//     </>
//   );
// }
 
// export default Checkout;
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
// import { checkoutCart } from "../store/CartSlice";
import { useNavigate } from "react-router-dom";
import BillingForm from "../components/BillingForm";
import ShippingForm from "../components/ShippingForm";
import PaymentComponent from '../components/PaymentComponent.jsx';
import Title from '../components/Title.jsx';
import CartTable from '../components/CartTable';

const schema = yup.object().shape({
  customer: yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup.string().required("Phone number is required"),
  }),
  billingAddress: yup.object().shape({
    civility: yup.string().required("Civility is required"),
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    street: yup.string().required("Street Address is required"),
    city: yup.string().required("City is required"),
    county: yup.string().required("County is required"),
    zipCode: yup.string().required("Zip Code is required"),
  }),
  shippingAddress: yup.object().shape({
    civility: yup.string().when("shipDifferent", {
      is: true,
      then: (schema) => schema.required("Civility is required"),
    }),
    firstName: yup.string().when("shipDifferent", {
      is: true,
      then: (schema) => schema.required("First Name is required"),
    }),
    lastName: yup.string().when("shipDifferent", {
      is: true,
      then: (schema) => schema.required("Last Name is required"),
    }),
    street: yup.string().when("shipDifferent", {
      is: true,
      then: (schema) => schema.required("Street Address is required"),
    }),
    city: yup.string().when("shipDifferent", {
      is: true,
      then: (schema) => schema.required("City is required"),
    }),
    county: yup.string().when("shipDifferent", {
      is: true,
      then: (schema) => schema.required("County is required"),
    }),
    zipCode: yup.string().when("shipDifferent", {
      is: true,
      then: (schema) => schema.required("Zip Code is required"),
    }),
  }),
  paymentMethod: yup.string().required("Please select a payment method"),
});
export default function CheckoutForm() {
  //const [shipDifferent, setShipDifferent] = useState(false);
  const [isShippingDifferent, setIsShippingDifferent] = useState(false);
   //const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("bacs");
  const methods = useForm({ resolver: yupResolver(schema) });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const onSubmit = async (data) => {

    const orderData = {
      total: totalAmount,
      subTotal,
      tax,
      items,
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
        shippingAddress: shipDifferent
          ? {
              civility: data.shippingAddress?.civility,
              firstName: data.shippingAddress?.firstName,
              lastName: data.shippingAddress?.lastName,
              zipCode: data.shippingAddress?.zipCode,
              street: data.shippingAddress?.street,
              companyName: data.shippingAddress?.companyName || "",
              county: data.shippingAddress?.county,
              city: data.shippingAddress?.city,
            }
          : null, 
      },
      paymentMethod: data.paymentMethod,
    };

    console.log("Order data to be sent:", orderData); 

    try {
      const response = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Order submitted successfully:", result);

     // dispatch(checkoutCart());
      navigate("/");
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

   return (
    <>
      <div className="product-big-title-area">
        <Title title="Checkout" />
      </div>
      <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>

        <div className="single-product-area">
        <div className="zigzag-bottom" />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-content-right">
                <div className="woocommerce">
                  <form encType="multipart/form-data" action="#" className="checkout" method="post" name="checkout">
                    <div id="customer_details" className="col2-set">

                      <div className="col-6">
                        <div className="woocommerce-billing-fields">
                          <h3>Billing Details</h3>
                          <BillingForm/>
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="woocommerce-shipping-fields">
                          {/* <h3 id="ship-to-different-address">
                            <label className="checkbox" htmlFor="ship-to-different-address-checkbox">
                              Ship to a different address?
                            </label>
                            
                          </h3> */}

                          
                            <div className="shipping_address">
                              <ShippingForm/>
                            </div>
                        
                        </div>
                      </div>
                    </div>

                    <h3 id="order_review_heading">Your order</h3>
                    <div id="order_review" style={{ position: "relative" }}>
                      <CartTable cart={cart} />
                      <div id="payment">
                      <PaymentComponent />

                      <div className="form-row place-order">
                        <button type="submit">Place Order</button>
                       
          {/* <input
            type="button"
            data-value="Place order"
            defaultValue="Place order"
            id="place_order"
            name="woocommerce_checkout_place_order"
            className="button alt"
          /> */}
        </div>
        <div className="clear" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </form>
      </FormProvider>
    </>
  );
}
