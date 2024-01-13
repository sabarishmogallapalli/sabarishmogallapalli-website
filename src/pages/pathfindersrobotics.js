import * as React from "react";
import SideBarLayout from "../components/SideBarLayout";
import Card from "../components/Card";
import { pathfindersRoboticsInformation } from "../content/data/PathfindersRobotics";
import { PATHFINDERS_ROBOTICS_PROJECT } from "../content/site/links";
import CoolButton from "../components/CoolButton";
import CoolSubButton from "../components/CoolSubButton";
import Head from "../components/Head";
import { sideLinkInformation, linkInformation } from "../content/site/links";
import { icons } from "../content/site/socialIcons";
import Icons from "../components/Icons";

const projectDropdownLinks = [
    { title: "City Recycle Day", href: "/cityrecycleday" },
    { title: "Clive Community Foundation", href: "/clivecommunityfoundation" },
    { title: "Pathfinders Robotics", href: "/pathfindersrobotics" },
    { title: "Stylz", href: "/stylz" },
    { title: "Data Science", href: "/datascience"},
    { title: "Designs", href: "/designs" }
    // Add more projects as needed
    // Create 2 sections, 1 for data science, 1 for UI/UX
  ];

export default function Projects() {
return(
    <>

<div className="flex justify-between px-12 pt-2 relative" style={{paddingBottom: "55px"}}>
            <div className="flex items-center relative z-2">
            <img src="../logo_black_transp.png" style={{ width: '100px', height: 'auto', transition: 'transform 0.3s ease-in-out' }} alt="Logo" onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.5)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}></img>
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
    
    <div style={{ display: "flex" }}>

<div>

    <div style={{display: "flex"}}>
    <div style={{ marginLeft:"10px", flex: 1 }}>
    <h6 style={{paddingBottom:"10px"}}><strong>Case Study | UX</strong></h6>
    <h1 style={{textAlign: "left", color: "#2c3639", fontSize: "7xl", md: { fontSize: "4xl" }, fontWeight: "bold"}}>Pathfinders Robotics : DO</h1>
    <h4 style={{paddingBottom:"10px"}}><strong>Goals:</strong></h4>
    <ol  style={{listStyle: 'none'}}>
<li  style={{listStyle: 'none', paddingBottom: "5px"}}>Capability of processing payments from sponsors and parents</li>
<li  style={{listStyle: 'none', paddingBottom: "5px"}}>Attract more sponsors interested in learning more about the organization and make donations to our nonprofit</li>
<li  style={{listStyle: 'none'}}>Place for sponsors and professionals to have direct contact to the organization and individual teams</li>
<li  style={{listStyle: 'none'}}>Have consistency across the website</li>
</ol>
<h4 style={{paddingBottom:"10px"}}><strong>Target Users:</strong></h4>
<li style={{listStyle: 'none', paddingBottom: "5px"}}>Parents and children interested in creating/joining a team under our nonprofit</li>
<li style={{listStyle: 'none', paddingBottom: "5px"}}>Sponsors</li>
<li style={{listStyle: 'none'}}>Existing Teams</li>
<li style={{listStyle: 'none'}}>Professionals</li>
<h4><strong>Tools Used:</strong></h4>
<div style={{ display: "flex" }}>
    <img src="../wordpress_icon.png" alt="Wordpress Icon" style={{width:"30px",marginLeft:"5px",marginRight:"10px"}}></img>
    <img src="../blocksy_icon.png" alt="Blocksy Icon" style={{width:"30px",marginLeft:"5px",marginRight:"10px"}}></img>
    {/* Need to add an icon for whatever was used in hosting */}
</div>
<h4 style={{paddingBottom:"10px"}}><strong>Role:</strong></h4>
<li style={{paddingBottom:"100px", listStyle: 'none'}}>Sole UX Designer</li>
    </div>
    <div>
    <img src="../pthfdr.png" alt="pathfinder laptop" style={{width:"1000px", marginLeft:"1px", marginRight:"0px", marginTop:"0px"}}></img>
    </div>
    </div>




