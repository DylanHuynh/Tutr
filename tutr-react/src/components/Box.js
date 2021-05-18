import 'bootstrap/dist/css/bootstrap.min.css';
import './Box.css';

let w = "400px";
let h = "300px";
let color = "blue";
let header = "Matches To-Do";
let content = "some cool text"

function Box(props) {
    w = props.width || w;
    h = props.height || h;
    header = props.header || header;
    content = props.content || content;
    return (
            <div className="box" style={{height:h, width:w}}>
                <div className="header">
                    {header}
                </div>
                <div className="body">
                    {content}
                </div>
                <div className="subdiv">
                    {props.buttonComp}

                </div>
            </div>


    );
}

export default Box;
