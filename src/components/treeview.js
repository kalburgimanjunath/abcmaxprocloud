import React, { useState, useEffect } from "react";
export default function TreeView() {
  const treeList = [
    {
      id: 1,
      title: "item1",
      subitem: [
        { id: 1, title: "item1" },
        { id: 2, title: "item2" },
        { id: 3, title: "item3" },
      ],
    },
    {
      id: 2,
      title: "item2",
      subitem: [
        { id: 1, title: "item1" },
        { id: 2, title: "item2" },
        { id: 3, title: "item3" },
      ],
    },
    {
      id: 3,
      title: "item3",
      subitem: [
        { id: 1, title: "item1" },
        { id: 2, title: "item2" },
        { id: 3, title: "item3" },
      ],
    },
  ];
  const TreeSubItem = ({treeListItem}) =>{
    treeListItem &&
    treeListItem.map((item) => {
      return <div className="p-2">{item.title}</div>;
    });
}
  const TreeItem = ({treeListItem}) =>{
        treeListItem &&
        treeListItem.map((item) => {
        return <div className="p-2">{item.title} <TreeSubItem treeListItem={item.subitem}/></div>;
        })
    };
  return (
    <div>
      {treeList &&
        treeList.map((item) => {
          return <div className="p-2"><TreeItem treeListItem={item}</div>;
        })}
    </div>
  );
}
