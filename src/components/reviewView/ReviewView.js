import React from "react";
import "./ReviewView.css";
import Review from "../review/Review";

function ReviewView() {
  return (
    <div className="review-view">
      <div className="review-view-card">
        <Review
          src="/images/review2.png"
          name="Andry Fords"
          desc="CEO at Whatever"
        >
          “Every single person comes away and says - wow that's a really slick
          experience, that was so easy to use. I feel so much less stressed as I
          now know we’re doing everything by the book.”
        </Review>
      </div>
      <div className="review-view-card">
        <Review
          src="/images/review1.png"
          name="Andry Fords"
          desc="CEO at Whatever"
        >
          I feel so much less stressed as I now know we're doing everything by
          the book."
        </Review>
      </div>
    </div>
  );
}

export default ReviewView;
