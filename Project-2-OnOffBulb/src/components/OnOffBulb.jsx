import { useState } from "react";

function OnOffBulb() {
    let [offBulb, setOffbulb] = useState(true)
    function bulbCondition() {
        setOffbulb(!offBulb)
    }
    return (
        <>
            {offBulb === true ? (
                <img className="offBulb" src="/off.jpg" alt="" />
            ) : (
                <img className="offBulb" src="/on.jpg" alt="" />)
            }
            <button className="on-Off" onClick={bulbCondition}>{offBulb === true ? "On" : "Off"}</button>
        </>
    )
}
export default OnOffBulb;