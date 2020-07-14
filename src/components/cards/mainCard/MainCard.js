import React from 'react'
import {MainCardContainer, ColorHighlight, SocialContainer, MetricsContainer} from './mainCardStyles'
import {getSocialImage} from '../../../resources/getSocialImage'

export default function MainCard() {
    return (
       <>
        <MainCardContainer>
            <ColorHighlight />
            <SocialContainer>
                <img src={getSocialImage('facebook')} alt="social media"/>
                <p>@oioioi</p>
            </SocialContainer>
            <MetricsContainer>
                <h1>1987</h1>
                <p>followers</p>
            </MetricsContainer>
        </MainCardContainer>
       </>
    )
}
