const dbReconditionated = require('../controllers/reconditionatedversacare')

async function getReconditionatedVersaCare()
{
    const res = await dbReconditionated.getDataReconditionated()
    const prices = res[0]
    const optionsData = res[1]

    var options =[]
    var pSItems = 0;
    options[pSItems] = [
        {text: 'OPTION CODE', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'RVC955', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
        {text: 'RVC965', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'RVC755', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'RVC765', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
        {text: 'RVC155', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'RVC165', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
    ]
    pSItems++

    if(optionsData.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        var i=0;
        var optionsFlag = false
        while(optionsFlag === false)
        {
            var j;
            if(i===0)
            {
                j=0
            }
            else {
                j = i*6
            }
            var precios = []
            var preciosCount = 0
            var countC=0
            var printCaracter = []
            while(j< optionsData.length && countC<6)
            {
            precios[preciosCount] = optionsData[j].Price
            printCaracter[preciosCount] = optionsData[j].Print_Character
            preciosCount++
            j++
            countC++
            }
            var data = {
                Id_Item: optionsData[j-1].Id_Item,
                Item_Long_Desc: optionsData[j-1].Item_Long_Desc,
                Prices: precios,
                Print_Character: printCaracter
            }

            var precio1;
            var precio2;
            var precio3;
            var precio4;
            var precio5;
            var precio6;

            if(data.Print_Character[0] !== null)
            {
                if(data.Print_Character[0] === "*")
                {
                    precio1 = "●"
                }
                else {
                    precio1 = "-"
                }
            }
            else {
                precio1 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[0])
            }

            if(data.Print_Character[1] !== null)
            {
                if(data.Print_Character[1] === "*")
                {
                    precio2 = "●"
                }
                else {
                    precio2 = "-"
                }
            }
            else {
                precio2 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[1])
            }

            if(data.Print_Character[2] !== null)
            {
                if(data.Print_Character[2] === "*")
                {
                    precio3 = "●"
                }
                else {
                    precio3 = "-"
                }
            }
            else {
                precio3 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[2])
            }

            if(data.Print_Character[3] !== null)
            {
                if(data.Print_Character[3] === "*")
                {
                    precio4 = "●"
                }
                else {
                    precio4 = "-"
                }
            }
            else {
                precio4 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[3])
            }

            if(data.Print_Character[4] !== null)
            {
                if(data.Print_Character[4] === "*")
                {
                    precio5 = "●"
                }
                else {
                    precio5 = "-"
                }
            }
            else {
                precio5 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[4])
            }

            if(data.Print_Character[5] !== null)
            {
                if(data.Print_Character[5] === "*")
                {
                    precio6 = "●"
                }
                else {
                    precio6 = "-"
                }
            }
            else {
                precio6 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[5])
            }
            
            options[pSItems] = [
                {text: data.Id_Item, style: 'textotabla', alignment: 'center'},
                {text: data.Item_Long_Desc, style: 'textotabla'},
                {text: precio1, style: 'textotabla', alignment: 'center'}, 
                {text: precio2, style: 'textotabla', alignment: 'center'}, 
                {text: precio3, style: 'textotabla', alignment: 'center'}, 
                {text: precio4, style: 'textotabla', alignment: 'center'}, 
                {text: precio5, style: 'textotabla', alignment: 'center'}, 
                {text: precio6, style: 'textotabla', alignment: 'center'}, 
            ]

            pSItems++

            //console.log(data)

            if(j >= optionsData.length)
            {
                optionsFlag = true
            }
            i++
        }   
        /*TERMINA CICLO*/
    }
    
    var table1 = []
    if(prices.length > 0)
    {
        table1 = [
            {
                table: {
                    widths: ["*", 38, 38, 38, 38, 38, 38],
                    body: [
                        [
                            {border: [false, false, false, false], text: ''},
                            {text: 'RECONVERSACARE', style: 'textotablacolorlarge', colSpan: 6, fillColor: '#546ce4',  alignment: 'center'},
                            {},
                            {},
                            {},
                            {},
                            {},
                        ],
                        [
                            {border: [false, false, false, false], text: ''},
                            {text: 'P3200', style: 'textotablaboldblacklarge', colSpan: 6, alignment: 'center'},
                            {},
                            {},
                            {},
                            {},
                            {},
                        ],
                        [
                            {border: [false, false, false, false], text: 'Standard Features', style: 'textotablaboldlarge'},
                            {text: 'RVC955', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                            {text: 'RVC965', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
                            {text: 'RVC755', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
                            {text: 'RVC765', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                            {text: 'RVC155', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
                            {text: 'RVC165', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
                        ],
                        [
                            {text: 'No surface package', style: 'textotabla'},
                            {text: '', style: 'textotabla', alignment: 'center'},
                            {text: '', style: 'textotabla', alignment: 'center'}, 
                            {text: '', style: 'textotabla', alignment: 'center'}, 
                            {text: '', style: 'textotabla', alignment: 'center'},
                            {text: 'X', style: 'textotabla', alignment: 'center'}, 
                            {text: 'X', style: 'textotabla', alignment: 'center'}, 
                        ],
                        [
                            {text: 'P500 Surface with advanced Micro Climate Technology', style: 'textotabla'},
                            {text: 'X', style: 'textotabla', alignment: 'center'},
                            {text: 'X', style: 'textotabla', alignment: 'center'}, 
                            {text: '', style: 'textotabla', alignment: 'center'}, 
                            {text: '', style: 'textotabla', alignment: 'center'},
                            {text: '', style: 'textotabla', alignment: 'center'}, 
                            {text: '', style: 'textotabla', alignment: 'center'}, 
                        ],
                        [
                            {text: 'A.I.R. TM ( Active Integrated Response TM) Pressure Relief Surface', style: 'textotabla'},
                            {text: '', style: 'textotabla', alignment: 'center'},
                            {text: '', style: 'textotabla', alignment: 'center'}, 
                            {text: 'X', style: 'textotabla', alignment: 'center'}, 
                            {text: 'X', style: 'textotabla', alignment: 'center'},
                            {text: '', style: 'textotabla', alignment: 'center'}, 
                            {text: '', style: 'textotabla', alignment: 'center'}, 
                        ],
                        [
                            {text: 'Scale (Kilograms or Pounds) and PPM', style: 'textotabla'},
                            {text: 'X', style: 'textotabla', alignment: 'center'},
                            {text: 'X', style: 'textotabla', alignment: 'center'}, 
                            {text: 'X', style: 'textotabla', alignment: 'center'}, 
                            {text: 'X', style: 'textotabla', alignment: 'center'},
                            {text: 'X', style: 'textotabla', alignment: 'center'}, 
                            {text: 'X', style: 'textotabla', alignment: 'center'}, 
                        ],
                        [
                            {text: 'Safe View Alert', style: 'textotabla'},
                            {text: '', style: 'textotabla', alignment: 'center'},
                            {text: 'X', style: 'textotabla', alignment: 'center'}, 
                            {text: '', style: 'textotabla', alignment: 'center'}, 
                            {text: 'X', style: 'textotabla', alignment: 'center'},
                            {text: '', style: 'textotabla', alignment: 'center'}, 
                            {text: 'X', style: 'textotabla', alignment: 'center'}, 
                        ],
                        [
                            {text: 'Accent Color - Light Neutral (LN)', style: 'textotabla'},
                            {text: 'OPT$', style: 'textotabla', alignment: 'center'},
                            {text: 'OPT$', style: 'textotabla', alignment: 'center'}, 
                            {text: 'OPT$', style: 'textotabla', alignment: 'center'}, 
                            {text: 'OPT$', style: 'textotabla', alignment: 'center'},
                            {text: 'OPT$', style: 'textotabla', alignment: 'center'}, 
                            {text: 'OPT$', style: 'textotabla', alignment: 'center'}, 
                        ],
                        [
                            {text: 'Standard Pendant (ST) - when NUL selected', style: 'textotabla'},
                            {text: 'STND', style: 'textotabla', alignment: 'center'},
                            {text: 'STND', style: 'textotabla', alignment: 'center'}, 
                            {text: 'STND', style: 'textotabla', alignment: 'center'}, 
                            {text: 'STND', style: 'textotabla', alignment: 'center'},
                            {text: 'STND', style: 'textotabla', alignment: 'center'}, 
                            {text: 'STND', style: 'textotabla', alignment: 'center'}, 
                        ],
                        [
                            {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4'},
                            {text: "$" + Intl.NumberFormat("en-IN").format(prices[1].Price), style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                            {text: "$" + Intl.NumberFormat("en-IN").format(prices[0].Price), style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                            {text: "$" + Intl.NumberFormat("en-IN").format(prices[3].Price), style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                            {text: "$" + Intl.NumberFormat("en-IN").format(prices[2].Price), style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                            {text: "$" + Intl.NumberFormat("en-IN").format(prices[5].Price), style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                            {text: "$" + Intl.NumberFormat("en-IN").format(prices[4].Price), style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
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
            }
        ]
    }
    else {
        table1 = [
            {
                table: {
                    widths: ["*", 38, 38, 38, 38, 38, 38],
                    body: [
                        [
                            {border: [false, false, false, false], text: ''},
                            {text: 'RECONVERSACARE', style: 'textotablacolorlarge', colSpan: 6, fillColor: '#546ce4',  alignment: 'center'},
                            {},
                            {},
                            {},
                            {},
                            {},
                        ],
                        [
                            {border: [false, false, false, false], text: ''},
                            {text: 'P3200', style: 'textotablaboldblacklarge', colSpan: 6, alignment: 'center'},
                            {},
                            {},
                            {},
                            {},
                            {},
                        ],
                        [
                            {border: [false, false, false, false], text: 'Standard Features', style: 'textotablaboldlarge'},
                            {text: 'RVC955', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                            {text: 'RVC965', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
                            {text: 'RVC755', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
                            {text: 'RVC765', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                            {text: 'RVC155', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
                            {text: 'RVC165', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
                        ],
                        [
                            {text: 'No surface package', style: 'textotabla'},
                            {text: '', style: 'textotabla', alignment: 'center'},
                            {text: '', style: 'textotabla', alignment: 'center'}, 
                            {text: '', style: 'textotabla', alignment: 'center'}, 
                            {text: '', style: 'textotabla', alignment: 'center'},
                            {text: 'X', style: 'textotabla', alignment: 'center'}, 
                            {text: 'X', style: 'textotabla', alignment: 'center'}, 
                        ],
                        [
                            {text: 'P500 Surface with advanced Micro Climate Technology', style: 'textotabla'},
                            {text: 'X', style: 'textotabla', alignment: 'center'},
                            {text: 'X', style: 'textotabla', alignment: 'center'}, 
                            {text: '', style: 'textotabla', alignment: 'center'}, 
                            {text: '', style: 'textotabla', alignment: 'center'},
                            {text: '', style: 'textotabla', alignment: 'center'}, 
                            {text: '', style: 'textotabla', alignment: 'center'}, 
                        ],
                        [
                            {text: 'A.I.R. TM ( Active Integrated Response TM) Pressure Relief Surface', style: 'textotabla'},
                            {text: '', style: 'textotabla', alignment: 'center'},
                            {text: '', style: 'textotabla', alignment: 'center'}, 
                            {text: 'X', style: 'textotabla', alignment: 'center'}, 
                            {text: 'X', style: 'textotabla', alignment: 'center'},
                            {text: '', style: 'textotabla', alignment: 'center'}, 
                            {text: '', style: 'textotabla', alignment: 'center'}, 
                        ],
                        [
                            {text: 'Scale (Kilograms or Pounds) and PPM', style: 'textotabla'},
                            {text: 'X', style: 'textotabla', alignment: 'center'},
                            {text: 'X', style: 'textotabla', alignment: 'center'}, 
                            {text: 'X', style: 'textotabla', alignment: 'center'}, 
                            {text: 'X', style: 'textotabla', alignment: 'center'},
                            {text: 'X', style: 'textotabla', alignment: 'center'}, 
                            {text: 'X', style: 'textotabla', alignment: 'center'}, 
                        ],
                        [
                            {text: 'Safe View Alert', style: 'textotabla'},
                            {text: '', style: 'textotabla', alignment: 'center'},
                            {text: 'X', style: 'textotabla', alignment: 'center'}, 
                            {text: '', style: 'textotabla', alignment: 'center'}, 
                            {text: 'X', style: 'textotabla', alignment: 'center'},
                            {text: '', style: 'textotabla', alignment: 'center'}, 
                            {text: 'X', style: 'textotabla', alignment: 'center'}, 
                        ],
                        [
                            {text: 'Accent Color - Light Neutral (LN)', style: 'textotabla'},
                            {text: 'OPT$', style: 'textotabla', alignment: 'center'},
                            {text: 'OPT$', style: 'textotabla', alignment: 'center'}, 
                            {text: 'OPT$', style: 'textotabla', alignment: 'center'}, 
                            {text: 'OPT$', style: 'textotabla', alignment: 'center'},
                            {text: 'OPT$', style: 'textotabla', alignment: 'center'}, 
                            {text: 'OPT$', style: 'textotabla', alignment: 'center'}, 
                        ],
                        [
                            {text: 'Standard Pendant (ST) - when NUL selected', style: 'textotabla'},
                            {text: 'STND', style: 'textotabla', alignment: 'center'},
                            {text: 'STND', style: 'textotabla', alignment: 'center'}, 
                            {text: 'STND', style: 'textotabla', alignment: 'center'}, 
                            {text: 'STND', style: 'textotabla', alignment: 'center'},
                            {text: 'STND', style: 'textotabla', alignment: 'center'}, 
                            {text: 'STND', style: 'textotabla', alignment: 'center'}, 
                        ],
                        [
                            {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#546ce4'},
                            {text: "NO-DATA", style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                            {text: "NO-DATA", style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
                            {text: "NO-DATA", style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
                            {text: "NO-DATA", style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                            {text: "NO-DATA", style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
                            {text: "NO-DATA", style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
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
            }
        ]
    }

    var table2 = []
    if(optionsData.length > 0)
    {
        table2 = [
            {
                table: {
                    widths: [50, "*", 38, 38, 38, 38, 38, 38],
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
            }
        ]
    }

    const fecha = new Date();
    fecha.toLocaleDateString()

    var reconditionatedVersaCare = [
        "\n",
        "\n",
        "\n",
        { text: 'Reconditioned VersaCare® Bed', style: 'header', tocItem: 'reconditionatedVersaCare'},
        { text: 'Country of origin: USA\n', style: 'parrafo' },
        { text: '\n', style: 'parrafo' },
        { text:'Standard features:\n', style: 'textosubrayado', decoration: 'underline'},
        {
            columns: [
                {
                    style:'textolista',
                    ul: [
                            { text: 'Adjustable length 80"- 84"'},
                            { text: 'Audible Brake Alarms'},
                            { text: 'Cord Wrap Clips with IV Pole Storage'},
                            { text: 'Battery Back-Up'},
                            { text: '4-Corner Brake / Neutral / Steer Pedals'},
                            { text: 'Point-of-Care TM Siderail Controls'},
                            { text: 'Four IV Sockets'},
                        ]
                },
                {
                    style:'textolista',
                    ul: [
                            { text: 'Patient Controls Backlighting'},
                            { text: 'Handsfree Foot Controls for Bed Height'},
                            { text: 'Stationary Height Headboard'},
                            { text: 'TuckAway TM Siderails with OneStep Siderail Release'},
                            { text: 'Bed Scale Displays both Kilograms and Pounds'},
                            { text: 'Bed Controls Only (Does not include Docking Pendant)'},
                            { text: '5th Urethane Central Locking Caster System (Not Available w/intelliDrive)'},
                        ]				
                },
                {
                    style:'textolista',
                    ul: [
                            { text: 'FlexAfoot TM Retractable Foot Control'},
                            { text: 'Drainage Bag Holders'},
                            { text: 'Night Light'},
                            { text: 'Lone-of-Site Angle indicators'},
                            { text: 'Smart Bed Ready (Sidecom Required)'},
                            { text: 'Emergency CPR and Trendelenburg Release Mechanism'},
                            { text: 'Light Neutral End Panels'},
                        ]				
                },
            ]
        },
        "\n",
        table1,
        "\n",
        table2,
        { text: '\n'},
        {
            columns: [
                [
                    { text: "\n\n\n\nAccent Color Options: \n LN - Light Neutral \n(Standard)", style: 'parrafo', alignment: 'right' },
                ],
                [
                    { image: "images/ReconditionatedVersaCare.png", width: 200, height: 140, alignment: 'left'},
                ],
            ]
        },
        {text: '', pageBreak: 'after'  },
    ]

    return reconditionatedVersaCare;
}

module.exports = {
    getReconditionatedVersaCare : getReconditionatedVersaCare,
}