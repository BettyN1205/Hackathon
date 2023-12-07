import axios from "axios";
import Resultpage from "../../pages/resultpage";
import { useState, useEffect } from "react";

function InputForm() {
  const APIKEY = "Key b907cdfa6acc4fffb62a87a0cd0f9267";
  const [reuqestData, setRequestData] = useState(null);

  let handleSubmit = async (e) => {
    e.preventDefault();
    const urlLink = e.target.urlLink.value;
    let data = JSON.stringify({
      inputs: [
        {
          data: {
            image: {
              url: urlLink,
            },
          },
        },
      ],
    })
    setRequestData(data)
  };

  let config = {
    headers: {
      Authorization: 'Key b907cdfa6acc4fffb62a87a0cd0f9267',
      'Content-Type': 'application/json'
    }
  }
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post(
        `https://api.clarifai.com/v2/users/clarifai/apps/main/models/celebrity-face-detection/versions/2ba4d0b0e53043f38dbbed49e03917b6/outputs`,
        reuqestData,
        config
      );
      console.log(response.data.outputs[0].data.regions[0].data.concepts[0])
      console.log(response.data.outputs[0].data.regions[0].data.concepts[0].name)
      console.log(response.data.outputs[0].data.regions[0].data.concepts[0].value)
    }
    if(reuqestData){
      fetchData();
    }
    
  }, [reuqestData]);

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Url Link</label>
      <input type="text" name="urlLink" />
      <button type="submit">Submit</button>
      <Resultpage />
    </form>
    </>
  );
}

export default InputForm;
