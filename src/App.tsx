import React, { useState, useEffect } from "react";
import "./App.css";

interface InitialQueryType {
  id: string;
  image: string;
  movie_banner: string;
  title: string;
  description: string;
  original_title: string;
  original_title_romanised: string;
  release_date: number;
}

const INITIAL_QUERY = `
  query InitialQuery {
    myQuery {
      id
      image
      movie_banner
      title
      description
      original_title
      original_title_romanised
      release_date
    }
  }
`;

const ENDPOINT = process.env.REACT_APP_API_ENDPOINT as string;

function App() {
  const [ghibliData, setGhibliData] = useState<InitialQueryType[]>([]);

  useEffect(() => {
    fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: INITIAL_QUERY }),
    })
      .then((res) => res.json())
      .then((data) => setGhibliData(data.data.myQuery));
  }, []);

  return (
    <div className="App">
      {ghibliData && ghibliData.map((data) => <p>{data.title}</p>)}
    </div>
  );
}

export default App;
