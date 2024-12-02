// Filename - components/Footer.js

import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
            <h1
                style={{
                    color: "white",
                    fontWeight:700,
                    textAlign: "center",
                    marginTop: "10px",
                }}
            >
                Where every event becomes an extraordinary experience!
            </h1>
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="services">
                            Our Services
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Services</Heading>
                        <FooterLink href="user">
                            Find Events
                        </FooterLink>
                        <FooterLink href="event-host">
                            Become a Host
                        </FooterLink>
                        <FooterLink href="contact">
                            Contact Us
                        </FooterLink>
                    
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#"git>
                            Philippines
                        </FooterLink>
                        <FooterLink href="#">
                            Canada
                        </FooterLink>
                        <FooterLink href="#">
                            Japan
                        </FooterLink>
                        <FooterLink href="#">
                            South Korea
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink>
                            <i className="fab fa-facebook-f">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink>
                            <i className="fab fa-instagram">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink>
                            <i className="fab fa-twitter">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink>
                            <i className="fab fa-youtube">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    );
};
export default Footer;