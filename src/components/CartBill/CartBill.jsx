import React from "react";

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
  return (
    <div className="bill bg-main-black box-shadow ">
      <div className="p-6 border-bottom">
        <div className="txt-4xl p-4 txt-gray-200">Price Details</div>
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
          <div className="delivery__value txt-3xl p-4 txt-gray-400">- ₹400</div>
        </div>
      ) : null}

      <div className="p-6 flex border-bottom">
        <div className="total__amount txt-2xl p-4 txt-gray-200">
          Total Amount
        </div>
        <div className="total__amount__value txt-3xl p-4 txt-green-400">
          ₹{couponApplied === true ? finalPrice - 400 : finalPrice}
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
          onClick={() =>
            couponApplied === false
              ? coupon === "MarchBonanza"
                ? setCouponApplied(true)
                : setCouponApplied(false)
              : setCouponApplied(false)
          }
        >
          {couponApplied ? "Remove Coupon" : "Apply Coupon"}
        </button>
      </div>
      <div className="p-6 flex ">
        <div className="total__amount txt-2xl p-4 txt-gray-200">
          You are saving ₹{couponApplied ? cartDiscount + 400 : cartDiscount}{" "}
          with this order!
        </div>
      </div>
      <div className="p-6 flex ">
        <button className="button width-full  bg--primary p-8 txt-4xl txt-bold txt-main-black rounded-2xl flex justify-center align-center">
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default CartBill;
