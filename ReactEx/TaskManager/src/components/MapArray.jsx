function MapArray() {
    const days = ["Mon", "Tues", "Wed", "Thurs", "Fri"];
    // const daysInHeader = [<h2>Mon</h2>, <h2>Tues</h2>, <h2>Wed</h2>,
    // <h2>Thurs</h2>, <h2>Fri</h2>]
    const daysInHeader = days.map(item => <h2>{item}</h2>)
    return (
        <div>
            {daysInHeader}
        </div>
    )
}

export default MapArray;