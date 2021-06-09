import { getWheels, setWheels } from "./database.js" 

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheel") {
            setWheels(parseInt(event.target.value))
        }
    }
)

export const wheelTypes = () => {

    let wheelHTML = "<ul>"

    const listItems = wheels.map(wheel => {
        return `<li>
            <input type="radio" name="wheel" value="${wheel.id}"/>${wheel.style}
            </li>`
    })

    wheelHTML += listItems.join("")

    wheelHTML += "</ul>"

    return wheelHTML
}