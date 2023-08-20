import React from 'react';

export default function DiaryItem({data, onDelete}) {
    // console.log(id);
    const onClick = () => {
      console.log(`${data.id} is selected`)
      onDelete(data.id);
    }
    return (
        <div>
          <p>Author: {data.author}</p>
          <p>Emotion: {data.emotion} </p>
          <p>Contnet: {data.content} </p>
          <button onClick={onClick}>Delete</button>
        </div>
    );
}

