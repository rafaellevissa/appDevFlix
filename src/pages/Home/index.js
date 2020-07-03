import React from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import * as ScreenOrientation from 'expo-screen-orientation';

import Videos from '../../Database/videos.json';

const Container = styled.ScrollView`
    flex: 1;
    backgroud-color: #333333;
`;

async function changeScreenOrientation(){
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
}

export default function Home(){
    changeScreenOrientation();
    return(
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content">
            <Container>
                
            </Container>
        </StatusBar>
    );
}

