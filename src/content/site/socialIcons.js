import * as React from "react"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { SiHackthebox } from "react-icons/si"
import { PiYoutubeLogoFill } from "react-icons/pi"

export const icons = [
    { 
        name: <FaLinkedin size={30} />,
        href: 'https://www.linkedin.com/in/sabarish-mogallapalli/'
    },
    { 
        name: <FaGithub size={30} />,
        href: 'https://github.com/sabarishmogallapalli'
    },
    {
        name: <MdEmail size={30} />,
        href: 'mailto:themogallapalli@gmail.com'
    }
]