import React from "react";
import { CategoryButtonsContainer, FiltersButton } from "../../../../Styles/HomePageStyles/CategoryButtonsStyles";

const CategoryeButtons = () => {

    return(
    <>
    <CategoryButtonsContainer>
        <FiltersButton>Energize</FiltersButton>
        <FiltersButton>Relax</FiltersButton>
        <FiltersButton>Workout</FiltersButton>
        <FiltersButton>Focus</FiltersButton>
        <FiltersButton>Community</FiltersButton>
    </CategoryButtonsContainer>
    </>
    );
};

export {CategoryeButtons};