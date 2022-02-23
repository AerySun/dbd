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
/* background-color: #38404d; */
padding: .75rem;
background-image: url('https://p.kindpng.com/picc/s/140-1408893_dead-by-daylight-png-transparent-png.png');
background-size: 13%;
background-position: 50% 50%;



.Search{
    padding: .5rem;
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