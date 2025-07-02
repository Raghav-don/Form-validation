import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';

const EmployeeFeedbackForm=()=>{

    //To set initial value
    const initialValues={
        fullName:"",
        email:"",
        department:"",
        rating:"",
        feedback:"",
    };

    const validationSchema=Yup.object({

        fullName:Yup.string()
        .min(3,"Name must be atleast 3 chars")
        .required("Full name is required"),
        email:Yup.string()
        .email("Invalid email address")
        .required("email is required"),
        department:Yup.string()
        .required("Select a department"),
        rating:Yup.number()
        .min(1,"Minimum rating is 1")
        .max(5,"Maximum rating is 5")
        .required("Rating is required"),
        feedback:Yup.string()
        .max(200,"FeedBack should be under 200 characters")
    });

    
    const handleSubmit=(values,{resetForm})=>{
        console.log("Form submitted: ",values);
        alert("Form submitted successfully!");
        resetForm();
    };


    return(
    <div className="form-container">
        <h2>Employee FeedBack form</h2>
        <Formik //validation
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
       >
        <Form>
           <div>
               <label>Full Name: </label>
               <Field type="text" name="fullName"/>
               <ErrorMessage name="fullName" component="div" className="fullname"/>
           </div>

            <div>
               <label>Email: </label>
               <Field type="email" name="email"/>
               <ErrorMessage name="email" component="div" className="fullname"/>
           </div>

           <div>
               <label>Department: </label>
               <Field as="select"  name="department">
                <option value="">Select Department</option>
                <option value="HR">HR</option>
                <option value="HR">Tech</option>
                <option value="HR">Marketing</option>
                </Field>
                <ErrorMessage name="department" component="div" className="fullname"/>
           </div>

           <div>
                <label>Rating (1-5): </label>
                <Field type="number" name="rating" />
                <ErrorMessage name="rating" component="div" className="fullname"/>
           </div>

           <div>
            <label>FeedBack: </label>
            <Field type="textarea" name="feedback" />
            <ErrorMessage name="feedback" component="div" className="fullname"/>
           </div>

           <button type="submit" class="btn">Submit Feedback</button>


        


        </Form>

       </Formik>
    </div>
    );
};
export default EmployeeFeedbackForm;