import React from "react";
import "./Homepage.css";
import Header from "../components/Header";

function Homepage() {
    return (
        <div>
            <Header showNotificationIcon={true} notificationNumber={3} />
            <h1> Welcome to the Homepage </h1>
        </div>
    );
}

export default Homepage;
