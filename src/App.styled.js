// App.styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        /* border: 1px solid #f00; */
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,
    Header: styled.header`
        /* border: 1px solid #f00; */
        height: 60px;
        flex-shrink: 0;
    `,
    Main: styled.main`
        /* border: 1px solid #f00; */
        flex: 1;
        overflow-y: auto;
        position: relative;

        .contentWrapper {
            /* border: 1px solid #f00; */
            min-height: 100%;
            max-width: 1440px;
            margin: auto;
            display: flex;
            flex-direction: column;
            padding: 15px;

            .contentTopicsLiistWrapper {
                display: flex;
                position: relative;
                flex: 1;

                .mainContent {
                    /* border: 1px solid #f00; */
                    width: 100%;
                    min-height: 100vh;
                }

                .topicsList {
                    border: 1px solid #f00;
                    width: 300px;
                    position: relative;

                    .topicsWrapper {
                        border: 1px solid #f00;
                        height: calc(
                            100vh - 160px
                        ); /* 60px header + 100px top offset */
                        position: sticky;
                        top: 0;
                        overflow-y: auto;
                    }
                }
            }
        }

        .footerWrapper {
            /* border: 1px solid #f00; */
            /* min-height: 300px; */
            flex-shrink: 0;
        }
    `,
};
