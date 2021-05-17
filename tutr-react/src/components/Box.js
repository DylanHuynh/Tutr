import 'bootstrap/dist/css/bootstrap.min.css';
import './Box.css';

let w = "300px";
let h = "300px";
let color = "blue";

function Box(props) {
    return (
            <div className="box">
                <div className="header">
                    Matches To-Do

                </div>
                <div className="body">
                    some text
                </div>
                <div className="subdiv">
                    {props.buttonComp}

                </div>
            </div>


    );
}

export default Box;
