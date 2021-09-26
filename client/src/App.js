import axios from "axios";
import { useState } from "react";
import "./App.css";
import Search from "./Search";
import Results from "./Results";
// import { adzunaConfig } from "./config";
require("dotenv").config();

function App() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let searchTerm = encodeURI(search);
    async function getJobs() {
      const { data } = await axios.get(
        `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${process.env.REACT_APP_ADZUNA_ID}&app_key=${process.env.REACT_APP_ADZUNA_KEY}&results_per_page=50&what_phrase=${searchTerm}&what_exclude=senior%20manager%20sr%20principal%20&max_days_old=30&salary_include_unknown=1&full_time=1&permanent=1`
      );
      setData(data);
      setLoading(false);
    }
    try {
      getJobs();
      setLoading(true);
    } catch (error) {
      alert(error);
    } finally {
      setSearch("");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <span id="job">job</span>Finder
        </h1>
      </header>
      <Search
        loading={loading}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        search={search}
      />
      <Results data={data} loading={loading} />
    </div>
  );
}

export default App;
