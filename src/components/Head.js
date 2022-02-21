import styled from "styled-components";
import  {useState} from "react"
import { useRecoilState } from "recoil";
import { searchTextState } from "./atom";
import dbdJson from "dbd-json";


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