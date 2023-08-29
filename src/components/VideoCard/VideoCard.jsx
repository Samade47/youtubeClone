import React from 'react'
import { Style } from './Style'
import banner from "../../../public/videoBanner/bann-01.jpg"
import { ThreeDots } from "./index"
import { BasicBtn } from "../../components/Styles/BasicBtn"
import { ChannelProfile } from '../Avatars/Avatars'
const VideoCard = () => {
    return (
        <Style role='link' to="videos" cover={banner}>
            <div className="img-cover"></div>
            <div className="flex-row">
                <div className="content">
                    <ChannelProfile w={35} />
                    <div className="content-text">
                        <h2>Lorem ipsum dolor sit.</h2>
                        <p>Channel Name</p>
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