import React from "react";

export default function Search({
  handleChange,
  handleSubmit,
  search,
  loading,
}) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={search}
          placeholder="search for a job"
        />
        <input
          type="submit"
          value={loading === true ? "Searching" : "Search"}
        />
      </form>
    </div>
  );
}
