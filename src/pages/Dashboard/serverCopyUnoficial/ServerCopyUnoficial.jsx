import { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import Marque from "../../../componnets/Marque";
import ComponnetsName from "../../../componnets/ComponnetsName";
import Charge from "../../../componnets/Charge";
import axios from "axios";
import useAprovedPayments from "../../../hooks/useAprovedPayment";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useContexts from "../../../hooks/useContexts";
const ServerCopyUnoficial = () => {
  const { refetch, payments } = useAprovedPayments();
  const [error, setError] = useState("");
  const { user } = useContexts();
  const navigate = useNavigate();
  console.log(error);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const currentCharge = 10;
  const onSubmit = async (data) => {
    if (payments?.data?.amount < currentCharge) {
      setError("আপনার একাউন্টে পর্যাপ্ত টাকা নেই । দয়াকরে রিচার্জ করুন");
      return;
    }
    const { nidNo, dob } = data;
    const response = await axios.get(
      `/api/unofficial/apiown.php?key=signCopy&nid=${nidNo}&dob=${dob}`
    );
    console.log(response.data.data);

    if (response.data.data.response === "success") {
      navigate("/dashboard/nid", { state: { data: response.data.data } });
      const responses = await axios.patch(
        `https://telent-finder.vercel.app/api/v1/update-payments?email=${user?.email}`,
        {
          amount: currentCharge,
        }
      );

      if (responses.data.success) {
        refetch();
        reset();
        toast.success("success please wait for admin");
      }
    }

    refetch();
  };
  return (
    <div>
      <Marque />
      <ComponnetsName title={" Server Copy"} />

      <form
        className=" w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2 text-center"
            htmlFor="nidNo"
          >
            NID NUMBER (10/17 DIGIT)
          </label>
          <input
            id="nidNo"
            type="text"
            {...register("nidNo", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.nidNo && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2 text-center"
            htmlFor="dob"
          >
            DATE OF BIRTH (YY-MM-DD)
          </label>
          <input
            id="dob"
            type="date"
            {...register("dob", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Example: 1990-11-30"
          />
          {errors.dob && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <Charge title={`আপনার একাউন্ট থেকে ${currentCharge} টাকা কাটা হবে।`} />
        <p className="text-red-500">{error}</p>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServerCopyUnoficial;
