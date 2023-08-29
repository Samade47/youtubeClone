import React from 'react'
import { MainGridStyle } from '../components/Styles/MainGridStyle'
import HotTopics from '../components/HotTopics/HotTopics'
import GridContentLayout from '../components/GridContentLayout/GridContentLayout'

const MainGrid = () => {
    return (
        <MainGridStyle expanded >
            <HotTopics />
            <GridContentLayout />
        </MainGridStyle>
    )
}

export default MainGrid