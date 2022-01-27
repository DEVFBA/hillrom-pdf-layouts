const fecha = new Date();
fecha.toLocaleDateString()

async function getColoursCatoni()
{
    var catoni = [
        { image: "images/BaxterEncabezado.png", width: 570, height: 30, alignment: 'center'},
        {text:  "\n", style: "textotabla"},
        { text: 'Colours for Catoni Collection', style: 'header', tocItem: 'coloursCatoni'},
        { text: 'Country of Origin : France', style: 'parrafo' },
        "\n",
        {
            table: {
                widths: [50, 50, 100, 40, 40, 40],
                body: [
                    [
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {text: 'Classic', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'Style', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'Select', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
                    ],
                    [
                        {text: 'M47', style: 'textotabla',  alignment: 'center'},
                        { image: "images/Catoni30.png", width: 50, height: 30, alignment: 'center'},
                        {text: 'Steamed Beech', style: 'textotabla'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'M88', style: 'textotabla', alignment: 'center'},
                        { image: "images/Catoni31.png", width: 50, height: 30, alignment: 'center'},
                        {text: 'Bloomed Cherry', style: 'textotabla'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'M89', style: 'textotabla', alignment: 'center'},
                        { image: "images/Catoni32.png", width: 50, height: 30, alignment: 'center'},
                        {text: 'Scandic Beech Dark', style: 'textotabla'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'M94', style: 'textotabla', alignment: 'center'},
                        { image: "images/Catoni33.png", width: 50, height: 30, alignment: 'center'},
                        {text: 'Sycamore', style: 'textotabla'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'M32', style: 'textotabla', alignment: 'center'},
                        { image: "images/Catoni34.png", width: 50, height: 30, alignment: 'center'},
                        {text: 'Crystal White', style: 'textotabla'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'M40', style: 'textotabla', alignment: 'center'},
                        { image: "images/Catoni35.png", width: 50, height: 30, alignment: 'center'},
                        {text: 'Light Grey', style: 'textotabla'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'M91', style: 'textotabla', alignment: 'center'},
                        { image: "images/Catoni36.png", width: 50, height: 30, alignment: 'center'},
                        {text: 'Hill-Rom Blue', style: 'textotabla'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'M95', style: 'textotabla', alignment: 'center'},
                        { image: "images/Catoni37.png", width: 50, height: 30, alignment: 'center'},
                        {text: 'Light Beige', style: 'textotabla'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                    ]
                ]
            },
            layout: {
                hLineWidth: function () {
                    return  0.7;
                },
                vLineWidth: function () {
                    return 0.7;
                },
                hLineColor: function () {
                    return 'gray';
                },
                vLineColor: function () {
                    return 'gray';
                },
            }
        },
        { text: '\n', style: 'parrafo' },
        { text: 'x = optional', style: 'parrafo' },
        '\n',
        { text: 'Handles for Catoni Collection', style: 'header', tocItem: 'handlesForCatoni'},
        { text: 'Country of Origin : France', style: 'parrafo' },
        '\n',
        {
            table: {
                widths: [50, 50, 100, 40, 40, 40],
                body: [
                    [
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {text: 'Classic', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'Style', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'Select', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
                    ],
                    [
                        {text: 'H20', style: 'textotabla',  alignment: 'center'},
                        { image: "images/Catoni38.png", width: 50, height: 30, alignment: 'center'},
                        {text: 'H20 - Steel, chromed', style: 'textotabla'},
                        {text: '●', style: 'textotabla', alignment: 'center'},
                        {text: '●', style: 'textotabla', alignment: 'center'},
                        {text: '●', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'H22', style: 'textotabla', alignment: 'center'},
                        { image: "images/Catoni39.png", width: 50, height: 30, alignment: 'center'},
                        {text: 'H22 - Aluminium, anodized', style: 'textotabla'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'H13', style: 'textotabla', alignment: 'center'},
                        { image: "images/Catoni40.png", width: 50, height: 30, alignment: 'center'},
                        {text: 'H13 - Steel, chromed', style: 'textotabla'},
                        {text: '-', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                    ],
                ]
            },
            layout: {
                hLineWidth: function () {
                    return  0.7;
                },
                vLineWidth: function () {
                    return 0.7;
                },
                hLineColor: function () {
                    return 'gray';
                },
                vLineColor: function () {
                    return 'gray';
                },
            }
        },
        {text: '', pageBreak: 'after'  },
    ]

    return catoni;
}

module.exports = {
    getColoursCatoni : getColoursCatoni,
}