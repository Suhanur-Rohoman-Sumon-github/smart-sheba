import axios from "axios";

export const base_url = "https://telent-finder.vercel.app/api/v1";
export const singnCopy = async (data, identifier) => {
  const { formNumber, selectType, signCopyDetails, userEmail } = data;
  const singDatas = {
    formNumber,
    selectType,
    signCopyDetails,
    identifier,
    userEmail,
  };
  const response = await axios.post(`${base_url}/create-sign-copy`, {
    singDatas,
  });
  return response;
};

// export const accountBalance = () => {
//   const accountBalance = payments.data.amount;
//   return accountBalance;
// };
