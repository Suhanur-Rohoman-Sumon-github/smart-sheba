import axios from "axios";

export const base_url = "https://telent-finder.vercel.app/api/v1";
export const singnCopy = async (data, identifier) => {
  const { formNumber, selectType, signCopyDetails } = data;
  const singDatas = { formNumber, selectType, signCopyDetails, identifier };
  const response = await axios.post(`${base_url}/create-sign-copy`, {
    sign: singDatas,
  });
  return response;
};

// export const accountBalance = () => {
//   const accountBalance = payments.data.amount;
//   return accountBalance;
// };
