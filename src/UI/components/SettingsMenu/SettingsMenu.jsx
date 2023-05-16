import React, { useState } from 'react';
import { DropdownMenuItem,  DropdownMenu, DropdownButton, DropdownContainer,  } from '../../Styles/components/SettingsMenu';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen((prevIsOpen) => !prevIsOpen);
    };
  
    const handleMenuItemClick = (item) => {
      console.log(`Selected item: ${item}`);
      setIsOpen(false);
    };
  
    return (
      <DropdownContainer>
        <DropdownButton onClick={toggleDropdown}>
          Click to Open Dropdown
        </DropdownButton>
        {isOpen && (
          <DropdownMenu>
            <DropdownMenuItem onClick={() => handleMenuItemClick('Option 1')}>
              Option 1
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleMenuItemClick('Option 2')}>
              Option 2
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleMenuItemClick('Option 3')}>
              Option 3
            </DropdownMenuItem>
          </DropdownMenu>
        )}
      </DropdownContainer>
    );
  };
  
  export default Dropdown;