import React, { useState } from 'react';

export default function DiaryItem({data, onDelete, onEdit}) {
    // console.log(id);
    const onClick = () => {
      console.log(`${data.id} is selected`)
      onDelete(data.id);
    }


    const [localContent, setLocalContent] = useState(data.content);
    const [toggle, setToggle] = useState(false);

    const toggleIsEdit = () => setToggle(!toggle);
    console.log(`currnet Toggle Value: ${toggle}`);

    const handleQuitEdit = () => {
      setToggle(false);
      setLocalContent(data.content);
    }

    const handleEdit = () => {
      onEdit(data.id, localContent);
      toggleIsEdit();
    }

    return (
        <div>
          <p>Author: {data.author}</p>
          <p>Emotion: {data.emotion} </p>
          <p>Content: {toggle ? (<textarea value={localContent} onChange={(e)=>{setLocalContent(e.target.value)}}></textarea>) : (data.content)}</p>
          {/* <p>Contnet: {data.content} </p> */}
          {toggle ? (<><button onClick={handleEdit}>Save</button><button onClick={handleQuitEdit}>Cancel</button></>) : (<><button onClick={onClick}>Delete</button> <button onClick={toggleIsEdit}>Edit</button></>)}
        </div>
    );
}