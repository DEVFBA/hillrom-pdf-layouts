const axios = require('axios');

async function getSleeperChair()
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
        {text: 'P9135A', style: 'textotablabold', alignment: 'center'},
        {text: 'P9145A', style: 'textotablabold', alignment: 'center'},
    ]
    pSItems++

    /*EMPIEZA CICLO*/
    options[pSItems] = [
        {text: "Casters", style: 'textotabla'},
        {text: "$686", style: 'textotabla'},
        {text: "$686", style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++
    /*TERMINA CICLO*/

    var sleeperChair = [
        '\n',
        { text: 'SLEEPER CHAIR', style: 'header' },
        { text: 'Country of origin: USA\n', style: 'parrafo' },
        '\n',
        { text:'Features & Benefits\n', style: 'textotablaboldlarge'},
        { text: '\n', style: 'parrafo' },
        {
            columns: [
                {
                    style:'textolista',
                    ul: [
                            { text: 'Available in 76” or 86” width'},
                            { text: 'Easy fold down sleep pad'},
                            { text: 'Interior cubby for personal storage while sleeping (24”W x 6”H x 4.625”D)'},
                            { text: 'Moisture barrier on sleep surface'},
                            { text: 'Open bottom frame with 5 aluminum legs and non-marring glides'},
                            { text: 'Solid surface arm caps available in multiple colors'},
                            { text: 'Optional 5 casters with 2 front locking'},
                            { text: 'Optional 2 soft close drawers for storage of pillows & blankets (24" W x 6" H x 22" D)'},
                            { text: 'Optional swivel, solid surface tray table (right side sitting)'},
                        ]
                },
            ]
        },
        "\n",
        {
            columns: [
                {
                    width: 350,
                    table: {
                        widths: [140, 80, 80],
                        body: [
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'SLEEPERCHAIR', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center', colSpan: 2},
                                {},
                            ],
                            [
                                {border: [false, false, false, false], text: 'PART #', style: 'textotablaboldblack'},
                                {text: '35" Sleeper Chair', style: 'textotabla', alignment: 'center'},
                                {text: '45" Sleeper Chair', style: 'textotabla', alignment: 'center'},
                            ],
                            [
                                {border: [false, false, false, false], text: 'PART #', style: 'textotablaboldblack'},
                                {text: 'P9135A', style: 'textotablaboldblack', alignment: 'center'},
                                {text: 'P9145A', style: 'textotablaboldblack', alignment: 'center'},
                            ],
                            [
                                {text: 'Weight Capacity', style: 'textotabla'},
                                {text: '350 lbs', style: 'textotabla', alignment: 'center'},
                                {text: '350 lbs', style: 'textotabla', alignment: 'center'}, 
                            ],
                            [
                                {text: 'Overall weight', style: 'textotabla'},
                                {text: '170 lbs', style: 'textotabla', alignment: 'center'},
                                {text: '220 lbs', style: 'textotabla', alignment: 'center'}, 
                            ],
                            [
                                {text: 'Grade 1 Upholstery', style: 'textotablacolornormal', fillColor: '#546ce4'},
                                {text: '$3,492', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$4,341', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                            ],
                            [
                                {text: 'Grade 2 Upholstery', style: 'textotablacolornormal', fillColor: '#546ce4'},
                                {text: '$3,617', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$4,500', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                            ],
                            [
                                {text: 'Grade 3 Upholstery', style: 'textotablacolornormal', fillColor: '#546ce4'},
                                {text: '$3,742', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$4,658', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                            ],
                            [
                                {text: 'Grade 4 Upholstery', style: 'textotablacolornormal', fillColor: '#546ce4'},
                                {text: '$3,867', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$4,816', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                            ],
                            [
                                {text: 'Grade 5 Upholstery', style: 'textotablacolornormal', fillColor: '#546ce4'},
                                {text: '$3,992', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$4,975', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                            ],
                            [
                                {text: 'Grade 6 Upholstery', style: 'textotablacolornormal', fillColor: '#546ce4'},
                                {text: '$4,117', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$5,133', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                            ],
                            [
                                {text: 'Grade 7 Upholstery', style: 'textotablacolornormal', fillColor: '#546ce4'},
                                {text: '$4,242', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$5,291', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                            ],
                            [
                                {text: 'Grade 8 Upholstery', style: 'textotablacolornormal', fillColor: '#546ce4'},
                                {text: '$4,992', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$6,241', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
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
                    text: [
                        {text: '\n\n\n\n\n\n\n\n', style: 'textotablaboldblack', fillColor: '#546ce4'},
                        {text: 'Arm Cap Color\n', style: 'textotablaboldblack', fillColor: '#546ce4'},
                        {text: 'Black\n', style: 'textotabla', fillColor: '#546ce4'},
                        {text: 'White\n', style: 'textotabla', fillColor: '#546ce4'},
                        {text: 'Dark Grey\n', style: 'textotabla', fillColor: '#546ce4'},
                        {text: 'Light Grey\n', style: 'textotabla', fillColor: '#546ce4'},
                        {text: 'Toffee\n', style: 'textotabla', fillColor: '#546ce4'},
                        {text: 'Sand\n', style: 'textotabla', fillColor: '#546ce4'},
                    ]
                },
            ]
        },
        "\n",
        {
            table: {
                widths: [140, 80, 80],
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
        { image: "images/SleeperChair.png", width: 280, height: 190, alignment: 'center'},
        {
            columns: [
                {text: 'Solid Surface Color Options (Arm Caps & Tray Table)', style: 'textotablaboldlarge'},
                {text: 'Powder Coat Options', style: 'textotablaboldlarge'},
            ]
        },
        {
            columns: [
                { image: "images/SleeperChair2.png", width: 230, height: 130, alignment: 'center'},
                { image: "images/SleeperChair3.png", width: 290, height: 70, alignment: 'center'},
            ]
        },
        {text: '', pageBreak: 'after'  },
    ]

    return sleeperChair;
}

module.exports = {
    getSleeperChair : getSleeperChair,
}