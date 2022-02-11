import styled from "styled-components";
import * as dbd from 'dbd-json'
import Head from "./Head";

const HomePage = ({ className }) => {
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
                        <div className='perks' key={survivor.index}>{survivor.description}</div>
                    ))}
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
        flex-basis: 50% ;
    }
`