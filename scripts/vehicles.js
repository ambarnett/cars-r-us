import { checkOrderState, getVehicles, setVehicles } from "./database.js"
import { dispatchOrderBtnEvent } from "./orderBtnEvent.js"

const vehicles = getVehicles()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "vehicle") {
            setVehicles(parseInt(event.target.value))
            if (checkOrderState()) {
                dispatchOrderBtnEvent()
            }
        }
    }
)

export const vehicleTypes = () => {
    let vehicleHTML = ""
    const listItems = vehicles.map(vehicle => {
        return `<input type="radio" name="vehicle" value="${vehicle.id}" />${vehicle.style}`
    })
    vehicleHTML += listItems.join("")

    return vehicleHTML
}