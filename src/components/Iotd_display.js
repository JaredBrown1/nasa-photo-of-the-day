import React, { useEffect, useState } from "react";
import axios from "axios";
import Iotd from "./Iotd";

export default function Image() {
  const [image, setImage] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=ig0cLp2zAwJIfuoeruWp6O1tdTBMVfm41KkYmuCh"
      )
      .then(response => {
        setImage(response.data);
      });
  }, []);

  return (
    <div>
      <Iotd
        key={image.url}
        title={image.title}
        date={image.date}
        url={image.url}
        explanation={image.explanation}
      />
    </div>
  );
}
