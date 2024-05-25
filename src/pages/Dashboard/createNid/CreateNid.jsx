import React from "react";
import { useForm } from "react-hook-form";
import Marque from "../../../componnets/Marque";
import ComponnetsName from "../../../componnets/ComponnetsName";
import Charge from "../../../componnets/Charge";

const CreateNid = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="border ">
      <Marque />
      <ComponnetsName title={"ফাইল তৈরি করুন।"} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="nameBangla"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            নামঃ (বাংলা)
          </label>
          <input
            id="nameBangla"
            type="text"
            {...register("nameBangla")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="nameEnglish"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            নামঃ (ইংরেজী)
          </label>
          <input
            id="nameEnglish"
            type="text"
            {...register("nameEnglish")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="idNumber"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            আইডি নাম্বারঃ
          </label>
          <input
            id="idNumber"
            type="text"
            {...register("idNumber")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="pinNumber"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            পিন নাম্বারঃ
          </label>
          <input
            id="pinNumber"
            type="text"
            {...register("pinNumber")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="fatherName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            পিতার নামঃ
          </label>
          <input
            id="fatherName"
            type="text"
            {...register("fatherName")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="spouseName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            স্বামী অথবা স্ত্রীর নামঃ
          </label>
          <input
            id="spouseName"
            type="text"
            {...register("spouseName")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="motherName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            মাতার নামঃ
          </label>
          <input
            id="motherName"
            type="text"
            {...register("motherName")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="birthPlace"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            জন্ম স্থানঃ
          </label>
          <input
            id="birthPlace"
            type="text"
            {...register("birthPlace")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="birthDate"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            জন্ম তারিখঃ
          </label>
          <input
            id="birthDate"
            type="text"
            {...register("birthDate")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="principalDate"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            প্রধানের তারিখঃ
          </label>
          <input
            id="principalDate"
            type="text"
            value="30/03/2024"
            {...register("principalDate")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="bloodGroup"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            রক্তের গ্রপঃ
          </label>
          <input
            id="bloodGroup"
            type="text"
            {...register("bloodGroup")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ঠিকানাঃ
          </label>
          <input
            id="address"
            type="text"
            {...register("address")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <Charge title={"আপনার একাউন্ট থেকে 5 টাকা কাটা হবে।"} />
        <div className="flex items-center justify-between">
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

export default CreateNid;