<div className="w-full text-center z-50 justify-center darker-shade-1"> {/* Change back to text-left afterwards */}
<h1 className="text-left text-6xl" style={{paddingTop: "50px", paddingBottom: "50px", paddingLeft: "120px", opacity: "75%"}}>Discover</h1>
<div style={{display: "flex"}}>
<div style={{marginLeft: "10px", flex:1}}>
    <h3 className="text-left text-m" style={{paddingTop: "50px", paddingBottom: "50px", paddingLeft: "120px", opacity: "75%"}}>About the Foundation</h3>
    <h3 className="text-left text-m" style={{paddingTop: "50px", paddingBottom: "50px", paddingLeft: "120px", opacity: "75%"}}>Field Studies / User Interviews</h3>
</div>
<div style={{marginLeft:"10px", flex:2, paddingBottom:"50px"}}>
    <p>My initial discovery phase involved learning about the purpose and initiatives of the organization. I collaborated with the board members of the organization and came up with this list of initiatives:</p>
    <ul>
    <li  style={{listStyle: 'none', paddingBottom: "5px"}}>Receive payments from family members for season registration and fees</li>
        <li  style={{listStyle: 'none', paddingBottom: "5px"}}>Receive sponsorships and donations from sponsors and donators</li>
        <li  style={{listStyle: 'none', paddingBottom: "5px"}}>Place for prospective team members to learn about teams</li>
        <li  style={{listStyle: 'none', paddingBottom: "5px"}}>Contact area for prospective team members to contact teams</li>
        <li  style={{listStyle: 'none', paddingBottom: "5px"}}>Links to the FIRST robotics organization and it's programs</li>
        <li  style={{listStyle: 'none', paddingBottom: "5px"}}>Showing the organization's community impact</li>
        <li  style={{listStyle: 'none', paddingBottom: "5px"}}>Description of the nonprofit organization's charitable partnership and collaboration efforts</li>
    </ul>
</div>
</div>
<div>
</div>
</div>


<div className="w-full text-center z-50 justify-center darker-shade-2"> {/* Change back to text-left afterwards */}
<h1 className="text-left text-6xl" style={{paddingTop: "50px", paddingBottom: "50px", paddingLeft: "120px", opacity: "75%"}}>Explore</h1>
<div style={{display: "flex"}}>
<div style={{marginLeft: "10px", flex:1}}>
    <h3 className="text-left text-m" style={{paddingTop: "50px", paddingBottom: "50px", paddingLeft: "120px", opacity: "75%"}}>Personas -- Come Back To</h3>
</div>
<div style={{marginLeft:"10px", flex:2}}>
    <p>Based on the information I received from the client and background research I did of other community foundations, I created user personas to demonstrate the primary audiences of the website, along with highlighting their wants and needs to demonstrate the purpose of the website and identify any pain points of the website.</p>
    <div style={{paddingBottom:"20px"}}>
    <div class="card paragraph-color-bg"> 
      <div class="container">
    <img src="../sarah.jpg"></img>
    <h4><b>Sarah, 28 <em>Graphic Designer</em></b></h4>
    <p>Motivations: Sarah wants to learn about and get involved in the various community projects and initiatives facilitated by the Clive Community Foundation.</p>
    <p>Challenges: Sarah might not be fully aware of all the foundation's activities and how she can actively participate.</p>
    <p>Website will provide clear and concise up-to-date information about ongoing projects, events, and opportunities for community involvement.</p>
  </div>
  </div>
  </div>
  <div style={{paddingBottom:"20px"}}>

  <div class="card paragraph-color-bg">
      <div class="container">
      <img src="../ben.jpg"></img>
    <h4><b>Ben, 42 <em>Financial Analyst</em></b></h4>
    <p>Motivations: Wishes to financially support community development projects.</p>
    <p>Challenges: He doesn't have clear visibility of where and how the donations will be used and updates on the progress of the project.</p>
    <p>Website will provide clear and concise up-to-date information about projects along with the need for donations and where those donations are used.</p>
  </div>

</div>
</div>
<div style={{paddingBottom:"20px"}}>

<div class="card paragraph-color-bg">
    <div class="container">
    <img src="../ben.jpg"></img>
  <h4><b>Ben, 42 <em>Financial Analyst</em></b></h4>
  <p>Motivations: Wishes to financially support community development projects.</p>
  <p>Challenges: He doesn't have clear visibility of where and how the donations will be used and updates on the progress of the project.</p>
  <p>Website will provide clear and concise up-to-date information about projects along with the need for donations and where those donations are used.</p>
