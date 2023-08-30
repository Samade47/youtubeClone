import React, { useContext } from 'react'
import { Style } from './Style'
// import banner from "../../../public/videoBanner/bann-01.jpg"
import { ThreeDots } from "./index"
import { BasicBtn } from "../../components/Styles/BasicBtn"
import { ChannelProfile } from '../Avatars/Avatars'
const VideoCard = () => {
    return (
        <Style to="videos" cover="/videoBanner/bann-01.jpg">
            <div className="img-cover"></div>
            <div className="flex-row">
                <div className="content">
                    <span><ChannelProfile w={35} to="dummy" /></span>
                    <div className="content-text">
                        <h2>Lorem ipsum dolor sit.</h2>
                        <p><b>Channel Name</b> </p>
                        <p>23 M de vues . il ya 2ans</p>
                    </div>
                </div>

                <BasicBtn>
                    <ThreeDots />
                </BasicBtn>
            </div>
        </Style>

    )
}

export default VideoCard