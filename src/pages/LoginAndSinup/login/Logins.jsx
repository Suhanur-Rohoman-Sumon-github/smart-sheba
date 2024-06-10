import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaSignInAlt, FaEyeSlash, FaEye } from "react-icons/fa";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import useContexts from "../../../hooks/useContexts";

const Logins = () => {
  console.log(useContexts);
  const { handleGoogleSinin, handleLogin } = useContexts();

  // call navigate from react useNavigate()
  const navigate = useNavigate();
  const id = uuidv4();
  // we used react hook form package. and handle form with that.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  // this is only for login with email.
  const onSubmit = (data) => {
    const { email, password } = data;
    // call handleLogin funtion to login withe email and password
    handleLogin(email, password)
      .then((result) => {
        navigate("/dashboard/create-nid");
      })
      .catch((err) => console.error(err));
  };
  // when you will login with the facebook, you wil redirect to the home page.

  // when you will login with the google. this function will take your information and post it in database with post method. After login, you wil redirect to the home page.
  const handleGoogleLogin = () => {
    // call handleGoogleSinin function to sign in with Google
    handleGoogleSinin()
      .then(async (result) => {
        const response = await axios.post(
          `https://telent-finder.vercel.app/api/v1/set-payments?email=${result.user.email}`,
          {
            userEmail: result.user.email,
            amount: 0,
          }
        );
        console.log(response.data);
        navigate("/dashboard/create-nid");
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex pt-8 md:hidden text-center lg:text-left md:mr-4"></div>
        <div className=" flex-shrink-0 w-full max-w-md p-4 bg-[#ffffff] shadow-2xl  border">
          <button
            // this function for google login. if you want to login with google. you can do that
            onClick={handleGoogleLogin}
            className=" btn-nav flex  mt-4 gap-4 w-full items-center justify-center"
          >
            <img
              src="https://assets.setmore.com/website/v2/images/icons/icon-google.svg"
              className="h-6 w-6"
              alt=""
            />
            Continue with google
          </button>

          <div className="divider">OR</div>
          {/* handle submit function */}
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="form-control">
              <label className="label">
                <span className="">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            {errors.email?.type === "required" && (
              <p className="text-red-500">email is required</p>
            )}
            <div className="form-control">
              <label className="label">
                <span className="">Password</span>
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register(
                    "password",
                    { required: true },
                    {
                      required: true,
                    }
                  )}
                  placeholder="password"
                  className="input input-bordered  w-full"
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-2 transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {/* error message */}
              {errors.password?.type === "required" && (
                <p className="text-red-500">password is required</p>
              )}
            </div>

            <div className="form-control mt-6">
              {/* submit button for email login */}
              <button className="btn-primary flex  gap-4 w-full items-center justify-center">
                Login
                <FaSignInAlt />{" "}
              </button>
            </div>
          </form>
          <p className="mx-4">
            new there please{" "}
            <Link to={"/sinup"}>
              <button className="btn btn-link card-text-secondary">
                sinup
              </button>
            </Link>{" "}
          </p>
        </div>
        <div className="hidden md:flex text-center lg:text-left md:mr-4">
          <div>
            <h1 className="text-primary">
              <span className="text-[#0069ff]">Welcome Back!</span> <br /> Log
              in to Your Account
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logins;
