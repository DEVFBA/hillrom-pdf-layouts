const dbHillrom900 = require('../controllers/hillrom900')

async function getHillrom900()
{
    const res = await dbHillrom900.getDataHillrom900()
    const prices = res[0]
    const optionsData = res[1]
    const controlsData  = res[2]
    const brakeData = res[3]
    const castorsData = res[4]
    const steeringWheelData = res[5]
    const plugData = res[6]
    const bedExitData = res[7]

    var options =[]
    var pSItems = 0;
    options[pSItems] = [
        {text: 'OPTION CODE', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
        {text: 'X3', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
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
                j = i*1
            }
            var precios = []
            var preciosCount = 0
            var countC=0
            var printCaracter = []
            while(j< optionsData.length && countC<1)
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
            
            options[pSItems] = [
                {text: data.Id_Item, style: 'textotabla', alignment: 'center'},
                {text: data.Item_Long_Desc, style: 'textotabla'},
                {text: precio1, style: 'textotabla', alignment: 'center'}, 
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
    
    var controls = []
    pSItems = 0

    if(controlsData.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        i=0;
        var controlsFlag = false
        while(controlsFlag === false)
        {
            var j;
            if(i===0)
            {
                j=0
            }
            else {
                j = i*1
            }
            var precios = []
            var preciosCount = 0
            var countC=0
            var printCaracter = []
            while(j< controlsData.length && countC<1)
            {
                precios[preciosCount] = controlsData[j].Price
                printCaracter[preciosCount] = controlsData[j].Print_Character
                preciosCount++
                j++
                countC++
            }
            var data = {
                Id_Item: controlsData[j-1].Id_Item,
                Item_Long_Desc: controlsData[j-1].Item_Long_Desc,
                Prices: precios,
                Print_Character: printCaracter
            }
    
            var precio1;
    
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
            
            controls[pSItems] = [
                {text: data.Id_Item, style: 'textotabla', alignment: 'center'},
                {text: data.Item_Long_Desc, style: 'textotabla'},
                {text: precio1, style: 'textotabla', alignment: 'center'}, 
            ]
    
            pSItems++
    
            //console.log(data)
    
            if(j >= controlsData.length)
            {
                controlsFlag = true
            }
            i++
        }   
        /*TERMINA CICLO*/
    }

    var bedExit = []
    pSItems = 0

    if(bedExitData.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        i=0;
        var bedExitFlag = false
        while(bedExitFlag === false)
        {
            var j;
            if(i===0)
            {
                j=0
            }
            else {
                j = i*1
            }
            var precios = []
            var preciosCount = 0
            var countC=0
            var printCaracter = []
            while(j< bedExitData.length && countC<1)
            {
                precios[preciosCount] = bedExitData[j].Price
                printCaracter[preciosCount] = bedExitData[j].Print_Character
                preciosCount++
                j++
                countC++
            }

            var data = {
                Id_Item: bedExitData[j-1].Id_Item,
                Item_Long_Desc: bedExitData[j-1].Item_Long_Desc,
                Prices: precios,
                Print_Character: printCaracter
            }
    
            var precio1;
    
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
            
            bedExit[pSItems] = [
                {text: data.Id_Item, style: 'textotabla', alignment: 'center'},
                {text: data.Item_Long_Desc, style: 'textotabla'},
                {text: precio1, style: 'textotabla', alignment: 'center'}, 
            ]
    
            pSItems++
    
            //console.log(data)
    
            if(j >= bedExitData.length)
            {
                bedExitFlag = true
            }
            i++
        }   
        /*TERMINA CICLO*/
    }

    var brake = []
    pSItems = 0

    if(brakeData.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        i=0;
        var brakeFlag = false
        while(brakeFlag === false)
        {
            var j;
            if(i===0)
            {
                j=0
            }
            else {
                j = i*1
            }
            var precios = []
            var preciosCount = 0
            var countC=0
            var printCaracter = []
            while(j< brakeData.length && countC<1)
            {
            precios[preciosCount] = brakeData[j].Price
            printCaracter[preciosCount] = brakeData[j].Print_Character
            preciosCount++
            j++
            countC++
            }
            var data = {
                Id_Item: brakeData[j-1].Id_Item,
                Item_Long_Desc: brakeData[j-1].Item_Long_Desc,
                Prices: precios,
                Print_Character: printCaracter
            }

            var precio1;

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
            
            brake[pSItems] = [
                {text: data.Id_Item, style: 'textotabla', alignment: 'center'},
                {text: data.Item_Long_Desc, style: 'textotabla'},
                {text: precio1, style: 'textotabla', alignment: 'center'}, 
            ]

            pSItems++

            //console.log(data)

            if(j >= brakeData.length)
            {
                brakeFlag = true
            }
            i++
        }   
        /*TERMINA CICLO*/
    }

    var castors = []
    pSItems = 0

    if(castorsData.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        i=0;
        var castorsFlag = false
        while(castorsFlag === false)
        {
            var j;
            if(i===0)
            {
                j=0
            }
            else {
                j = i*1
            }
            var precios = []
            var preciosCount = 0
            var countC=0
            var printCaracter = []
            while(j< castorsData.length && countC<1)
            {
            precios[preciosCount] = castorsData[j].Price
            printCaracter[preciosCount] = castorsData[j].Print_Character
            preciosCount++
            j++
            countC++
            }
            var data = {
                Id_Item: castorsData[j-1].Id_Item,
                Item_Long_Desc: castorsData[j-1].Item_Long_Desc,
                Prices: precios,
                Print_Character: printCaracter
            }

            var precio1;

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
            
            castors[pSItems] = [
                {text: data.Id_Item, style: 'textotabla', alignment: 'center'},
                {text: data.Item_Long_Desc, style: 'textotabla'},
                {text: precio1, style: 'textotabla', alignment: 'center'}, 
            ]

            pSItems++

            //console.log(data)

            if(j >= castorsData.length)
            {
                castorsFlag = true
            }
            i++
        }   
        /*TERMINA CICLO*/
    }

    var steering = []
    pSItems = 0

    if(steeringWheelData.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        i=0;
        var steeringFlag = false
        while(steeringFlag === false)
        {
            var j;
            if(i===0)
            {
                j=0
            }
            else {
                j = i*1
            }
            var precios = []
            var preciosCount = 0
            var countC=0
            var printCaracter = []
            while(j< steeringWheelData.length && countC<1)
            {
                precios[preciosCount] = steeringWheelData[j].Price
                printCaracter[preciosCount] = steeringWheelData[j].Print_Character
                preciosCount++
                j++
                countC++
            }
            var data = {
                Id_Item: steeringWheelData[j-1].Id_Item,
                Item_Long_Desc: steeringWheelData[j-1].Item_Long_Desc,
                Prices: precios,
                Print_Character: printCaracter
            }
    
            var precio1;
    
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
            
            steering[pSItems] = [
                {text: data.Id_Item, style: 'textotabla', alignment: 'center'},
                {text: data.Item_Long_Desc, style: 'textotabla'},
                {text: precio1, style: 'textotabla', alignment: 'center'}, 
            ]
    
            pSItems++
    
            //console.log(data)
    
            if(j >= steeringWheelData.length)
            {
                steeringFlag = true
            }
            i++
        }   
        /*TERMINA CICLO*/
    }

    var plug = []
    pSItems = 0

    if(plugData.length > 0)
    {
        console.log("PLUG DATA")
        console.log(plugData)
        /*ESTO VA EN UN CICLO*/
        i=0;
        var plugFlag = false
        while(plugFlag === false)
        {
            var j;
            if(i===0)
            {
                j=0
            }
            else {
                j = i*1
            }
            var precios = []
            var preciosCount = 0
            var countC=0
            var printCaracter = []
            while(j< plugData.length && countC<1)
            {
                precios[preciosCount] = plugData[j].Price
                printCaracter[preciosCount] = plugData[j].Print_Character
                preciosCount++
                j++
                countC++
            }
            var data = {
                Id_Item: plugData[j-1].Id_Item,
                Item_Long_Desc: plugData[j-1].Item_Long_Desc,
                Prices: precios,
                Print_Character: printCaracter
            }
    
            var precio1;
    
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
            
            plug[pSItems] = [
                {text: data.Id_Item, style: 'textotabla', alignment: 'center'},
                {text: data.Item_Long_Desc, style: 'textotabla'},
                {text: precio1, style: 'textotabla', alignment: 'center'}, 
            ]
    
            pSItems++
    
            //console.log(data)
    
            if(j >= plugData.length)
            {
                plugFlag = true
            }
            i++
        }   
        /*TERMINA CICLO*/
    }

    var table1 = [];
    if(prices.length > 0)
    {
        table1 = [
            {
                columns: [
                    {
                        width: 70,
                        text: ''
                    },
                    {
                        width: "*",
                        table: {
                            widths: ["*", 100],
                            body: [
                                [
                                    {border: [false, false, false, false], text: ''},
                                    {border: [false, false, false, false], text: 'HILLROM900', style: 'textotablaboldlarge',  alignment: 'center'},
                                ],
                                [
                                    {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                    {text: 'X3', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
                                ],
                                [
                                    {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                    { image: "images/Hillrom900.png", width: 65, height: 45, alignment: 'center'},
                                ],
                                [
                                    {text: 'Split siderails with integrated controls', style: 'textotabla'},
                                    {text: '*', style: 'textotabla', alignment: 'center'},
                                ],
                                [
                                    {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#154898'},
                                    {text: "$" + Intl.NumberFormat("en-IN").format(prices[0].Price), style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
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

    var table2 = []
    if(optionsData.length > 0)
    {
        table2 = [
            {
                table: {
                    widths: [70, "*", 100],
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

    var table3 = []
    if(controlsData.length > 0)
    {
        table3 = [
            {
                table: {
                    widths: [70, "*", 100],
                    body: controls
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

    var table8 = []
    if(bedExitData.length > 0)
    {
        table8 = [
            {
                table: {
                    widths: [70, "*", 100],
                    body: bedExit
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

    var table4 = []
    if(brakeData.length > 0)
    {
        table4 = [
            {
                table: {
                    widths: [70, "*", 100],
                    body: brake
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

    var table5 = []
    if(castorsData.length > 0)
    {
        table5 = [
            {
                table: {
                    widths: [70, "*", 100],
                    body: castors
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

    var table6 = [];
    if(steeringWheelData.length > 0)
    {
        table6 = [
            {
                table: {
                    widths: [70, "*", 100],
                    body: steering
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

    var table7 = [];
    if(plugData.length > 0)
    {
        table7 = [
            {
                table: {
                    widths: [70, "*", 100],
                    body: plug
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

    var hillrom900 = [
        "\n",
        "\n",
        "\n",
        { text: 'Hillrom® 900', style: 'header', tocItem: 'hillrom900'},
        { text: 'Country of origin: France\n', style: 'parrafo' },
        { text:'Standard features:\n', style: 'textosubrayado', decoration: 'underline'},
        {
            columns: [
                {
                    style:'textolista',
                    ul: [
                            { text: 'Electric Variable Height'},
                            { text: 'SlideGuard™ Electric Sliding Backrest'},
                            { text: 'Electric Thigh Section'},
                            { text: 'Intelligent Autocontour'},
                            { text: 'One-Touch Side Egress positioning'},
                            { text: 'Manually adjustable foot section'},
                            { text: 'Bilateral emergency CPR control'},
                            { text: 'Bilateral lockout bed functions'},
                            { text: 'Low height indicator'},
                            { text: 'Electric cord holder'},
                        ]
                },
                {
                    style:'textolista',
                    ul: [
                            { text: 'Electric Trendeleburg/Reverse Trendelenburg'},
                            { text: 'Line-Of-Site™ Backrest indicator'},
                            { text: '6 patient restraint strap holders'},
                            { text: 'Removable head and foot boards'},
                            { text: '4 section sleep deck with removable panels'},
                            { text: 'Adjustable surface retainers'},
                            { text: 'Bilateral accessory holder'},
                            { text: '4 corner bumpers and accessory holders'},
                        ]				
                },
                {
                    style:'textolista',
                    ul: [
                            { text: 'Mobile head section'},
                            { text: 'Battery'},
                            { text: 'Removable head and foot boards'},
                            { text: 'Endboard locks'},
                            { text: 'Light Grey frame'},
                            { text: 'Steering wheel at headend'},
                            { text: 'Central braking on 4 castors'},
                            { text: '150 mm Integral Castors'},
                            { text: 'Brake and steer at foot end'},
                            { text: '220 kg Safe Working Load'},
                        ]				
                },
            ]
        },
        table1,
        "\n",
        table2,
        { text: 'Controls', style: 'textotablaboldlarge' },
        table3,
        { text: 'Bed Exit Alarm', style: 'textotablaboldlarge' },
        table8,
        { text: 'Brake and Steer', style: 'textotablaboldlarge' },
        table4,
        { text: 'Castors', style: 'textotablaboldlarge' },
        table5,
        { text: 'Steering Wheel', style: 'textotablaboldlarge' },
        table6,
        { text: 'Plug & Voltage', style: 'textotablaboldlarge' },
        table7,
        { text: '* = standard', style: 'parrafo' },
        { text: '= - not available', style: 'parrafo' },
        {text: '', pageBreak: 'after'  },
    ]

    return hillrom900;
}

module.exports = {
    getHillrom900 : getHillrom900,
}