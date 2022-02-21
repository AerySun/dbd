import styled from "styled-components";
import dbdJson, * as dbd from 'dbd-json'
import Head from "../components/Head";
import { useRecoilState, useRecoilValue } from "recoil";
import { searchTextState } from "../components/atom";
import { useState } from "react";


const HomePage = ({ className }) => {
    const searchTerm = useRecoilValue(searchTextState)

    const filter = () => {
        if (searchTerm !== '') {
            const results = dbdJson.Survivors.filter((survivor) => {
                const matches = (searchStr) => searchStr.toLowerCase().includes(searchTerm.toLowerCase())
                return matches(survivor.name) || matches(survivor.perks.join(','))
            })
            return results
        }
        return dbdJson.Survivors
    }

    return (
        <div className={className}>
            <Head/>
            <div className='split'>
                <div>
                    {filter().map(survivor => (
                        <div key={survivor.index}>
                            <div className='names'>{survivor.name}</div>
                            <div className='perks'>{survivor.perks.join(', ')}</div>
                        </div>
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