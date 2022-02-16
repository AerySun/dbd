import styled from "styled-components";
import * as dbd from 'dbd-json'
import Head from "../components/Head";

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
                        <div className='perks' key={survivor.index}>{survivor.difficulty}</div>
                    ))}
                </div>
                <div>
                    {dbd.Survivors.map(survivor => (
                        <div className='perks' key={survivor.index}>{survivor.perks}</div>
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
        width: calc(100vw / 3);
        /* flex-basis: 33% ; */
    }
`