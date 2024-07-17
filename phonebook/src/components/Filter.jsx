const Filter = ({filter, setter}) => {
    return (
        <div><label htmlFor="filter">¨The name contains: </label><input value={filter} onChange={(event) => setter(event.target.value)} /></div>
    )
}

export default Filter