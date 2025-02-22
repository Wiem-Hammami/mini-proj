
import { useState } from "react";
import { useFormContext } from "react-hook-form";


const ShipAdress = () => {
  const {
    register,
    
  } = useFormContext();  const [showForm, setShowForm] = useState(false);


    return (
    <div className="col-6">
      <div className="woocommerce-shipping-fields">
        <h3 id="ship-to-different-address">
          <label className="checkbox" htmlFor="ship-to-different-address-checkbox">
            Ship to a different address?
          </label>
          <input
            className="input-checkbox"
            type="checkbox"
            id="ship-to-different-address-checkbox"
            name="ship_to_different_address"
            checked={showForm}
            onChange={() => setShowForm(!showForm)} 
          />
        </h3>

        {showForm && ( 
         
            <div className="shipping_address" style={{display: "block"}}>
            <div className="form-row">
                <label htmlFor="billing_country">
                  Civility <abbr className="required" title="required">*</abbr>
                </label>
                <select {...register("billingAddress.civility", { required: "Civility is required" })} className="input-text">

                  <option value="AX">Mr</option>
                  <option value="AF">Mlle</option>
                  <option value="AF">Mme</option>
                </select>
              </div>

              <p className="form-row form-row-first validate-required">
                <label htmlFor="shipping_first_name">
                  First Name <abbr className="required" title="required">*</abbr>
                </label>
                <input {...register("shippingAddress.firstName", { "First Name is required" : false })} className="input-text" />

              </p>

              <p className="form-row form-row-last validate-required">
                <label htmlFor="shipping_last_name">
                  Last Name <abbr className="required" title="required">*</abbr>
                </label>
                
                <input {...register("shippingAddress.lastName", { "Last Name is required" : false })} className="input-text" />

                
              </p>

              <p className="form-row form-row-first validate-required">
                <label htmlFor="shipping_company">Company Name</label>
                <input {...register("shippingAddress.companyName")} id="shipping_company" type="text" />
              </p>

              <p className="form-row form-row-first validate-required ">
                <label htmlFor="shipping_address_1">
                  Address <abbr className="required" title="required">*</abbr>
                </label>
                <input {...register("shippingAddress.street", { "Street Address is required" : false })} className="input-text" />

              </p>

          

              <p className="form-row form-row-first validate-required ">
                <label htmlFor="shipping_city">
                  Town / City <abbr className="required" title="required">*</abbr>
                </label>
                <input {...register("shippingAddress.city", {  "City is required" : false })} className="input-text" />

              </p>

             

              <p className="form-row form-row-last address-field">
                <label htmlFor="shipping_postcode">
                  Postcode <abbr className="required" title="required">*</abbr>
                </label>
                <input {...register("shippingAddress.zipCode", {  "Zip Code is required" : false })} className="input-text" />

              </p>

             
            </div>
         
        )}
      </div>
    </div>
  );
};

export default ShipAdress;
