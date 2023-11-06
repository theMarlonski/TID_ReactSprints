import React from "react";
import "./Statistics.css";

function Statistics(props) {
  return (
    <div className="statistics">
      <div className="statisticBox">
        <div className="statistic">{props.statistic1}</div>
        <div className="statisticText">Posts</div>
      </div>
      <div className="statisticBox">
        <div className="statistic">{props.statistic2}</div>
        <div className="statisticText">Places visited</div>
      </div>
      <div className="statisticBox">
        <div className="statistic">{props.statistic3}</div>
        <div className="statisticText">Followers</div>
      </div>
      <div className="statisticBox">
        <div className="statistic">{props.statistic4}</div>
        <div className="statisticText">Following</div>
      </div>
    </div>
  );
}

export default Statistics;