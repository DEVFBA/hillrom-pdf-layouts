const dbHillrom100LowBed = require('../controllers/hillrom100lowbed')

const fecha = new Date();
fecha.toLocaleDateString()

async function getHilrom100LowBed()
{
    const res = await dbHillrom100LowBed.getHillrom100LowBed()
    const prices = res[0]

    var hillroom100Low = [
        "\n",
        "\n",
        "\n",
        { text: 'Hillrom® 100 Low Bed', style: 'header', tocItem: 'hillrom100LowBed'},
        { text: 'Country of origin: USA\n', style: 'parrafo' },
        { text: '\n', style: 'parrafo' },
        { text:'Standard features:\n', style: 'textosubrayado', decoration: 'underline'},
        {
            columns: [
                {
                    style:'textolista',
                    ul: [
                            { text: 'Adjustable length 80"- 84"'},
                            { text: 'SlideGuard™ Frame Techn'},
                            { text: 'Auto Contour'},
                            { text: 'Surface Retainer'},
                        ]
                },
                {
                    style:'textolista',
                    ul: [
                            { text: '110 Voltage'},
                            { text: 'Vascular Lift'},
                            { text: 'Battery Backup'},
                            { text: ' Pendant Control'},
                        ]				
                },
                {
                    style:'textolista',
                    ul: [
                            { text: '3g" Casters'},
                            { text: 'Bed Weight: 300 lbs (136 kgs)'},
                            { text: 'Safe Working Load: 450 lbs (204 kgs)'},
                        ]				
                },
            ]
        },
        "\n",
        {
            table: {
                widths: ["*", 60, 60, 60],
                body: [
                    [
                        {border: [false, false, false, false], text: ''},
                        {text: 'LOWBED', style: 'textotablacolor', colSpan: 3, fillColor: '#546ce4',  alignment: 'center'},
                        {},
                        {},
                    ],
                    [
                        {border: [false, false, false, false], text: ''},
                        {text: 'P3930A2', style: 'textotablaboldblack', colSpan: 3, alignment: 'center'},
                        {},
                        {},
                    ],
                    [
                        {border: [false, false, false, false], text: 'Special Features', style: 'textotablabold'},
                        {text: 'LB-NONE', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                        {text: 'LB-HALFF', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: 'LB-HALFC', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Stone Frame Color', style: 'textotabla'},
                        {text: 'X', style: 'textotabla', alignment: 'center'},
                        {text: 'X', style: 'textotabla', alignment: 'center'}, 
                        {text: 'X', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'No Side Rails', style: 'textotabla'},
                        {text: 'X', style: 'textotabla', alignment: 'center'},
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: '1/2 Fixed Assist Rails', style: 'textotabla'},
                        {text: '', style: 'textotabla', alignment: 'center'},
                        {text: 'X', style: 'textotabla', alignment: 'center'}, 
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: '1/2 Clocking Assist Rails', style: 'textotabla'},
                        {text: '', style: 'textotabla', alignment: 'center'},
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                        {text: 'X', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'Headboard Footboard Style (Standard or Sleek)', style: 'textotabla'},
                        {text: 'OPT', style: 'textotabla', alignment: 'center'},
                        {text: 'OPT', style: 'textotabla', alignment: 'center'}, 
                        {text: 'OPT', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Finial Style - Standard', style: 'textotabla'},
                        {text: 'OPT (STND)', style: 'textotabla', alignment: 'center'},
                        {text: 'OPT (STND)', style: 'textotabla', alignment: 'center'}, 
                        {text: 'OPT (STND)', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Finial Style - Traditional (LB-TRAD)', style: 'textotabla'},
                        {text: '$149', style: 'textotabla', alignment: 'center'},
                        {text: '$149', style: 'textotabla', alignment: 'center'}, 
                        {text: '$149', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Casters (3" or NONE)', style: 'textotabla'},
                        {text: 'OPT', style: 'textotabla', alignment: 'center'},
                        {text: 'OPT', style: 'textotabla', alignment: 'center'}, 
                        {text: 'OPT', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(prices[0].Price), style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(prices[1].Price), style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: "$" + Intl.NumberFormat("en-IN").format(prices[2].Price), style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
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
        "\n",
        {
            columns: [
                [
                    {text: 'Finish Options', style: 'textolista2'},
                    {text: 'V01 Red Oak', style: 'textolista2'},
                    {text: 'V02 Solara Oak', style: 'textolista2'},
                ],
                [
                    {text: '', style: 'textolista2'},
                    {text: 'V06 Acajou Mahogany', style: 'textolista2'},
                    {text: 'V07 American Natural', style: 'textolista2'},				
                ],
                [
                    {text: 'V08 Hayward Cherry', style: 'textolista2'},			
                ],
            ]
        },
        { text: '\n'},
        {
            image: "images/Hillrom100LowBed.png", width: 180, height: 120, alignment: 'center',
        },
        {text: '', pageBreak: 'after'  },
    ]

    return hillroom100Low;
}

module.exports = {
    getHilrom100LowBed : getHilrom100LowBed,
}