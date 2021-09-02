import React from "react";

export default function Search({ handleChange, handleSubmit, search }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={search} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
