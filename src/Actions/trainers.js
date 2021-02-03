export const getTrainers = () => {
    return (dispach) => {
        dispach ({type: "LODING_TRAINERS"})
        fetch('/trainers')
        .then(res => res.json())
        .then(trainers => dispach({type: "FETCH_TRAINERS", payload: trainers }))
    }
    
}

export const addTrainer = (trainer) => {
    return (dispach) => {
         dispach({type: "ADD_TRAINER"})
         fetch('/trainers', {
            method: 'POST',
            body: JSON.stringify(trainer),
            headers: {
                'Content-type': 'application/json'
            } 
         })
         .then(res => res.json())
         .then(trainer => dispach({type: "TRAINER_ADDED", payload: trainer}))
    }

}