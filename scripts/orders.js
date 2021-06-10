import { getInterior, getOrders, getPaintColor, getTechnology, getWheels } from "./database.js"

const buildOrderListItem = (order) => {

    const paintColors = getPaintColor()
    const interiors = getInterior()
    const technologies = getTechnology()
    const wheels = getWheels()

    const foundPaint = paintColors.find(
        (paint) => {
            return paint.id === order.paintColorId
        }
    )
    let totalCost = foundPaint.price

    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    totalCost = foundInterior.price

    const foundTech = technologies.find(
        (tech) => {
            return tech.id === order.technologyId
        }
    )
    totalCost = foundTech.price

    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelsId
        }
    )
    totalCost = foundWheels.price

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