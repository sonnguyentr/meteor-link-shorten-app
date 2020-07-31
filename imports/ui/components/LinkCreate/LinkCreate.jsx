import React, { useState } from "react";

const LinkCreate = () => {
  const [link, setLink] = useState("");
  const handleLinkInput = (e) => {
    setLink(e.target.value);
  };

  const validateLink = () => {
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateLink()) return console.log("This link is invalid");

    setLink("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="link-input">Input Link:</label>
      <input
        value={link}
        onChange={handleLinkInput}
        type="text"
        name="link-input"
        id="link-input"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LinkCreate;
