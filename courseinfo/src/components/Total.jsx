const Total = ({parts}) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <p>
            <b>Total</b>: {total} exercises
        </p>
    )
}

export default Total