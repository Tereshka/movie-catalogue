import React from "react";

export default function MovieList(props) {
  const { yearList, currentYear, onChangeYear } = props;
  return (
    <select className="custom-select custom-select mb-3 mt-3" onChange={onChangeYear} value={currentYear}>
      {
        yearList.map(year => (
          <option key={year} value={year}>{ year }</option>
        ))
      }
    </select>
  );
}