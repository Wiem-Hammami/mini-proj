// import { useState } from "react";
// import { useForm } from "react-hook-form";

// const ShipAdress = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [showForm, setShowForm] = useState(false); 

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div className="col-6">
//       <div className="woocommerce-shipping-fields">
//         <h3 id="ship-to-different-address">
//           <label className="checkbox" htmlFor="ship-to-different-address-checkbox">
//             Ship to a different address?
//           </label>
//           <input
//             className="input-checkbox"
//             type="checkbox"
//             id="ship-to-different-address-checkbox"
//             name="ship_to_different_address"
//             checked={showForm}
//             onChange={() => setShowForm(!showForm)} 
//           />
//         </h3>

//         {showForm && ( 
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="shipping_address">
//               <p className="form-row form-row-wide address-field">
//                 <label htmlFor="shipping_country">
//                   Civility <abbr className="required" title="required">*</abbr>
//                 </label>
//                 <select
//                   {...register("shipping_country", { required: true })}
//                   id="shipping_country"
//                   name="shipping_country"
//                 >
//                   <option value="AX">Mr</option>
//                   <option value="AF">Mlle</option>
//                   <option value="AF">Mme</option>
//                 </select>
//                 {errors.shipping_country && <span>This field is required</span>}
//               </p>

//               <p className="form-row form-row-first validate-required">
//                 <label htmlFor="shipping_first_name">
//                   First Name <abbr className="required" title="required">*</abbr>
//                 </label>
//                 <input
//                   {...register("shipping_first_name", { required: true })}
//                   id="shipping_first_name"
//                   type="text"
//                 />
//                 {errors.shipping_first_name && <span>This field is required</span>}
//               </p>

//               <p className="form-row form-row-last validate-required">
//                 <label htmlFor="shipping_last_name">
//                   Last Name <abbr className="required" title="required">*</abbr>
//                 </label>
//                 <input
//                   {...register("shipping_last_name", { required: true })}
//                   id="shipping_last_name"
//                   type="text"
//                 />
//                 {errors.shipping_last_name && <span>This field is required</span>}
//               </p>

//               <p className="form-row form-row-wide">
//                 <label htmlFor="shipping_company">Company Name</label>
//                 <input {...register("shipping_company")} id="shipping_company" type="text" />
//               </p>

//               <p className="form-row form-row-wide address-field">
//                 <label htmlFor="shipping_address_1">
//                   Address <abbr className="required" title="required">*</abbr>
//                 </label>
//                 <input
//                   {...register("shipping_address_1", { required: true })}
//                   id="shipping_address_1"
//                   type="text"
//                 />
//                 {errors.shipping_address_1 && <span>This field is required</span>}
//               </p>

//               <p className="form-row form-row-wide address-field">
//                 <input
//                   {...register("shipping_address_2")}
//                   id="shipping_address_2"
//                   type="text"
//                   placeholder="Apartment, suite, unit etc. (optional)"
//                 />
//               </p>

//               <p className="form-row form-row-wide address-field">
//                 <label htmlFor="shipping_city">
//                   Town / City <abbr className="required" title="required">*</abbr>
//                 </label>
//                 <input
//                   {...register("shipping_city", { required: true })}
//                   id="shipping_city"
//                   type="text"
//                 />
//                 {errors.shipping_city && <span>This field is required</span>}
//               </p>

//               <p className="form-row form-row-first address-field">
//                 <label htmlFor="shipping_state">County</label>
//                 <input {...register("shipping_state")} id="shipping_state" type="text" />
//               </p>

//               <p className="form-row form-row-last address-field">
//                 <label htmlFor="shipping_postcode">
//                   Postcode <abbr className="required" title="required">*</abbr>
//                 </label>
//                 <input
//                   {...register("shipping_postcode", { required: true })}
//                   id="shipping_postcode"
//                   type="text"
//                 />
//                 {errors.shipping_postcode && <span>This field is required</span>}
//               </p>

