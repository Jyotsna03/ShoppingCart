const filters =[
  {
  id:1 ,
  LaptopName: 'Lenovo',
  Processor: 'Intel i7',
  RAM: '8gb',
  SSD: '256GB'

  },
  {
    id:2 ,
    LaptopName: 'Lenovo',
    Processor: 'Intel i9',
    RAM: '16gb',
    SSD: '1TB'
  
    },
    {
      id:3 ,
      LaptopName: 'DELL',
      Processor: 'Intel i5',
      RAM: '8gb',
      SSD: '512GB'
    
      },
      {
        id:4 ,
        LaptopName: 'HP',
        Processor: 'Intel i5',
        RAM: '16gb',
        SSD: '512GB'
      
        },
]

function App(props){
  const arrayData = filters.map((filters) => 
  {
      return <li key={filters.id}>
        <p> {filters.LaptopName}</p>
        <p> {filters.Processor}</p>
        <span> {filters.RAM}</span>
        <span> {filters.SSD}</span>

      </li>;
    }
  )}

  return (
    <div className="container">
      <div>
        <h1>Render List/Array of Items with Key</h1>
      </div>

     
      <ul>{arrayData}</ul>
    </div>
  );


export default App;