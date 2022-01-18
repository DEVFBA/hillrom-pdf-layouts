async function getHillromColoursCollection()
{
    var hillromColours = [
        "\n",
        { text: 'Hillrom Colours Collection', style: 'header', tocItem: 'compella'},
        { text: 'Country of origin: France', style: 'parrafo' },
        "\n",
        {
            table: {
                widths: [50, 50, 100, 40, 40, 40],
                body: [
                    [
                        {border: [false, false, false, false], text: 'Laminate', style: 'textotablaboldlarge',  alignment: 'center'},
                        {border: [false, false, false, false], text: 'Wood finish', style: 'textotablaboldlarge',  alignment: 'center'},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {text: 'Overbed tables', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'Bedside Cabinets', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
                    ],
                    [
                        {text: 'M32', style: 'textotabla', alignment: 'center'},
                        {text: '-', style: 'textotabla', alignment: 'center'},
                        { image: "images/Catoni34.png", width: 50, height: 30, alignment: 'center'},
                        {text: 'Crystal White', style: 'textotabla'},
                        {text: '●', style: 'textotabla', alignment: 'center'},
                        {text: '●', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'M40', style: 'textotabla', alignment: 'center'},
                        {text: '-', style: 'textotabla', alignment: 'center'},
                        { image: "images/Catoni35.png", width: 50, height: 30, alignment: 'center'},
                        {text: 'Light Grey', style: 'textotabla'},
                        {text: '●', style: 'textotabla', alignment: 'center'},
                        {text: '●', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'M91', style: 'textotabla', alignment: 'center'},
                        {text: '-', style: 'textotabla', alignment: 'center'},
                        { image: "images/Catoni36.png", width: 50, height: 30, alignment: 'center'},
                        {text: 'Hill-Rom Blue', style: 'textotabla'},
                        {text: '●', style: 'textotabla', alignment: 'center'},
                        {text: '●', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'M95', style: 'textotabla', alignment: 'center'},
                        {text: '-', style: 'textotabla', alignment: 'center'},
                        { image: "images/Catoni37.png", width: 50, height: 30, alignment: 'center'},
                        {text: 'Light Beige', style: 'textotabla'},
                        {text: '●', style: 'textotabla', alignment: 'center'},
                        {text: '●', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'M47', style: 'textotabla',  alignment: 'center'},
                        {text: 'HM', style: 'textotabla', alignment: 'center'},
                        { image: "images/Catoni30.png", width: 50, height: 30, alignment: 'center'},
                        {text: 'Steamed Beech', style: 'textotabla'},
                        {text: '●', style: 'textotabla', alignment: 'center'},
                        {text: '●', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'M88', style: 'textotabla', alignment: 'center'},
                        {text: 'T9', style: 'textotabla', alignment: 'center'},
                        { image: "images/Catoni31.png", width: 50, height: 30, alignment: 'center'},
                        {text: 'Bloomed Cherry', style: 'textotabla'},
                        {text: '●', style: 'textotabla', alignment: 'center'},
                        {text: '●', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'M89', style: 'textotabla', alignment: 'center'},
                        {text: 'WU', style: 'textotabla', alignment: 'center'},
                        { image: "images/Catoni32.png", width: 50, height: 30, alignment: 'center'},
                        {text: 'Scandic Beech Dark', style: 'textotabla'},
                        {text: '●', style: 'textotabla', alignment: 'center'},
                        {text: '●', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'M94', style: 'textotabla', alignment: 'center'},
                        {text: 'WX', style: 'textotabla', alignment: 'center'},
                        { image: "images/Catoni33.png", width: 50, height: 30, alignment: 'center'},
                        {text: 'Sycamore', style: 'textotabla'},
                        {text: '●', style: 'textotabla', alignment: 'center'},
                        {text: '●', style: 'textotabla', alignment: 'center'},
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
        { text: '\n', style: 'parrafo' },
        { text: '● = available', style: 'parrafo' },
        { text: '- = not available', style: 'parrafo' },
        {text: '', pageBreak: 'after'  },
    ]

    return hillromColours;
}

module.exports = {
    getHillromColoursCollection : getHillromColoursCollection,
}