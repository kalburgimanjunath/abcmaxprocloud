import React, { useState, useEffect } from "react";
import { TreeView } from "../components";
const Filters = ({ updateViews }) => {
  return (
    <div className="text-3xl font-bold underline">
      View:
      <select onChange={(e) => updateViews(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="4">4</option>
        <option value="8">8</option>
        <option value="16">16</option>
      </select>
    </div>
  );
};
const SubViews = ({ item, vHeight, hWidth }) => {
  return <div style={{ width: hWidth, height: vHeight }}>{item}</div>;
};
const Views = ({ views }) => {
  const allviews = [Array(...Array(Number(views))).map((_, i) => i)][0];
  const hWidth = window.innerWidth / views;
  const vHeight = window.innerHeight / views;
  const columnCount = allviews / views;
  return (
    <div
      style={{
        columnCount: columnCount,
        display: "flex",
        flexFlow: "wrap",
        width: "100%",
      }}
    >
      {allviews &&
        allviews.map((item) => (
          <SubViews hWidth={hWidth} vHeight={vHeight} item={item} />
        ))}
    </div>
  );
};
export default function Viewer() {
  const [viewState, setViewState] = useState(4);
  function updateViews(value) {
    return setViewState(value);
  }
  return (
    <div>
      <Filters views={viewState} updateViews={updateViews} />
      <div>
        <Views views={viewState} />
        <TreeView />
      </div>
    </div>
  );
}
