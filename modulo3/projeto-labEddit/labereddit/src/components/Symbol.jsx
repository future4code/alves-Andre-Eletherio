import React from 'react'
import styled from 'styled-components'
import TopLeft from '../assets/img/TopLeft.svg'
import TopRight from '../assets/img/TopRight.svg'
import BottomLeft from '../assets/img/BottomLeft.svg'
import BottomRight from '../assets/img/BottomRight.svg'
const Section = styled.section`
    display: flex;
    flex-direction: column;
    max-height: 100%;

    position: relative;

    .big {
        display: flex;
        align-items: flex-start;

        img{
            width: 42px;
        };

        .imgTR {
            position: absolute;
            top: 0.5px;
            left: 41.5px;
            width: 42.5px;
        }
    }

    .small {
        display: flex;
        align-items: flex-start;

        img{
            width: 14.31px;
        };
    }
`;

export function Symbol(props) {
    return (
        <Section>
            <div className={props.class}>
                <img className='imgTL' src={TopLeft} alt="" />
                <img className='imgTR' src={TopRight} alt="" />
            </div>
            <div className={props.class}>
                <img src={BottomLeft} alt="" />
                <img src={BottomRight} alt="" />
            </div>
        </Section>
    )
}
