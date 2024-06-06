import axios from "axios";

export default async function handler(req, res) {
  const { nid, dob } = req.query;

  try {
    const response = await axios.get(
      `https://api.foxithub.com/unofficial/apiown.php?key=signCopy&nid=${nid}&dob=${dob}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    const status = error.response?.status || 500;
    const message = error.response?.data?.message || error.message;
    res.status(status).json({ message });
  }
}
