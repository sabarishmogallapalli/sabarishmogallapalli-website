import * as React from "react";
import SideBarLayout from "../components/SideBarLayout";
import Card from "../components/Card";
import { stylzInformation} from "../content/data/Stylz";
import { STYLZ_PROJECT } from "../content/site/links";
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
    <h1 style={{textAlign: "left", color: "#2c3639", fontSize: "7xl", md: { fontSize: "4xl" }, fontWeight: "bold"}}>Stylz: DO</h1>
    <h4 style={{paddingBottom:"10px"}}><strong>Goals:</strong></h4>
    <ol  style={{listStyle: 'none'}}>
<li  style={{listStyle: 'none', paddingBottom: "5px"}}>Make it competitive with or better than the websites of other non-profit organizations</li>
<li  style={{listStyle: 'none', paddingBottom: "5px"}}>Attract more visitors interested in learning more about the CCF and make donations to one of the funds</li>
<li  style={{listStyle: 'none'}}>Have consistency across the website</li>
</ol>
<h4 style={{paddingBottom:"10px"}}><strong>Target Users:</strong></h4>
<li style={{listStyle: 'none', paddingBottom: "5px"}}>Community members</li>
<li style={{listStyle: 'none', paddingBottom: "5px"}}>Donators</li>
<li style={{listStyle: 'none'}}>Younger audiences</li>
<h4><strong>Tools Used:</strong></h4>
<div style={{ display: "flex" }}>
    <img src="../wix_icon.png" alt="Wix Icon" style={{width:"30px",marginLeft:"5px",marginRight:"10px"}}></img>
    <img src="../wordpress_icon.png" alt="Wordpress Icon" style={{width:"30px",marginLeft:"5px",marginRight:"10px"}}></img>
    <img src="../miro_icon.png" alt="Miro Icon" style={{width:"30px",marginLeft:"5px",marginRight:"10px"}}></img>
    <img src="../filezilla_icon.png" alt="FileZilla Icon" style={{width:"30px",marginLeft:"5px",marginRight:"10px"}}></img>
</div>
<h4 style={{paddingBottom:"10px"}}><strong>Role:</strong></h4>
<li style={{paddingBottom:"100px", listStyle: 'none'}}>UX Lead</li>
    </div>
    <div>
    <img src="../flaire.png" alt="flaire phone" style={{width:"750px", marginLeft:"1px", marginRight:"0px", marginTop:"0px"}}></img>
    </div>
    </div>




<div className="w-full text-center z-50 justify-center darker-shade-1"> {/* Change back to text-left afterwards */}
<h1 className="text-left text-6xl" style={{paddingTop: "50px", paddingBottom: "50px", paddingLeft: "120px", opacity: "75%"}}>Discover</h1>
<div style={{display: "flex"}}>
<div style={{marginLeft: "10px", flex:1}}>
    <h3 className="text-left text-m" style={{paddingTop: "50px", paddingBottom: "50px", paddingLeft: "120px", opacity: "75%"}}>About the Foundation</h3>
</div>
<div style={{marginLeft:"10px", flex:2}}>
    <p>During our initial discovery phase I learned about the <em>Clive Community Foundation</em> and it's purpose and initiatives. I learned that the foundation follows three main pillars: Quality of Life, Health and Wellness, and Collaboration. They are also working on a new project, <em>The Greenbelt Landing Project</em>, which they are looking to advertise on this new website redesign. They also want to use this website to advertise the organizations initiatives and drive donations to their funds.</p>
</div>
</div>
<div>
<div style={{display: "flex"}}>
<div style={{marginLeft: "10px", flex:1}}>
<h3 className="text-left text-m" style={{paddingTop: "50px", paddingBottom: "50px", paddingLeft: "120px", opacity: "75%"}}>Example Websites</h3>
</div>
<div style={{marginLeft:"10px", flex:2, paddingBottom:"100px"}}>
    <p>I looked into the following organizations' websites to understand how other foundations were presenting and organizing their website to their purpose.</p>
