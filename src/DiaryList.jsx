import React from "react";
import DiaryItem from './DiaryItem';
// list is wrapped as array. []

export default function DiaryList({ list, onDelete }) {

  return (
    <div>
      <hr />
      <h2>Diary List</h2>
      <p>{list.length} Diary here</p>
      {/* Diary item would be here -> make as component later */}
      {list.map((it) => (
        <DiaryItem key={it.id} data={it} onDelete={onDelete}/>
      ))}
    </div>
  );
}
