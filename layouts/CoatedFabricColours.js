async function getCoatedFabricColours()
{
    var coatedFabricColours = [
        "\n",
        {
            columns: [
                [
                    { text: 'Coated Fabric Colours', style: 'header', tocItem: 'compella'},
                    { text: 'For wood and metal chairs', style: 'parrafo' },
                    { text: 'Country of origin: France', style: 'parrafo' },
                ],
                [
                    {image: "images/CoatedFabricColours.png", width: 120, height: 100, alignment: 'left'},
                ],
                {
                    width: 30,
                    text: ""
                }
            ]
        },
        "\n",
        {
            table: {
                widths: ["*"],
                body: [
                    [
                        {border: [false, false, false, false], text: 'Ginkgo', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
                    ],
                    [
                        {border: [false, false, false, false], image: "images/CoatedFabricColours2.png", width: 400, height: 350, alignment: 'center'},
                    ],
                    [
                        {border: [false, false, false, false], text: 'Diabolo Club', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
                    ],
                    [
                        {border: [false, false, false, false], image: "images/CoatedFabricColours3.png", width: 400, height: 170, alignment: 'center'},
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
        {text: '', pageBreak: 'after'  },
    ]

    return coatedFabricColours;
}

module.exports = {
    getCoatedFabricColours : getCoatedFabricColours,
}