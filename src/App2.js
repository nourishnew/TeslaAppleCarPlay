import "./style2/App2.css";
import { useState } from "react";
import data from "./data.json";
import FeatureCard2 from "./components2/FeatureCard2.js";
import Card2 from "./components2/Card2";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function App2() {
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());

  return (
    <div className={isDarkTheme ? "AppDark" : "AppLight"}>
      {data.map((list, index) => {
        return (
          <div>
            <div className="titleContainer">
              <h2
                className={
                  isDarkTheme
                    ? "body1 textPrimaryWhite"
                    : "body1 textPrimaryBlack"
                }>
                {list.name}
              </h2>
              <ArrowForwardIosIcon
                style={{ height: "15px", width: "15px" }}
                className={isDarkTheme ? "titleIconDark" : "titleIconLight"}
              />
            </div>
            <div className={"topPicks"}>
              {list.items.map((item, index) => {
                if (item.type === "feature") {
                  return (
                    <FeatureCard2
                      isDarkTheme={isDarkTheme}
                      type={data[0].name}
                      key={index}
                      title={item.title}
                      description={
                        list.name !== "Made For You" ? item.description : ""
                      }
                      image={item.image}
                      bg_color={item.bg_color}
                    />
                  );
                } else {
                  return (
                    <Card2
                      isDarkTheme={isDarkTheme}
                      key={index}
                      title={item.title}
                      description={
                        item.type === "album" ? item.artist : item.curator
                      }
                      image={item.image}
                    />
                  );
                }
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App2;
