import React, { useContext } from 'react'
import { MainGridStyle } from '../components/Styles/MainGridStyle'
import HotTopics from '../components/HotTopics/HotTopics'
import GridContentLayout from '../components/GridContentLayout/GridContentLayout'
import ToggleState from '../App/context'

const MainGrid = () => {
    const expanded = useContext(ToggleState)
    return (
        <MainGridStyle expanded={expanded} >
            <HotTopics />
            <GridContentLayout />
        </MainGridStyle>
    )
}

export default MainGrid