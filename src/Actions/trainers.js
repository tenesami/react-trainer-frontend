export const getTrainers = () => {
    return (dispach) => {
        dispach ({type: "LODING_TRAINERS"})
        fetch('/trainer')
        .then(res => res.json())
        .then(trainers => dispach({type: "FETCH_TRAINERS", payload: trainers }))
    }
}