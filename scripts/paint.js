import { getPaintColor } from "./database.js"

const paints = getPaintColor()

document.addEventListener(
    "change",
    (event) => {
    }
)

export const paintColors = () => {

    let paintHTML = "<ul>"

    const listItems = paints.map(paint => {
        return `<li>
            <input type="radio" name="paint" value="${paint.id}" />${paint.color}
            </li>`
    })

    paintHTML += listItems.join("")

    paintHTML += "</ul>"

    return paintHTML
}