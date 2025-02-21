// import { useForm } from 'react-hook-form';

// const BillingDetails = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = (data) => {
//     console.log(data); 
//   };

//   return (
//     <div className="col-6">
//       <div className="woocommerce-billing-fields">
//         <h3>Billing Details</h3>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="form-row">
//             <label htmlFor="billing_country">
//               Civility <abbr className="required" title="required">*</abbr>
//             </label>
//             <select
//               {...register("billing_country", { required: true })}
//               id="billing_country"
//               name="billing_country"
//             >
//               <option value="AX">Mr</option>
//               <option value="AF">Mlle</option>
//               <option value="AF">Mme</option>
//             </select>
//             {errors.billing_country && <span>This field is required</span>}
//           </div>

//           <div className="form-row">
//             <label htmlFor="billing_first_name">
//               First Name <abbr className="required" title="required">*</abbr>
//             </label>
//             <input
//               {...register("billing_first_name", { required: true })}
//               id="billing_first_name"
//               type="text"
//             />
//             {errors.billing_first_name && <span>This field is required</span>}
//           </div>

//           <div className="form-row">
//             <label htmlFor="billing_last_name">
//               Last Name <abbr className="required" title="required">*</abbr>
//             </label>
//             <input
//               {...register("billing_last_name", { required: true })}
//               id="billing_last_name"
//               type="text"
//             />
//             {errors.billing_last_name && <span>This field is required</span>}
//           </div>

//           <div className="form-row">
//             <label htmlFor="billing_email">
//               Email Address <abbr className="required" title="required">*</abbr>
//             </label>
//             <input
//               {...register("billing_email", { required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ })}
//               id="billing_email"
//               type="email"
//             />
//             {errors.billing_email && <span>This field is required and must be a valid email</span>}
//           </div>

//           <div className="form-row">
//             <label htmlFor="billing_phone">
//               Phone <abbr className="required" title="required">*</abbr>
//             </label>
//             <input
//               {...register("billing_phone", { required: true, pattern: /^[0-9]{10}$/ })}
//               id="billing_phone"
//               type="text"
//             />
//             {errors.billing_phone && <span>This field is required and must be a valid phone number</span>}
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default BillingDetails;

//import { useForm } from "react-hook-form";
import { useFormContext } from "react-hook-form";


const BillingDetails = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext(); 

  // const onSubmit = (data) => {
  //   onBillingSubmit({
  //     civility: data.billing_country,
  //     firstName: data.billing_first_name,
  //     lastName: data.billing_last_name,
  //     zipCode: data.billing_postcode,
  //     street: data.billing_address_1,
  //     companyName: data.billing_company || "",
  //     county: data.billing_state || "",
  //     city: data.billing_city,
  //     billing_email: data.billing_email,
  //     billing_phone: data.billing_phone,
  //     order_comments: data.order_comments || "",
  //   });
  // };

    return (
        <div className="col-6">
          <div className="woocommerce-billing-fields">
            <h3>Billing Details</h3>
            {/* <form onSubmit={handleSubmit(onSubmit)}> */}
              <div className="form-row">
                <label htmlFor="billing_country">
                  Civility <abbr className="required" title="required">*</abbr>
                </label>
                <select
                  {...register("billing_country", { required: true })}
                  id="billing_country"
                  name="billing_country"
                >
                  <option value="AX">Mr</option>
                  <option value="AF">Mlle</option>
                  <option value="AF">Mme</option>
                </select>
                {errors.billing_country && <span>This field is required</span>}
              </div>
    
              <div className="form-row">
                <label htmlFor="billing_first_name">
                  First Name <abbr className="required" title="required">*</abbr>
                </label>
                <input
                  {...register("billing_first_name", { required: true })}
                  id="billing_first_name"
                  type="text"
                />
                {errors.billing_first_name && <span>This field is required</span>}
              </div>
    
              <div className="form-row">
                <label htmlFor="billing_last_name">
                  Last Name <abbr className="required" title="required">*</abbr>
                </label>
                <input
                  {...register("billing_last_name", { required: true })}
                  id="billing_last_name"
                  type="text"
                />
                {errors.billing_last_name && <span>This field is required</span>}
              </div>
    
              <div className="form-row">
                <label htmlFor="billing_email">
                  Email Address <abbr className="required" title="required">*</abbr>
                </label>
                <input
                  {...register("billing_email", { required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ })}
                  id="billing_email"
                  type="email"
                />
                {errors.billing_email && <span>This field is required and must be a valid email</span>}
              </div>
    
              <div className="form-row">
                <label htmlFor="billing_phone">
                  Phone <abbr className="required" title="required">*</abbr>
                </label>
                <input
                  {...register("billing_phone", { required: true, pattern: /^[0-9]{10}$/ })}
                  id="billing_phone"
                  type="text"
                />
                {errors.billing_phone && <span>This field is required and must be a valid phone number</span>}
              </div>
    
            {/* </form> */}
          </div>
        </div>
      );
};

export default BillingDetails;
