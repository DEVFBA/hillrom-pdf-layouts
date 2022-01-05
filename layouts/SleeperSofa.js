const axios = require('axios');

async function getSleeperSofa()
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
        {text: 'P9176A', style: 'textotablabold', alignment: 'center'},
        {text: 'P9186A', style: 'textotablabold', alignment: 'center'},
    ]
    pSItems++

    /*EMPIEZA CICLO*/
    options[pSItems] = [
        {text: "Casters", style: 'textotabla'},
        {text: "$100", style: 'textotabla'},
        {text: "$100", style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++

    options[pSItems] = [
        {text: "2 Soft Close Drawers", style: 'textotabla'},
        {text: "$500", style: 'textotabla'},
        {text: "$500", style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++

    options[pSItems] = [
        {text: "Tray Table - Right Side Sitting", style: 'textotabla'},
        {text: "$686", style: 'textotabla'},
        {text: "$686", style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++
    /*TERMINA CICLO*/

    var sleeperSofa = [
        '\n',
        { text: 'SLEEPER SOFA', style: 'header' },
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
                                {text: 'SLEEPERSOFA', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center', colSpan: 2},
                                {},
                            ],
                            [
                                {border: [false, false, false, false], text: 'PART #', style: 'textotablaboldblack'},
                                {text: '76" Sleeper Sofa', style: 'textotabla', alignment: 'center'},
                                {text: '86" Sleeper Sofa', style: 'textotabla', alignment: 'center'},
                            ],
                            [
                                {border: [false, false, false, false], text: 'PART #', style: 'textotablaboldblack'},
                                {text: 'P9176A', style: 'textotablaboldblack', alignment: 'center'},
                                {text: 'P9186A', style: 'textotablaboldblack', alignment: 'center'},
                            ],
                            [
                                {text: 'Weight Capacity', style: 'textotabla'},
                                {text: '750 lbs', style: 'textotabla', alignment: 'center'},
                                {text: '750 lbs', style: 'textotabla', alignment: 'center'}, 
                            ],
                            [
                                {text: 'Overall weight', style: 'textotabla'},
                                {text: '175 lbs', style: 'textotabla', alignment: 'center'},
                                {text: '182 lbs', style: 'textotabla', alignment: 'center'}, 
                            ],
                            [
                                {text: 'Grade 1 Upholstery', style: 'textotablacolornormal', fillColor: '#546ce4'},
                                {text: '$5,410', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$5,927', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                            ],
                            [
                                {text: 'Grade 2 Upholstery', style: 'textotablacolornormal', fillColor: '#546ce4'},
                                {text: '$5,602', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$6,127', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                            ],
                            [
                                {text: 'Grade 3 Upholstery', style: 'textotablacolornormal', fillColor: '#546ce4'},
                                {text: '$5,793', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$6,327', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                            ],
                            [
                                {text: 'Grade 4 Upholstery', style: 'textotablacolornormal', fillColor: '#546ce4'},
                                {text: '$5,985', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$6,527', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                            ],
                            [
                                {text: 'Grade 5 Upholstery', style: 'textotablacolornormal', fillColor: '#546ce4'},
                                {text: '$6,177', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$6,727', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                            ],
                            [
                                {text: 'Grade 6 Upholstery', style: 'textotablacolornormal', fillColor: '#546ce4'},
                                {text: '$6,368', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$5,499', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                            ],
                            [
                                {text: 'Grade 7 Upholstery', style: 'textotablacolornormal', fillColor: '#546ce4'},
                                {text: '$4,234', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$5,604', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                            ],
                            [
                                {text: 'Grade 8 Upholstery', style: 'textotablacolornormal', fillColor: '#546ce4'},
                                {text: '$4,584', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$6,229', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
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
        { text: '\n', style: 'parrafo' },
        { image: "images/SleeperSofa.png", width: 280, height: 190, alignment: 'center'},
        {text: '', pageBreak: 'after'  },
    ]

    return sleeperSofa;
}

module.exports = {
    getSleeperSofa : getSleeperSofa,
}