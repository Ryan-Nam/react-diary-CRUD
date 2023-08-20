import React from 'react';

export default function DiaryItem({data}) {
    // console.log(id);
    return (
        <div>
          <p>Author: {data.author}</p>
          <p>Emotion: {data.emotion} </p>
          <p>Contnet: {data.content} </p>
        </div>
    );
}

