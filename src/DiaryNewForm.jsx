import React, { useState } from "react";

export default function DiaryNewForm() {
//   const [author, setAuthor] = useState("");
//   const [content, setContent] = useState("");
//   const [emotion, setEmotion] = useState(1);

  const [diaryInfo, setDiaryInfo] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    setDiaryInfo({...diaryInfo, [e.target.name]:e.target.value});
  }

  return (
    <>
      <h2>Today's Diary</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
            console.log("saved!");
            console.log(`Your Author name: ${diaryInfo.author}`);
            console.log(`Your content: ${diaryInfo.content}`);
            console.log(`Your Emotion: ${diaryInfo.emotion}`);
        }}
      >
        <div>
          <input
            onChange={handleChangeState}
            type="text"
            value={diaryInfo.author}
            name="author"
            placeholder="Author"
          />{" "}
          {diaryInfo.author}
        </div>
        <div>
          <textarea
            onChange={handleChangeState}
            type="text"
            value={diaryInfo.content}
            name="content"
            placeholder="Diary Content"
          ></textarea>{" "}
          {diaryInfo.content}
        </div>
        <div>
          <label>
            Emotion Rate:
            <select name='emotion' value={diaryInfo.emotion} onChange={handleChangeState}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </label>
          {diaryInfo.emotion}
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </>
  );
}
