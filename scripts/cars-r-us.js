import { paintColors } from "./paint.js"
import { interiorStyles } from "./interior.js"
import { technologyPackages } from "./technology.js"
import { wheelTypes } from "./wheels.js"

document.addEventListener(
    "click",
    (event) => {

    }
)

export const carsRus = () => {
    return `
        <h1>cars-r-us</h1>

        <article class="choices">
            <section class="choices__paints options">
                <h2>Paint Colors</h2>
                ${paintColors()}
            </section>
            <section class="choices__interiors options">
                <h2>Interiors</h2>
                ${interiorStyles()}
            </section>
            <section class="choices__technology options">
                <h2>Technology Packages</h2>
                ${technologyPackages()}
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${wheelTypes()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>

        </article>
    `
}