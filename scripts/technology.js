import { getTechnology } from "./database.js"

const technologies = getTechnology()

document.addEventListener(
    "change",
    (event) => {
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