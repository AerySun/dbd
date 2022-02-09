import styled from "styled-components";
import * as dbd from 'dbd-json'

const HomePage = ({ className }) => {
    return (
        <div className={className}>
            <div className='split left'>
            {dbd.Survivors.map(survivor => (
                <div className='names' key={survivor.index}>{survivor.name}</div>
            ))}
            </div>
            <div className='split right'>
                {dbd.Survivors.map(survivor => (
                    <div className='perks' key={survivor.index}>{survivor.perks}</div>
            ))}
            </div>
        </div>
    )
}

export default styled(HomePage)`
    .split{
        height: 100%;
        width :50%;
        z-index: 1;
        position:fixed;
        top:0;
        overflow-x:hidden;
        padding: 2rem;
    }

    .left{
        padding-left: 20%;
    }

    .right{
        right: 0;
    }
`