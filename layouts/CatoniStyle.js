const { fix } = require('mssql')
const dbCatonicStyle = require('../controllers/catoniCH700B3')

async function getCatoniStyle()
{
    const res = await dbCatonicStyle.getDataCatoniStyle()
    const prices = res[0]
    const hingeData = res[1]
    const plasticDrawerData  = res[2]
    const fixedStripData = res[3]
    const castorsData = res[4]
    const accesoryBarData = res[5]
    const additionalOptionsData = res[6]
    const coloursContrastData = res[7]
    const handlesData = res[8]
    const lockableDrawerData = res[9]

    var options2 =[]
    var pSItems = 0;
    options2[pSItems] = [
        {text: 'OPTION CODE', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
        {text: 'B01', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
        {text: 'B02', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'}, 
        {text: 'B03', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
        {text: 'B04', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'}, 
    ]
    pSItems++

    /*options2[pSItems] = [
        {text: "Hinge", style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++*/

    /*ESTO VA EN UN CICLO*/
    /*var i=0;
    var hingeFlag = false
    while(hingeFlag === false)
    {
        var j;
        if(i===0)
        {
            j=0
        }
        else {
            j = i*4
        }
        var precios = []
        var preciosCount = 0
        var countC=0
        var printCaracter = []
        while(j< hingeData.length && countC<4)
        {
           precios[preciosCount] = hingeData[j].Price
           printCaracter[preciosCount] = hingeData[j].Print_Character
           preciosCount++
           j++
           countC++
        }
        var data = {
            Id_Item: hingeData[j-1].Id_Item,
            Item_Long_Desc: hingeData[j-1].Item_Long_Desc,
            Prices: precios,
            Print_Character: printCaracter
        }

        var precio1;
        var precio2;
        var precio3;
        var precio4;

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

        if(data.Print_Character[3] !== null)
        {
            if(data.Print_Character[3] === "*")
            {
                precio4 = "*"
            }
            else {
                precio4 = "-"
            }
        }
        else {
            precio4 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[3])
        }
        
        options2[pSItems] = [
            {text: data.Id_Item, style: 'textotabla', alignment: 'center'},
            {text: data.Item_Long_Desc, style: 'textotabla'},
            {text: precio1, style: 'textotabla', alignment: 'center'}, 
            {text: precio2, style: 'textotabla', alignment: 'center'}, 
            {text: precio3, style: 'textotabla', alignment: 'center'},
            {text: precio4, style: 'textotabla', alignment: 'center'},  
        ]

        pSItems++

        //console.log(data)

        if(j >= hingeData.length)
        {
            hingeFlag = true
        }
        i++
    }*/   
    /*TERMINA CICLO*/

    if(hingeData[0] !== undefined)
    {   
        options2[pSItems] = [
            {text: hingeData[0].Id_Item, style: 'textotablacatoni', alignment: 'center'},
            {text: hingeData[0].Item_Long_Desc, style: 'textotablacatoni'},
            {text: "*", style: 'textotablacatoni', alignment: 'center'}, 
            {text: "*", style: 'textotablacatoni', alignment: 'center'}, 
            {text: "*", style: 'textotablacatoni', alignment: 'center'},
            {text: "-", style: 'textotablacatoni', alignment: 'center'},  
        ]
    
        pSItems++
    }
    
    /*if(hingeData[3] !== undefined && hingeData[4] !== undefined && hingeData[5] !== undefined)
    {   
        options2[pSItems] = [
            {text: hingeData[3].Id_Item, style: 'textotablacatoni', alignment: 'center'},
            {text: hingeData[3].Item_Long_Desc, style: 'textotablacatoni'},
            {text: "$" + Intl.NumberFormat("en-IN").format(hingeData[3].Price), style: 'textotablacatoni', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(hingeData[4].Price), style: 'textotablacatoni', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(hingeData[5].Price), style: 'textotablacatoni', alignment: 'center'},
            {text: "-", style: 'textotablacatoni', alignment: 'center'},  
        ]
    
        pSItems++
    }
    
    if(hingeData[6] !== undefined && hingeData[7] !== undefined && hingeData[8] !== undefined)
    {
        options2[pSItems] = [
            {text: hingeData[6].Id_Item, style: 'textotablacatoni', alignment: 'center'},
            {text: hingeData[6].Item_Long_Desc, style: 'textotablacatoni'},
            {text: "$" + Intl.NumberFormat("en-IN").format(hingeData[6].Price), style: 'textotablacatoni', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(hingeData[7].Price), style: 'textotablacatoni', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(hingeData[8].Price), style: 'textotablacatoni', alignment: 'center'},
            {text: "-", style: 'textotablacatoni', alignment: 'center'},  
        ]
    
        pSItems++
    }*/
    
    options2[pSItems] = [
        {text: 'Plastic drawer insert', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems ++

    /*ESTO VA EN UN CICLO*/
    /*var i=0;
    var plasticDrawerFlag = false
    while(plasticDrawerFlag === false)
    {
        var j;
        if(i===0)
        {
            j=0
        }
        else {
            j = i*4
        }
        var precios = []
        var preciosCount = 0
        var countC=0
        var printCaracter = []
        while(j< plasticDrawerData.length && countC<4)
        {
           precios[preciosCount] = plasticDrawerData[j].Price
           printCaracter[preciosCount] = plasticDrawerData[j].Print_Character
           preciosCount++
           j++
           countC++
        }
        var data = {
            Id_Item: plasticDrawerData[j-1].Id_Item,
            Item_Long_Desc: plasticDrawerData[j-1].Item_Long_Desc,
            Prices: precios,
            Print_Character: printCaracter
        }

        var precio1;
        var precio2;
        var precio3;
        var precio4;

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

        if(data.Print_Character[3] !== null)
        {
            if(data.Print_Character[3] === "*")
            {
                precio4 = "*"
            }
            else {
                precio4 = "-"
            }
        }
        else {
            precio4 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[3])
        }
        
        options2[pSItems] = [
            {text: data.Id_Item, style: 'textotabla', alignment: 'center'},
            {text: data.Item_Long_Desc, style: 'textotabla'},
            {text: precio1, style: 'textotabla', alignment: 'center'}, 
            {text: precio2, style: 'textotabla', alignment: 'center'}, 
            {text: precio3, style: 'textotabla', alignment: 'center'},
            {text: precio4, style: 'textotabla', alignment: 'center'},  
        ]

        pSItems++

        //console.log(data)

        if(j >= plasticDrawerData.length)
        {
            plasticDrawerFlag = true
        }
        i++
    }*/
    
    if(plasticDrawerData[0] !== undefined && plasticDrawerData[1] !== undefined && plasticDrawerData[2] !== undefined)
    {
        options2[pSItems] = [
            {text: plasticDrawerData[0].Id_Item, style: 'textotablacatoni', alignment: 'center'},
            {text: plasticDrawerData[0].Item_Long_Desc, style: 'textotablacatoni'},
            {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(plasticDrawerData[0].Price), style: 'textotablacatoni', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(plasticDrawerData[1].Price), style: 'textotablacatoni', alignment: 'center'},
            {text: "$" + Intl.NumberFormat("en-IN").format(plasticDrawerData[2].Price), style: 'textotablacatoni', alignment: 'center'},  
        ]
    
        pSItems++
    }
    
    if(plasticDrawerData[3] !== undefined)
    {
        options2[pSItems] = [
            {text: plasticDrawerData[3].Id_Item, style: 'textotablacatoni', alignment: 'center'},
            {text: plasticDrawerData[3].Item_Long_Desc, style: 'textotablacatoni'},
            {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
            {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
            {text: "-", style: 'textotablacatoni', alignment: 'center'},
            {text: "$" + Intl.NumberFormat("en-IN").format(plasticDrawerData[3].Price), style: 'textotablacatoni', alignment: 'center'},  
        ]
    
        pSItems++
        /*TERMINA CICLO*/
    }
    

    options2[pSItems] = [
        {text: 'Fixed strip or sliding tray', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    
    if(fixedStripData.length > 0)
    {
        var i=0;
        var fixedStripFlag= false
        while(fixedStripFlag === false)
        {
            var j;
            if(i===0)
            {
                j=0
            }
            else {
                j = i*4
            }
            var precios = []
            var preciosCount = 0
            var countC=0
            var printCaracter = []
            while(j< fixedStripData.length && countC<4)
            {
            precios[preciosCount] = fixedStripData[j].Price
            printCaracter[preciosCount] = fixedStripData[j].Print_Character
            preciosCount++
            j++
            countC++
            }
            var data = {
                Id_Item: fixedStripData[j-1].Id_Item,
                Item_Long_Desc: fixedStripData[j-1].Item_Long_Desc,
                Prices: precios,
                Print_Character: printCaracter
            }

            var precio1;
            var precio2;
            var precio3;
            var precio4;

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

            if(data.Print_Character[3] !== null)
            {
                if(data.Print_Character[3] === "*")
                {
                    precio4 = "*"
                }
                else {
                    precio4 = "-"
                }
            }
            else {
                precio4 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[3])
            }
            
            options2[pSItems] = [
                {text: data.Id_Item, style: 'textotablacatoni', alignment: 'center'},
                {text: data.Item_Long_Desc, style: 'textotablacatoni'},
                {text: precio1, style: 'textotablacatoni', alignment: 'center'}, 
                {text: precio2, style: 'textotablacatoni', alignment: 'center'}, 
                {text: precio3, style: 'textotablacatoni', alignment: 'center'},
                {text: precio4, style: 'textotablacatoni', alignment: 'center'},  
            ]

            pSItems++

            //console.log(data)

            if(j >= fixedStripData.length)
            {
                fixedStripFlag = true
            }
            i++
        }
        /*TERMINA CICLO*/
    }

    options2[pSItems] = [
        {text: 'Lockable drawer - not available with Sliding Tray (SLP)', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

     /*ESTO VA EN UN CICLO*/
    
    if(lockableDrawerData[0] !== undefined || lockableDrawerData[1] !== undefined || lockableDrawerData[2] !== undefined)
    {
        options2[pSItems] = [
            {text: lockableDrawerData[0].Id_Item, style: 'textotablacatoni', alignment: 'center'},
            {text: lockableDrawerData[0].Item_Long_Desc, style: 'textotablacatoni'},
            {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(lockableDrawerData[0].Price), style: 'textotablacatoni', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(lockableDrawerData[1].Price), style: 'textotablacatoni', alignment: 'center'},
            {text: "$" + Intl.NumberFormat("en-IN").format(lockableDrawerData[2].Price), style: 'textotablacatoni', alignment: 'center'},  
        ]
    
        pSItems++
    }

    if(lockableDrawerData[3] !== undefined)
    {
        options2[pSItems] = [
            {text: lockableDrawerData[3].Id_Item, style: 'textotablacatoni', alignment: 'center'},
            {text: lockableDrawerData[3].Item_Long_Desc, style: 'textotablacatoni'},
            {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
            {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
            {text: "-", style: 'textotablacatoni', alignment: 'center'},
            {text: "$" + Intl.NumberFormat("en-IN").format(lockableDrawerData[3].Price), style: 'textotablacatoni', alignment: 'center'},  
        ]
    
        pSItems++
    }

    options2[pSItems] = [
        {text: 'Castors', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    /*var i=0;
    var castorsFlag= false
    while(castorsFlag === false)
    {
        var j;
        if(i===0)
        {
            j=0
        }
        else {
            j = i*4
        }
        var precios = []
        var preciosCount = 0
        var countC=0
        var printCaracter = []
        while(j< castorsData.length && countC<4)
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
        var precio2;
        var precio3;
        var precio4;

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

        if(data.Print_Character[3] !== null)
        {
            if(data.Print_Character[3] === "*")
            {
                precio4 = "*"
            }
            else {
                precio4 = "-"
            }
        }
        else {
            precio4 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[3])
        }
        
        options2[pSItems] = [
            {text: data.Id_Item, style: 'textotabla', alignment: 'center'},
            {text: data.Item_Long_Desc, style: 'textotabla'},
            {text: precio1, style: 'textotabla', alignment: 'center'}, 
            {text: precio2, style: 'textotabla', alignment: 'center'}, 
            {text: precio3, style: 'textotabla', alignment: 'center'},
            {text: precio4, style: 'textotabla', alignment: 'center'},  
        ]

        pSItems++

        //console.log(data)

        if(j >= castorsData.length)
        {
            castorsFlag = true
        }
        i++
    }  */
    
    if(castorsData[0] !== undefined)
    {
        options2[pSItems] = [
            {text: castorsData[0].Id_Item, style: 'textotablacatoni', alignment: 'center'},
            {text: castorsData[0].Item_Long_Desc, style: 'textotablacatoni'},
            {text: "*", style: 'textotablacatoni', alignment: 'center'}, 
            {text: "*", style: 'textotablacatoni', alignment: 'center'}, 
            {text: "*", style: 'textotablacatoni', alignment: 'center'},
            {text: "*", style: 'textotablacatoni', alignment: 'center'},  
        ]
    
        pSItems++
    }
    
    if(castorsData[4] !== undefined && castorsData[5] !== undefined && castorsData[6] !== undefined && castorsData[7] !== undefined)
    {
        options2[pSItems] = [
            {text: castorsData[4].Id_Item, style: 'textotablacatoni', alignment: 'center'},
            {text: castorsData[4].Item_Long_Desc, style: 'textotabla'},
            {text: "$" + Intl.NumberFormat("en-IN").format(castorsData[4].Price), style: 'textotablacatoni', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(castorsData[5].Price), style: 'textotablacatoni', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(castorsData[6].Price), style: 'textotablacatoni', alignment: 'center'},
            {text: "$" + Intl.NumberFormat("en-IN").format(castorsData[7].Price), style: 'textotablacatoni', alignment: 'center'},  
        ]
    
        pSItems++
    }

    if(castorsData[8] !== undefined && castorsData[9] !== undefined && castorsData[10] !== undefined && castorsData[11] !== undefined)
    {
        options2[pSItems] = [
            {text: castorsData[8].Id_Item, style: 'textotablacatoni', alignment: 'center'},
            {text: castorsData[8].Item_Long_Desc, style: 'textotablacatoni'},
            {text: "$" + Intl.NumberFormat("en-IN").format(castorsData[8].Price), style: 'textotablacatoni', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(castorsData[9].Price), style: 'textotablacatoni', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(castorsData[10].Price), style: 'textotablacatoni', alignment: 'center'},
            {text: "$" + Intl.NumberFormat("en-IN").format(castorsData[11].Price), style: 'textotablacatoni', alignment: 'center'},  
        ]
    
        pSItems++
    }
    
    if(castorsData[12] !== undefined && castorsData[13] !== undefined && castorsData[14] !== undefined)
    {
        options2[pSItems] = [
            {text: castorsData[12].Id_Item, style: 'textotablacatoni', alignment: 'center'},
            {text: castorsData[12].Item_Long_Desc, style: 'textotablacatoni'},
            {text: "$" + Intl.NumberFormat("en-IN").format(castorsData[12].Price), style: 'textotablacatoni', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(castorsData[13].Price), style: 'textotablacatoni', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(castorsData[14].Price), style: 'textotablacatoni', alignment: 'center'},
            {text: "-", style: 'textotablacatoni', alignment: 'center'},  
        ]
    
        pSItems++
        /*TERMINA CICLO*/
    }
    
    options2[pSItems] = [
        {text: 'Accessory bar holder', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    
    if(accesoryBarData.length > 0)
    {
        var i=0;
        var accesoryBarFlag= false
        while(accesoryBarFlag === false)
        {
            var j;
            if(i===0)
            {
                j=0
            }
            else {
                j = i*4
            }
            var precios = []
            var preciosCount = 0
            var countC=0
            var printCaracter = []
            while(j< accesoryBarData.length && countC<4)
            {
            precios[preciosCount] = accesoryBarData[j].Price
            printCaracter[preciosCount] = accesoryBarData[j].Print_Character
            preciosCount++
            j++
            countC++
            }
            var data = {
                Id_Item: accesoryBarData[j-1].Id_Item,
                Item_Long_Desc: accesoryBarData[j-1].Item_Long_Desc,
                Prices: precios,
                Print_Character: printCaracter
            }

            var precio1;
            var precio2;
            var precio3;
            var precio4;

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

            if(data.Print_Character[3] !== null)
            {
                if(data.Print_Character[3] === "*")
                {
                    precio4 = "*"
                }
                else {
                    precio4 = "-"
                }
            }
            else {
                precio4 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[3])
            }
            
            options2[pSItems] = [
                {text: data.Id_Item, style: 'textotablacatoni', alignment: 'center'},
                {text: data.Item_Long_Desc, style: 'textotablacatoni'},
                {text: precio1, style: 'textotablacatoni', alignment: 'center'}, 
                {text: precio2, style: 'textotablacatoni', alignment: 'center'}, 
                {text: precio3, style: 'textotablacatoni', alignment: 'center'},
                {text: precio4, style: 'textotablacatoni', alignment: 'center'},  
            ]

            pSItems++

            //console.log(data)

            if(j >= accesoryBarData.length)
            {
                accesoryBarFlag = true
            }
            i++
        }

        /*TERMINA CICLO*/
    }

    options2[pSItems] = [
        {text: 'Additional options', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    /*var i=0;
    var additionalOptionsFlag= false
    while(additionalOptionsFlag === false)
    {
        var j;
        if(i===0)
        {
            j=0
        }
        else {
            j = i*4
        }
        var precios = []
        var preciosCount = 0
        var countC=0
        var printCaracter = []
        while(j< additionalOptionsData.length && countC<4)
        {
           precios[preciosCount] = additionalOptionsData[j].Price
           printCaracter[preciosCount] = additionalOptionsData[j].Print_Character
           preciosCount++
           j++
           countC++
        }
        var data = {
            Id_Item: additionalOptionsData[j-1].Id_Item,
            Item_Long_Desc: additionalOptionsData[j-1].Item_Long_Desc,
            Prices: precios,
            Print_Character: printCaracter
        }

        var precio1;
        var precio2;
        var precio3;
        var precio4;

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

        if(data.Print_Character[3] !== null)
        {
            if(data.Print_Character[3] === "*")
            {
                precio4 = "*"
            }
            else {
                precio4 = "-"
            }
        }
        else {
            precio4 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[3])
        }
        
        options2[pSItems] = [
            {text: data.Id_Item, style: 'textotabla', alignment: 'center'},
            {text: data.Item_Long_Desc, style: 'textotabla'},
            {text: precio1, style: 'textotabla', alignment: 'center'}, 
            {text: precio2, style: 'textotabla', alignment: 'center'}, 
            {text: precio3, style: 'textotabla', alignment: 'center'},
            {text: precio4, style: 'textotabla', alignment: 'center'},  
        ]

        pSItems++

        //console.log(data)

        if(j >= additionalOptionsData.length)
        {
            additionalOptionsFlag = true
        }
        i++
    } */
    
    if(additionalOptionsData[0] !== undefined && additionalOptionsData[1] !== undefined && additionalOptionsData[2] !== undefined && additionalOptionsData[3] !== undefined)
    {
        options2[pSItems] = [
            {text: additionalOptionsData[0].Id_Item, style: 'textotablacatoni', alignment: 'center'},
            {text: additionalOptionsData[0].Item_Long_Desc, style: 'textotablacatoni'},
            {text: "$" + Intl.NumberFormat("en-IN").format(additionalOptionsData[0].Price), style: 'textotablacatoni', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(additionalOptionsData[1].Price), style: 'textotablacatoni', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(additionalOptionsData[2].Price), style: 'textotablacatoni', alignment: 'center'},
            {text: "$" + Intl.NumberFormat("en-IN").format(additionalOptionsData[3].Price), style: 'textotablacatoni', alignment: 'center'},  
        ]
    
        pSItems++
    }
    
    if(additionalOptionsData[4] !== undefined && additionalOptionsData[5] !== undefined)
    {
        options2[pSItems] = [
            {text: additionalOptionsData[4].Id_Item, style: 'textotablacatoni', alignment: 'center'},
            {text: additionalOptionsData[4].Item_Long_Desc, style: 'textotablacatoni'},
            {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(additionalOptionsData[4].Price), style: 'textotablacatoni', alignment: 'center'}, 
            {text: "-", style: 'textotablacatoni', alignment: 'center'},
            {text: "$" + Intl.NumberFormat("en-IN").format(additionalOptionsData[5].Price), style: 'textotablacatoni', alignment: 'center'},  
        ]
    
        pSItems++
    }

    if(additionalOptionsData[6] !== undefined && additionalOptionsData[7] !== undefined && additionalOptionsData[8] !== undefined && additionalOptionsData[9] !== undefined)
    {
        options2[pSItems] = [
            {text: additionalOptionsData[6].Id_Item, style: 'textotablacatoni', alignment: 'center'},
            {text: additionalOptionsData[6].Item_Long_Desc, style: 'textotablacatoni'},
            {text: "$" + Intl.NumberFormat("en-IN").format(additionalOptionsData[6].Price), style: 'textotablacatoni', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(additionalOptionsData[7].Price), style: 'textotablacatoni', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(additionalOptionsData[8].Price), style: 'textotablacatoni', alignment: 'center'},
            {text: "$" + Intl.NumberFormat("en-IN").format(additionalOptionsData[9].Price), style: 'textotablacatoni', alignment: 'center'},  
        ]
    
        pSItems++
    }

    if(additionalOptionsData[10] !== undefined && additionalOptionsData[11] !== undefined && additionalOptionsData[12] !== undefined && additionalOptionsData[13] !== undefined)
    {
        options2[pSItems] = [
            {text: additionalOptionsData[10].Id_Item, style: 'textotablacatoni', alignment: 'center'},
            {text: additionalOptionsData[10].Item_Long_Desc, style: 'textotablacatoni'},
            {text: "$" + Intl.NumberFormat("en-IN").format(additionalOptionsData[10].Price), style: 'textotablacatoni', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(additionalOptionsData[11].Price), style: 'textotablacatoni', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(additionalOptionsData[12].Price), style: 'textotablacatoni', alignment: 'center'},
            {text: "$" + Intl.NumberFormat("en-IN").format(additionalOptionsData[13].Price), style: 'textotablacatoni', alignment: 'center'},  
        ]
    
        pSItems++
    }
    
    if(additionalOptionsData[14] !== undefined && additionalOptionsData[15] !== undefined && additionalOptionsData[16] !== undefined && additionalOptionsData[17] !== undefined)
    {
        options2[pSItems] = [
            {text: additionalOptionsData[14].Id_Item, style: 'textotablacatoni', alignment: 'center'},
            {text: additionalOptionsData[14].Item_Long_Desc, style: 'textotablacatoni'},
            {text: "$" + Intl.NumberFormat("en-IN").format(additionalOptionsData[14].Price), style: 'textotablacatoni', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(additionalOptionsData[15].Price), style: 'textotablacatoni', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(additionalOptionsData[16].Price), style: 'textotablacatoni', alignment: 'center'},
            {text: "$" + Intl.NumberFormat("en-IN").format(additionalOptionsData[17].Price), style: 'textotablacatoni', alignment: 'center'},  
        ]
    
        pSItems++
    }
    
    if(additionalOptionsData[18] !== undefined && additionalOptionsData[19] !== undefined)
    {
        options2[pSItems] = [
            {text: additionalOptionsData[18].Id_Item, style: 'textotablacatoni', alignment: 'center'},
            {text: additionalOptionsData[18].Item_Long_Desc, style: 'textotablacatoni'},
            {text: "$" + Intl.NumberFormat("en-IN").format(additionalOptionsData[18].Price), style: 'textotablacatoni', alignment: 'center'}, 
            {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(additionalOptionsData[19].Price), style: 'textotablacatoni', alignment: 'center'},
            {text: "-", style: 'textotablacatoni', alignment: 'center'},  
        ]
    
        pSItems++
        /*TERMINA CICLO*/
    }

    /*options2[pSItems] = [
        {text: 'Colour contrast (only one additional colour choice is possible)', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 6},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++*/

    /*ESTO VA EN UN CICLO*/
    /*var i=0;
    var coloursFlag= false
    while(coloursFlag === false)
    {
        var j;
        if(i===0)
        {
            j=0
        }
        else {
            j = i*4
        }
        var precios = []
        var preciosCount = 0
        var countC=0
        var printCaracter = []
        while(j< coloursContrastData.length && countC<4)
        {
           precios[preciosCount] = coloursContrastData[j].Price
           printCaracter[preciosCount] = coloursContrastData[j].Print_Character
           preciosCount++
           j++
           countC++
        }
        var data = {
            Id_Item: coloursContrastData[j-1].Id_Item,
            Item_Long_Desc: coloursContrastData[j-1].Item_Long_Desc,
            Prices: precios,
            Print_Character: printCaracter
        }

        var precio1;
        var precio2;
        var precio3;
        var precio4;

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

        if(data.Print_Character[3] !== null)
        {
            if(data.Print_Character[3] === "*")
            {
                precio4 = "*"
            }
            else {
                precio4 = "-"
            }
        }
        else {
            precio4 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[3])
        }
        
        options2[pSItems] = [
            {text: data.Id_Item, style: 'textotabla', alignment: 'center'},
            {text: data.Item_Long_Desc, style: 'textotabla'},
            {text: precio1, style: 'textotabla', alignment: 'center'}, 
            {text: precio2, style: 'textotabla', alignment: 'center'}, 
            {text: precio3, style: 'textotabla', alignment: 'center'},
            {text: precio4, style: 'textotabla', alignment: 'center'},  
        ]

        pSItems++

        //console.log(data)

        if(j >= coloursContrastData.length)
        {
            coloursFlag = true
        }
        i++
    }   */
    /*TERMINA CICLO*/

    /*if(coloursContrastData[0] !== undefined && coloursContrastData[1] !== undefined && coloursContrastData[2] !== undefined)
    {
        options2[pSItems] = [
            {text: coloursContrastData[0].Id_Item, style: 'textotablacatoni', alignment: 'center'},
            {text: coloursContrastData[0].Item_Long_Desc, style: 'textotablacatoni'},
            {text: "$" + Intl.NumberFormat("en-IN").format(coloursContrastData[0].Price), style: 'textotablacatoni', alignment: 'center'}, 
            {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(coloursContrastData[1].Price), style: 'textotablacatoni', alignment: 'center'},
            {text: "$" + Intl.NumberFormat("en-IN").format(coloursContrastData[2].Price), style: 'textotablacatoni', alignment: 'center'},  
        ]
    
        pSItems++
    }

    if(coloursContrastData[3] !== undefined && coloursContrastData[4] !== undefined && coloursContrastData[5] !== undefined && coloursContrastData[6] !== undefined)
    {
        options2[pSItems] = [
            {text: coloursContrastData[3].Id_Item, style: 'textotablacatoni', alignment: 'center'},
            {text: coloursContrastData[3].Item_Long_Desc, style: 'textotablacatoni'},
            {text: "$" + Intl.NumberFormat("en-IN").format(coloursContrastData[3].Price), style: 'textotablacatoni', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(coloursContrastData[4].Price), style: 'textotablacatoni', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(coloursContrastData[5].Price), style: 'textotablacatoni', alignment: 'center'},
            {text: "$" + Intl.NumberFormat("en-IN").format(coloursContrastData[6].Price), style: 'textotablacatoni', alignment: 'center'},  
        ]
    
        pSItems++
    }*/
    
    options2[pSItems] = [
        {text: 'Handles', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    if(handlesData.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        var i=0;
        var handlesFlag= false
        while(handlesFlag === false)
        {
            var j;
            if(i===0)
            {
                j=0
            }
            else {
                j = i*4
            }
            var precios = []
            var preciosCount = 0
            var countC=0
            var printCaracter = []
            while(j< handlesData.length && countC<4)
            {
            precios[preciosCount] = handlesData[j].Price
            printCaracter[preciosCount] = handlesData[j].Print_Character
            preciosCount++
            j++
            countC++
            }
            var data = {
                Id_Item: handlesData[j-1].Id_Item,
                Item_Long_Desc: handlesData[j-1].Item_Long_Desc,
                Prices: precios,
                Print_Character: printCaracter
            }

            var precio1;
            var precio2;
            var precio3;
            var precio4;

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

            if(data.Print_Character[3] !== null)
            {
                if(data.Print_Character[3] === "*")
                {
                    precio4 = "*"
                }
                else {
                    precio4 = "-"
                }
            }
            else {
                precio4 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[3])
            }
            
            options2[pSItems] = [
                {text: data.Id_Item, style: 'textotablacatoni', alignment: 'center'},
                {text: data.Item_Long_Desc, style: 'textotablacatoni'},
                {text: precio1, style: 'textotablacatoni', alignment: 'center'}, 
                {text: precio2, style: 'textotablacatoni', alignment: 'center'}, 
                {text: precio3, style: 'textotablacatoni', alignment: 'center'},
                {text: precio4, style: 'textotablacatoni', alignment: 'center'},  
            ]

            pSItems++

            //console.log(data)

            if(j >= handlesData.length)
            {
                handlesFlag = true
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
                    widths: ["*", 60, 60, 60, 60],
                    body: [
                        [
                            {border: [false, false, false, false], text: ''},
                            {text: 'FURNCAB', style: 'textotablacolorlarge', colSpan: 4, fillColor: '#154898',  alignment: 'center'},
                            {},
                            {},
                            {},
                        ],
                        [
                            {border: [false, false, false, false], text: ''},
                            {text: 'CH700B3', style: 'textotablaboldblacklarge', colSpan: 4,  alignment: 'center'},
                            {},
                            {},
                            {},
                        ],
                        [
                            {border: [false, false, false, false], text: 'Catoni Style Bedside Cabinet - High', style: 'textotablaboldlarge'},
                            {text: 'B01', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
                            {text: 'B02', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
                            {text: 'B03', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
                            {text: 'B04', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
                        ],
                        [
                            {border: [false, false, false, false], ul: [
                                { text: 'Height 885 mm - Width 401 mm - Depth 401 mm'},
                                { text: 'Material Body and Top : Melamine  Edges: Aluminium'},
                                { text: 'For additional technical specifications see separate tech specs'},
                                { text: 'For colour and handles see separate tech specs'},
                            ],  style:'textolista',},
                            { image: "images/Catoni11.png", width: 40, height: 70, alignment: 'center'},
                            { image: "images/Catoni12.png", width: 40, height: 70, alignment: 'center'},
                            { image: "images/Catoni13.png", width: 40, height: 70, alignment: 'center'},
                            { image: "images/Catoni14.png", width: 40, height: 70, alignment: 'center'},
                        ],
                        [
                            {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#154898'},
                            {text: "$" + Intl.NumberFormat("en-IN").format(prices[0].Price), style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
                            {text: "$" + Intl.NumberFormat("en-IN").format(prices[1].Price), style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'}, 
                            {text: "$" + Intl.NumberFormat("en-IN").format(prices[2].Price), style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
                            {text: "$" + Intl.NumberFormat("en-IN").format(prices[3].Price), style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'}, 
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
                    widths: ["*", 60, 60, 60, 60],
                    body: [
                        [
                            {border: [false, false, false, false], text: ''},
                            {text: 'FURNCAB', style: 'textotablacolorlarge', colSpan: 4, fillColor: '#154898',  alignment: 'center'},
                            {},
                            {},
                            {},
                        ],
                        [
                            {border: [false, false, false, false], text: ''},
                            {text: 'CH700B3', style: 'textotablaboldblacklarge', colSpan: 4,  alignment: 'center'},
                            {},
                            {},
                            {},
                        ],
                        [
                            {border: [false, false, false, false], text: 'Catoni Style Bedside Cabinet - High', style: 'textotablaboldlarge'},
                            {text: 'B01', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
                            {text: 'B02', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
                            {text: 'B03', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
                            {text: 'B04', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
                        ],
                        [
                            {border: [false, false, false, false], ul: [
                                { text: 'Height 885 mm - Width 401 mm - Depth 401 mm'},
                                { text: 'Material Body and Top : Melamine  Edges: Aluminium'},
                                { text: 'For additional technical specifications see separate tech specs'},
                                { text: 'For colour and handles see separate tech specs'},
                            ],  style:'textolista',},
                            { image: "images/Catoni11.png", width: 40, height: 70, alignment: 'center'},
                            { image: "images/Catoni12.png", width: 40, height: 70, alignment: 'center'},
                            { image: "images/Catoni13.png", width: 40, height: 70, alignment: 'center'},
                            { image: "images/Catoni14.png", width: 40, height: 70, alignment: 'center'},
                        ],
                        [
                            {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#154898'},
                            {text: "NO-DATA", style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
                            {text: "NO-DATA", style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'}, 
                            {text: "NO-DATA", style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
                            {text: "NO-DATA", style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'}, 
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
    if(hingeData.length > 0 || plasticDrawerData.length > 0 || fixedStripData.length > 0 || castorsData.length > 0 
        || accesoryBarData.length > 0 || additionalOptionsData.length > 0 || coloursContrastData.length > 0 || handlesData.length > 0)
    {
        table2 = [
            {
                table: {
                    widths: [70, "*", 60, 60, 60, 60],
                    body: options2
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

    var catoni = [
        "\n",
        "\n",
        "\n",
        table1,
        "\n",
        table2,
        { text: '\n', style: 'parrafo' },
        { text: '* = standard', style: 'textotablacatoni' },
        { text: '= - not available', style: 'textotablacatoni' },
        { text: '\n', style: 'parrafo' },
        { text: 'Configurations samples', style: 'textotablaboldlarge' },
        {
            table: {
                widths: [80, 80, 80, 80, 80, "*"],
                body: [
                    [
                        {text: 'B01 with sliding tray (SLP), accessory bar holder (PAD) & simple base (L3)', style: 'textotablacolorcatoni', fillColor: '#154898',  alignment: 'center'},
                        {text: 'B01 with fixed strip (BAN) & simple base (L3)', style: 'textotablacolorcatoni', fillColor: '#154898',  alignment: 'center'},
                        {text: 'B01 with two half doors (A6) & simple base (L3)', style: 'textotablacolorcatoni', fillColor: '#154898',  alignment: 'center'},
                        {text: 'B01 with colour contrast for fixed shelf', style: 'textotablacolorcatoni', fillColor: '#154898',  alignment: 'center'},
                        {text: 'B02 with plastic cover (CAP)', style: 'textotablacolorcatoni', fillColor: '#154898',  alignment: 'center'},
                        {text: 'B02 with colour contrast', style: 'textotablacolorcatoni', fillColor: '#154898',  alignment: 'center'},
                    ],
                    [
                        { image: "images/Catoni15.png", width: 40, height: 70, alignment: 'center'},
                        { image: "images/Catoni16.png", width: 40, height: 70, alignment: 'center'},
                        { image: "images/Catoni17.png", width: 40, height: 70, alignment: 'center'},
                        { image: "images/Catoni18.png", width: 40, height: 70, alignment: 'center'},
                        { image: "images/Catoni19.png", width: 40, height: 70, alignment: 'center'},
                        { image: "images/Catoni20.png", width: 40, height: 70, alignment: 'center'},
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
        {text: '', pageBreak: 'after'  },
    ]

    return catoni;
}

module.exports = {
    getCatoniStyle : getCatoniStyle,
}