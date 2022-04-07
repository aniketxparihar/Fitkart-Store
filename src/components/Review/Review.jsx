import React from "react";

const Review = (review) => {
  return (
    <div className="reviews">
      <div className="name h5 txt-gray-200 p-4 flex align-center">
        {review.user}
        <i className="verify material-icons txt--green-400">verified</i>
      </div>
      <div className="message h6 txt-gray-300 p-8 b-1 border-gray-400 border-solid rounded-m">
        {review.text}
      </div>
    </div>
  );
};

export default Review;