<div class="flex justify-center space-x-10" style={{paddingTop: "50px", paddingBottom: "50px"}}>
<div class="card paragraph-color-bg">
<a href="https://www.foundationboonecounty.org/" target="_blank">
    <div class="container">
    <h4><b>Boone County</b></h4>
  </div>
</a>
</div>
<div class="card paragraph-color-bg">
<a href="https://www.daviscountycommunityfoundation.org/" target="_blank">
    <div class="container">
    <h4><b>Davis County</b></h4>
    </div>
</a>
</div>
<div class="card paragraph-color-bg">
<a href="https://www.desmoinesfoundation.org/" target="_blank">
      <div class="container">
    <h4><b>Des Moines</b></h4>
  </div>  
</a>

</div>
<div class="card paragraph-color-bg">
<a href="https://www.waukeebetterment.org/" target="_blank">
    <div class="container">
    <h4><b>Waukee Betterment</b></h4>
  </div>
</a>
</div>
</div>
<h5>Appealing elements of these websites to implement into Clive Community Foundation Website:</h5>
<ul  style={{listStyle: 'none'}}>
    <li   style={{listStyle: 'none', paddingBottom: "15px"}}>Consistent color pallette of only 2-3 colors throughout whole website</li>
    <li  style={{listStyle: 'none', paddingBottom: "15px",}}>Adding animation and movement on page</li>
    <li  style={{listStyle: 'none', paddingBottom: "15px",}}>Homepage has links to every section of website</li>
    <li  style={{listStyle: 'none', paddingBottom: "15px",}}>Use Footer of website for information you want accessible throughout whole website: social links, menu, contact information</li>
    <li  style={{listStyle: 'none', paddingBottom: "15px",}}>Less text, more images and media form of content</li>
    <li  style={{listStyle: 'none', paddingBottom: "15px",}}>No redundant features or links</li>
    <li  style={{listStyle: 'none', paddingBottom: "15px",}}>Use of submenus that appear when a section on the menu is hovered over</li>
</ul>
</div>
</div>
</div>
</div>


<div className="w-full text-center z-50 justify-center darker-shade-2"> {/* Change back to text-left afterwards */}
<h1 className="text-left text-6xl" style={{paddingTop: "50px", paddingBottom: "50px", paddingLeft: "120px", opacity: "75%"}}>Explore</h1>
<div style={{display: "flex"}}>
<div style={{marginLeft: "10px", flex:1}}>
    <h3 className="text-left text-m" style={{paddingTop: "50px", paddingBottom: "50px", paddingLeft: "120px", opacity: "75%"}}>Personas</h3>
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
  <div>
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
<h3 className="text-left text-m" style={{paddingTop: "50px", paddingBottom: "50px", paddingLeft: "120px", opacity: "75%"}}>Sitemap</h3>
</div>
<div style={{marginLeft:"10px", flex:2, paddingBottom:"100px"}}>
<p>The original navigation and organization of the website was very elaborate and unnecessary. The website had 7 web pages with no more than a half-page worth of content on each. </p>
<img src="../OgSitemap.jpg" alt="original sitemap" style={{width:"1000px", marginLeft:"10px"}}/>
<p>We merged content of the What We Do, Success Stories, and Give pages into other pages of the website. This led to less pages and more content on each page. </p>
<img src="../NewSitemap.jpg" alt="new sitemap" style={{width:"1000px", marginLeft:"10px"}}/>
<p>We maintained the fonts, colors, and other styles of the original website.</p>
</div>
</div>
</div>

<div className="w-full text-center z-50 justify-center darker-shade-2">
<div style={{display: "flex"}}>
<div style={{marginLeft: "10px", flex:1}}>
<h3 className="text-left text-m" style={{paddingTop: "50px", paddingBottom: "50px", paddingLeft: "120px", opacity: "75%"}}>Prototype</h3>
<h5><em>Pictured on left: Old website, Pictured on right: New website</em></h5>
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