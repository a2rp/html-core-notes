import React from "react";
import DoctypeHtml from "./sections/foundations/doctypeHtml";
import HeadMeta from "./sections/foundations/headMeta";
import BodyStructure from "./sections/foundations/bodyStructure";
import Semantic from "./sections/foundations/semantic";
import BlockInline from "./sections/foundations/blockInline";
import Attributes from "./sections/foundations/attributes";
import Headings from "./sections/textContent/headings";
import Paragraphs from "./sections/textContent/paragraphs";
import Lists from "./sections/textContent/lists";
import Links from "./sections/textContent/links";
import Images from "./sections/textContent/images";
import Tables from "./sections/textContent/tables";

const Home = () => {
    return (
        <>
            {/* foundations */}
            <DoctypeHtml />
            <HeadMeta />
            <BodyStructure />
            <Semantic />
            <BlockInline />
            <Attributes />

            {/* text content */}
            <Headings />
            <Paragraphs />
            <Lists />
            <Links />
            <Images />
            <Tables />
        </>
    );
};

export default Home;
