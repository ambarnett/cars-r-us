import { getInterior, getOrders, getPaintColor, getTechnology, getVehicles, getWheels } from "./database.js"

const buildOrderListItem = (order) => {

    const paintColors = getPaintColor()
    const interiors = getInterior()
    const technologies = getTechnology()
    const wheels = getWheels()
    const vehicles = getVehicles()

    const foundPaint = paintColors.find(
        (paint) => {
            return paint.id === order.paintColorId
        }
    )
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    const foundTech = technologies.find(
        (tech) => {
            return tech.id === order.technologyId
        }
    )
    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelsId
        }
    )
    const foundVehicles = vehicles.find(
        (vehicle) => {
            return vehicle.id === order.vehiclesId
        }
    )
    let totalCost = foundWheels.price + foundInterior.price + foundPaint.price + foundTech.price
    if (foundVehicles.id === 1 ){
        totalCost = totalCost * 1
    } else if (foundVehicles.id === 2 ){
        totalCost = totalCost * 1.5
    } else if (foundVehicles.id === 3 ){
        totalCost = totalCost * 2.25
    }

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
        Order #${order.id} cost ${costString}
        </li>`
}

export const Orders = () => {
    const orders = getOrders()

    let orderHTML = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    orderHTML += listItems.join("")
    orderHTML += "</ul>"

    return orderHTML
}