import styled from "styled-components";
import * as dbd from 'dbd-json'
import Head from "../components/Head";
import { useRecoilState } from "recoil";
import { searchTextState } from "../components/atom";


const HomePage = ({ className }) => {
    const [text, setText] = useRecoilState(searchTextState);
    return (
        <div className={className}>
            <Head/>
            <div className='split'>
                <div>
                    {dbd.Survivors.map(survivor => (
                        <div className='names' key={survivor.index}>{survivor.name}</div>
                    ))}
                </div>
                <div>
                    {dbd.Survivors.map(survivor => (
                        <div className='perks' key={survivor.index}>{survivor.difficulty}</div>
                    ))}
                </div>
                {/* <div>
                    {dbd.Survivors.map(survivor => (
                        <div className='outcome' key={survivor.name}>{survivor.name.searchTextState}</div>
                    ))}
                </div> */}
                <div>
                    <br />Echo: {text}
                </div>
            </div>
        </div>
    )
}


export default styled(HomePage)`
    .split{
        display: flex;
        padding: 2rem;
    }

    .split > div{
        width: calc(100vw / 3);
        /* flex-basis: 33% ; */
    }
`