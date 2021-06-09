import { getOrders } from "./database.js"

const buildOrderListItem = (order) => {
    return `<li>
        Order #${order.id} was placed on ${order.timestamp}
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