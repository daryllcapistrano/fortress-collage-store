import React, { useState } from "react";
import Select from "react-select";

// const options = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ];

export default function Dropdown(props) {
  const [selectedOption, setSelectedOption] = useState(null);

  // console.log(props);

  return (
    <div className="Dropdown" style={{ marginBottom: `1em` }}>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={props.options}
      />
    </div>
  );
}
