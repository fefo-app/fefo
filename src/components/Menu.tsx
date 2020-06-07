import React from "react";
import {CheckboxMultiple} from "@styled-icons/remix-fill/CheckboxMultiple";
import styled from "styled-components";
import cx from "classnames";
import {Section} from "../types";

const StyleWrapper = styled.menu`
  width: 64px;
  padding: 0;
  position: relative;
  ul {
    background-color: rgba(76,76,76,0.4);
    border-radius: 0 20px 20px 0;
    list-style: none;
    padding: 8px;
    position: fixed;
    top: calc(50% - 36px);
    
    li {
    position: relative;
      margin: 8px;
      
      &.active:before {
        background-color: teal;
        border-radius: 50%;
        content: '';
        filter: drop-shadow(0px 0px 2px lightgreen);
        height: 4px;
        position: absolute;
        left: -10px;
        top: calc(50% - 4px);
        width: 4px;
        
      }
    }
  }
  
  img {
    width: 36px;
  }
  

`

const togglLogo = "https://toggl.com/common/images/share/favicon/favicon-192x192-29519727140c0d39a540787154c03a2f.png";
const menuItems = [
    {
        icon: (<img src={togglLogo}/>),
        section: Section.ToggleDashboard
    },
    {
        icon: (<CheckboxMultiple size={36}/>),
        section: Section.TodoApp
    }
]

export interface MenuProps {
    activeSection: Section
    onSectionChange: (section: Section ) => void
}

export const Menu = ({activeSection, onSectionChange}: MenuProps) => (<StyleWrapper>

    <ul>
        {menuItems.map(({icon, section}) => (
            <li className={cx(activeSection === section && 'active')}
                key={section}
                onClick={() => onSectionChange(section)}>
                {icon}
            </li>
        ))}
    </ul>
</StyleWrapper>)