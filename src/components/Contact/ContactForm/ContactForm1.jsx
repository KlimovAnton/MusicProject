// import css from './ContactForm.module.css';
// import clsx from 'clsx';

// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import PhoneInput from 'react-phone-input-2';

// import CustomInput from '../../Input/CustomInput';
// import ButtonSend from '../../ButtonSend/ButtonSend';
// import { FormValidation } from '../../../Validation/ValidationForm';

// export default function ContactForm () {
   
//     const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({
//         mode: 'onChange',
//         resolver: yupResolver(FormValidation),
//     });
//     const onSubmit = data => console.log(data);

//     // const handleSubmit = (evt) => {
//     //     evt.preventDefault();

//     //     const form = evt.target;
//     //     const { email, name, message } = form.elements;

//     //     console.log(email.value, name.value, message.value)
//     //     form.reset();
//     // }

    

//     return (
//         <div className={css.containerForm}>
//             <h2 className={css.title}>Fill out this form:</h2>
//             <form className={css.form}
//             onSubmit={handleSubmit(onSubmit)}>
//                 <CustomInput 
//                 label={true}
//                 labelName="Email"
//                 inputType="email"
//                 name="email"
//                 labelClass={css.label}
//                 inputClass={clsx(css.input, errors.email && css.inputError)}
//                 placeholder="Enter your email"
//                 {...register("email", {
//                     onBlur: () => {},
//                     onFocus: () => {},
//                   })}
//                 />
//                 {errors.email && (
//                     <span className={css.error}>{errors.email.message}</span>
//                 )}
//                 <CustomInput 
//                 label={true}
//                 labelName="Name"
//                 inputType="text"
//                 name="name"
//                 labelClass={css.label}
//                 inputClass={clsx(css.input, errors.name && css.inputError)}
//                 placeholder="Enter your name"
//                 {...register("name", {
//                     onBlur: () => {},
//                     onFocus: () => {},
//                   })}
//                 />
//                 {errors.name && (
//                     <span className={css.error}>{errors.name.message}</span>
//                 )}
//                 <PhoneInput 
//                 labelName="Phone"
//                 inputType="text"
//                 name="phone"
//                 labelClass={css.label}
//                 inputClass={clsx(css.input, errors.phone && css.inputError)}
//                 placeholder="Enter your phone"
//                 {...register("phone", {
//                     onBlur: () => {},
//                     onFocus: () => {},
//                   })}
//                 />
//                 {errors.phone && (
//                     <span className={css.error}>{errors.phone.message}</span>
//                 )}
//                 <ButtonSend type="submit" disabled={!isDirty || !isValid}>Send</ButtonSend>
//             </form>
//         </div>
//     )
// }