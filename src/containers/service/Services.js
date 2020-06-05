import React from "react";
import "./Services.css";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import ServiceCard from "../../components/serviceCard/ServiceCard";
import { workExperiences , services } from "../../portfolio";
import { Fade } from "react-reveal";


export default function Services() {
    if(services.viewServices){
        return (
            <div id="service">
                <Fade bottom duration={1000} distance="20px">
                <div className="services-container" id="workExperience">
                    <div>
                        <h1 className="services-heading">Services</h1>
                        <div className="services-cards-div">
                        {services.Services.map((card) => {
                            return (
                                <ServiceCard
                                    cardInfo={{
                                        logo: card.logo,
                                        title: card.title,
                                        desc: card.desc,
                                        descBullets: card.descBullets
                                    }}
                                />
                            );
                        })}
                        </div>
                    </div>
                </div>
                </Fade>
            </div>
        );
    }
    return null;
}
