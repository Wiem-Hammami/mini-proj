
import { useFormContext } from "react-hook-form";


const BillingDetails = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext(); 

    return (
        <div className="col-6">
          <div className="woocommerce-billing-fields">
            <h3>Billing Details</h3>
              <div className="form-row">
                <label htmlFor="billing_country">
                  Civility <abbr className="required" title="required">*</abbr>
                </label>
                <select {...register("billingAddress.civility", { required: "Civility is required" })} className="input-text">

                  <option value="AX">Mr</option>
                  <option value="AF">Mlle</option>
                  <option value="AF">Mme</option>
                </select>
                {errors.billingAddress?.civility&& <span>{errors.billingAddress.civility.message}</span>}
              </div>
    
              <p className="form-row form-row-first validate-required">
                <label htmlFor="billing_first_name">
                  First Name <abbr className="required" title="required">*</abbr>
                </label>
                <input {...register("billingAddress.firstName", { required: "First Name is required" })} className="input-text" />

                {errors.billingAddress?.firstName && <span>{errors.billingAddress.firstName.message}</span>}
              </p>
    
              <p className="form-row form-row-first validate-required">
                <label htmlFor="billing_last_name">
                  Last Name <abbr className="required" title="required">*</abbr>
                </label>
                <input {...register("billingAddress.lastName", { required: "Last Name is required" })} className="input-text" />

                {errors.billingAddress?.lastName && <span>{errors.billingAddress.lastName.message}</span>}
              </p>
    
              <p className="form-row form-row-first validate-required">
                <label htmlFor="billing_email">
                  Email Address <abbr className="required" title="required">*</abbr>
                </label>
                <input
          {...register("customer.email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email address" },
          })}
          className="input-text"
        />
                {errors.customer?.email && <span>{errors.billingAddress.email.message} </span>}
              </p>
    
              <p className="form-row form-row-first validate-required">
                <label htmlFor="billing_phone">
                  Phone <abbr className="required" title="required">*</abbr>
                </label>
                <input
          {...register("customer.phone", {
        
            pattern: { value: /^[0-9]+$/, message: "Only numbers allowed" },
          })}
          className="input-text"
        />
        {errors.customer?.phone && <p className="error">{errors.customer.phone.message}</p>}
        </p>

              <p className="form-row form-row-first validate-required">
        <label>Company Name</label>
        <input {...register("billingAddress.companyName")} className="input-text" placeholder="Company (optional)" />
      </p>

      <p className="form-row form-row-first validate-required">
        <label>
          City <abbr title="required" className="required">*</abbr>
        </label>
        <input {...register("billingAddress.city", { required: "City is required" })} className="input-text" />
        {errors.billingAddress?.city && <p className="error">{errors.billingAddress.city.message}</p>}
      </p>

      <p className="form-row form-row-first validate-required">
        <label>
          County <abbr title="required" className="required">*</abbr>
        </label>
        <input {...register("billingAddress.county", { required: "County is required" })} className="input-text" />
        {errors.billingAddress?.county && <p className="error">{errors.billingAddress.county.message}</p>}
      </p>

      <p className="form-row form-row-first validate-required">
        <label>
          Zip Code <abbr title="required" className="required">*</abbr>
        </label>
        <input {...register("billingAddress.zipCode", { required: "Zip Code is required" })} className="input-text" />
        {errors.billingAddress?.zipCode && <p className="error">{errors.billingAddress.zipCode.message}</p>}

      </p>
    
          </div>
        </div>
      );
};

export default BillingDetails;
