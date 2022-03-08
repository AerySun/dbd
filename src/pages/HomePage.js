import styled from "styled-components";
import dbdJson from 'dbd-json'
import Head from "../components/Head";
import { useRecoilValue } from "recoil";
import { searchTextState } from "../components/atom";
import { startCase } from "lodash";


const HomePage = ({ className }) => {
    const searchTerm = useRecoilValue(searchTextState)

    const makeFilter = obj => () => {
        if (searchTerm !== '') {
            const results = obj.filter((survivor) => {
                const matches = (searchStr) => searchStr.toLowerCase().includes(searchTerm.toLowerCase())
                return matches(survivor.name) || matches(survivor.perks.join(','))
            })
            return results
        }
        return obj
    }
    const filterSurvivors = makeFilter(dbdJson.Survivors)
    const filterKillers = makeFilter(dbdJson.Killers)

    return (
        <div className={className}>
            <Head/>
            <div className="split">
                <div className="list">
                    {filterSurvivors().map(survivor => (
                        <div className="character" key={survivor.index}>
                            <div className='character__name'>{survivor.name}</div>
                            <div className='character__perks'>{survivor.perks.map(perk => startCase(perk.toLowerCase())).join(', ')}</div>
                            <div className='character__description'>{survivor.description}</div>
                        </div>
                    ))}
                </div> 

                <div className="list">
                    {filterKillers().map(killer => (
                        <div className="character" key={killer.index}>
                            <div className='character__name'>{killer.name}</div>
                            <div className='character__perks'>{killer.perks.map(perk => startCase(perk.toLowerCase())).join(', ')}</div>
                            <div className='character__description'>{killer.description}</div>
                        </div>
                    ))}
                </div> 
            </div>
        </div>
    )
}


export default styled(HomePage)`
    & .split {
        display: flex;
        & > * {
            flex-basis: 50%;
        }
    }

    & .list {
        gap: 1rem;
        display: flex;
        flex-direction: column;
        padding: 2rem;
    }

    & .character {
        &:hover {
            transform: scale(1.01);
            box-shadow: 0px .33rem .5rem 0 rgba(0,0,0,0.2), 0px -.25rem .33rem 0 rgba(0,0,0,0.1);
        }
        transition: all .1s ease;
        padding: 1rem;
        box-shadow: 0px .25rem .25rem 0 rgba(0,0,0,0.2), 0px -.25rem .25rem 0 rgba(0,0,0,0.1);
        border-radius: .33rem;
        &__name {
            font-weight: bold;
            margin-bottom: .5rem;
        }
        &__perks {
        }
    }
`