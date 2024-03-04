import './Processor.css';

function Processor(){
    return (
        <div>
            <h2 className='sidebar-title'> Processor</h2>

            <div>
                <label className='sidebar-label-container'>
                    <input type ="checkbox" name = "test2"/>
                    < span className='checkmark'> </span> Intel Core i7
                </label>

                <label className='sidebar-label-container'>
                    <input type ="checkbox" name = "test2"/>
                    < span className='checkmark'> </span> Intel Core i5
                </label>

                <label className='sidebar-label-container'>
                    <input type ="checkbox" name = "test2"/>
                    < span className='checkmark'> </span> AMD Ryzen 7
                </label>

                <label className='sidebar-label-container'>
                    <input type ="checkbox" name = "test2"/>
                    < span className='checkmark'> </span> AMD Ryzen 5
                </label>
            </div>
        </div>
    )
}

export default Processor;