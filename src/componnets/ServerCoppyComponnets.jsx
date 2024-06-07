import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

import cbimage from "../assets/last bg server copy.jpg";
import axios from "axios";
const Nid = () => {
  const [imge, setImage] = useState();
  console.log(imge);
  const location = useLocation();
  const { data, nidNo, serial } = location.state || {};
  console.log(data.data, nidNo, serial);

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

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
    religion,
    photo,
    permanentAddress,
    presentAddress,
    birthPlace,
  } = data.data;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/api/qr/?data=${nameEn}+${nationalId}+${dateOfBirth}`,
          {
            responseType: "blob",
          }
        );
        const imageBlob = response.data;
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImage(imageObjectURL);
      } catch (error) {
        console.error("Error fetching the image:", error);
      }
    };
    if (data && data.data) {
      fetchData();
    }
  }, [nameEn, nationalId, dateOfBirth, data]);
  if (!data) {
    return <div>No data found.</div>;
  }
  return (
    <div>
      <div
        ref={componentRef}
        className="relative bg-gray-200 mt-10 w-[750px] h-[1000px] mx-auto"
      >
        <img
          src={cbimage}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Background"
        />
        <div className="absolute left-[27%] top-[9%] text-[16px] text-yellow-400 ">
          National Identity Registration Wing (NIDW)
        </div>
        <div className="absolute left-[39%] font-bold top-[11.5%] text-pink-500 text-[14px] ">
          Select Your Search Category
        </div>
        <div className="absolute font-bold left-[45%] top-[13.5%] text-green-500  text-[12px]">
          Search By NID / Voter No.
        </div>
        <div className="absolute font-bold left-[45%] top-[14.6%] text-blue-700 text-[12px]">
          Search By Form No.
        </div>
        <div className="absolute font-bold left-[29%] top-[17%] text-red-500 text-[12px] ">
          NID or Voter No*
        </div>
        <div className="absolute left-[45%] top-[17%] text-gray-600 text-[12px]">
          NID
        </div>
        <div className="absolute left-[60.9%] top-[17.4%] text-white text-[11px] ">
          Submit
        </div>
        <div className="absolute left-[83%] top-[12%] text-white  text-[11.6px]">
          Home
        </div>

        <div className="absolute left-[39%] top-[23.9%] font-bold text-[16px]  text-black">
          জাতীয় পরিচিতি তথ্য
        </div>
        <div className="absolute left-[39%] top-[26.7%] text-[11px]  text-black">
          জাতীয় পরিচয় পত্র নম্বর
        </div>
        <div className="absolute left-[56%] top-[26.7%] text-[13px] text-black">
          {nationalId}
        </div>
        <div className="absolute left-[39%] top-[29%] text-[11px]  text-black">
          পিন নম্বর
        </div>
        <div className="absolute left-[55%] top-[29%]  text-[11px]  text-black">
          {pin}
        </div>
        <div className="absolute left-[39%] top-[31.5%] text-[11px]  text-black">
          ভোটার সিরিয়াল
        </div>
        <div className="absolute left-[55%] top-[31.5%] text-[11px]  text-black">
          {nidNo}
        </div>
        <div className="absolute left-[39%] top-[34%] text-[11px]  text-black">
          ভোটার এলাকা
        </div>
        <div className="absolute left-[55%] top-[34%] text-[11px]  text-black">
          {voterArea}
        </div>
        <div className="absolute left-[39%] top-[36.5%] text-[11px]  text-black">
          জন্মস্থান
        </div>
        <div className="absolute left-[55%] top-[36.5%] text-[11px]  text-black">
          {birthPlace}
        </div>
        <div className="absolute left-[39%] top-[38.5%] font-bold text-lg  text-black">
          ব্যক্তিগত তথ্য
        </div>
        <div className="absolute left-[39%] top-[41.2%] text-[11px]  text-black">
          নাম (বাংলা)
        </div>
        <div className="absolute left-[55%] top-[41.2%] text-[11px]   text-black">
          {name}
        </div>
        <div className="absolute left-[39%] top-[44%] text-[11px]  text-black">
          নাম (ইংরেজি)
        </div>
        <div className="absolute left-[55%] top-[44%] text-[11px]  text-black">
          {nameEn}
        </div>
        <div className="absolute left-[39%] top-[46.5%] text-[11px]  text-black">
          জন্ম তারিখ
        </div>
        <div className="absolute left-[55%] top-[46.5%] text-[11px]  text-black">
          {dateOfBirth}
        </div>
        <div className="absolute left-[39%] top-[49%] text-[11px]  text-black">
          পিতার নাম
        </div>
        <div className="absolute left-[55%] top-[49%] text-[11px]  text-black">
          {father}
        </div>
        <div className="absolute left-[39%] top-[51%] text-[11px]  text-black">
          মাতার নাম
        </div>
        <div className="absolute left-[55%] top-[51%] text-[11px]  text-black">
          {mother}
        </div>
        <div className="absolute left-[39%] top-[53.4%] text-[11px]  text-black">
          স্বামী/স্ত্রী
        </div>
        <div className="absolute left-[55%] top-[53.4%] text-[11px]  text-black">
          {spouse ? spouse : ""}
        </div>
        <div className="absolute left-[39%] top-[55.5%] text-lg  text-black">
          অন্যান্য তথ্য
        </div>
        <div className="absolute left-[39%] top-[59%] text-[11px]  text-black">
          লিঙ্গ
        </div>
        <div className="absolute left-[55%] top-[59%] text-[11px]  text-black">
          {gender}
        </div>
        <div className="absolute left-[39%] top-[61.5%] text-[11px]  text-black">
          রক্তের গ্রুপ
        </div>
        <div className="absolute left-[55%] top-[61.5%] text-[11px]  text-black">
          {bloodGroup}
        </div>
        <div className="absolute left-[39%] top-[64%] text-[11px]  text-black">
          সিরিয়াল নং
        </div>
        <div className="absolute left-[55%] top-[64%] text-[11px]  text-black">
          {serial}
        </div>
        <div className="absolute left-[39%] top-[66.5%] text-[11px]  text-black">
          ধর্ম
        </div>
        <div className="absolute left-[55%] top-[66.5%] text-[11px]  text-black">
          {religion ? religion : ""}
        </div>
        <div className="absolute left-[39%] top-[68.2%] text-lg  font-bold text-black">
          বর্তমান ঠিকানা
        </div>
        <div className="absolute left-[39%] top-[71.2%] text-[11px]  text-black">
          {presentAddress}
        </div>
        <div className="absolute left-[39%] font-bold top-[76.5%] text-lg  text-black">
          স্থায়ী ঠিকানা
        </div>
        <div className="absolute left-[39%] top-[79.2%] text-[11px]  text-black">
          {permanentAddress}
        </div>

        <div className="absolute bottom-28  text-center text-[11px]   left-[15.8%]">
          <span className="text-red-500">
            {" "}
            উপরে প্রদর্শিত তথ্যসমূহ জাতীয় পরিচয়পত্র সংশ্লিষ্ট, ভোটার তালিকার
            সাথে সরাসরি সম্পর্কযুক্ত নয়।
          </span>{" "}
          <br />
          This is Software Generated Report From Bangladesh Election Commission,
          Signature & Seal Arent Required.
        </div>

        <div className="absolute top-[25.6%] left-[20.9%] w-[13.9%] h-[12%] ">
          <img
            src={photo}
            alt="User"
            className="w-full h-full object-cover rounded-md"
            onError={(e) => {
              e.target.src = "fallback-image.png"; // Fallback image URL
            }}
          />
          <p className="text-center ">{nameEn}</p>
        </div>
        <div className="absolute top-[40%] left-[21.9%] w-[12.9%] h-[10%] ">
          <img
            src={imge}
            alt="User"
            className="w-full h-full rounded-md"
            onError={(e) => {
              e.target.src = "fallback-image.png"; // Fallback image URL
            }}
          />
        </div>
      </div>
      <button onClick={handlePrint} className="w-full btn-primary">
        Print
      </button>
    </div>
  );
};

export default Nid;
