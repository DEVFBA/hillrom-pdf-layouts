const dbProgressaPlus = require('../controllers/progressaplus')

async function getProgressaPlus()
{
    const res = await dbProgressaPlus.getDataProgressaPlus()
    
    const data1 = res[0]
    const data2 = res[1]
    const data3 = res[2]
    const data4 = res[3]
    const data5 = res[4]
    const data6 = res[5]
    const data7 = res[6]
    const data8 = res[7]

    var options =[]
    var pSItems = 0;
    options[pSItems] = [
        {text: 'OPTION CODE', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
        {text: 'No Surface', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
        {text: 'Accumax', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
        {text: 'TPlus', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}
    ]
    pSItems++

    options[pSItems] = [
        {text: "Frame y Surface Options", style: 'textotablabold', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}
    ]

    pSItems++

    if(data2.length > 0)
    {
        options[pSItems] = [
            {text: data2[0].Id_Item, style: 'textotabla', alignment: 'center'},
            {text: data2[0].Item_Long_Desc, style: 'textotabla'},
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(data2[0].Price), style: 'textotabla', alignment: 'center'}
        ]

        pSItems++;

        options[pSItems] = [
            {text: data2[1].Id_Item, style: 'textotabla', alignment: 'center'},
            {text: data2[1].Item_Long_Desc, style: 'textotabla'},
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(data2[1].Price), style: 'textotabla', alignment: 'center'}
        ]

        pSItems++;

        options[pSItems] = [
            {text: data2[2].Id_Item, style: 'textotabla', alignment: 'center'},
            {text: data2[2].Item_Long_Desc, style: 'textotabla'},
            {text: "$" + Intl.NumberFormat("en-IN").format(data2[2].Price), style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(data2[2].Price), style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(data2[2].Price), style: 'textotabla', alignment: 'center'}
        ]

        pSItems++;

        options[pSItems] = [
            {text: data2[7].Id_Item, style: 'textotabla', alignment: 'center'},
            {text: data2[7].Item_Long_Desc, style: 'textotabla'},
            {text:  "$" + Intl.NumberFormat("en-IN").format(data2[7].Price), style: 'textotabla', alignment: 'center'}, 
            {text:  "$" + Intl.NumberFormat("en-IN").format(data2[7].Price), style: 'textotabla', alignment: 'center'}, 
            {text:  "$" + Intl.NumberFormat("en-IN").format(data2[7].Price), style: 'textotabla', alignment: 'center'}
        ]

        pSItems++;

        options[pSItems] = [
            {text: data2[8].Id_Item, style: 'textotabla', alignment: 'center'},
            {text: data2[8].Item_Long_Desc, style: 'textotabla'},
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(data2[8].Price), style: 'textotabla', alignment: 'center'}
        ]

        pSItems++;

        options[pSItems] = [
            {text: data2[9].Id_Item, style: 'textotabla', alignment: 'center'},
            {text: data2[9].Item_Long_Desc, style: 'textotabla'},
            {text:  "-", style: 'textotabla', alignment: 'center'}, 
            {text:  "-", style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(data2[9].Price), style: 'textotabla', alignment: 'center'}
        ]

        pSItems++;
        
        /*var i=0;
        var data1Flag = false
        while(data1Flag === false)
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
            while(j< data2.length && countC<3)
            {
                precios[preciosCount] = data2[j].Price
                printCaracter[preciosCount] = data2[j].Print_Character
                preciosCount++
                j++
                countC++
            }
            var data = {
                Id_Item: data2[j-1].Id_Item,
                Item_Long_Desc: data2[j-1].Item_Long_Desc,
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
                    precio1 = "*"
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
                    precio2 = "*"
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
                    precio3 = "*"
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
                {text: precio2, style: 'textotabla', alignment: 'center'}, 
                {text: precio3, style: 'textotabla', alignment: 'center'}
            ]

            pSItems++;

            if(j >= data1Flag.length)
            {
                data1Flag = true
            }
            i++
        } */  
    }
    
    
    options[pSItems] = [
        {text: 'Patient Siderail Com', style: 'textotablabold', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}
    ]

    pSItems ++;

    if(data3.length > 0)
    {   
        i=0;
        var data2Flag = false
        while(data2Flag === false)
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
            while(j< data3.length && countC<3)
            {
            precios[preciosCount] = data3[j].Price
            printCaracter[preciosCount] = data3[j].Print_Character
            preciosCount++
            j++
            countC++
            }
            var data = {
                Id_Item: data3[j-1].Id_Item,
                Item_Long_Desc: data3[j-1].Item_Long_Desc,
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
                    precio1 = "*"
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
                    precio2 = "*"
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
                    precio3 = "*"
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
                {text: precio2, style: 'textotabla', alignment: 'center'}, 
                {text: precio3, style: 'textotabla', alignment: 'center'}
            ]

            pSItems++

            if(j >= data3.length)
            {
                data2Flag = true
            }
            i++
        }  
    }

    options[pSItems] = [
        {text: 'Mobility', style: 'textotablabold', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}
    ]

    pSItems++

    if(data4.length > 0)
    {
        i=0;
        var data3Flag = false
        while(data3Flag === false)
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
            while(j< data4.length && countC<3)
            {
            precios[preciosCount] = data4[j].Price
            printCaracter[preciosCount] = data4[j].Print_Character
            preciosCount++
            j++
            countC++
            }
            var data = {
                Id_Item: data4[j-1].Id_Item,
                Item_Long_Desc: data4[j-1].Item_Long_Desc,
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
                    precio1 = "*"
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
                    precio2 = "*"
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
                    precio3 = "*"
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
                {text: precio2, style: 'textotabla', alignment: 'center'}, 
                {text: precio3, style: 'textotabla', alignment: 'center'}
            ]

            pSItems++

            if(j >= data4.length)
            {
                data3Flag = true
            }
            i++
        }
    }   

    options[pSItems] = [
        {text: 'IV Pole', style: 'textotablabold', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}
    ]

    pSItems++

    if(data5.length > 0)
    {
        i=0;
        var data4Flag = false
        while(data4Flag === false)
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
            while(j< data5.length && countC<3)
            {
                precios[preciosCount] = data5[j].Price
                printCaracter[preciosCount] = data5[j].Print_Character
                preciosCount++
                j++
                countC++
            }
            var data = {
                Id_Item: data5[j-1].Id_Item,
                Item_Long_Desc: data5[j-1].Item_Long_Desc,
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
                    precio1 = "*"
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
                    precio2 = "*"
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
                    precio3 = "*"
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
                {text: precio2, style: 'textotabla', alignment: 'center'}, 
                {text: precio3, style: 'textotabla', alignment: 'center'}
            ]

            pSItems++

            if(j >= data5.length)
            {
                data4Flag = true
            }
            i++
        }  
    }

    options[pSItems] = [
        {text: 'Transport Shelf', style: 'textotablabold', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}
    ]

    pSItems++

    if(data6.length > 0)
    {
        i=0;
        var data5Flag = false
        while(data5Flag === false)
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
            while(j< data6.length && countC<3)
            {
                precios[preciosCount] = data6[j].Price
                printCaracter[preciosCount] = data6[j].Print_Character
                preciosCount++
                j++
                countC++
            }
            var data = {
                Id_Item: data6[j-1].Id_Item,
                Item_Long_Desc: data6[j-1].Item_Long_Desc,
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
                    precio1 = "*"
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
                    precio2 = "*"
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
                    precio3 = "*"
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
                {text: precio2, style: 'textotabla', alignment: 'center'}, 
                {text: precio3, style: 'textotabla', alignment: 'center'}
            ]

            pSItems++

            if(j >= data6.length)
            {
                data5Flag = true
            }
            i++
        }  
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
        {text: 'KITNAME', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
        {text: 'PART #', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
        {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'}, 
    ]

    pSItems++

    if(data7.length > 0)
    {
         /*ESTO VA EN UN CICLO*/
        for(var i=0; i<data7.length; i++)
        {
            surfaces[pSItems] = [
                {text: data7[i].KitName, style: 'textotabla', alignment: 'center'},
                {text: data7[i].Item_Long_Desc, style: 'textotabla'},
                {text: data7[i].Part, style: 'textotabla', alignment: 'center'}, 
                {text: "$" + Intl.NumberFormat("en-IN").format(data7[i].Price), style: 'textotabla', alignment: 'center'}, 
            ]
        
            pSItems++
        }
        /*TERMINA CICLO*/
    }

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
        {text: 'KITNAME', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
        {text: 'PART #', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
        {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'}, 
    ]

    pSItems++

    if(data8.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<data8.length; i++)
        {
            accesories[pSItems] = [
                {text: data8[i].KitName, style: 'textotabla', alignment: 'center'},
                {text: data8[i].Item_Long_Desc, style: 'textotabla'},
                {text: data8[i].Part, style: 'textotabla', alignment: 'center'}, 
                {text: "$" + Intl.NumberFormat("en-IN").format(data8[i].Price), style: 'textotabla', alignment: 'center'}, 
            ]
        
            pSItems++
        }
        /*TERMINA CICLO*/
    }

    

    var table1 = [];
    if(data1.length > 0)
    {
        table1 = [
            {
                columns: [
                    {
                        width: 50,
                        text: ''
                    },
                    {
                        width: "*",
                        table: {
                            widths: ['*', 70, 70, 70],
                            body: [
                                [
                                    {border: [false, false, false, false], text: ''},
                                    {text: 'PROGRESSA PLUS', style: 'textotablacolorlarge', colSpan: 3, fillColor: '#154898',  alignment: 'center'},
                                    {},
                                    {}
                                ],
                                [
                                    {border: [false, false, false, false], text: ''},
                                    {text: 'P7501', style: 'textotablaboldblacklarge', colSpan: 3, alignment: 'center'},
                                    {},
                                    {}
                                ],
                                [
                                    {border: [false, false, false, false], text: ''},
                                    {image: "images/P7501.png", width: 200, height: 120, alignment: 'center', colSpan: 3},
                                    {},
                                    {}
                                ],
                                [
                                    {border: [false, false, false, false], text: ''},
                                    {text: 'No Surface', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                                    {text: 'Accumax', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
                                    {text: 'T Plus', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}
                                ],
                                [
                                    {text: 'Progressa + Base Frame', style: 'textotabla'},
                                    {text: "$34,517", style: 'textotabla', alignment: 'center'},
                                    {text: "$34,517", style: 'textotabla', alignment: 'center'}, 
                                    {text: "$34,517", style: 'textotabla', alignment: 'center'}
                                ],
                                [
                                    {text: 'Essential Surface (Non-Powered Air) (P7525A1)', style: 'textotabla'},
                                    {text: '-', style: 'textotabla', alignment: 'center'},
                                    {text: "$1,584", style: 'textotabla', alignment: 'center'}, 
                                    {text: '-', style: 'textotabla', alignment: 'center'}
                                ],
                                [
                                    {text: 'Microclimate Surface (Powered Air) (P7540)', style: 'textotabla'},
                                    {text: '-', style: 'textotabla', alignment: 'center'},
                                    {text: '-', style: 'textotabla', alignment: 'center'}, 
                                    {text: "$12,532", style: 'textotabla', alignment: 'center'}
                                ],
                                [
                                    {text: 'Dining Chair Frame Design', style: 'textotabla'},
                                    {text: '*', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'}, 
                                    {text: '*', style: 'textotabla', alignment: 'center'}
                                ],
                                [
                                    {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#154898'},
                                    {text: "$34,517", style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                                    {text: "$36,101", style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
                                    {text: "$47,049", style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}
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
                        width: 50,
                        text: ''
                    },
                    {
                        width: "*",
                        table: {
                            widths: ['*', 70, 70, 70],
                            body: [
                                [
                                    {border: [false, false, false, false], text: ''},
                                    {text: 'PROGRESSA PLUS', style: 'textotablacolorlarge', colSpan: 3, fillColor: '#154898',  alignment: 'center'},
                                    {},
                                    {}
                                ],
                                [
                                    {border: [false, false, false, false], text: ''},
                                    {text: 'P7501', style: 'textotablaboldblacklarge', colSpan: 3, alignment: 'center'},
                                    {},
                                    {}
                                ],
                                [
                                    {border: [false, false, false, false], text: ''},
                                    {image: "images/P7501.png", width: 100, height: 60, alignment: 'center', colSpan: 3},
                                    {},
                                    {}
                                ],
                                [
                                    {border: [false, false, false, false], text: ''},
                                    {text: 'No Surface', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                                    {text: 'Accumax', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
                                    {text: 'T Plus', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}
                                ],
                                [
                                    {text: 'Progressa + Base Frame', style: 'textotabla'},
                                    {text: '*', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'}, 
                                    {text: '*', style: 'textotabla', alignment: 'center'}
                                ],
                                [
                                    {text: 'Essential Surface (Non-Powered Air) (P7525A1)', style: 'textotabla'},
                                    {text: '-', style: 'textotabla', alignment: 'center'},
                                    {text: '-', style: 'textotabla', alignment: 'center'}, 
                                    {text: '-', style: 'textotabla', alignment: 'center'}
                                ],
                                [
                                    {text: 'Microclimate Surface (Powered Air) (P7540)', style: 'textotabla'},
                                    {text: '-', style: 'textotabla', alignment: 'center'},
                                    {text: '-', style: 'textotabla', alignment: 'center'}, 
                                    {text: '-', style: 'textotabla', alignment: 'center'}
                                ],
                                [
                                    {text: 'Dining Chair Frame Design', style: 'textotabla'},
                                    {text: '*', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'}, 
                                    {text: '*', style: 'textotabla', alignment: 'center'}
                                ],
                                [
                                    {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#154898'},
                                    {text: "NO-DATA", style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                                    {text: "NO-DATA", style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
                                    {text: "NO-DATA", style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}
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
    if(data2.length > 0 || data3.length > 0 || data4.length > 0 || data5.length > 0 || data6.length > 0)
    {
        table2 = [
            {
                table: {
                    widths: [85, '*', 70, 70, 70],
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
    if(data7.length > 0)
    {
        table3 = [
            {
                table: {
                    widths: [85, '*', 70, 70],
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

    var table4 = [];
    if(data8.length > 0)
    {
        table4 = [
            {
                table: {
                    widths: [85, '*', 70, 70],
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

    const fecha = new Date();
    fecha.toLocaleDateString()

    var progressaPlus = [
        "\n",
        "\n",
        "\n",
        { text: 'Progressa+™ Bed System\n', style: 'subheader', tocItem: 'progressaplus' },
        { text: 'Country of origin: USA\n', style: 'parrafo' },
        { text: '\n', style: 'parrafo' },
        { text:'Standard features:\n', style: 'textosubrayado', decoration: 'underline'},
        {
            columns: [
                {
                    style:'textolista',
                    ul: [
                            { text: 'SlideGuard™ Frame Technology'},
                            { text: 'FlexAfoot™ Retractable Foot Control'},
                            { text: '30/45 Degree Head of Bed Alarm'},
                            { text: 'In-Bed Scale'},
                            { text: 'Three Mode Bed Exit Alarm (PPM)'},
                            { text: 'Standard Head and Foot Panel'},
                            { text: 'Night Light'},
                            { text: 'Bed Controls'}
                        ]
                },
                {
                    style:'textolista',
                    ul: [
                            { text: 'Both Siderails with Point-of-Care Touch Screen'},
                            { text: 'Point of Care™ Siderails Control'},
                            { text: 'Obstacle Detect System at Both Sides of the Bed'},
                            { text: 'Drainage Bag Holders'},
                            { text: '6" Urethane Central Locking Caster System'},
                            { text: 'Patient Controls Backlighting'},
                            { text: 'Advanced MicoClimate Technology (permanently installed)'},
                            { text: 'Hands Free Emergency CPR, Trendelenburg'},
                        ]				
                },
                {
                    style:'textolista',
                    ul: [
                            { text: 'Line Managers'},
                            { text: 'Foot Controls Module'},
                            { text: 'Oxygen Tank Holder Module'},
                            { text: 'Caregiver Pendant'},
                            { text: 'Four IV Sockets'},
                            { text: 'Maximum Patient Weight: 500 lbs'},
                            { text: 'Overall Weight: 800 lbs'},
                            { text: 'Safe Working Load: 650 lbs'},
                        ]				
                },
            ]
        },
        "\n",
        table1,
        "\n",
        table2,
        { text: '\n', style: 'parrafo' },
        { text: '* = standard', style: 'parrafo' },
        { text: '= - not available', style: 'parrafo' },
        {text: '', pageBreak: 'after'  },
        "\n",
        "\n",
        "\n",
        table3,
        { text: '\n', style: 'parrafo' },
        table4,
        {text: '', pageBreak: 'after'  },
    ]

    return progressaPlus;
}

module.exports = {
    getProgressaPlus : getProgressaPlus,
}