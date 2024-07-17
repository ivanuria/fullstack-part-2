const Part = ({part}) => {
    return (
        <li><b>{part.name}</b>: {part.exercises}</li>
    )
}

export default Part