import * as React from "react"
import SideBarLayout from "../components/SideBarLayout";
import Card from "../components/Card";
import { designsInformation } from "../content/data/Designs";
import { DESIGNS_PROJECT } from "../content/site/links";

export default function Projects() {
  return <div>
            <SideBarLayout name={DESIGNS_PROJECT}>
                {designsInformation.map((project) => (
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