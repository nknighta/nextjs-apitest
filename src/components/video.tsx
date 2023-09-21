import video from "../../public/video.mp4";
import React from "react";

export const VideoElement = ({src,
                          width,
                          height}: { width?: number, height?: number, src: string }
) => {
    return (
        <video
            autoPlay={true}
            loop={true}
            muted={true}

            style={{
                width: width ? width : "100%",
                height: height ? height : "100%",
                objectFit: "cover",
            }}
        >
            <source src={src} type={"video/mp4"}/>
            <p>not support video</p>
        </video>
    );
};