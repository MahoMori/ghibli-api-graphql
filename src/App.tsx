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

const ENDPOINT = process.env.REACT_APP_API_LOCAL_ENDPOINT as string;

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
    <div className="px-10 py-8 mx-auto items-center bg-teal-300 dark:bg-gray-800">
      <h3 className="p-4 text-3xl text-semibold text-black dark:text-white">
        Studio Ghibli Database
      </h3>
      <div className="flex flex-wrap">
        {ghibliData &&
          ghibliData.map((data) => <Card key={data.title} {...data} />)}
      </div>
    </div>
  );
}

export default App;
