import axios from "axios";
import Resultpage from "../../pages/resultpage";
import { useState, useEffect } from "react";

function InputForm() {
  const APIKEY = "Key b907cdfa6acc4fffb62a87a0cd0f9267";
  const [url, setUrl] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    const url = e.target.urlLink.value;
    setUrl(url);
  };

  let config = {
    headers: {
      Authorization: 'Key b907cdfa6acc4fffb62a87a0cd0f9267',
      'Content-Type': 'application/json'
    }
  }
  
  let data = JSON.stringify({
    inputs: [
      {
        data: {
          image: {
            url: "https://samples.clarifai.com/metro-north.jpg",
          },
        },
      },
    ],
  })

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post(
        `https://api.clarifai.com/v2/users/clarifai/apps/main/models/celebrity-face-detection/versions/2ba4d0b0e53043f38dbbed49e03917b6/outputs`,
        data,
        config
      );
      console.log(response.data.outputs[0].data.regions[0].data.concepts[0].name)
    }
    
    fetchData();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Url Link</label>
      <input type="text" name="urlLink" />
      <button type="submit">Submit</button>
      <Resultpage />
    </form>
  );
}

export default InputForm;
