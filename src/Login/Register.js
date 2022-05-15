import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../src/firebase.init'
import Lodeing from '../share/Lodeing/Lodeing';

const Register = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updatError] = useUpdateProfile(auth);

      const navigate = useNavigate()

      let signInError;

    if(loading||gLoading || updating){
        return <Lodeing></Lodeing>
    }

    if(error||gError || updatError){
        signInError = <p className='text-red-500'>{error?.message||gError?.message}</p>
    }
      
    if (user||gUser) {
        console.log(user||gUser);
    }

    const onSubmit = async (data) => {
       await createUserWithEmailAndPassword(data.email, data.password);
       await updateProfile({ displayName: data.name});
       console.log('update done')
       navigate('/appoinment');
    };
    return (
        <div className='flex justify-center items-center h-screen'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className=" text-center text-2xl text-secondary font-bold">Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                            
                        </label>
                        <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required:{
                                value: true,
                                message: 'Name is required',
                            }
                            
                          })} />
                        <label className="label">
                        {errors.name?.type === 'required' &&  <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                           
                        </label>
                    </div>

                    {/* email */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                            
                        </label>
                        <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required:{
                                value: true,
                                message: 'Email is required',
                            },
                            pattern: {
                              value: /[A-Za-z]{3}/,
                              message: 'provide a valid email'
                            }
                          })} />
                        <label className="label">
                        {errors.email?.type === 'required' &&  <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' &&  <span className="label-text-alt text-red-500">{errors.email.message}</span>}    
                        </label>
                    </div>

                    {/* password */}

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                            
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs"
                        {...register("password", {
                            required:{
                                value: true,
                                message: 'Password is required',
                            },
                            minLength: {
                              value: 6,
                              message: 'Must be 6 characters or longer'
                            }
                          })} />
                        <label className="label">
                        {errors.password?.type === 'required' &&  <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' &&  <span className="label-text-alt text-red-500">{errors.password.message}</span>}    
                        </label>
                    </div>
                    {signInError}
                    <input className='btn  w-full max-w-xs' type="submit" value='Sign up' />
                </form>
                          <p>Already Have an Account? <Link to='/login' className='text-secondary' >Please Login</Link></p>
                <div className="divider">OR</div>
                <button onClick={()=>signInWithGoogle() } className="btn btn-outline">Continue With Google</button>
            </div>
        </div>
    </div>
    );
};

export default Register;