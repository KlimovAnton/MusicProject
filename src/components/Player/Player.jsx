import css from './Player.module.css';

import ReactPlayer from "react-player/youtube";

export default function Player() {
    return (
        <div className={css.container}>
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=p1kbQIVgFng`}
                controls={true}
                className='react-player'
                width={"608px"}
                height={"342px"}
            />
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=y_NhP13YpDU`}
                controls={true}
                width={"608px"}
                height={"342px"}
            />
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=7ID5Hto7JeU`}
                controls={true}
                width={"608px"}
                height={"342px"}
            />
            <ReactPlayer
                url={`  https://www.youtube.com/shorts/1mhrpVFAtdo`}
                controls={true}
                width={"608px"}
                height={"342px"}
            />
        </div>
    );
  }

