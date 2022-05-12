import React, {useState, useEffect} from 'react'
import ClipCard from './ClipCard'
import Submit from './Submit'
function Body() {
  const [clipData, setClipData] = useState([]);
  useEffect(() => {
    fetch("/clips")
      .then((r) => r.json())
      .then((data) => setClipData(data));
  }, []);
  // console.log(clipData)
  return (
    <div id="body">
        <ClipCard clipData={clipData} setClipData={setClipData}/>
    </div>
  )
}

export default Body