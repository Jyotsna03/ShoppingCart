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


  function MyComponent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  }
  useEffect(() => {
    fetch("http://localhost:3000/product")
        .then((res) => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
            },

            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );
}, []);

if (error) {
  return <>{error.message}</>;
} else if (!isLoaded) {
  return <>loading...</>;
} else {
  return (
      /* here we map over the element and display each item as a card  */
  <div className=" card-container">
          <ul className="card">
              {filters.map((filter) => (
                  <li>
                      <article className="card" key={filters.LaptopName}>
                          <div className="card-image">
                              <img src={"my-app\public\images\img1.jpg"} />
                          </div>
                              <ol className="card-list">
                                  <li>
                                      Processor:{" "}
                                      <span>{filters.Processor}</span>
                                  </li>
                                  <li>
                                     <span>{filters.RAM}</span>
                                  </li>
                                  <li>
                                     <span>{filters.SSD}</span>
                                  </li>
                              </ol>
                          
                      </article>
                  </li>
              ))}
          </ul>
      </div>
  );
}



export default App;