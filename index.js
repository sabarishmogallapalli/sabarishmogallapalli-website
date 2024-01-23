import * as React from "react"
import Head from "../components/Head";
import CoolButton from "../components/CoolButton";
import CoolSubButton from "../components/CoolSubButton";
import Icons from "../components/Icons";
import { sideLinkInformation, linkInformation } from "../content/site/links"
import { icons } from "../content/site/socialIcons";
import { NAME, JOB_TITLE } from "../content/data/titleDetails";
import { StaticImage } from "gatsby-plugin-image";


export const projectDropdownLinks = [
    { title: "City Recycle Day", href: "/cityrecycleday" },
    { title: "Clive Community Foundation", href: "/clivecommunityfoundation" },
    { title: "Pathfinders Robotics", href: "/pathfindersrobotics" },
    { title: "Stylz", href: "/stylz" },
    { title: "Data Science", href: "/datascience"},
    { title: "Designs", href: "/designs" }
    // Add more projects as needed
    // Create 2 sections, 1 for data science, 1 for UI/UX
  ];

export default function Home() {
  return (
    <div className="">
        <Head />
        <div className="min-h-screen w-screen hidden lg:block overflow-hidden screen-background-style">
            
        <div className="flex justify-between px-12 pt-2 relative">
            <div className="flex items-center relative z-2">
            <StaticImage src="../../static/logo_black_transp.png" style={{ width: '100px', height: 'auto', transition: 'transform 0.3s ease-in-out' }} alt="Logo" onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.5)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}></StaticImage>
            </div>
            <div className="flex relative z-1 space-x-4">
                {linkInformation.map((item) => (
                            <CoolButton 
                            href={item.href}
                            icon={item.icon}
                            buttonTitle={item.title}
                            className="left-50"
                            />
                        ))}
            
                <div className="relative group">
                    <CoolButton
                        buttonTitle="Projects"
                        icon="projects" // Assuming you have a projects icon
                        className="left-50"
                    />
                    <div className="absolute top-12 left-[-25rem] transform translate-x-[-50%] flex space-x-4 hidden group-hover:flex">
                        {/* Dropdown menu */}
                        {projectDropdownLinks.map((project) => (
                            <div className="flex justify-right primary-color-text">
                            <CoolSubButton
                                key={project.title}
                                href={project.href}
                                buttonTitle={project.title}
                            />
                            </div>
                        ))
                        }
                    </div>
                </div>
                </div>
            </div>
            
            <StaticImage src={'../../static/hello.png'} className="!w-[100%] !rounded-3xl !mx-auto !mt-[8%] !z-50 !flex !justify-center !items-center"></StaticImage>

            <div className="w-full text-7xl flex justify-center primary-text p-5 pb-0">
                {NAME}
            </div>

            <div className="w-full text-3xl flex justify-center paragraph-text ">
                {JOB_TITLE}
            </div>

            <div id="icons" className="z-50 left-0 absolute top-1/2 -mt-24 paragraph-color-bg bg-opacity-100 rounded-lg">
                {icons.map((item) => (
                    <Icons 
                        name={item.name} 
                        href={item.href} 
                    />
                ))}
            </div> 

            <div className="w-full text-2xl flex justify-center paragraph-text ">
                {"Hi, I'm Sabarish -- A cybersecurity software engineering student studying UX design and data science"}
            </div>
 
            {/* Add all the projects */}

        </div>

        {/* MOBILE */}
        <div className="min-h-screen w-screen lg:hidden overflow-hidden screen-background-style">

        <StaticImage src={'../../static/headshot.png'} className="!w-[50%] !rounded-3xl !mx-auto !mt-[8%] !z-50 !flex !justify-center !items-center"></StaticImage>
        <div className="w-full text-4xl text-center z-50 flex justify-center primary-text p-5">
            {NAME}
        </div>

        <div className="w-full text-2xl text-center z-50 flex justify-center paragraph-text ">
            {JOB_TITLE}
        </div>

        <div className="flex flex-wrap justify-center">
            {sideLinkInformation.map((item) => (
                <CoolButton 
                href={item.href}
                icon={item.icon}
                buttonTitle={item.title}
                />
            ))}
        </div>

        <div id="icons" className="z-50 flex p-5 justify-center">
            {icons.map((item) => (
                <Icons 
                    name={item.name} 
                    href={item.href} 
                />
            ))}
        </div>
    </div>
</div>
)}
