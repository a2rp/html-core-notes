// App.jsx
import { Styled } from "./App.styled";
import Header from "./components/header";
import Footer from "./components/footer";
import ScrollToTop from "./components/scrollToTop";
import AboutHtml from "./components/aboutHtml";
import TopicsMap from "./components/topicsMap";
import Introduction from "./components/topics/foundation/introduction";
import BasicDocumentStructure from "./components/topics/foundation/basicDocumentStructure";
import HtmlSyntaxRules from "./components/topics/foundation/htmlSyntaxRules";
import ContentModel from "./components/topics/foundation/contentModel";
import Headings from "./components/topics/textContent/headings";
import ParagraphTextSemantics from "./components/topics/textContent/paragraphTextSemantics";
import Lists from "./components/topics/textContent/lists";
import Anchors from "./components/topics/linksAndNavigation/anchors";
import Navigation from "./components/topics/linksAndNavigation/navigation";
import ImagesTopic from "./components/topics/mediaAndEmbeddedContent/images";
import Embedded from "./components/topics/mediaAndEmbeddedContent/embedded";
import SvgIntegration from "./components/topics/mediaAndEmbeddedContent/svgIntegration";
import CanvasBasics from "./components/topics/mediaAndEmbeddedContent/canvas";
import SectioningElements from "./components/topics/structureAndSemantics/sectioningElements";
import DocumentLandmarks from "./components/topics/structureAndSemantics/documentLandmarks";
import DetailsAndDisclosure from "./components/topics/mediaAndEmbeddedContent/detailsAndDisclosure";
import DialogTopic from "./components/topics/structureAndSemantics/dialog";
import TableStructure from "./components/topics/tables/tableStructure";
import FormBasics from "./components/topics/forms/formBasics";
import InputTypes from "./components/topics/forms/inputTypes";
import FormControls from "./components/topics/forms/formControls";
import Validation from "./components/topics/forms/validation";
import AccessibilityInForms from "./components/topics/forms/accessibilityInForms";
import MetaTags from "./components/topics/metadata/metaTags";
import LinkElement from "./components/topics/metadata/linkElement";
import BaseElement from "./components/topics/metadata/baseElement";
import ScriptElement from "./components/topics/scriptsAndPerformance/scriptElement";
import PerformanceAttributes from "./components/topics/scriptsAndPerformance/performanceAttributes";
import AriaBasics from "./components/topics/accessibility/ariaBasics";
import SemanticHtmlVsDivSoup from "./components/topics/accessibility/semanticHtmlVsDivSoup";
import TabOrder from "./components/topics/accessibility/tabOrder";
import Microdata from "./components/topics/advanced/microdata";
import StructuredDataJsonLd from "./components/topics/advanced/structuredDataJsonLd";
import CustomDataAttributes from "./components/topics/advanced/customDataAttributes";
import Internationalization from "./components/topics/advanced/internationalization";
import DeprecatedElements from "./components/topics/advanced/deprecatedElements";
import HtmlLivingStandard from "./components/topics/advanced/htmlLivingStandard";
import SeoFundamentals from "./components/topics/advanced/seoFundamentals";
import SecurityBasics from "./components/topics/advanced/securityBasics";

const App = () => {
    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header />
            </Styled.Header>
            <Styled.Main id="notes-main">
                <div className="contentWrapper">
                    {/* about html */}
                    {/* <div className="aboutHtml"></div> */}
                    <AboutHtml />

                    <TopicsMap />

                    {/* foundation */}
                    <h2 className="category" id="foundation" tabIndex={-1}>Foundation</h2>
                    <Introduction />
                    <BasicDocumentStructure />
                    <HtmlSyntaxRules />
                    <ContentModel />

                    {/* text content */}
                    <h2 className="category" id="text-content" tabIndex={-1}>Text Content</h2>
                    <Headings />
                    <ParagraphTextSemantics />
                    <Lists />

                    {/* links and navigations */}
                    <h2 className="category" id="links-navigation" tabIndex={-1}>Links and Navigation</h2>
                    <Anchors />
                    <Navigation />

                    {/* media and embedded content */}
                    <h2 className="category" id="media" tabIndex={-1}>Media and Embedded Content</h2>
                    <ImagesTopic />
                    <Embedded />
                    <SvgIntegration />
                    <CanvasBasics />

                    {/* structure and semantics */}
                    <h2 className="category" id="structure" tabIndex={-1}>Structure and Semantics</h2>
                    <SectioningElements />
                    <DocumentLandmarks />
                    <DetailsAndDisclosure />
                    <DialogTopic />

                    {/* tables */}
                    <h2 className="category" id="tables" tabIndex={-1}>Tables</h2>
                    <TableStructure />

                    {/* forms */}
                    <h2 className="category" id="forms" tabIndex={-1}>Forms</h2>
                    <FormBasics />
                    <InputTypes />
                    <FormControls />
                    <Validation />
                    <AccessibilityInForms />

                    {/* meta data */}
                    <h2 className="category" id="metadata" tabIndex={-1}>Metadata</h2>
                    <MetaTags />
                    <LinkElement />
                    <BaseElement />

                    {/* scrooipts and perfromance */}
                    <h2 className="category" id="scripts" tabIndex={-1}>Scripts and Performance</h2>
                    <ScriptElement />
                    <PerformanceAttributes />

                    {/* accessibility */}
                    <h2 className="category" id="accessibility" tabIndex={-1}>Accessibility</h2>
                    <AriaBasics />
                    <SemanticHtmlVsDivSoup />
                    <TabOrder />

                    {/* advanced */}
                    <h2 className="category" id="advanced" tabIndex={-1}>Advanced</h2>
                    <Microdata />
                    <StructuredDataJsonLd />
                    <CustomDataAttributes />
                    <Internationalization />
                    <DeprecatedElements />
                    <HtmlLivingStandard />
                    <SeoFundamentals />
                    <SecurityBasics />
                </div>

                <div className="footerWrapper">
                    <Footer />
                </div>
            </Styled.Main>
            <ScrollToTop />
        </Styled.Wrapper>
    );
};

export default App;
