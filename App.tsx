import React, { useEffect, useState } from "react";
import { preload, Bootstrap } from "./src/bootstrap";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    preload()
      .then(() => setIsLoading(false))
      .catch((e) => {
        console.log(e);
      });
  }, []);

  if (isLoading) return null;

  return <Bootstrap />;
}
