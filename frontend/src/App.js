import {useEffect,useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  let [datas,setData] = useState([]);

  axios.get("http://106.51.60.94:5000/gettrackers")
  .then((res) =>{
      setData(res.data);
  });


    // useEffect(() =>{
    //     fetch("http://106.51.60.94:5000/gettrackers")
    //     .then((response)=>response.json())
    //     .then((data1)=>{
    //         setData(data1);
    //         console.log(data1);
    //     })
    //     .catch((error)=>{
    //         console.log(error);
    //     })
    // },[])


    const tableItems = datas.map((data) =>
        <tr key={data.id}>
            <td>{data["tracker-id"]}</td>
            <td>{data["tracker-number"]}</td>
            <td>{data.tracker}</td>
            <td>{data["grid-view"]}</td>
            <td>{data["card-view"]}</td>
            <td>{data.create}</td>
            <td>{data.edit}</td>
            <td>{data.delete}</td>
            <td>{data.filter}</td>
            <td>{data.sort}</td>
            <td>{data.link}</td>
            <td>{data.secured}</td>
            <td>{data["tracker-info"]}</td>
            <td>{data.status}</td>
            <td>{data.external}</td>

        </tr>
    );


  return (
    <section className="table">
        <div className="view">
                <table>
                        
                
                <tbody>
                <tr>
                  <th>Tracker id</th>
                  <th>Tracker number</th>
                  <th>Tracker</th>
                  <th>Grid view</th>
                  <th>Card view</th>
                  <th>Create</th>
                  <th>Edit</th>
                  <th>Delete</th>
                  <th>Filter</th>
                  <th>Sort</th>
                  <th>Link</th>
                  <th>Secured</th>
                  <th>Tracker info</th>
                  <th>Status</th>
                  <th>External</th>

                </tr>
                    
                        {tableItems}
                    
                </tbody>
                </table>
                    
            
            </div>
    </section>
  )};

export default App;
