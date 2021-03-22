import styled from "styled-components";
import img from '../sample_image.jpg';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: 2px .8rem 1rem rgba(0, 0, 0, .05);
`

export const ImageData = styled.div`
    height: 25rem;
    position: relative;
    z-index: 1;
    overflow: hidden;
`

export const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: url(${img}) center no-repeat;
    background-size: cover;
    z-index: -1;
    transition: transform 2s;
    &:hover{
        transform: scale(1.5);
    }
`

export const PublicationDetails = styled.div`

`

export const Author = styled.a`

`

export const FasFaUser = styled.i`

`

export const Date = styled.span`

`

export const FasFaCalendarAlt = styled.i`

`

export const PostData = styled.div`

`

export const Title = styled.h1`

`

export const Description = styled.p`

`

export const Cta = styled.div`

`

export const SubTitle = styled.h2`
font-size: 10px

`

export const ReadMore = styled.a`

`