//               <p className="form-row notes" id="order_comments_field">
//                 <label htmlFor="order_comments">Order Notes</label>
//                 <textarea
//                   {...register("order_comments")}
//                   id="order_comments"
//                   placeholder="Notes about your order, e.g. special notes for delivery."
//                   rows="2"
//                 />
//               </p>

//               <button type="submit">Submit</button>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ShipAdress;
import { useForm } from "react-hook-form";
import { useState } from "react";

const ShipAdress = ({ onShippingSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showForm, setShowForm] = useState(false);

  const onSubmit = (data) => {
    onShippingSubmit({
      civility: data.shipping_country,
      firstName: data.shipping_first_name,
      lastName: data.shipping_last_name,
      zipCode: data.shipping_postcode,
      street: data.shipping_address_1,
      companyName: data.shipping_company || "",
      county: data.shipping_state || "",
      city: data.shipping_city,
    });
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="shipping_address">
              <p className="form-row form-row-wide address-field">
                <label htmlFor="shipping_country">
                  Civility <abbr className="required" title="required">*</abbr>
                </label>
                <select
                  {...register("shipping_country", { required: true })}
                  id="shipping_country"
                  name="shipping_country"
                >
                  <option value="AX">Mr</option>
                  <option value="AF">Mlle</option>
                  <option value="AF">Mme</option>
                </select>
                {errors.shipping_country && <span>This field is required</span>}
              </p>

              <p className="form-row form-row-first validate-required">
                <label htmlFor="shipping_first_name">
                  First Name <abbr className="required" title="required">*</abbr>
                </label>
                <input
                  {...register("shipping_first_name", { required: true })}
                  id="shipping_first_name"
                  type="text"
                />
                {errors.shipping_first_name && <span>This field is required</span>}
              </p>

              <p className="form-row form-row-last validate-required">
                <label htmlFor="shipping_last_name">
                  Last Name <abbr className="required" title="required">*</abbr>
                </label>
                <input
                  {...register("shipping_last_name", { required: true })}
                  id="shipping_last_name"
                  type="text"
                />
                {errors.shipping_last_name && <span>This field is required</span>}
              </p>

              <p className="form-row form-row-wide">
                <label htmlFor="shipping_company">Company Name</label>
                <input {...register("shipping_company")} id="shipping_company" type="text" />
              </p>

              <p className="form-row form-row-wide address-field">
                <label htmlFor="shipping_address_1">
                  Address <abbr className="required" title="required">*</abbr>
                </label>
                <input
                  {...register("shipping_address_1", { required: true })}
                  id="shipping_address_1"
                  type="text"
                />
                {errors.shipping_address_1 && <span>This field is required</span>}
              </p>

              <p className="form-row form-row-wide address-field">
                <input
                  {...register("shipping_address_2")}
                  id="shipping_address_2"
                  type="text"
                  placeholder="Apartment, suite, unit etc. (optional)"
                />
              </p>

              <p className="form-row form-row-wide address-field">
                <label htmlFor="shipping_city">
                  Town / City <abbr className="required" title="required">*</abbr>
                </label>
                <input
                  {...register("shipping_city", { required: true })}
                  id="shipping_city"
                  type="text"
                />
                {errors.shipping_city && <span>This field is required</span>}
              </p>

              <p className="form-row form-row-first address-field">
                <label htmlFor="shipping_state">County</label>
                <input {...register("shipping_state")} id="shipping_state" type="text" />
              </p>

              <p className="form-row form-row-last address-field">
                <label htmlFor="shipping_postcode">
                  Postcode <abbr className="required" title="required">*</abbr>
                </label>
                <input
                  {...register("shipping_postcode", { required: true })}
                  id="shipping_postcode"
                  type="text"
                />
                {errors.shipping_postcode && <span>This field is required</span>}
              </p>

              <p className="form-row notes" id="order_comments_field">
                <label htmlFor="order_comments">Order Notes</label>
                <textarea
                  {...register("order_comments")}
                  id="order_comments"
                  placeholder="Notes about your order, e.g. special notes for delivery."
                  rows="2"
                />
              </p>

              {/* <button type="submit">Submit</button> */}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ShipAdress;
