import { useForm } from 'react-hook-form';

function Form (){
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="col-6">
      <div className="woocommerce-billing-fields">
        <h3>Billing Details</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p id="billing_country_field" className="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated">
            <label htmlFor="billing_country">
              Civility <abbr title="required" className="required">*</abbr>
            </label>
            <select id="billing_country" name="billing_country" {...register('billing_country', { required: true })}>
              <option value="Mr">Mr</option>
              <option value="Mlle">Mlle</option>
              <option value="Mme">Mme</option>
            </select>
            {errors.billing_country && <span className="error">This field is required</span>}
          </p>
          <p id="billing_first_name_field" className="form-row form-row-first validate-required">
            <label htmlFor="billing_first_name">
              First Name <abbr title="required" className="required">*</abbr>
            </label>
            <input
              type="text"
              id="billing_first_name"
              name="billing_first_name"
              className="input-text"
              {...register('billing_first_name', { required: true })}
            />
            {errors.billing_first_name && <span className="error">This field is required</span>}
          </p>
          <p id="billing_last_name_field" className="form-row form-row-last validate-required">
            <label htmlFor="billing_last_name">
              Last Name <abbr title="required" className="required">*</abbr>
            </label>
            <input
              type="text"
              id="billing_last_name"
              name="billing_last_name"
              className="input-text"
              {...register('billing_last_name', { required: true })}
            />
            {errors.billing_last_name && <span className="error">This field is required</span>}
          </p>
          <div className="clear" />
          <p id="billing_company_field" className="form-row form-row-wide">
            <label htmlFor="billing_company">Company Name</label>
            <input
              type="text"
              id="billing_company"
              name="billing_company"
              className="input-text"
              {...register('billing_company')}
            />
          </p>
          <p id="billing_address_1_field" className="form-row form-row-wide address-field validate-required">
            <label htmlFor="billing_address_1">
              Address <abbr title="required" className="required">*</abbr>
            </label>
            <input
              type="text"
              id="billing_address_1"
              name="billing_address_1"
              className="input-text"
              {...register('billing_address_1', { required: true })}
            />
            {errors.billing_address_1 && <span className="error">This field is required</span>}
          </p>
          <p id="billing_address_2_field" className="form-row form-row-wide address-field">
            <input
              type="text"
              id="billing_address_2"
              name="billing_address_2"
              className="input-text"
              {...register('billing_address_2')}
            />
          </p>
          <p id="billing_city_field" className="form-row form-row-wide address-field validate-required">
            <label htmlFor="billing_city">
              Town / City <abbr title="required" className="required">*</abbr>
            </label>
            <input
              type="text"
              id="billing_city"
              name="billing_city"
              className="input-text"
              {...register('billing_city', { required: true })}
            />
            {errors.billing_city && <span className="error">This field is required</span>}
          </p>
          <p id="billing_state_field" className="form-row form-row-first address-field validate-state">
            <label htmlFor="billing_state">County</label>
            <input
              type="text"
              id="billing_state"
              name="billing_state"
              className="input-text"
              {...register('billing_state')}
            />
          </p>
          <p id="billing_postcode_field" className="form-row form-row-last address-field validate-required validate-postcode">
            <label htmlFor="billing_postcode">
              Postcode <abbr title="required" className="required">*</abbr>
            </label>
            <input
              type="text"
              id="billing_postcode"
              name="billing_postcode"
              className="input-text"
              {...register('billing_postcode', { required: true })}
            />
            {errors.billing_postcode && <span className="error">This field is required</span>}
          </p>
          <div className="clear" />
          <p id="billing_email_field" className="form-row form-row-first validate-required validate-email">
            <label htmlFor="billing_email">
              Email Address <abbr title="required" className="required">*</abbr>
            </label>
            <input
              type="email"
              id="billing_email"
              name="billing_email"
              className="input-text"
              {...register('billing_email', { required: true })}
            />
            {errors.billing_email && <span className="error">This field is required</span>}
          </p>
          <p id="billing_phone_field" className="form-row form-row-last validate-required validate-phone">
            <label htmlFor="billing_phone">
              Phone <abbr title="required" className="required">*</abbr>
            </label>
            <input
              type="text"
              id="billing_phone"
              name="billing_phone"
              className="input-text"
              {...register('billing_phone', { required: true })}
            />
            {errors.billing_phone && <span className="error">This field is required</span>}
          </p>
          <div className="clear" />
          <button type="submit" className="button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
