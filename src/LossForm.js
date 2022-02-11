function LossForm(props){
    const gainsNeeded = Math.round(((props.loss)/(100-props.loss))*100)
    return (
        <div>
            <div>Total Losses: <p className="number">-{props.loss}%</p></div>
            <div className="slidecontainer">
            <form action="">
              <input
                type="range"
                min="1"
                max="99"
                value={props.loss}
                onChange={props.handleChange}
                className="slider"
                id="myRange"/>
            </form>
            <div className="gainsContainer">
                
                <div>Gains Needed to Recoup Losses: <p className="numberGains">+{gainsNeeded}%</p></div>
                <div>Average Time Needed: <p className="numberGains">{Math.round(gainsNeeded/10.49)} Years</p></div>
            </div>
            </div>
        </div>
    )
}

export default LossForm;