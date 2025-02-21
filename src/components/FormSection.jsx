
// import { useForm, Controller } from "react-hook-form";
// import { useFormContext } from "react-hook-form";


// function FormSection  ({ inputs }) {
//   const { control, formState: { errors } } = useForm(); 

//   return (
//     <>
//      {inputs.map((input) => (
//         <div key={input.name} className={`form-row ${input.className}`}>
//           <label htmlFor={input.name}>
//             {input.label}{" "}
//             {input.required && (
//               <abbr title="required" className="required">
//                 *
//               </abbr>
//             )}
//           </label>

//           {input.type === "select" ? (
//             <Controller
//               name={input.name}
//               control={control}
//               rules={{ required: input.required ? "Ce champ est requis" : false }}
//               render={({ field }) => (
//                 <select {...field} id={input.name} className="input-text">
//                   {input.options.map((option) => (
//                     <option key={option.value} value={option.value}>
//                       {option.label}
//                     </option>
//                   ))}
//                 </select>
//               )}
//             />
//           ) : input.type === "textarea" ? (
//             <Controller
//               name={input.name}
//               control={control}
//               rules={{ required: input.required ? "Ce champ est requis" : false }}
//               render={({ field }) => (
//                 <textarea
//                   {...field}
//                   id={input.name}
//                   className="input-text"
//                   placeholder={input.placeholder}
//                 />
//               )}
//             />
//           ) : (
//             <Controller
//               name={input.name}
//               control={control}
//               rules={{ required: input.required ? "Ce champ est requis" : false }}
//               render={({ field }) => (
//                 <input
//                   {...field}
//                   type={input.type}
//                   id={input.name}
//                   placeholder={input.placeholder}
//                   className="input-text"
//                 />
//               )}
//             />
//           )}

//           {errors[input.name] && (
//             <p className="error-message">{errors[input.name].message}</p>
//           )}
//         </div>
//       ))}</>
     
   
//   );
// };
// export default FormSection; 
import React from "react";
import { useFormContext, Controller } from "react-hook-form";

function FormSection({ inputs }) {
  const { control, formState: { errors } } = useFormContext(); 

  return (
    <>
      {inputs.map((input) => (
        <div key={input.name} className={`form-row ${input.className}`}>
          <label htmlFor={input.name}>
            {input.label}{" "}
            {input.required && (
              <abbr title="required" className="required"> *</abbr>
            )} 
          </label>

          <Controller
            name={input.name}
            control={control}
            rules={{ required: input.required ? "Ce champ est requis" : false }}
            render={({ field }) => (
              input.type === "select" ? (
                <select {...field} id={input.name} className="input-text">
                  {input.options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              ) : input.type === "textarea" ? (
                <textarea {...field} id={input.name} className="input-text" placeholder={input.placeholder} />
              ) : (
                <input {...field} type={input.type} id={input.name} placeholder={input.placeholder} className="input-text" />
              )
            )}
          />

          {errors[input.name] && (
            <p className="error-message">{errors[input.name].message}</p>
          )}
        </div>
      ))}
    </>
  );
}

export default FormSection;
