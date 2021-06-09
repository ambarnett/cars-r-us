import { getPaintColor, setPaint } from "./database.js"

const paints = getPaintColor()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "paint") {
            setPaint(parseInt(event.target.value))
        }
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