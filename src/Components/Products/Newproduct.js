import axios from "axios";
import { useState } from "react";

export default function Newproduct() {
  const [title, Settitle] = useState("");
  const [decription, Setdecription] = useState("");
  const [image, Setimage] = useState("");
  const [accept, SetAccept] = useState(false);

  async function Submit(e) {
    let flag = true;
    e.preventDefault();
    SetAccept(true);
    if (title === "") {
      flag = false;
    } else flag = true;

    try {
      const FormData = new FormData();
      FormData.append("title", title);
      FormData.append("decription", decription);
      FormData.append("image", image);

      if (flag) {
        let res = await axios.post(
          "http://127.0.0.1:8000/api/product/create",

          FormData
        );
        if (res.status === 200) {
          window.location.pathname = "Dashbord/Users";
        }
      }
    } catch (err) {}
  }

  return (
    <div>
      <div className="pfrm1">
        <form className="frm1" onSubmit={Submit}>
          <label htmlFor="title"> title </label>
          <input
            type="text"
            placeholder="ttitle"
            id="title"
            value={title}
            onChange={(e) => Settitle(e.target.value)}
          />
          {title === "" && accept && (
            <p className="error">title is more than 3 char</p>
          )}

          <label htmlFor="decription"> decription</label>
          <input
            type="text"
            placeholder="decription"
            id="decription"
            value={decription}
            required
            onChange={(e) => Setdecription(e.target.value)}
          />

          {decription === "" && accept && (
            <p className="error">title is more than 3 char</p>
          )}

          <label htmlFor="image"> image</label>
          <input
            name="image"
            type="file"
            placeholder="image"
            id="image"
            onChange={(e) => Setimage(e.target.value)}
          />

          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
}
