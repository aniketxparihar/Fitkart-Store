import React,{useState,useEffect} from "react";
import { Link, Navigate, useNavigate} from "react-router-dom";
import axios from "axios";
import { notify } from "../../utils/toastUtil";
import { useAuth } from "../../Context/auth-Context";
import { useCart } from "../../Context/cart-context";


function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

 
const CartBill = ({
  cartPrice,
  cartItems,
  cartDiscount,
  couponApplied,
  finalPrice,
  setCoupon,
  setCouponApplied,
  coupon,
}) => {
  
   const [couponAmount, setCouponAmount] = useState(0);
   const [productDetails, setProductDetails] = useState();
   const [selectedItemAmount, setSelectedItemAmount] = useState();
  const { foundUser } = useAuth();
  const navigate = useNavigate();
  const { totalCartAmount,setTotalCartAmount } = useCart();
  useEffect(() => {
    setTotalCartAmount(finalPrice - couponAmount);
  },[finalPrice,couponAmount])

  const displayRazorpay = async () => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
  if (!res) {
    console.error("Razorpay SDK failed to load, check you connection");
    return;
  }

  const options = {
    key: "rzp_test_ofulVsqRp7iz2h",
    amount: (finalPrice - couponAmount)*100,
    currency: "INR",
    name: "Fitkart",
    description: "Thank you for shopping with us",
    image:
      "https://yifgzyyqlpgydlzwcsaj.supabase.in/storage/v1/object/public/calm-shop-books/calm-shop-logo.png",
    handler: function (response) {
      navigate("/OrderPlaced");
    },
    prefill: {
      name: `${foundUser.firstName} ${foundUser.lastName}`,
      email: foundUser.email,
      contact: "9999994444",
    },
    theme: {
      color: "#007bb5",
    },
  };
  const paymentObject = new window.Razorpay(options);
    paymentObject.open();
};

  return (
    <div className="bill bg-main-black box-shadow ">
      <div className="p-6 border-bottom">
        <div className="txt-4xl p-4 txt-gray-200">Price Details</div>
      </div>
      <div className="p-6 flex ">
        <div className="total__amount txt-2xl p-4 txt-gray-200">
          <input
            type="radio"
            name="address"
            id="2c, Hauz Khas , Delhi , India"
            className="p-4"
            checked={true}
          />
          <label htmlFor="2c, Hauz Khas , Delhi , India">
            2c, Hauz Khas , Delhi , India
          </label>
        </div>
      </div>
      <div className="p-6 flex ">
        <div className="total__price__text txt-2xl p-4 txt-gray-200">
          Price ({cartItems.length} items)
        </div>
        <div className="total__price__value txt-3xl p-4 txt-gray-400">
          ₹{cartPrice}
        </div>
      </div>
      <div className="p-6 flex">
        <div className="discount__text txt-2xl p-4 txt-gray-200">Discount</div>
        <div className="discount__value txt-3xl p-4 txt-gray-400">
          - ₹{cartDiscount}
        </div>
      </div>
      <div className="p-6 flex border-bottom">
        <div className="delivery__charges txt-2xl p-4 txt-gray-200">
          Delivery Charges
        </div>
        <div className="delivery__value txt-3xl p-4 txt-yellow-400">+ ₹250</div>
      </div>
      {couponApplied ? (
        <div className="p-6 flex border-bottom">
          <div className="delivery__charges txt-2xl p-4 txt-gray-200">
            Coupon Discount
          </div>
          <div className="delivery__value txt-3xl p-4 txt-gray-400">
            - ₹{couponAmount}
          </div>
        </div>
      ) : null}

      <div className="p-6 flex border-bottom">
        <div className="total__amount txt-2xl p-4 txt-gray-200">
          Total Amount
        </div>
        <div className="total__amount__value txt-3xl p-4 txt-green-400">
          ₹{finalPrice - couponAmount}
        </div>
      </div>
      <div className="p-6 flex ">
        <input
          className="coupon__code txt-2xl txt-gray-800 p-2"
          type="text"
          placeholder="Eg. MarchBonanza"
          onChange={(e) => {
            setCoupon(e.target.value);
          }}
          value={coupon}
        />
        <button
          className="button coupon__button  bg-gray-300 p-4 txt-2xl txt-bold txt-main-black rounded-xl flex justify-center align-center"
          onClick={() => {
            if (couponApplied !== true) {
              switch (coupon) {
                case "MarchBonanza":
                  setCouponApplied(true);
                  setCouponAmount(400);
                  notify("MarchBonanza Applied", "success");
                  break;
                case "FiftyBonanza":
                  setCouponApplied(true);
                  setCouponAmount(cartPrice / 2);
                  notify("FiftyBonanza Applied", "success");
                  break;
                case "FortyBonanza":
                  setCouponApplied(true);
                  setCouponAmount((cartPrice * 4) / 10);
                  notify("FortyBonanza Applied", "success");
                  break;
                case "TwentyBonanza":
                  setCouponApplied(true);
                  setCouponAmount((cartPrice * 1) / 5);
                  notify("TwentyBonanza Applied", "success");
                  break;
                default:
                  setCouponAmount(0);
                  setCouponApplied(false);
                  setCoupon("")
                  notify("Invalid Coupon","error")
              }
            } else {
              setCoupon("");
              setCouponAmount(0);
              setCouponApplied(false);
              notify("Coupon Removed", "success");
            }
          }}
        >
          {couponApplied ? "Remove Coupon" : "Apply Coupon"}
        </button>
      </div>
      <div className="flex flex-col p-6 ">
        <div className="flex ">
          <input
            type="radio"
            name="coupon"
            id="50%"
            onClick={() =>
              coupon !== "FiftyBonanza"
                ? setCoupon("FiftyBonanza")
                : setCoupon("")
            }
            checked={coupon === "FiftyBonanza"}
            className="m-2"
          />
          <label htmlFor="50%" className="m-2 txt-green-400">
            FiftyBonanza ( 50% off )
          </label>
        </div>
        <div className="flex ">
          <input
            type="radio"
            name="coupon"
            id="40%"
            onClick={() =>
              coupon !== "FortyBonanza"
                ? setCoupon("FortyBonanza")
                : setCoupon("")
            }
            className="m-2"
            checked={coupon === "FortyBonanza"}
          />
          <label htmlFor="40%" className="m-2 txt-green-400">
            FortyBonanza ( 40% off )
          </label>
        </div>
        <div className="flex ">
          <input
            type="radio"
            name="coupon"
            id="20%"
            onClick={() =>
              coupon !== "TwentyBonanza"
                ? setCoupon("TwentyBonanza")
                : setCoupon("")
            }
            className="m-2"
            checked={coupon === "TwentyBonanza"}
          />
          <label htmlFor="20%" className="m-2 txt-green-400">
            TwentyBonanza ( 20% off )
          </label>
        </div>
      </div>
      <div className="p-6 flex ">
        <div className="total__amount txt-2xl p-4 txt-gray-200">
          You are saving ₹
          {couponApplied ? cartDiscount + couponAmount : cartDiscount} with this
          order!
        </div>
      </div>

      <div className="p-6 flex ">
        <div
          to="/Checkout"
          className="button width-full  bg--primary p-8 txt-4xl txt-bold txt-main-black rounded-2xl flex justify-center align-center"
          onClick={displayRazorpay}
        >
          Place the Order
        </div>
      </div>
    </div>
  );
};

export default CartBill;
