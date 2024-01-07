import React from "react";
import "./Statistics.css";

function Statistics(props) {
  return (
    <div className="statistics">
      <div className="statistic-box">
        <div className="statistic">{props.statistic1}</div>
        <div className="statistic-text">Posts</div>
      </div>
      <div className="statistic-box">
        <div className="statistic">{props.statistic2}</div>
        <div className="statistic-text">Local Countries</div>
      </div>
      <div className="statistic-box">
        <div className="statistic">{props.statistic3}</div>
        <div className="statistic-text">Followers</div>
      </div>
      <div className="statistic-box">
        <div className="statistic">{props.statistic4}</div>
        <div className="statistic-text">Following</div>
      </div>
    </div>
  );
}

export default Statistics;