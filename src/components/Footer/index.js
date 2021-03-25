import React from "react";
import { Container, Wrapper, Row, Column, Link, Title } from './styles/footer'

export default function Footer({ children, ...restProp}) {
    return <Container {...restProp}>{children}</Container>
}

Footer.Wrapper = function FooterWrapper({children, ...restProp}) {
    return <Wrapper {...restProp}>{children}</Wrapper>
}

Footer.Row = function FooterRow({children, ...restProp}) {
    return <Row {...restProp}>{children}</Row>
}

Footer.Column = function FooterColumn({children, ...restProp}) {
    return <Column {...restProp}>{children}</Column>
}

Footer.Link = function FooterLink({children, ...restProp}) {
    return <Link {...restProp}>{children}</Link>
}

Footer.Title = function FooterTitle({children, ...restProp}) {
    return <Title {...restProp}>{children}</Title>
}