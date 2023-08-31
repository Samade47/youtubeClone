import React from 'react'
import { Style } from './Style'
import { BasicTags } from '../../routes/HotTags'
import { ChevLeft, ChevRight } from '.'
import { BasicBtn } from '../Styles/BasicBtn'

const HotTopics = () => {
    return (
        <Style>
            <div className="control left">
                <BasicBtn>
                    <ChevLeft />
                </BasicBtn>
            </div>
            <div className="carousel">
                <BasicTags className='active' >Tout</BasicTags>
                <BasicTags>music</BasicTags>
                <BasicTags>music arab</BasicTags>
                <BasicTags>rap</BasicTags>
                <BasicTags>comedie</BasicTags>
                <BasicTags>movie</BasicTags>
                <BasicTags>javascript</BasicTags>
                <BasicTags>design system</BasicTags>
                <BasicTags>web dev</BasicTags>
                <BasicTags>backEnd</BasicTags>
                <BasicTags>movie</BasicTags>
                <BasicTags>javascript</BasicTags>
                <BasicTags>design system</BasicTags>
                <BasicTags>web dev</BasicTags>
                <BasicTags>backEnd</BasicTags>
                <BasicTags>movie</BasicTags>
                <BasicTags>javascript</BasicTags>
                <BasicTags>design system</BasicTags>
                <BasicTags>web dev</BasicTags>
                <BasicTags>backEnd</BasicTags>
            </div>
            <div className="control right">
                <BasicBtn>
                    <ChevRight />
                </BasicBtn>
            </div>
        </Style>
    )
}

export default HotTopics