</div>

</div>
</div>
<div style={{paddingBottom:"20px"}}>

<div class="card paragraph-color-bg">
    <div class="container">
    <img src="../ben.jpg"></img>
  <h4><b>Ben, 42 <em>Financial Analyst</em></b></h4>
  <p>Motivations: Wishes to financially support community development projects.</p>
  <p>Challenges: He doesn't have clear visibility of where and how the donations will be used and updates on the progress of the project.</p>
  <p>Website will provide clear and concise up-to-date information about projects along with the need for donations and where those donations are used.</p>
</div>

</div>
</div>
<p></p>

</div>
</div>
<div className="w-full text-center z-50 justify-center darker-shade-2">

<div style={{display: "flex"}}>
<div style={{marginLeft: "10px", flex:1}}>
<h3 className="text-left text-m" style={{paddingTop: "50px", paddingBottom: "50px", paddingLeft: "120px", opacity: "75%"}}>Card Sorting</h3>
</div>
<div style={{marginLeft:"10px", flex:2, paddingBottom:"100px"}}>
<p>Using the list of website features I got from the field study, I did a variation of a card sorting excercise to sort each of the features of the website into different groups. This was done to finalize the information architecture of the website.</p>
<img src="../card_sorting_pthfdr.png" alt="card sorting" style={{width:"1000px", marginLeft:"10px"}}/>
</div>
</div>
</div>

<div className="w-full text-center z-50 justify-center darker-shade-2">

<div style={{display: "flex"}}>
<div style={{marginLeft: "10px", flex:1}}>
<h3 className="text-left text-m" style={{paddingTop: "50px", paddingBottom: "50px", paddingLeft: "120px", opacity: "75%"}}>Sitemap</h3>
</div>
<div style={{marginLeft:"10px", flex:2, paddingBottom:"100px"}}>
<p>After sorting the featuers into groups, I decided to that these groups would be a good organization for the website, with each group being a separate page on the website. </p>
<img src="../sitemap_pthfdr.png" alt="sitemap pathfinder" style={{width:"1000px", marginLeft:"10px"}}/>
<p>We used the colors from the logo as the colors for the website. Fonts were imported from the website template and were kept because they resembled the font of the nonprofit logo.</p>
</div>
</div>
</div>

<div className="w-full text-center z-50 justify-center darker-shade-2">
<div style={{display: "flex"}}>
<div style={{marginLeft: "10px", flex:1}}>
<h3 className="text-left text-m" style={{paddingTop: "50px", paddingBottom: "50px", paddingLeft: "120px", opacity: "75%"}}>Prototype</h3>
</div>
<div style={{marginLeft:"10px", flex:2, paddingBottom:"100px"}}>
<object data="../homepage.svg" width="800" height="800"> </object>
<p>We wanted to add more sectioning to the homepage so it was easier for users who visit the site to easily notice which each page on the website would be about and to easily navigate to that page.</p>
<object data="../about.svg" width="800" height="800"> </object>
<p>The about us page was very dense with text. We sectioned the information into smaller segments, sectioning the segments throughout the page. We also added imagery where necessary to accompany the text and we took the about us page and added that information as a separate section at the bottom of the page. </p>
<object data="../board.svg" width="800" height="800"> </object>
<p>We added the board of directors page as a section to the bottom of the about us page. Initially each image of the board of directors linked to a separate page with a bio. This page had less navigation which made it difficult to reroute back to the board of directors page. We introduced a pop-up feature which allowed for a pop-up to open once a board of director was clicked on. This allowed for the information to be passed through while still maintaining easy navigability and keeping the website concise.  </p>
<object data="../funds.svg" width="800" height="800"> </object>
<p>The donate page is the most important page for the website. The donating page included just this table with minimum text and a link to an online donation form. We chose to edit this webpage to use this dropdown elements that included imagery depicting the work done through each initiative. We also included additional information about the tax information, a link to a printable donation form, and a donation statement.</p>

</div>
</div>

</div>
</div>

<div style={{display:"flex", justifyContent:"center",paddingTop:"100px"}}>
{icons.map((item) => (
                    <Icons 
                        name={item.name} 
                        href={item.href} 
                    />
                ))}
</div>
</div>
</div>
        </>
);
}