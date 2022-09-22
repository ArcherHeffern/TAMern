export const getPeople = (req, res) => {
    //get data from DB
    try {
        //get data
        res.status(200).json(data)
    } catch (error) {
        res.status(404).send({ error: error.message })
    }

}

export const createPerson = (req, res) => {
    try {
        //Post data to DB
        res.status(201).send('Post creation')
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
}