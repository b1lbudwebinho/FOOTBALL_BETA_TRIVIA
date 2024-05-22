import React, { ChangeEvent, MouseEvent, useState } from 'react'

type Props = {}

// inference -> ts guesses the type for you
// generics -> <>

const Search : React.FC<Props> = (props: Props): JSX.Element => {
    const [search, setSearch] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e);
    };
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        console.log("Button clicked!");
        console.log(search);
    }

    // Before:
    // const onClick = (e: SyntheticEvent) => {
    //     setSearch(e.target.value);
    //     console.log(e);
    // }

    return (
        <div>
            {/* <input value={search} onChange={(e) => onClick(e)}></input>
            <button onClick={(e) => onClick(e)} /> */}
            <input value={search} onChange={handleChange} />
            <button onClick={handleClick}>Search</button>
        </div>
    )
}

export default Search