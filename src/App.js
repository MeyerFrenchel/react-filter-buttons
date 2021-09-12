import { useState } from "react";
import items from "./allData";
import Menu from "./components/Menu";
import Button from "./components/Button";
import "./App.css";
import Sort from "./components/Sort";
const allCategories = ["All", ...new Set(items.map((item) => item.category))];

console.log(allCategories);

function App() {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);

  const [sortedData, setSortedData] = useState("");
  console.log(menuItem);
  console.log(items);
  //Filter Function
  const filter = (button) => {
    if (button === "All") {
      setMenuItem(items);
      return;
    }

    const filteredData = items.filter((item) => item.category === button);
    setMenuItem(filteredData);
  };

  //sortData
  const sort = (e) => {
    const sortin = e.target.value;
    const sortRes = menuItem.sort((a, b) => {
      if (sortin === "all") {
        return a.id > b.id ? 1 : -1;
      }
      if (sortin === "low") {
        return a.price > b.price ? 1 : -1;
      }
      if (sortin === "high") {
        return a.price < b.price ? 1 : -1;
      }
    });

    setSortedData(sortin);
    setMenuItem(sortRes);
  };

  return (
    <div className="App">
      <div className="title">
        <h1>
          Portfolio
          <span> Filter</span>
        </h1>
      </div>
      <div>
        <div></div>
        <Button button={buttons} filter={filter} />
        <Sort sort={sort} sorts={sortedData} />
      </div>

      <Menu menuItem={menuItem} />
    </div>
  );
}

export default App;
