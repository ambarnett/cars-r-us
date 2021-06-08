const database = {
    paintColor: [
        {
            id: 1,
            color: "white",
            price: 19 
        }
    ],
    interior: [
        {
            id: 1,
            type: " ",
            price: 0 
        }
    ],
    technology: [
        {
            id: 1,
            type: " ",
            price: 0
        }
    ],
    wheels: [
        {
            id: 1,
            style: " ",
            price: 0
        }
    ],
    customOrder: [
        {
            id: 1,
            paintColorId: 1,
            interiorId: 1,
            technologyId: 1,
            wheelsId: 1
        }
    ]
}

export const getPaintColor = () => {
    return database.paintColor.map(paint => ({...paint}))
}
export const getInterior = () => {
    return database.interior.map(inter => ({...inter}))
}
export const getTechnology = () => {
    return database.technology.map(tech => ({...tech}))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}