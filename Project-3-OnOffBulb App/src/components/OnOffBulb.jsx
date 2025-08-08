import { useState } from "react";

function OnOffBulb() {
    let [offBulb, setOffbulb] = useState(true)
    function bulbCondition() {
        setOffbulb(!offBulb)
    }
    return (
        <body>
            {offBulb === false && <div className="gradient-overlay"></div>}
            <div className="main">
                <h1>On Off Bulb App</h1>
                <div className="bulb">
                    {offBulb === true ? (
                        <img className="offBulb" src="/off.jpg" alt="" />
                    ) : (
                        <img className="offBulb" src="/on.jpg" alt="" />)
                    }
                </div>
                <button className="on-Off" onClick={bulbCondition}>{offBulb === true ? "On" : "Off"}</button>
            </div>
            
        </body>
    )
}
export default OnOffBulb;