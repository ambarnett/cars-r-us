import { checkOrderState, getInterior, setInterior } from "./database.js" 
import { dispatchOrderBtnEvent } from "./orderBtnEvent.js"

const interiors = getInterior() 

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            setInterior(parseInt(event.target.value))
            if(checkOrderState()){
                dispatchOrderBtnEvent()
            }
        }
    }
)

export const interiorStyles = () => {

    let interiorHTML = "<ul>"

    const listItems = interiors.map(interior => {
        return `<li>
            <input type="radio" name="interior" value="${interior.id}"/>${interior.type}
            </li>`
    })

    interiorHTML += listItems.join("")

    interiorHTML += "</ul>"

    return interiorHTML
}