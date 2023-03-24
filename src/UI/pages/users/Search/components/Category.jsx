import { category } from "../category";
import { ContainerBrowserCategory, ContainerTitleCategory, H2TitleCategory, ContainerCategory, CategoryBox, CategoryTitle, ContainerCategorydiv } from "../../../../Styles/Pages/Users/components/CategoryStyle";

export default function Category() {
    return (
        <ContainerBrowserCategory>
            <ContainerTitleCategory>
                <H2TitleCategory>Categories</H2TitleCategory>
            </ContainerTitleCategory>
            <ContainerCategorydiv>
                {category.map((category) => {
                    return (
                        <ContainerCategory>
                            <CategoryBox src={category.img} />
                            <CategoryTitle>{category.title}</CategoryTitle>
                        </ContainerCategory>

                    )
                })}
            </ContainerCategorydiv>
        </ContainerBrowserCategory>
    )
}