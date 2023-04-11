import React from "react";
import "./home.scss";
import HouseBg from "../assets/bernard-hermant-KqOLr8OiQLU-unsplash.png";
import ServiceCard from "../components/cards/ServiceCard";
import { ServiceCardData } from "../data/serviceCardData";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
// import NumberCounter from "number-counter";

import SmallTitle from "../components/SmallTitle";
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-left">
          <div className="text-wrapper">
            <p>Find out a place</p>
            <p>you'll love to live</p>
            <p>
              With the most complete source of homes <br /> for sale & real
              estate near you
            </p>

            <div className="search">
              <input type="text" placeholder="Enter address, zip, city" />
              <button>Search</button>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="img-wrapper">
            <img src={HouseBg} alt="" />
          </div>
        </div>
      </div>
      {/* our services section */}
      <section className="our-services">
        <SmallTitle title={"our services"} className="small-title" />
        <p className="sub-title">
          We have the most listings and constant updates. So you’ll never miss
          out.
        </p>
        <div className="service-card-wrapper">
          {ServiceCardData.map((card, i) => {
            return <ServiceCard key={i} card={card} />;
          })}
        </div>
      </section>
      {/* advantages section */}
      <section className="advantages">
        <div className="outer-container">
          <SmallTitle title="advantages" className="small-title" />
          <p className="sub-title">Why Real explorer is better</p>
          <div className="inner-container">
            <div className="inner-left">
              <p>Traditional home sale</p>
              <ul>
                <li>
                  Risk of buyer financing fall-through{" "}
                  <AiOutlineClose style={{ marginLeft: 14 }} />{" "}
                </li>
                <li>
                  Hours of prep work and home showings{" "}
                  <AiOutlineClose style={{ marginLeft: 14 }} />{" "}
                </li>
                <li>
                  Manage repairs yourself{" "}
                  <AiOutlineClose style={{ marginLeft: 14 }} />{" "}
                </li>
                <li>
                  Uncertain closing timeline{" "}
                  <AiOutlineClose style={{ marginLeft: 14 }} />{" "}
                </li>
              </ul>
            </div>
            <div className="inner-right">
              <p>
                Selling to <span>RealExplorer</span>
              </p>
              <ul>
                <li>
                  <AiOutlineCheck style={{ marginRight: 14 }} /> Competitive
                  cash offer in 24 hours
                </li>
                <li>
                  <AiOutlineCheck style={{ marginRight: 14 }} /> No listing,
                  prep work, or showings
                </li>
                <li>
                  <AiOutlineCheck style={{ marginRight: 14 }} /> Skip the repair
                  work and deduct the costs
                </li>
                <li>
                  <AiOutlineCheck style={{ marginRight: 14 }} /> Choose any
                  close date from 10-60 days
                </li>
              </ul>
            </div>
          </div>
          <div className="adv-bottom">
            <span>
              {/* <NumberCounter end={485091} start={482500} postFix="+" /> */}
            </span>
            <p>Home available</p>
            <p>Every 60 seconds a home owner requests an offer from oval</p>
          </div>
        </div>
      </section>
      
      <Search />
    </div>
  );
};

export default Home;
