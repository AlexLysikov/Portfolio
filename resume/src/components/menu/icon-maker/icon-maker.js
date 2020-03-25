import iconData from './icon-data'

export default class IconMaker{
    alf = 'abcdefghijklmnopqrstuvwxyz';
    makeKeyFrameRule = (firstFill, secondFill, index) => {
        return (
            `@keyframes change_fill_${index} {
                0% { fill: ${firstFill}; }
                50% { fill: ${secondFill}; }
                100% { fill: ${firstFill}; }
            }`
        );
    };
    makeFigureClassRule = (letter) => {
        let random = (min, max) => {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
          };
        return (
            `.${letter}{animation: change_fill_${random(0, 3)} ${random(7, 12)}c infinite;}`
        );
    };
    createStyles() {
        return (
            `<style type="text/css">
                ${iconData.fills.forEach(el => {
                    return this.makeKeyFrameRule(el[0], el[1], fill.indexOf(el));
                })}
                .st0{fill:#a4a5a6;}
                ${Array.from(this.alf).forEach( letter => {
                    return makeFigureClassRule(letter);
                })}
            </style>`
        );
    };
    // createFigure(iconType) {
    //     return (
    //         `${iconData.figure.forEach(el => {
    //             return this.makeKeyFrameRule(el[0], el[1], fill.indexOf(el));
    //     })}`
    //     );
    // };            
    // createIcon () {

    // };
};