import React from "react";
import { useForm } from "react-hook-form";
import Marque from "../../../componnets/Marque";
import ComponnetsName from "../../../componnets/ComponnetsName";
import Charge from "../../../componnets/Charge";

const ServerCopyUnoficial = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };
  return (
    <div>
      <Marque />
      <ComponnetsName title={"Unofficial Server Copy"} />

      <form
        className=" w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2 text-center"
            htmlFor="nidNo"
          >
            NID No.
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
            DOB
          </label>
          <input
            id="dob"
            type="date"
            {...register("dob", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.dob && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <Charge title={"আপনার একাউন্ট থেকে 10 টাকা কাটা হবে।"} />
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
