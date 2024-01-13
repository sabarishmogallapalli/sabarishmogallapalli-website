import * as React from "react"
import SideBarLayout from "../components/SideBarLayout";
import Card from "../components/Card";
import { dataScienceInformation } from "../content/data/DataScience";
import { DATA_SCIENCE } from "../content/site/links";

export default function Projects() {
  return <div>
            <SideBarLayout name={DATA_SCIENCE}>
                {dataScienceInformation.map((project) => (
                        <Card 
                            cardTitle={project.title}
                            cardSubTitle={project.name} 
                            cardDate={project.date}
                            cardData={project.data}
                            href={project.href}
                            video={project.video} />
                ))}
            </SideBarLayout>     
        </div>
}