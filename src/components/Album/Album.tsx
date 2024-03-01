
import * as React from 'react';
import style from './style.module.css'
import ImageBg from "../../assets/1.jpg";

type Props = {
    title: string;
    artist: string;
};
export const Album: React.FC<Props> = ({ title, artist }) => {
    return (
        <div className={style.album}>
            <div className={style.album_image}>
                <img src={ImageBg} alt="bg"/>
                <button className={style.play_button}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="-0.5 0 7 7">
                        <path fill="#000" fill-rule="evenodd"
                              d="M5.495 2.573 1.5.143C.832-.266 0 .25 0 1.068V5.93c0 .82.832 1.333 1.5.927l3.995-2.43c.673-.41.673-1.445 0-1.855"/>
                    </svg>
                </button>
            </div>
            <div className={style.album_details}>
                <h2 className={style.album_title}>{title}</h2>
                <p className={style.album_artist}>{artist}</p>
            </div>
        </div>
    );
};