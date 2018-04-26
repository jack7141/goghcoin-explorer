import Typography from "typography";

const typography = new Typography({
    googleFonts: [
        {
            name:"Gamja Flower",
            styles: ["400", "700"]
        },
        {
            name:"Indie Flower",
            styles: ["400"]
        }
    ],
    headerFontFamily: ["Nanum Pen Script" ],
    bodyFontFamily:["Indie Flower" ],
    includeNormalize: false
});

export default typography.toString();