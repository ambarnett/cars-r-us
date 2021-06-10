const database = {
    orderBuilder: {},
    paintColor: [
        { id: 1, color: "Silver", price: 190 },
        { id: 2, color: "Midnight Blue", price: 200 },
        { id: 3, color: "Firebrick Red", price: 300 },
        { id: 4, color: "Spring Green", price: 250 }
    ],
    interior: [
        { id: 1, type: "Beige Fabric", price: 50 },
        { id: 2, type: "Charcoal Fabric", price: 80 },
        { id: 3, type: "White Leather", price: 200 },
        { id: 4, type: "Black Leather", price: 160 }
    ],
    technology: [
        { id: 1, type: "Basic Package (basic sound system)", price: 300 },
        { id: 2, type: "Navigation Package (includes integrated navigation controls)", price: 400 },
        { id: 3, type: "Visibility Package (includes side and rear cameras)", price: 450 },
        { id: 4, type: "Ultra Package (includes navigation and visibility packages)", price: 650 }
    ],
    wheels: [
        { id: 1, style: "17-inch Pair Radial", price: 75 },
        { id: 2, style: "17-inch Pair Radial Black", price: 90 },
        { id: 3, style: "18-inch Pair Spoke Silver", price: 130 },
        { id: 4, style: "18-inch Pair Spoke Black", price: 150 }
    ],
    customOrder: [
        {
            id: 1,
            paintColorId: 1,
            interiorId: 1,
            technologyId: 1,
            wheelsId: 1,
            timestamp: 0
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
export const getOrders = () => {
    return database.customOrder.map(order => ({...order}))
}
export const setPaint = (id) => {
    database.orderBuilder.paintColorId = id
}
export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}
export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}
export const setWheels = (id) => {
    database.orderBuilder.wheelsId = id
}
export const checkOrderState = () => {
    return (
        "paintColorId" in database.orderBuilder &&
        "interiorId" in database.orderBuilder &&
        "technologyId" in database.orderBuilder &&
        "wheelsId" in database.orderBuilder
    )
}
export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}

    const lastIndex = database.customOrder.length -1 
    newOrder.id = database.customOrder[lastIndex].id + 1

    newOrder.timestamp = Date.now()

    database.customOrder.push(newOrder)

    database.orderBuilder = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))
}