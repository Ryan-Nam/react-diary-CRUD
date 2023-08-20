import React from "react";
import DiaryItem from './DiaryItem';

export default function DiaryList({ list }) {
  console.log(list);
  return (
    <div>
      <hr />
      <h2>Diary List</h2>
      <p>{list.length} Diary here</p>
      {/* Diary item would be here -> make as component later */}
      {list.map((it) => (
        <DiaryItem key={it.id} data={it}/>
      ))}
    </div>
  );
}
