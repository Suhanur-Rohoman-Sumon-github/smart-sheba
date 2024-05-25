import { Link } from "react-router-dom";
import PaymentMarque from "../../../componnets/PaymentMarque";

const Recharge = () => {
  return (
    <div className="hero ">
      <div className="hero-content text-center">
        <div className="">
          <PaymentMarque />
          <div className="mt-32 ">
            <h1 className="text-primary">Hello there</h1>
            <p className="py-6">for your payment please visit this link</p>
            <Link
              to={
                "https://shop.bkash.com/allah-malik-pharmacy0190872606/paymentlink"
              }
            >
              <button className=" btn-primary">pay now</button>
            </Link>
            <Link to={"/dashboard/sendRequest"}>
              <button className=" btn-primary ml-4">send request</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recharge;
