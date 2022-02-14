import styled from "styled-components";
import  {useState} from "react"

const Head = ({ className }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [count, setCount] = useState(0)
    return(
        <div className={className}>
            <div className="container">
                <input type='search' placeholder="Search..." className="Search" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}></input>
                <button className='count' onClick={() => setCount(count + 1)}>you searched {count} times</button>
            </div>
        </div>
        
    )
}




export default styled(Head)`
background-color: #ccedcc;

.count{
    border: 1px solid black;
    background-color: white ;
    border-radius:.33rem ;
}

.Search{
    border-color:none ;
    border-radius: .33rem;
    outline:none;
    text-decoration:none ;
    appearance:none;
    border: 1px solid black;
}

.container{
    text-align: center;
}

`