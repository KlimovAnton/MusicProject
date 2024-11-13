import css from './Player.module.css';

import ReactPlayer from "react-player/youtube";

export default function Player() {
    return (
        <div className={css.container}>
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=p1kbQIVgFng`}
                controls={false}
                width={"608px"}
                height={"342px"}
            />
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=o8DMm7E_Adc`}
                controls={false}
                width={"608px"}
                height={"342px"}
            />
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=P1DqCFAlDTY`}
                controls={false}
                width={"608px"}
                height={"342px"}
            />
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=y_NhP13YpDU`}
                controls={false}
                width={"608px"}
                height={"342px"}
            />
            
        </div>
    );
  }

