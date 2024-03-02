import "../style/Icon.scss"
import {MouseEventHandler} from "react";

function Icon({icon, main, callback}: {
    icon: {},
    main: boolean,
    callback: MouseEventHandler<HTMLDivElement>
}) {

    return (
        <div className={"icon"} data-main={main} onClick={callback}>
            <img src={icon as string} alt=""/>
        </div>
    );
}

export default Icon;
