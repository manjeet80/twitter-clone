import React from "react";

const TrendsKeyword = () => {
  const [state, setState] = React.useState([
    {
      id: 1,
      country: "Trend in Pakistan",
      keyword: "ISPR",
      totalKeywords: "2000k",
    },
    {
      id: 2,
      country: "Trend in India",
      keyword: "DHUR",
      totalKeywords: "500k",
    },
    {
      id: 3,
      country: "Trend in London",
      keyword: "SPKP",
      totalKeywords: "400k",
    },
    {
      id: 4,
      country: "Trend in Punjab",
      keyword: "ISha",
      totalKeywords: "20k",
    },
  ]);
  return (
    <div className="keywords">
      {state.map((keyword) => (
        <div className="key" key={keyword.id}>
          <div className="keywords_heading">
            <h4>Trends for you</h4>
          </div>
          <div className="country">{keyword.country}</div>
          <div className="keywords_name">
            <strong>{keyword.keyword}</strong>
          </div>
          <div className="keywords_tweets">{keyword.totalKeywords}</div>
        </div>
      ))}
    </div>
  );
};

export default TrendsKeyword;
