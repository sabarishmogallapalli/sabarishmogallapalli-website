import * as React from "react"
import SideBarLayout from "../components/SideBarLayout";
import Card from "../components/Card";
import { cityRecycleDayInformation } from "../content/data/CityRecycleDay";
import { CITY_RECYCLE_DAY_PROJECT } from "../content/site/links";

export default function Projects() {
  return <div>
            {/* <SideBarLayout name={CITY_RECYCLE_DAY_PROJECT}> */}
{/*                 {cityRecycleDayInformation.map((project) => (
                        <Card 
                            cardTitle={project.title}
                            cardSubTitle={project.name} 
                            cardDate={project.date}
                            cardData={project.data}
                            href={project.href}
                            video={project.video} />
                ))} */}
            {/* </SideBarLayout>      */}
        </div>
}