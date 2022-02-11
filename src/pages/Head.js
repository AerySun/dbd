import styled from "styled-components";
import  {useState} from "react"

const Head = ({ className }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [count, setCount] = useState(0)
    return(
        <div className={className}>
            <input type='search' placeholder="Search..." className="Search" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}></input>
            <button className='count' onClick={() => setCount(count + 1)}>you searched {count} times</button>
        </div>
        
    )
}




export default styled(Head)`
`