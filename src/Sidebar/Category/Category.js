import './Category.css';

function Category(){
    return (
        <div>
            <h2 className='sidebar-title'> Category</h2>

            <div>
                <label className='sidebar-label-container'>
                    <input type ="checkbox" name = "test"/>
                    < span className='checkmark'> </span> Lenovo laptop
                </label>

                <label className='sidebar-label-container'>
                    <input type ="checkbox" name = "test"/>
                    < span className='checkmark'> </span> DELL laptop
                </label>

                <label className='sidebar-label-container'>
                    <input type ="checkbox" name = "test"/>
                    < span className='checkmark'> </span> HP laptop
                </label>

                <label className='sidebar-label-container'>
                    <input type ="checkbox" name = "test"/>
                    < span className='checkmark'> </span> MacBook Pro
                </label>
            </div>
        </div>
    )
}

export default Category;