import React from 'react'

export interface SearchBarProps{
    filterText: string;
    inStockOnly: boolean;
    onFilterTextChange: (arg1: string) => void
    onInStockChange: (arg1: boolean) => void
}

function SearchBar(props: SearchBarProps): React.ReactElement {
    const handleFilterTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onFilterTextChange(event.target.value);
    }
    const handleInStockChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onInStockChange(Boolean(event.target.value))
    }

    return (
        <form>
            <input
                type="text" 
                placeholder='sherch...' 
                value={props.filterText}
                onChange={handleFilterTextChange}
            />
            <p>
                <input 
                    type="checkbox"
                    checked={props.inStockOnly}
                    onChange={handleInStockChange}
                />
                Only show products in stock
            </p>
        </form>
    )
}

export default SearchBar