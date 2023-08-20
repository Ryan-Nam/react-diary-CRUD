import React from 'react';

export default function DiaryItem({data, onDelete, onEdit}) {
    // console.log(id);
    const onClick = () => {
      console.log(`${data.id} is selected`)
      onDelete(data.id);
    }

    const butonEdit = () => {
      console.log(`${data.id} is selected`)
      onEdit(data.id)
    }
    return (
        <div>
          <p>Author: {data.author}</p>
          <p>Emotion: {data.emotion} </p>
          <p>Contnet: {data.content} </p>
          <button onClick={onClick}>Delete</button>
          <button onClick={butonEdit}>Edit</button>
        </div>
    );
}

