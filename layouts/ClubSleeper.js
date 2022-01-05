const axios = require('axios');

async function getClubSleeper()
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
        {text: 'OPTIONS', style: 'textotablabold', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
    ]
    pSItems++

    /*EMPIEZA CICLO*/
    options[pSItems] = [
        {text: "CAL 133 Flammability Barrier (CAL)", style: 'textotabla'},
        {text: "$195", style: 'textotabla', alignment: 'center'},
    ]
    pSItems++

    options[pSItems] = [
        {text: "Black Urethane Arm Cap (BLK)", style: 'textotabla'},
        {text: "$164", style: 'textotabla', alignment: 'center'},
    ]
    pSItems++

    options[pSItems] = [
        {text: "Black Urethane Arm Cap (BLK)", style: 'textotabla'},
        {text: "$164", style: 'textotabla', alignment: 'center'},
    ]
    pSItems++
    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: 'Table Tray', style: 'textotablabold', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
    ]
    pSItems++

    /*EMPIEZA CICLO*/
    options[pSItems] = [
        {text: "CAL 133 Flammability Barrier (CAL)", style: 'textotabla'},
        {text: "$195", style: 'textotabla', alignment: 'center'},
    ]
    pSItems++

    options[pSItems] = [
        {text: "Black Urethane Arm Cap (BLK)", style: 'textotabla'},
        {text: "$164", style: 'textotabla', alignment: 'center'},
    ]
    pSItems++

    options[pSItems] = [
        {text: "Black Urethane Arm Cap (BLK)", style: 'textotabla'},
        {text: "$164", style: 'textotabla', alignment: 'center'},
    ]
    pSItems++
    /*TERMINA CICLO*/

    var clubSleeper = [
        '\n',
        { text: 'Club Sleeper\n', style: 'subheader' },
        "\n",
        {
            columns: [
                {
                    width: 400,
                    table: {
                        widths: ["*", 120],
                        body: [
                            [
                                {border: [false, false, false, false], text: ''},
                                {border: [false, false, false, false], text: '* Note: will be discontinued last order date July16th, 2021', style: 'textotablaboldblack', alignment: 'center'},
                            ],
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'PREMIUMCLUBSLEEPER', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                            ],
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'P9100', style: 'textotablabold', alignment: 'center'},
                            ],
                            [
                                {border: [false, false, false, false], text: ''},
                                {image: "images/ClubSleeper.png", width: 100, height: 110, alignment: 'center'},
                            ],
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'CLPA', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                            ],
                            [
                                {text: 'Overall Width', style: 'textotabla'},
                                {text: '45"', style: 'textotabla', alignment: 'center'},
                            ],
                            [
                                {text: 'Sleep Surface (overall 74"X27"X4")', style: 'textotabla'},
                                {text: '74"', style: 'textotabla', alignment: 'center'},
                            ],
                            [
                                {text: 'Twin Surface', style: 'textotabla'},
                                {text: '●"', style: 'textotabla', alignment: 'center'},
                            ],
                            [
                                {text: 'Two Person Chair', style: 'textotabla'},
                                {text: '●', style: 'textotabla', alignment: 'center'},
                            ],
                            [
                                {text: 'Front Locking Castor', style: 'textotablacolor'},
                                {text: '●', style: 'textotablacolor', alignment: 'center'},
                            ],
                            [
                                {text: 'Grade 1 Upholstery', style: 'textotablacolor', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                            ],
                            [
                                {text: 'Grade 2 Upholstery', style: 'textotablacolor', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                            ],
                            [
                                {text: 'Grade 3 Upholstery', style: 'textotablacolor', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                            ],
                            [
                                {text: 'Grade 4 Upholstery', style: 'textotablacolor', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                            ],
                            [
                                {text: 'Grade 5 Upholstery', style: 'textotablacolor', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                            ],
                            [
                                {text: 'Grade 6 Upholstery', style: 'textotablacolor', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                            ],
                            [
                                {text: 'Grade 7 Upholstery', style: 'textotablacolor', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                            ],
                            [
                                {text: 'Grade 8 Upholstery', style: 'textotablacolor', fillColor: '#546ce4'},
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
        "\n",
        {
            columns: [
                {
                    width: 400,
                    table: {
                        widths: ["*", 120],
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
        {image: "images/ClubSleeper2.png", width: 200, height: 120, alignment: 'center'},
        {text: '', pageBreak: 'after'  },
    ]

    return clubSleeper;
}

module.exports = {
    getClubSleeper : getClubSleeper,
}