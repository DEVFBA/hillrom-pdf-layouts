const axios = require('axios');

async function getSeatingFurniture()
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
        {text: 'P9180A', style: 'textotablabold', alignment: 'center'},
        {text: 'P9190A', style: 'textotablabold', alignment: 'center'},
    ]
    pSItems++

    /*EMPIEZA CICLO*/
    options[pSItems] = [
        {text: "Central Brake & Steer", style: 'textotabla'},
        {text: "$530", style: 'textotabla'},
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++

    options[pSItems] = [
        {text: "Central Brake & Steer", style: 'textotabla'},
        {text: "$530", style: 'textotabla'},
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++
    /*TERMINA CICLO*/

    var seatingFurniture = [
        { text: 'Seating Furniture', style: 'header' },
        { text: 'Country of origin: USA\n', style: 'parrafo' },
        { text: 'RECLINERS\n', style: 'subheader', tocItem: 'progressa' },
        '\n',
        { text:'Features & Benefits\n', style: 'textotablaboldlarge'},
        { text: '\n', style: 'parrafo' },
        {
            columns: [
                { text: 'Standard\n', style: 'textotablatitle'},
                { text: 'Bariatric\n', style: 'textotablatitle'},
            ]
        },
        { text: '\n', style: 'parrafo' },
        {
            columns: [
                {
                    style:'textolista',
                    ul: [
                            { text: 'Infinite position recline'},
                            { text: 'Independent back and ottoman recline'},
                            { text: 'Robust flip-up arms with locking in all positions up/down'},
                            { text: 'Side retractable accessory hook'},
                            { text: 'Caregiver ergonomic push bar on back with release button'},
                            { text: 'Front and rear lock casters with toe lock/release casters in front'},
                            { text: 'Compatible with Hillrom’s OBTs and patient lifts'},
                            { text: 'Structure composed of injection molded plastic and cast aluminum \nwith no exposed wood'},
                            { text: 'Molded foam cushions'},
                            { text: 'Solid surface arm caps available in multiple colors'},
                            { text: 'Available in non-porous fabrics with minimal sewing seams'}
                        ]
                },
                {
                    style:'textolista',
                    ul: [
                            { text: 'Infinite position recline up to 45°'},
                            { text: 'Independent back and ottoman recline'},
                            { text: 'Side retractable accessory hook'},
                            { text: 'Caregiver ergonomic push handles on back with release button'},
                            { text: 'Front and rear lock casters with toe lock/release'},
                            { text: 'Compatible with Hillrom’s OBTs and patient lifts'},
                            { text: 'Structure composed of steel and hardwood with no exposed wood'},
                            { text: 'Molded foam cushions'},
                            { text: 'Solid surface arm caps available in multiple colors'},
                            { text: 'Available in non-porous fabrics with minimal sewing seams'},
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
                                {text: 'RECLINER', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                                {text: 'BARIATRICRECLINER', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                            ],
                            [
                                {border: [false, false, false, false], text: 'PART #', style: 'textotablaboldblack'},
                                {text: 'P9180A', style: 'textotablaboldblack', alignment: 'center'},
                                {text: 'P9190A', style: 'textotablaboldblack', alignment: 'center'},
                            ],
                            [
                                {text: 'Weight Capacity', style: 'textotabla'},
                                {text: '500 lbs', style: 'textotabla', alignment: 'center'},
                                {text: '880 lbs', style: 'textotabla', alignment: 'center'}, 
                            ],
                            [
                                {text: 'Caster size', style: 'textotabla'},
                                {text: '4"', style: 'textotabla', alignment: 'center'},
                                {text: '4"', style: 'textotabla', alignment: 'center'}, 
                            ],
                            [
                                {text: 'Overall weight', style: 'textotabla'},
                                {text: '114 lbs', style: 'textotabla', alignment: 'center'},
                                {text: '170 lbs', style: 'textotabla', alignment: 'center'}, 
                            ],
                            [
                                {text: 'Grade 1 Upholstery', style: 'textotablacolornormal', fillColor: '#546ce4'},
                                {text: '$3,884', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$4,979', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                            ],
                            [
                                {text: 'Grade 2 Upholstery', style: 'textotablacolornormal', fillColor: '#546ce4'},
                                {text: '$3,943', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$5,083', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                            ],
                            [
                                {text: 'Grade 3 Upholstery', style: 'textotablacolornormal', fillColor: '#546ce4'},
                                {text: '$4,001', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$5,187', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                            ],
                            [
                                {text: 'Grade 4 Upholstery', style: 'textotablacolornormal', fillColor: '#546ce4'},
                                {text: '$4,059', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$5,291', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                            ],
                            [
                                {text: 'Grade 5 Upholstery', style: 'textotablacolornormal', fillColor: '#546ce4'},
                                {text: '$4,118', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$5,395', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                            ],
                            [
                                {text: 'Grade 6 Upholstery', style: 'textotablacolornormal', fillColor: '#546ce4'},
                                {text: '$4,176', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
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
        { image: "images/SeatingFurniture.png", width: 450, height: 190, alignment: 'center'},
        {text: '', pageBreak: 'after'  },
    ]

    return seatingFurniture;
}

module.exports = {
    getSeatingFurniture : getSeatingFurniture,
}