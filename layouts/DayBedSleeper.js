const axios = require('axios');

async function getDayBedSleeper()
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
        {text: 'OPTIONS', style: 'textotablabold', border: [false, false, false, false], colSpan: 3},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]},
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

    options[pSItems] = [
        {text: "Black Urethane Arm Cap (BLK)", style: 'textotabla'},
        {text: "$164", style: 'textotabla', alignment: 'center'},
        {text: "$164", style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++

    options[pSItems] = [
        {text: "CAL 133 Flammability Barrier (CAL)", style: 'textotabla'},
        {text: "$195", style: 'textotabla', alignment: 'center'},
        {text: "$195", style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++
    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: 'Leg', style: 'textotablabold', border: [false, false, false, false], colSpan: 3},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]},
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

    options[pSItems] = [
        {text: 'Tray', style: 'textotablabold', border: [false, false, false, false], colSpan: 3},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]},
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

    options[pSItems] = [
        {text: "Black Urethane Arm Cap (BLK)", style: 'textotabla'},
        {text: "$164", style: 'textotabla', alignment: 'center'},
        {text: "$164", style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++
    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: 'Storage', style: 'textotablabold', border: [false, false, false, false], colSpan: 3},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]},
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
        {text: "CAL 133 Flammability Barrier (CAL)", style: 'textotabla'},
        {text: "$195", style: 'textotabla', alignment: 'center'},
        {text: "$195", style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++

    options[pSItems] = [
        {text: "CAL 133 Flammability Barrier (CAL)", style: 'textotabla'},
        {text: "$195", style: 'textotabla', alignment: 'center'},
        {text: "$195", style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++
    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: 'ACCESSORIES (FURNACC)', style: 'textotablabold', border: [false, false, false, false], colSpan: 3},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]},
    ]
    pSItems++

    /*EMPIEZA CICLO*/
    options[pSItems] = [
        {text: "CAL 133 Flammability Barrier (CAL)", style: 'textotabla'},
        {text: "$195", style: 'textotabla', alignment: 'center'},
        {text: "$195", style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++
    /*TERMINA CICLO*/

    var getDayBedSleeper = [
        '\n',
        { text: 'Day Bed Sleeper\n', style: 'subheader' },
        "\n",
        {
            columns: [
                {
                    width: 400,
                    table: {
                        widths: ["*", 80, 80],
                        body: [
                            [
                                {border: [false, false, false, false], text: ''},
                                {border: [false, false, false, false], text: '* Note: will be discontinued last order date July16th, 2021', style: 'textotablaboldblack', alignment: 'center', colSpan: 2},
                                {},
                            ],
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'PREMIUMDAYBED', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                                {text: 'PREMIUMTRIMLINEDAYBED', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                            ],
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'P390A', style: 'textotablabold', alignment: 'center'},
                                {text: 'P390AS', style: 'textotablabold', alignment: 'center'},
                            ],
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'SLPA', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                                {text: 'SLPS', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                            ],
                            [
                                {text: 'Overall Width', style: 'textotabla'},
                                {text: '86"', style: 'textotabla', alignment: 'center'},
                                {text: '76 3/4"', style: 'textotabla', alignment: 'center'},
                            ],
                            [
                                {text: 'Sleep Surface (overall 75" x 30" x 5")', style: 'textotabla'},
                                {text: '75"', style: 'textotabla', alignment: 'center'},
                                {text: '70 1/2"', style: 'textotabla', alignment: 'center'},
                            ],
                            [
                                {text: 'Metal Legs (AL)', style: 'textotabla'},
                                {text: '●"', style: 'textotabla', alignment: 'center'},
                                {text: '●"', style: 'textotabla', alignment: 'center'},
                            ],
                            [
                                {text: 'Twin Surface (ST)', style: 'textotabla'},
                                {text: '●', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'},
                            ],
                            [
                                {text: 'Three Cushion Sofa with Convertible Sleep Surface', style: 'textotablacolor', fillColor: '#546ce4'},
                                {text: '●', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '●', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                            ],
                            [
                                {text: 'Grade 1 Upholstery', style: 'textotablacolor', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                            ],
                            [
                                {text: 'Grade 2 Upholstery', style: 'textotablacolor', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                            ],
                            [
                                {text: 'Grade 3 Upholstery', style: 'textotablacolor', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                            ],
                            [
                                {text: 'Grade 4 Upholstery', style: 'textotablacolor', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                            ],
                            [
                                {text: 'Grade 5 Upholstery', style: 'textotablacolor', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                            ],
                            [
                                {text: 'Grade 6 Upholstery', style: 'textotablacolor', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                            ],
                            [
                                {text: 'Grade 7 Upholstery', style: 'textotablacolor', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                            ],
                            [
                                {text: 'Grade 8 Upholstery', style: 'textotablacolor', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
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
        {
            columns: [
                {
                    width: 400,
                    table: {
                        widths: ["*", 80, 80],
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
                {
                    width: "*",
                    text: ''
                },
            ]
            
        },
        '\n',
        { text: 'Finish Options For Arm Caps:', style: 'textotablaboldlarge' },
        {
            columns: [
                [
                    {text: '31B- Natural Maple', style: 'textotabla'},
                    {text: 'T9B - Wild Cherry', style: 'textotabla'},
                    {text: 'MWB - Montana Walnut', style: 'textotabla'},
                    {text: 'HMB- Honey Maple', style: 'textotabla'},
                    {text: '82A - Medium Oak', style: 'textotabla'},
                ],
            ]
        },
        { text: '\n', style: 'parrafo' },
        { text: '● = standard', style: 'parrafo' },
        { text: '= - not available', style: 'parrafo' },
        '\n',
        {image: "images/DayBedSleeper.png", width: 420, height: 120, alignment: 'center'},
        {text: '', pageBreak: 'after'  },
    ]

    return getDayBedSleeper;
}

module.exports = {
    getDayBedSleeper : getDayBedSleeper,
}