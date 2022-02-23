import styled from "styled-components";
import { useRecoilState } from "recoil";
import { searchTextState } from "./atom";


const Head = ({ className }) => {
    const [searchTerm, setSearchTerm] = useRecoilState(searchTextState)
    
    return(
        <div className={className}>
            <div className="container">
                <input type='search' id='searchBar' placeholder="Search..." className="Search" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}></input>
            </div>  
        </div>
    )
}




export default styled(Head)`
background-color: #ccedcc;
padding: 1rem;

.Search{
    padding: .25rem;
    border-color:none ;
    border-radius: .33rem;
    outline:none;
    text-decoration:none ;
    appearance:none;
    border: 1px solid black;
    font-size: .85rem;
}

.container{
    padding-left: 1rem ;
}

`