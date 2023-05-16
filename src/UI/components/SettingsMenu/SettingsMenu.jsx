import React, { useState } from 'react';
import { DropdownMenuItem,  DropdownMenu, DropdownButton, DropdownContainer,  } from '../../Styles/components/SettingsMenu';

const Dropdown = (songId) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
  const [selectedSongId, setSelectedSongId] = useState(null);


    const toggleDropdown = () => {
      setIsOpen((prevIsOpen) => !prevIsOpen);
            setSelectedSongId(songId);
      setShowModal((prevShowModal) => !prevShowModal);
    };
  

    const handleMenuItemClick = (item) => {
      console.log(`Selected item: ${item}`);
      setIsOpen(false);
    };
  
    return (

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
     
    );
  };
  
  export default Dropdown;