import { useForm } from "react-hook-form";
import Charge from "../../../componnets/Charge";
import ComponnetsName from "../../../componnets/ComponnetsName";
import Marque from "../../../componnets/Marque";
import { singnCopy } from "../../../healper/Healper";
import toast from "react-hot-toast";
import axios from "axios";
import useContexts from "../../../hooks/useContexts";
import useAprovedPayments from "../../../hooks/useAprovedPayment";
import { useState } from "react";

const SingnCopy = () => {
  const [disable, setDisable] = useState(true);
  const { refetch, payments } = useAprovedPayments();
  const [error, setError] = useState("");
  console.log(error);

  const { user } = useContexts();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const currentCharge = 100;
  const onSubmit = async (data) => {
    const identifier = "sign";
    const datas = await singnCopy(data, identifier);

    if (payments?.data?.amount < currentCharge) {
      setError("আপনার একাউন্টে পর্যাপ্ত টাকা নেই । দয়াকরে রিচার্জ করুন");
      return;
    }
    if (datas.data.success) {
      toast.success("nid added wait for admin response");
      const response = await axios.patch(
        `http://localhost:3000/api/v1/update-payments?email=${user?.email}`,
        {
          amount: currentCharge,
        }
      );
      console.log(response);

      refetch;
      reset();
    }
  };
  return (
    <div>
      <Marque />
      <ComponnetsName title={"সাইন কপি অর্ডার করুন।"} />
      <Charge title={"সাইন কপির জন্য 60 টাকা কাটা হবে।"} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="selectType"
            className="block text-gray-700 text-sm font-bold mb-2 text-center"
          >
            Select Type:
          </label>
          <select
            id="selectType"
            {...register("selectType")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="nidNo">NID No</option>
            <option value="formNo">Form No</option>

            <option value="birthCertificate">Birth Certificate No</option>
            <option value="votar number">Votar Number No</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="formNumber"
            className="block text-gray-700 text-sm font-bold mb-2 text-center"
          >
            আইডি/ভোটার/ফর্ম নাম্বারঃ *
          </label>
          <input
            id="formNumber"
            type="number"
            {...register("formNumber", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.formNumber && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="signCopyDetails"
            className="block text-gray-700 text-sm font-bold mb-2 text-center"
          >
            সাইন কপি সম্পর্কে বিস্তারিত লিখুনঃ(যদি কিছু বলার থাকে)
          </label>
          <textarea
            id="signCopyDetails"
            {...register("signCopyDetails")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <p className="text-red-500">{error}</p>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={disable}
          >
            Submit
          </button>
        </div>
        <p className="text-red-500">{`${
          disable ? "New Order Currently Off By Admin" : ""
        }`}</p>
      </form>
    </div>
  );
};

export default SingnCopy;
