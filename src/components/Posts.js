import React from "react";
import {
  FaRegCheckCircle,
  FaComment,
  FaRegChartBar,
  FaHeart,
  FaShare,
} from "react-icons/fa";
const Posts = () => {
  return (
    <div className="post">
      <div className="post_first">
        <div className="post_img">
          <img src="/Images/feroz1.jpg" alt="Profile img" />
        </div>
        <div className="post_name">
          <strong>Manjeet</strong>
          <FaRegCheckCircle className="verify" />
        </div>
        <div className="post_username">
          @Manjeet123 <span>6m</span>
        </div>
      </div>
      <div className="post_details">
        <div className="post-details_msg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          alias blanditiis reprehenderit ea sint, vero in porro impedit
          perspiciatis ullam totam sapiente nam facilis ipsum earum neque nisi
          accusantium accusamus.
        </div>
        <div className="post_details_img">
          <img src="/Images/fawad1.jpg" alt="post image" />
        </div>
        <div className="reactions">
          <span>
            <FaComment className="re" />
            45
          </span>
          <span>
            <FaRegChartBar className="re" />5
          </span>
          <span>
            <FaHeart className="re" />
            345
          </span>
          <span>
            <FaShare className="re" />
            56
          </span>
        </div>
      </div>
    </div>
  );
};

export default Posts;
