const axios = require('axios');

async function getBedsideCabinets()
{
    const res = await axios.get("http://localhost:8091/api/pdf-hillroom/progressa")
    const prices = res.data[0]
    const patientSiderail = res.data[1]
    const mobility  = res.data[2]
    const permanentPole = res.data[3]
    const transportShelf = res.data[4]

    var options =[]
    var pSItems = 0;
    options[pSItems] = [
        {text: 'Options', style: 'textotablabold', border: [false, false, false, false]},
        {text: 'BSCM', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
        {text: 'BSCR', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
    ]
    pSItems++

    /*EMPIEZA CICLO*/
    options[pSItems] = [
        {text: "CAL 133 Flammability Barrier (CAL)", style: 'textotabla'},
        {text: "$195", style: 'textotabla', alignment: 'center'},
        {text: "$195", style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++

    options[pSItems] = [
        {text: "Black Urethane Arm Cap (BLK)", style: 'textotabla'},
        {text: "$164", style: 'textotabla', alignment: 'center'},
        {text: "$164", style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++
    /*TERMINA CICLO*/

    var bedsideCabinets = [
        '\n',
        { text: 'Bedside Cabinets', style: 'header' },
        { text: 'Premium (AOC)\n', style: 'subheader' },
        { text: 'Country of origin: USA\n', style: 'parrafo' },
        { text: '\n', style: 'parrafo' },
        {
            style:'textolista',
            ul: [
                    { text: 'Hardwood and Hardwood Veneer Drawer Fronts and Side Panels'},
                    { text: 'High Pressure Laminate Tops for Easy Cleaning'},
                    { text: 'Easy Clean Hardware Provides Beauty and Performance'},
                    { text: 'Generously Rounded Corners of Storage Drawers Make Cleaning Easier'},
                    { text: 'Easy-Roller Casters Make Moving Cabinets Simple'},
                    { text: 'Convenient Storage with Easy Reach'},
                ]		
        },
        "\n",
        {
            columns: [
                {
                    width: 400,
                    table: {
                        widths: [140, 80, 80],
                        body: [
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'PREMIUMBEDSIDECABINET', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center', colSpan: 2},
                                {},
                            ],
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'BSCM', style: 'textotablabold', alignment: 'center'},
                                {text: 'BSCR', style: 'textotablabold', alignment: 'center'},
                            ],
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'Metropolitan™', style: 'textotablacolornormal', fillColor: '#546ce4',  alignment: 'center'},
                                {text: 'Areo™', style: 'textotablacolornormal', fillColor: '#546ce4',  alignment: 'center'},
                            ],
                            [
                                {border: [false, false, false, false], text: ''},
                                { image: "images/BedsideCabinets1.png", width: 70, height: 70, alignment: 'center'},
                                { image: "images/BedsideCabinets2.png", width: 70, height: 70, alignment: 'center'},
                            ],
                            [
                                {text: '35" (width) Sleeper Chair', style: 'textotabla'},
                                {text: '-', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                            ],
                            [
                                {text: '3 Drawers', style: 'textotabla'},
                                {text: '●', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                            ],
                            [
                                {text: 'Castors', style: 'textotabla'},
                                {text: '●', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'},  
                            ],
                            [
                                {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4'},
                                {text: '$1,487', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$1,487', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
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
                {
                    width: "*",
                    text: ''
                },
            ]
        },
        "\n",
        {
            table: {
                widths: [140, 80, 80, 80],
                body: options
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
        { text: '● = standard', style: 'parrafo' },
        { text: '= - not available', style: 'parrafo' },
        '\n',
        { text: 'Finish Options:', style: 'textotablaboldlarge' },
        {
            columns: [
                [
                    {text: '31M - Natural Maple', style: 'textotabla'},
                    {text: 'T9M - Wild Cherry', style: 'textotabla'},
                    {text: 'V11 - Shaker Cherry', style: 'textotabla'},
                    {text: 'V13 - Frosty white', style: 'textotabla'},
                    {text: 'MWM - Montana Walnut', style: 'textotabla'},
                    {text: 'HMM - Honey Maple', style: 'textotabla'},
                    {text: '82O- Medium Oak', style: 'textotabla'},
                ],
            ]
        },
        '\n',
        { text: 'Powder Coat Options:', style: 'textotablaboldlarge' },
        {
            columns: [
                [
                    {text: '(Metropolitan Style only)', style: 'textotabla'},
                    {text: 'QSL - Metalic Quicksilver', style: 'textotabla'},
                    {text: 'GRA - Stonetone Graphite', style: 'textotabla'},
                    {text: 'IMP - Metallic Impala', style: 'textotabla'},
                    {text: 'ESP - Metallic Expresso', style: 'textotabla'},
                    {text: 'SAF - Mettallic Saffron', style: 'textotabla'},
                ],
            ]
        },
        {text: '', pageBreak: 'after'  },
    ]

    return bedsideCabinets;
}

module.exports = {
    getBedsideCabinets : getBedsideCabinets,
}