import { checkOrderState, getTechnology, setTechnology } from "./database.js"
import { dispatchOrderBtnEvent } from "./orderBtnEvent.js"

const technologies = getTechnology()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            setTechnology(parseInt(event.target.value))
            if(checkOrderState()) {
                dispatchOrderBtnEvent()
            }
        }
    }
)

export const technologyPackages = () => {

    let techHTML = "<ul>"

    const listItems = technologies.map(technology => {
        return `<li>
            <input type="radio" name="technology" value="${technology.id}"/>${technology.type}
            </li>`
    })
    techHTML += listItems.join("")

    techHTML += "</ul>"

    return techHTML
}