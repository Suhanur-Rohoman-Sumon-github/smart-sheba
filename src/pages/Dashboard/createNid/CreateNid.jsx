import { useState } from "react";
import { useForm } from "react-hook-form";
import Marque from "../../../componnets/Marque";
import Charge from "../../../componnets/Charge";
import toast, { Toaster } from "react-hot-toast";
import pdf from "../../../assets/pdf.png";
import { useNavigate } from "react-router-dom";
const CreateNid = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [signature, setSignature] = useState(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    navigate("/dashboard/create-nid-download", {
      state: {
        data: data,
        imageUrl: imageUrl,
        signature: signature,
      },
    });
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("pdf_file", file);

    try {
      const response = await fetch(
        "https://esservice.pythonanywhere.com/ext/faysaladmin",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const responseData = await response.json();
      console.log(responseData);

      if (responseData.message === "balance") {
        toast.error("No Balance");
      } else if (responseData.message === "wrong") {
        toast.error("Wrong file");
      } else if (responseData.message === "ext") {
        console.log("Extracted Data:", responseData);
        setValue("nameBangla", responseData.nameBen);
        setValue("nameEnglish", responseData.nameEng);
        setValue("idNumber", responseData.national_id);
        setValue("pinNumber", responseData.pin);
        setValue("fatherName", responseData.father);
        setValue("motherName", responseData.mother);
        setValue("birthPlace", responseData.birth_place);
        setValue("birthDate", responseData.birth);
        setValue("bloodGroup", responseData.blood);
        setValue("address", responseData.address);
        setImageUrl(responseData.photo);
        setSignature(responseData.sign);
      }
      console.log(responseData.photo);
    } catch (error) {
      console.error("There was a problem with the file upload:", error.message);
      toast.error("File upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border">
      <Marque />

      <Toaster />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className=" flex items-center justify-center md:mx-96">
          <input
            id="file"
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="hidden"
          />
          <label
            htmlFor="file"
            className=" flex items-center justify-center cursor-pointer w-full p-8  border border-dashed  border-gray-400  hover:bg-gray-100"
          >
            <div>
              <img
                src={pdf}
                className=" h-24 flex items-center justify-center w-7/12 mx-auto"
                alt=""
              />
              <span
                style={{ fontFamily: "'SolaimanLipi', Arial, sans-serif" }}
                className=" text-2xl font-bold text-[#0066FF]"
              >
                সাইন কপি আপলোড করুন
              </span>
            </div>
          </label>
        </div>
        {/* <img src={imageUrl} alt="" />
        <img src={signeture} alt="" /> */}
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
        {/* Other form fields */}
        <Charge title={"আপনার একাউন্ট থেকে 5 টাকা কাটা হবে।"} />
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={loading}
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNid;
