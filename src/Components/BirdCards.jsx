// import birdData from "./src/data/birds"
// import { useState } from "react"
import Bird from "./Bird"

export default function BirdCards({birds, handleAddToCart}) {
    return (
        <section>
            <ul>
            {birds.map(bird => {
                return (
                    <Bird key={bird.id} bird={bird} handleAddToCart={handleAddToCart}/>
                )
            })}
            </ul>
        </section>
    )
}