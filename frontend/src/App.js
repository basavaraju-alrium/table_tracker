import {useEffect,useState} from 'react';
import './App.css';

function App() {

  let [datas,setData] = useState([]);


    useEffect(() =>{
        fetch("http://localhost:8000/table")
        .then((response)=>response.json())
        .then((data1)=>{
            setData(data1);
            console.log(data1);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[])


    const tableItems = datas.map((data) =>
        <tr key={data.id}>
            <td>{data.tracker_id}</td>
            <td>{data.tracker_number}</td>
            <td>{data.tracker}</td>
            <td>{data.grid_view}</td>
            <td>{data.card_view}</td>
            <td>{data.create}</td>
            <td>{data.edit}</td>
            <td>{data.delete}</td>
            <td>{data.filter}</td>
            <td>{data.sort}</td>
            <td>{data.link}</td>
            <td>{data.secured}</td>
            <td>{data.tracker_info}</td>
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
