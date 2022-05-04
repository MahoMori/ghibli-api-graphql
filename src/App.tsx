import React, { useState, useEffect } from "react";
import "./App.css";

import Card from "./components/Card";

export interface InitialQueryType {
  id: string;
  image: string;
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
    <div className="App flex justify-center bg-orange-200">
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {ghibliData && ghibliData.map((data) => <Card {...data} />)}
      </div>
    </div>
  );
}

export default App;
