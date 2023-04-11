import React, { useState } from "react";
import "./help.scss";
import { BsSearch } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";
import { Faqs, HelpCardData } from "../data/helpData";
import HelpCard from "../components/cards/HelpCard";
import Search from "../components/Search";

const Help = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleClick = (i) => {
    setActiveAccordion(activeAccordion === i ? null : i);
  };

  return (
    <div className="help">
      <section className="help-search-container">
        <div className="inner-wrapper">
          <p>Hi, there</p>
          <p>How can we help?</p>

          <div className="search-wrapper">
            <BsSearch />
            <input type="text" placeholder="Search help topics or article..." />
          </div>

          <p>
            Common troubleshooting topics: <span>Buy</span>, <span>Sell</span>,{" "}
            <span>Advertisement</span>{" "}
          </p>
        </div>
      </section>

      <section className="items-card">
        {HelpCardData.map((item, i) => {
          return <HelpCard key={i} item={item} />;
        })}
      </section>

      <section className="articles">
        <p className="sub-head">Featured Article from us</p>
        <ul className="categories">
          <li>All Categories</li>
          <li>Buyers</li>
          <li>Seller</li>
          <li>Agents</li>
          <li>Advertise</li>
          <li>Inspiration</li>
        </ul>
        <div className="article-cards"></div>

        <button>See More article</button>
      </section>

      <section className="faq">
        <p className="sub-head">Frequently Ask Question</p>
        <div className="faq-accordion">
          {Faqs.map((faq, i) => {
            return (
              <div className="faq-item" key={i}>
                <p className="faq-question" onClick={() => handleClick(i)}>
                  {faq.question}
                  <span className={`${activeAccordion === i ? 'active' : ''}`}>
                    <FiChevronRight size={18} />
                  </span>
                </p>
                {activeAccordion === i && (
                  <p className="faq-answer">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <Search />
    </div>
  );
};

export default Help;
