import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const API = "AIzaSyCi25wgZuzcDn_sxzzUs9MfNMzZGjOq1eo";





function App() {

  const [searchData , setSearchData] = useState([]);
  const [searchKw , setSeacrhKw] = useState('');

  async function Bhandler(){

    var fetchurl=`https://www.googleapis.com/youtube/v3/search?key=${API}&part=snippet,id&q=${searchKw}&maxResult=15`;

    try {
      const response = await fetch(fetchurl);
      const  data = await response.json();
      //console.log(data);
      var result = data.items.map((doc) =>({
        ...doc,
        VideoLink:"https://www.youtube.com/embed" + "/"+ doc.id.videoId

      }));

      setSearchData(result);
      console.log(result);

      
      
    }
    catch(err) {

      console.log(err);
      
      //HW

    }


  }

  function Chandler(e){
    setSeacrhKw(e.target.value);
  }

  //console.log(searchKw);



  return (
    <div className="App">

      <input 
      type='text'
      placeholder='enter your keyword'
      onChange={Chandler}/>

      <button onClick={Bhandler}>Click</button>

      <div>
        {searchData.map((item)=>{

          return(

            <div>

              <iframe key={item.id.videoId} width="420" height="315"src={item.VideoLink} title="Youtube video player" allowFullScreen></iframe>


            </div>  
            


          );

        })}
      </div>







      
    </div>
  );
}

export default App;
