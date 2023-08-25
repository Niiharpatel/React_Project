import { useForm } from "react-hook-form";
import './Form.css';

export default function ReactHookForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <>
            <div className="form-main">
                <div className="container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}

                        <label htmlFor="">Name: </label>
                        <input defaultValue="" {...register("firstName", { required: true })} placeholder="Enter Name" />

                        {/* include validation with required or other standard HTML validation rules */}

                        <label htmlFor="">Email: </label>
                        <input {...register("exampleRequired", { required: true })} placeholder="Enter Email" />

                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span>This field is required</span>}




                        <input type="submit" />
                    </form>
                </div>
            </div>
        </>
    );
}