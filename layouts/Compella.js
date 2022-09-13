const dbCompella = require('../controllers/compella')

const fecha = new Date();
fecha.toLocaleDateString()

async function getCompella()
{
    const res = await dbCompella.getDataCompella()
    const prices = res[0]
    const mobility = res[1]
    const patientSiderailData  = res[2]
    const ivpoleData = res[3]
    const additionalOptions = res[4]
    const surfacesData = res[5]
    const surfacesAccesories = res[6]
    const surfacesAccesories2 = res[7]

    var options =[]
    var pSItems = 0;
    options[pSItems] = [
        {text: 'OPTION CODE', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'FOAM', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
        {text: 'TURN', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
    ]
    pSItems++;      

    options[pSItems] = [
        {text: "Mobility", style: 'textotablabold', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}
    ]

    pSItems++

    if(mobility.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        var i=0;
        var mobilityFlag = false
        while(mobilityFlag === false)
        {
            var j;
            if(i===0)
            {
                j=0
            }
            else {
                j = i*3
            }
            var precios = []
            var preciosCount = 0
            var countC=0
            var printCaracter = []
            while(j< mobility.length && countC<3)
            {
                precios[preciosCount] = mobility[j].Price
                printCaracter[preciosCount] = mobility[j].Print_Character
                preciosCount++
                j++
                countC++
            }
            var data = {
                Id_Item: mobility[j-1].Id_Item,
                Item_Long_Desc: mobility[j-1].Item_Long_Desc,
                Prices: precios,
                Print_Character: printCaracter
            }

            var precio1;
            var precio2;
            var precio3;

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
            
            options[pSItems] = [
                {text: data.Id_Item, style: 'textotabla', alignment: 'center'},
                {text: data.Item_Long_Desc, style: 'textotabla'},
                {text: precio1, style: 'textotabla', alignment: 'center'}, 
                {text: precio2, style: 'textotabla', alignment: 'center'}
            ]

            pSItems++

            //console.log(data)

            if(j >= mobility.length)
            {
                mobilityFlag = true
            }
            i++
        }  
        /*TERMINA CICLO*/
    }
    
    options[pSItems] = [
        {text: 'Patient Siderail Com', style: 'textotablabold', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}
    ]

    pSItems ++

    if(patientSiderailData.length)
    {
        /*ESTO VA EN UN CICLO*/
        var i=0;
        var patientSiderailFlag = false
        while(patientSiderailFlag === false)
        {
            var j;
            if(i===0)
            {
                j=0
            }
            else {
                j = i*3
            }
            var precios = []
            var preciosCount = 0
            var countC=0
            var printCaracter = []
            while(j< patientSiderailData.length && countC<3)
            {
                precios[preciosCount] = patientSiderailData[j].Price
                printCaracter[preciosCount] = patientSiderailData[j].Print_Character
                preciosCount++
                j++
                countC++
            }
            var data = {
                Id_Item: patientSiderailData[j-1].Id_Item,
                Item_Long_Desc: patientSiderailData[j-1].Item_Long_Desc,
                Prices: precios,
                Print_Character: printCaracter
            }

            var precio1;
            var precio2;
            var precio3;

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
            
            options[pSItems] = [
                {text: data.Id_Item, style: 'textotabla', alignment: 'center'},
                {text: data.Item_Long_Desc, style: 'textotabla'},
                {text: precio1, style: 'textotabla', alignment: 'center'}, 
                {text: precio2, style: 'textotabla', alignment: 'center'}
            ]

            pSItems++

            //console.log(data)

            if(j >= mobility.length)
            {
                patientSiderailFlag = true
            }
            i++
        }
        /*TERMINA CICLO*/
    }
    
    options[pSItems] = [
        {text: 'IV Pole', style: 'textotablabold', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    i=0;
    var ivPoleFlag = false
    if(ivpoleData.length !== 0)
    {
        while(ivPoleFlag === false)
        {
            var j;
            if(i===0)
            {
                j=0
            }
            else {
                j = i*3
            }
            var precios = []
            var preciosCount = 0
            var countC=0
            var printCaracter = []
            while(j< ivpoleData.length && countC<3)
            {
                precios[preciosCount] = ivpoleData[j].Price
                printCaracter[preciosCount] = ivpoleData[j].Print_Character
                preciosCount++
                j++
                countC++
            }
            var data = {
                Id_Item: ivpoleData[j-1].Id_Item,
                Item_Long_Desc: ivpoleData[j-1].Item_Long_Desc,
                Prices: precios,
                Print_Character: printCaracter
            }

            var precio1;
            var precio2;
            var precio3;

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
            
            options[pSItems] = [
                {text: data.Id_Item, style: 'textotabla', alignment: 'center'},
                {text: data.Item_Long_Desc, style: 'textotabla'},
                {text: precio1, style: 'textotabla', alignment: 'center'}, 
                {text: precio2, style: 'textotabla', alignment: 'center'}
            ]

            pSItems++

            //console.log(data)

            if(j >= ivpoleData.length)
            {
                ivPoleFlag = true
            }
            i++
        }
    }

    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: 'Additional Options', style: 'textotablabold', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}
    ]

    pSItems++

    if(additionalOptions.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        i=0;
        var additionalOptionsFlag = false
        while(additionalOptionsFlag === false)
        {
            var j;
            if(i===0)
            {
                j=0
            }
            else {
                j = i*3
            }
            var precios = []
            var preciosCount = 0
            var countC=0
            var printCaracter = []
            while(j< additionalOptions.length && countC<3)
            {
                precios[preciosCount] = additionalOptions[j].Price
                printCaracter[preciosCount] = additionalOptions[j].Print_Character
                preciosCount++
                j++
                countC++
            }
            var data = {
                Id_Item: additionalOptions[j-1].Id_Item,
                Item_Long_Desc: additionalOptions[j-1].Item_Long_Desc,
                Prices: precios,
                Print_Character: printCaracter
            }

            var precio1;
            var precio2;
            var precio3;

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
            
            options[pSItems] = [
                {text: data.Id_Item, style: 'textotabla', alignment: 'center'},
                {text: data.Item_Long_Desc, style: 'textotabla'},
                {text: precio1, style: 'textotabla', alignment: 'center'}, 
                {text: precio2, style: 'textotabla', alignment: 'center'}
            ]

            pSItems++

            //console.log(data)

            if(j >= additionalOptions.length)
            {
                additionalOptionsFlag = true
            }
            i++
        }
        /*TERMINA CICLO*/
    }
    
    var surfaces = []
    pSItems = 0

    surfaces[pSItems] = [
        {text: "SURFACES", style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    surfaces[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'PART #', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
        {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
    ]

    pSItems++

    if(surfacesData.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<surfacesData.length; i++)
        {
            surfaces[pSItems] = [
                {text: surfacesData[i].KitName, style: 'textotabla', alignment: 'center'},
                {text: surfacesData[i].Item_Long_Desc, style: 'textotabla'},
                {text: surfacesData[i].Part, style: 'textotabla', alignment: 'center'}, 
                {text: "$" + Intl.NumberFormat("en-IN").format(surfacesData[i].Price), style: 'textotabla', alignment: 'center'}, 
            ]
        
            pSItems++
        }
        /*TERMINA CICLO*/
    }
    
    surfaces[pSItems] = [
        {text: "", border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++
    
    surfaces[pSItems] = [
        {text: "", border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    var accesories = []
    pSItems = 0

    accesories[pSItems] = [
        {text: "ACCESORIES", style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'PART #', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
        {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
    ]

    pSItems++

    if(surfacesAccesories.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<surfacesAccesories.length; i++)
        {
            accesories[pSItems] = [
                {text: surfacesAccesories[i].KitName, style: 'textotabla', alignment: 'center'},
                {text: surfacesAccesories[i].Item_Long_Desc, style: 'textotabla'},
                {text: surfacesAccesories[i].Part, style: 'textotabla', alignment: 'center'}, 
                {text: "$" + Intl.NumberFormat("en-IN").format(surfacesAccesories[i].Price), style: 'textotabla', alignment: 'center'}, 
            ]
        
            pSItems++
        }
    /*TERMINA CICLO*/
    }

    var accesories2 = []
    pSItems = 0

    if(surfacesAccesories2.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<surfacesAccesories2.length; i++)
        {
            accesories2[pSItems] = [
                {text: surfacesAccesories2[i].KitName, style: 'textotabla', alignment: 'center'},
                {text: surfacesAccesories2[i].Item_Long_Desc, style: 'textotabla'},
                {text: surfacesAccesories2[i].Part, style: 'textotabla', alignment: 'center'}, 
                {text: "$" + Intl.NumberFormat("en-IN").format(surfacesAccesories2[i].Price), style: 'textotabla', alignment: 'center'}, 
            ]
        
            pSItems++
        }
        /*TERMINA CICLO*/
    }
    
    var table1 = []
    if(prices.length > 0)
    {
        table1 = [
            {
                columns: [
                    {
                        width: 80,
                        text: ''
                    },
                    {
                        width: "*",
                        table: {
                            widths: ["*", 50, 50],
                            body: [
                                [
                                    {border: [false, false, false, false], text: ''},
                                    {text: 'COMPELLA', style: 'textotablacolorlarge', colSpan: 2, fillColor: '#546ce4',  alignment: 'center'},
                                    {},
                                ],
                                [
                                    {border: [false, false, false, false], text: ''},
                                    {text: 'P7800A', style: 'textotablaboldblacklarge', colSpan: 2, alignment: 'center'},
                                    {},
                                ],
                                [
                                    {border: [false, false, false, false], text: 'Standard Features', style: 'textotablabold'},
                                    {text: 'FOAM', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                                    {text: 'TURN', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
                                ],
                                [
                                    {text: 'Powered Width Expansions', style: 'textotabla'},
                                    {text: '●', style: 'textotabla', alignment: 'center'},
                                    {text: '●', style: 'textotabla', alignment: 'center'}, 
                                ],
                                [
                                    {text: 'FlexAFoot', style: 'textotabla'},
                                    {text: '●', style: 'textotabla', alignment: 'center'},
                                    {text: '●', style: 'textotabla', alignment: 'center'}, 
                                ],
                                [
                                    {text: 'Scale', style: 'textotabla'},
                                    {text: '●', style: 'textotabla', alignment: 'center'},
                                    {text: '●', style: 'textotabla', alignment: 'center'}, 
                                ],
                                [
                                    {text: 'Bed Exit (Single Mode)', style: 'textotabla'},
                                    {text: '●', style: 'textotabla', alignment: 'center'},
                                    {text: '●', style: 'textotabla', alignment: 'center'}, 
                                ],
                                [
                                    {text: 'Digital HOB Angle Indicator and Alarm', style: 'textotabla'},
                                    {text: '●', style: 'textotabla', alignment: 'center'},
                                    {text: '●', style: 'textotabla', alignment: 'center'}, 
                                ],
                                [
                                    {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#546ce4'},
                                    {text: "$" + Intl.NumberFormat("en-IN").format(prices[1].Price), style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                                    {text: "$" + Intl.NumberFormat("en-IN").format(prices[0].Price), style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
                                ],
                                [
                                    {border: [false, false, false, false], text: 'Surface Options', style: 'textotablabold', colSpan:3},
                                    {},
                                    {},
                                ],
                                [
                                    {text: 'Foam Surface (with air supply unit)', style: 'textotabla'},
                                    {text: "$15,665.80", style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                                    {text: '-', style: 'textotabla', alignment: 'center'}, 
                                ],
                                [
                                    {text: 'Low Air Loss Surface (with air supply unit)', style: 'textotabla'},
                                    {text: '-', style: 'textotabla', alignment: 'center'},
                                    {text: "$24,710.32", style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                                ],
                                [
                                    {border: [false, false, false, false], text: 'Surface Add-Ons', style: 'textotablabold', colSpan:3},
                                    {},
                                    {},
                                ],
                                [
                                    {text: 'Continuous Lateral Rotation Therapy (CLRT)', style: 'textotabla'},
                                    {text: '-', style: 'textotabla', alignment: 'center'},
                                    {text: "$5,025.12", style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
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
                ]
            }
        ]
    }
    else {
        table1 = [
            {
                columns: [
                    {
                        width: 80,
                        text: ''
                    },
                    {
                        width: "*",
                        table: {
                            widths: ["*", 50, 50, 50],
                            body: [
                                [
                                    {border: [false, false, false, false], text: ''},
                                    {text: 'COMPELLA', style: 'textotablacolorlarge', colSpan: 3, fillColor: '#546ce4',  alignment: 'center'},
                                    {},
                                    {},
                                ],
                                [
                                    {border: [false, false, false, false], text: ''},
                                    {text: 'P7800A', style: 'textotablaboldblack', colSpan: 3, alignment: 'center'},
                                    {},
                                    {},
                                ],
                                [
                                    {border: [false, false, false, false], text: 'Standard Features', style: 'textotablabold'},
                                    {text: 'FOAM', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                                    {text: 'TURN', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
                                    {text: 'CLRT', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
                                ],
                                [
                                    {text: 'Powered Width Expansions', style: 'textotabla'},
                                    {text: '●', style: 'textotabla', alignment: 'center'},
                                    {text: '●', style: 'textotabla', alignment: 'center'}, 
                                    {text: '●', style: 'textotabla', alignment: 'center'}, 
                                ],
                                [
                                    {text: 'FlexAFoot', style: 'textotabla'},
                                    {text: '●', style: 'textotabla', alignment: 'center'},
                                    {text: '●', style: 'textotabla', alignment: 'center'}, 
                                    {text: '●', style: 'textotabla', alignment: 'center'}, 
                                ],
                                [
                                    {text: 'Scale', style: 'textotabla'},
                                    {text: '●', style: 'textotabla', alignment: 'center'},
                                    {text: '●', style: 'textotabla', alignment: 'center'}, 
                                    {text: '●', style: 'textotabla', alignment: 'center'}, 
                                ],
                                [
                                    {text: 'Bed Exit (Single Mode)', style: 'textotabla'},
                                    {text: '●', style: 'textotabla', alignment: 'center'},
                                    {text: '●', style: 'textotabla', alignment: 'center'}, 
                                    {text: '●', style: 'textotabla', alignment: 'center'}, 
                                ],
                                [
                                    {text: 'Digital HOB Angle Indicator and Alarm', style: 'textotabla'},
                                    {text: '●', style: 'textotabla', alignment: 'center'},
                                    {text: '●', style: 'textotabla', alignment: 'center'}, 
                                    {text: '●', style: 'textotabla', alignment: 'center'}, 
                                ],
                                [
                                    {text: 'Foam Surface (with air supply unit)', style: 'textotabla'},
                                    {text: '●', style: 'textotabla', alignment: 'center'},
                                    {text: '-', style: 'textotabla', alignment: 'center'}, 
                                    {text: '-', style: 'textotabla', alignment: 'center'}, 
                                ],
                                [
                                    {text: 'Low Air Loss Surface (with air supply unit)', style: 'textotabla'},
                                    {text: '-', style: 'textotabla', alignment: 'center'},
                                    {text: '●', style: 'textotabla', alignment: 'center'}, 
                                    {text: '●', style: 'textotabla', alignment: 'center'}, 
                                ],
                                [
                                    {text: 'Low Air Loss Surface (with air supply unit) & Continuous Lateral Rotation Therapy', style: 'textotabla'},
                                    {text: '-', style: 'textotabla', alignment: 'center'},
                                    {text: '-', style: 'textotabla', alignment: 'center'}, 
                                    {text: '●', style: 'textotabla', alignment: 'center'}, 
                                ],
                                [
                                    {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#546ce4'},
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
                    },
                ]
            }
        ]
    }

    var table2 = [];
    if(mobility.length > 0 || patientSiderailData.length > 0 || ivpoleData.length > 0 || additionalOptions.length > 0)
    {
        table2 = [
            {
                table: {
                    widths: [80, "*", 50, 50],
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

    var table3 = [];
    if(surfacesData.length > 0)
    {
        table3 = [
            {
                table: {
                    widths: [70, '*', 70, 70],
                    body: surfaces
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

    var table5 = [];
    if(surfacesAccesories.length > 0)
    {
        table5 = [
            {
                table: {
                    widths: [70, '*', 70, 70],
                    body: accesories
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

    var table4 = [];
    if(surfacesAccesories2.length > 0)
    {
        table4 = [
            {
                table: {
                    widths: [70, '*', 70, 70],
                    body: accesories2
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

    var compella = [
        "\n",
        "\n",
        "\n",
        { text: 'Compella™ Bariatric Bed', style: 'header', tocItem: 'compella'},
        { text: 'Bariatric\n', style: 'subheader' },
        { text: 'Country of origin: USA\n', style: 'parrafo' },
        { text: '\n', style: 'parrafo' },
        { text:'Standard features:\n', style: 'textosubrayado', decoration: 'underline'},
        {
            columns: [
                {
                    style:'textolista',
                    ul: [
                            { text: 'Powered Width Expansion 40" or 50" (101 or 127cm)'},
                            { text: 'Powered Length Adjustment 80" - 88" (203 cm - 224 cm)'},
                            { text: 'OIML Scale'},
                            { text: 'Battery Backup'},
                            { text: 'SlideGuard Technology'},
                        ]
                },
                {
                    style:'textolista',
                    ul: [
                            { text: 'Bed Exit'},
                            { text: 'Digital HOB Angle Indicator and Alarm'},
                            { text: 'Integrated siderail patient controls'},
                            { text: 'Drainage Bag Holder'},
                            { text: 'Line Manager'},
                        ]				
                },
                {
                    style:'textolista',
                    ul: [
                            { text: '454 kg Patient Weight Capacity'},
                            { text: 'Nightlight'},
                            { text: 'Four Corner Brake & Steer and Brake Alarm'},
                            { text: 'Point of Care Siderail Controls'},
                            { text: 'FlexAFoot'},
                        ]				
                },
            ]
        },
        "\n",
        table1,
        "\n",
        table2,
        { text: '\n', style: 'parrafo' },
        { text: '● = standard', style: 'parrafo' },
        { text: '= - not available', style: 'parrafo' },
        {
            columns: [
                [
                    { image: "images/Compella.png", width: 240, height: 180, alignment: 'center'},
                ],
            ]
        },
        {text: '', pageBreak: 'after'  },
        "\n",
        "\n",
        "\n",
        table3,
        { text: '\n', style: 'parrafo' },
        table5,
        { text: '\n', style: 'parrafo' },
        { text: 'Same accessories as used for Hillrom 900 which are compatible with the Compella:', style: 'textotablaboldlarge' },
        { text: 'Country of Origin: France (Pluvigner)', style: 'parrafo' },
        table4,
        {text: '', pageBreak: 'after'  },
    ]

    return compella;
}

module.exports = {
    getCompella : getCompella,
}