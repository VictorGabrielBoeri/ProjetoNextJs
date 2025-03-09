import HomeScreen from "../scr/screens/HomeScreen";

export default HomeScreen

// import React from "react";
// import Link from "../scr/components/Link";
// import Footer from "../scr/components/patterns/Footer/Footer";

// function GlobalStyle() {
//     return (
//         <style global jsx>{/*css*/`
//             body {
//                 font-family: sans-serif;
//             }
//         `}</style>
//     )
// }

// function Title({ children, as }) {
//     const Tag = as;
//     return (
//         <React.Fragment>
//             <Tag>
//                 {children}
//             </Tag>

//             <style jsx>{/*css*/`
//                 ${Tag} {
//                     color: red;
//                 }
//             `}</style>
//         </React.Fragment>
//     );
// }

// export default function HomePage() {
//     return (
//         <div>
//             <GlobalStyle />
//             <Title as="h2">Alura Cases - Home</Title>
//             <Link href="/faq">Ir para o faq</Link>
//             <Footer />
//         </div>
//     )
// }