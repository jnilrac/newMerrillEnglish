import React,{ReactElement, useRef, useState} from 'react';
 import { useFormik } from 'formik';
 import * as Yup from 'yup';
 import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';

 interface  Props {
    startMessage: string;
    successMessage: string; 
 }

 export const CareerForm = ({startMessage, successMessage}: Props) => {
    const [message, setMessage] = useState(startMessage);

    const uploadRef = useRef<any| null>(null);
    console.log(uploadRef)
   const formik = useFormik({
     initialValues: {
       name: '',
       email: '',
       resume: '',
     },
     validationSchema: Yup.object({
       name: Yup.string()
         .max(33, 'Must be 33 characters or less')
         .required('Name is required!'),
       email: Yup.string().email('Invalid email address!').required('Email required!'),
       resume: Yup.string().required('Resume required!')
     }),
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
       setMessage(successMessage)
     },
   });

   const handleFileUpload = (event:any) => {
    console.log(event.target.files[0].name);
  };

  const Icon = () :ReactElement => {
    return(
        <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.4719 6.12178L16.5356 6.50634L16.9241 6.53831C18.7881 6.69173 20.3764 8.5511 20.3764 11C20.3764 11.6019 20.2766 12.1964 20.0841 12.7489C19.8916 13.3015 19.611 13.7986 19.2619 14.2137C18.913 14.6286 18.5034 14.9522 18.0593 15.1708C17.6156 15.3893 17.1441 15.5 16.6708 15.5H5.73618C4.56099 15.5 3.41228 14.9457 2.55025 13.9208C1.68605 12.8934 1.18945 11.484 1.18945 10C1.18945 7.09476 3.03162 4.81671 5.25215 4.53605L5.5336 4.50048L5.64743 4.24063C6.63793 1.97967 8.59353 0.5 10.7829 0.5C13.5364 0.5 15.9285 2.84434 16.4719 6.12178ZM5.30543 5.53369L5.30505 5.53374C3.28088 5.78269 1.8717 7.77018 1.8717 10C1.8717 11.1682 2.26128 12.3023 2.97449 13.1503C3.68987 14.0008 4.68058 14.5 5.73618 14.5H16.6708C17.5033 14.5 18.2801 14.1061 18.8377 13.4432C19.3932 12.7828 19.6941 11.903 19.6941 11C19.6941 9.26524 18.537 7.66815 16.8962 7.54163C16.8954 7.54157 16.8946 7.54151 16.8938 7.54145L15.9977 7.46483L15.8097 6.34768C15.3512 3.60065 13.2907 1.5 10.7829 1.5C8.81464 1.5 7.09169 2.79392 6.22893 4.76877C6.22876 4.76915 6.22859 4.76954 6.22843 4.76992L5.92376 5.45812L5.30543 5.53369ZM10.0633 9V8.5H9.56328H8.49234L10.7829 5.77676L13.0735 8.5H12.0025H11.5025V9V11.5H10.0633V9Z" fill="#91EEAE" stroke="#91EEAE"/>
        </svg>
    )
  }

   return (
    <>
    <div className='flex justify-center text-2xl text-blue-3 font-bold'>
   
        <span className="w-6/12 text-center mb-6">{message}</span>
    </div>
    <div className='flex flex-col border-4 border-blue-4 rounded-xl px-36'>
        <form  className="flex flex-col text-center justify-center" onSubmit={formik.handleSubmit}>
            <label htmlFor="name" className="text-lg font-bold text-blue-4 my-3">Name</label>
            <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className="rounded-3xl bg-blue-1 border-green-1 border-2 text-white"
            />
            {formik.touched.name && formik.errors.name ? (
                <div className="text-red-700 my-4">{formik.errors.name}</div>
            ) : null}
        
        
            <label htmlFor="email" className="text-lg font-bold text-blue-4 my-3">Email</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="rounded-3xl bg-blue-1 border-green-1 border-2 text-white"
            />
            {formik.touched.email && formik.errors.email ? (
                <div className="text-red-700 my-4" >{formik.errors.email}</div>
            ) : null}

                <input
                id="resume"
                name="resume"
                ref={uploadRef}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="file"
                style={{ display: "none" }}
                accept="application/pdf"
                // multiple={false}
                />
                <div className='flex justify-center'>
                <button 
                    type='button' 
                    onClick={() => {uploadRef?.current?.click()}}
                    className="w-44 h-10 bg-blue-2 text-white font-semibold flex rounded justify-center pt-2 space-x-3 mt-14"

                >
                    <div>Upload Resume</div> <div className='mt-1'><Icon/> </div>
                    </button>
                </div>
                
            {formik.touched.resume && formik.errors.resume ? (
                <div className="text-red-700 my-4" >{formik.errors.resume}</div>
            ) : null}

            <div className='flex justify-center'>
                <button 
                type="submit"
                    className="h-16 w-48 bg-green-4 rounded text-white font-semibold text-xl my-20"
                >
                    Submit
                </button>
            </div>
           

            
        </form>
    </div>
    </>
    
     
   );
 };