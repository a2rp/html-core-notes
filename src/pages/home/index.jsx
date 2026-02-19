import React from "react";
import DoctypeHtml from "./sections/doctypeHtml";
import HeadMeta from "./sections/headMeta";
import BodyStructure from "./sections/bodyStructure";
import Semantic from "./sections/semantic";
import BlockInline from "./sections/blockInline";
import Attributes from "./sections/attributes";

const Home = () => {
    return (
        <>
            <DoctypeHtml />
            <HeadMeta />
            <BodyStructure />
            <Semantic />
            <BlockInline />
            <Attributes />
        </>
    );
};

export default Home;
