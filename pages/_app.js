import GlobalStyle from "../scr/theme/GlobalStyle";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp;