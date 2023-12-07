const Compare=({person})=>{
  let {name, value} = person
    return (
        <>
        <div>
        <h2>You looks like: {name}</h2>
        <h2>The similarity is {(Math.round(value * 100) / 100) * 100}% </h2>
      </div>
        </>
    )
}

export default Compare;