import axios from "axios";

export const base_url = "http://localhost:3000/api/v1";
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
