// function PaymentComponent(){

//     const handlePayPalClick = () => {
//         window.open('https://www.paypal.com/gb/webapps/mpp/paypal-popup', 'WIPaypal', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700');
//       };
//     return(
        
//         <ul className="payment_methods methods">
//           <li className="payment_method_bacs">
//             <input
//               type="radio"
//               data-order_button_text=""
//               defaultChecked="checked"
//               defaultValue="bacs"
//               name="payment_method"
//               className="input-radio"
//               id="payment_method_bacs" 
//             />
//             <label htmlFor="payment_method_bacs">
//               Direct Bank Transfer{" "}
//             </label>
//             <div className="payment_box payment_method_bacs">
//               <p>
//                 Make your payment directly into our bank account.
//                 Please use your Order ID as the payment reference.
//                 Your order won’t be shipped until the funds have
//                 cleared in our account.
//               </p>
//             </div>
//           </li>
//           <li className="payment_method_cheque">
//             <input
//               type="radio"
//               data-order_button_text=""
//               defaultValue="cheque"
//               name="payment_method"
//               className="input-radio"
//               id="payment_method_cheque"
//             />
//             <label htmlFor="payment_method_cheque">
//               Cheque Payment{" "}
//             </label>
//             <div
//               style={{ display: "none" }}
//               className="payment_box payment_method_cheque"
//             >
//               <p>
//                 Please send your cheque to Store Name, Store Street,
//                 Store Town, Store State / County, Store Postcode.
//               </p>
//             </div>
//           </li>
//           <li className="payment_method_paypal">
//             <input
//               type="radio"
//               data-order_button_text="Proceed to PayPal"
//               defaultValue="paypal"
//               name="payment_method"
//               className="input-radio"
//               id="payment_method_paypal"
//             />
//             <label htmlFor="payment_method_paypal">
//               PayPal{" "}
//               <img
//                 alt="PayPal Acceptance Mark"
//                 src="https://www.paypalobjects.com/webstatic/mktg/Logo/AM_mc_vs_ms_ae_UK.png"
//               />
//              <a
//   title="What is PayPal?"
//   onClick={handlePayPalClick}
//   className="about_paypal"
//   href="https://www.paypal.com/gb/webapps/mpp/paypal-popup"
// >
//   What is PayPal?
// </a>
//             </label>
//             <div
//               style={{ display: "none" }}
//               className="payment_box payment_method_paypal"
//             >
//               <p>
//                 Pay via PayPal; you can pay with your credit card if
//                 you don’t have a PayPal account.
//               </p>
//             </div>
//           </li>
//         </ul>
        
    
//     )

// }
// export default PaymentComponent;
//import React from "react";
import { useFormContext } from "react-hook-form";

export default function PaymentComponent() {
  const { register, watch, formState: { errors } } = useFormContext();
  const selectedPayment = watch("paymentMethod"); 

  return (
    <div id="payment">
      <h3>Payment Method</h3>
      <ul className="payment_methods methods">
        
        {/* Direct Bank Transfer */}
        <li className="payment_method_bacs">
          <input {...register("paymentMethod")} type="radio" value="bank_transfer" id="payment_method_bacs" className="input-radio" />
          <label htmlFor="payment_method_bacs">Direct Bank Transfer</label>
          {selectedPayment === "bank_transfer" && (
            <div className="payment_box payment_method_bacs">
              <p>Make your payment directly into our bank account. Your order won’t be shipped until the funds have cleared.</p>
            </div>
          )}
        </li>

        <li className="payment_method_cheque">
          <input {...register("paymentMethod")} type="radio" value="cheque" id="payment_method_cheque" className="input-radio" />
          <label htmlFor="payment_method_cheque">Cheque Payment</label>
          {selectedPayment === "cheque" && (
            <div className="payment_box payment_method_cheque">
              <p>Please send your cheque to our store address.</p>
            </div>
          )}
        </li>

        <li className="payment_method_paypal">
          <input {...register("paymentMethod")} type="radio" value="paypal" id="payment_method_paypal" className="input-radio" />
          <label htmlFor="payment_method_paypal">
            PayPal 
            <img alt="PayPal Acceptance Mark" src="https://www.paypalobjects.com/webstatic/mktg/Logo/AM_mc_vs_ms_ae_UK.png" />
            <a title="What is PayPal?" 
               className="about_paypal" 
               href="https://www.paypal.com/gb/webapps/mpp/paypal-popup" 
               target="_blank" 
               rel="noopener noreferrer">
              What is PayPal?
            </a>
          </label>
          {selectedPayment === "paypal" && (
            <div className="payment_box payment_method_paypal">
              <p>Pay via PayPal; you can use your credit card even if you don’t have a PayPal account.</p>
            </div>
          )}
        </li>
      </ul>

      <p className="error">{errors.paymentMethod?.message}</p>
    </div>
  );
}
