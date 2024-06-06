import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import jsPDF from "jspdf";
import domtoimage from "dom-to-image";
import cbimage from "../assets/Picsart_24-06-06_12-46-58-578.png";
const Nid = () => {
  const location = useLocation();
  const { data } = location.state || {};
  console.log(data.data);
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  if (!data) {
    return <div>No data found.</div>;
  }

  const {
    name,
    nameEn,
    nationalId,
    gender,
    bloodGroup,
    dateOfBirth,
    father,
    mother,
    spouse,
    voterArea,
    pin,
    nidMother,
    photo,
    permanentAddress,
    presentAddress,
    birthPlace,
  } = data.data;

  return (
    <div>
      <div
        ref={componentRef}
        className="relative bg-gray-200 w-[750px] h-[1000px] mx-auto"
      >
        <img
          src={cbimage}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Background"
        />
        <div className="absolute left-[27%] top-[5%] text-[16px] text-yellow-400 font-bold">
          National Identity Registration Wing (NIDW)
        </div>
        <div className="absolute left-[37%] top-[8%] text-pink-500 text-[14px] font-bold">
          Select Your Search Category
        </div>
        <div className="absolute left-[45%] top-[10.3%] text-green-500 font-bold text-[12px]">
          Search By NID / Voter No.
        </div>
        <div className="absolute left-[45%] top-[11.8%] text-blue-700 text-[12px]">
          Search By Form No.
        </div>
        <div className="absolute left-[29%] top-[14.6%] text-red-500 text-[12px] font-bold">
          NID or Voter No*
        </div>
        <div className="absolute left-[45%] top-[14.6%] text-gray-600 text-[12px]">
          NID
        </div>
        <div className="absolute left-[62.9%] top-[14.6%] text-white text-[11px]">
          Submit
        </div>
        <div className="absolute left-[89%] top-[9%] text-white text-[11px]">
          Home
        </div>

        <div className="absolute left-[37%] top-[25.5%] text-[16px] font-bold text-black">
          জাতীয় পরিচিতি তথ্য
        </div>
        <div className="absolute left-[37%] top-[28.7%] text-[13px] text-black">
          জাতীয় পরিচয় পত্র নম্বর
        </div>
        <div className="absolute left-[56%] top-[28.7%] text-[14px] text-black">
          {nationalId}
        </div>
        <div className="absolute left-[37%] top-[31.5%] text-sm text-black">
          পিন নম্বর
        </div>
        <div className="absolute left-[55%] top-[31.5%] text-sm text-black">
          {pin}
        </div>
        <div className="absolute left-[37%] top-[34%] text-sm text-black">
          ভোটার সিরিয়াল
        </div>
        <div className="absolute left-[55%] top-[34.5%] text-sm text-black">
          {nidMother}
        </div>
        <div className="absolute left-[37%] top-[36.8%] text-sm text-black">
          ভোটার এলাকা
        </div>
        <div className="absolute left-[55%] top-[37.5%] text-sm text-black">
          {voterArea}
        </div>
        <div className="absolute left-[37%] top-[39.5%] text-sm text-black">
          জন্মস্থান
        </div>
        <div className="absolute left-[55%] top-[40.2%] text-sm text-black">
          {birthPlace}
        </div>
        <div className="absolute left-[37%] top-[42%] text-lg font-bold text-black">
          ব্যক্তিগত তথ্য
        </div>
        <div className="absolute left-[37%] top-[45.6%] text-sm text-black">
          নাম (বাংলা)
        </div>
        <div className="absolute left-[55%] top-[45.6%] text-sm font-bold text-black">
          {name}
        </div>
        <div className="absolute left-[37%] top-[48.5%] text-sm text-black">
          নাম (ইংরেজি)
        </div>
        <div className="absolute left-[55%] top-[48.5%] text-sm text-black">
          {nameEn}
        </div>
        <div className="absolute left-[37%] top-[51%] text-sm text-black">
          জন্ম তারিখ
        </div>
        <div className="absolute left-[55%] top-[51%] text-sm text-black">
          {dateOfBirth}
        </div>
        <div className="absolute left-[37%] top-[53.7%] text-sm text-black">
          পিতার নাম
        </div>
        <div className="absolute left-[55%] top-[53.7%] text-sm text-black">
          {father}
        </div>
        <div className="absolute left-[37%] top-[56.4%] text-sm text-black">
          মাতার নাম
        </div>
        <div className="absolute left-[55%] top-[56.4%] text-sm text-black">
          {mother}
        </div>
        <div className="absolute left-[37%] top-[59%] text-lg font-bold text-black">
          অন্যান্য তথ্য
        </div>
        <div className="absolute left-[37%] top-[63%] text-sm text-black">
          লিঙ্গ
        </div>
        <div className="absolute left-[55%] top-[63%] text-sm text-black">
          {gender}
        </div>
        <div className="absolute left-[37%] top-[65.5%] text-sm text-black">
          রক্তের গ্রুপ
        </div>
        <div className="absolute left-[55%] top-[65.5%] text-sm text-black">
          {bloodGroup}
        </div>
        <div className="absolute left-[37%] top-[68.5%] text-sm text-black">
          সিরিয়াল নং
        </div>
        <div className="absolute left-[55%] top-[68.5%] text-sm text-black">
          {spouse ? "Married" : "Single"}
        </div>
        <div className="absolute left-[37%] top-[71.5%] text-sm text-black">
          ধর্ম
        </div>
        <div className="absolute left-[55%] top-[71.5%] text-sm text-black">
          {spouse ? "Married" : "Single"}
        </div>
        <div className="absolute left-[37%] top-[83%] text-lg font-bold text-black">
          স্থায়ী ঠিকানা
        </div>
        <div className="absolute left-[37%] top-[87%] text-sm text-black">
          {permanentAddress}
        </div>
        <div className="absolute left-[37%] top-[73.8%] text-lg font-bold text-black">
          বর্তমান ঠিকানা
        </div>
        <div className="absolute left-[37%] top-[76.8%] text-sm text-black">
          {presentAddress}
        </div>

        <div className="absolute bottom-5  text-center text-[12px]  left-[15%]">
          <span className="text-red-500">
            {" "}
            উপরে প্রদর্শিত তথ্যসমূহ জাতীয় পরিচয়পত্র সংশ্লিষ্ট, ভোটার তালিকার
            সাথে সরাসরি সম্পর্কযুক্ত নয়।
          </span>{" "}
          <br />
          This is Software Generated Report From Bangladesh Election Commission,
          Signature & Seal Arent Required.
        </div>

        <div className="absolute top-[27%] left-[19%] w-[15%] h-[15%] ">
          <img
            src={photo}
            alt="User"
            className="w-full h-full object-cover rounded-md"
            onError={(e) => {
              e.target.src = "fallback-image.png"; // Fallback image URL
            }}
          />
          <p className="text-center font-bold">{nameEn}</p>
        </div>
      </div>
      <button onClick={handlePrint} className="w-full btn-primary">
        Print
      </button>
    </div>
  );
};

export default Nid;
