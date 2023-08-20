import React, { useState } from "react";

export default function DiaryNewForm() {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [emotion, setEmotion] = useState(1);

  return (
    <>
      <h2>Today's Diary</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("saved!");
          console.log(`Your Author name: ${author}`);
          console.log(`Your content: ${content}`);
          console.log(`Your Emotion: ${emotion}`);
        }}
      >
        <div>
          <input
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            type="text"
            value={author}
            name="author"
            placeholder="Author"
          />{" "}
          {author}
        </div>
        <div>
          <textarea
            onChange={(e) => {
              setContent(e.target.value);
            }}
            type="text"
            value={content}
            name="content"
            placeholder="Diary Content"
          ></textarea>{" "}
          {content}
        </div>
        <div>
          <label>
            Emotion Rate:
            <select onChange={(e) => setEmotion(e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>{" "}
          {emotion}
        </div>
        <div>
          <button type='submit'>Save</button>
        </div>
      </form>
    </>
  );
}
