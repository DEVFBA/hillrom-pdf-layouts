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

    var options2 =[]
    var pSItems = 0;
    options2[pSItems] = [
        {text: 'OPTION CODE', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'B01', style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'},
        {text: 'B02', style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'B03', style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'},
        {text: 'B04', style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'}, 
    ]
    pSItems++

    options2[pSItems] = [
        {text: "Hinge", style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    var i=0;
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
    }   
    /*TERMINA CICLO*/
    
    options2[pSItems] = [
        {text: 'Plastic drawer insert', style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems ++

    /*ESTO VA EN UN CICLO*/
    var i=0;
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
    }   
    /*TERMINA CICLO*/

    options2[pSItems] = [
        {text: 'Fixed strip or sliding tray', style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    
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

        if(j >= fixedStripData.length)
        {
            fixedStripFlag = true
        }
        i++
    }   
    /*TERMINA CICLO*/

    options2[pSItems] = [
        {text: 'Castors', style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    var i=0;
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
    }   
    /*TERMINA CICLO*/

    options2[pSItems] = [
        {text: 'Accessory bar holder', style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    
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

        if(j >= accesoryBarData.length)
        {
            accesoryBarFlag = true
        }
        i++
    }   
    /*TERMINA CICLO*/

    options2[pSItems] = [
        {text: 'Additional options', style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    var i=0;
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
    }   
    /*TERMINA CICLO*/

    options2[pSItems] = [
        {text: 'Colour contrast (only one additional colour choice is possible)', style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 6},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    var i=0;
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
    }   
    /*TERMINA CICLO*/

    options2[pSItems] = [
        {text: 'Handles', style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

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

        if(j >= handlesData.length)
        {
            handlesFlag = true
        }
        i++
    }   
    /*TERMINA CICLO*/

    const fecha = new Date();
    fecha.toLocaleDateString()

    var catoni = [
        "\n",
        "\n",
        "\n",
        {
            table: {
                widths: ["*", 60, 60, 60, 60],
                body: [
                    [
                        {border: [false, false, false, false], text: ''},
                        {text: 'FURNCAB', style: 'textotablacolorcatoni', colSpan: 4, fillColor: '#546ce4',  alignment: 'center'},
                        {},
                        {},
                        {},
                    ],
                    [
                        {border: [false, false, false, false], text: ''},
                        {text: 'CH700B3', style: 'textotablaboldblackcatoni', colSpan: 4,  alignment: 'center'},
                        {},
                        {},
                        {},
                    ],
                    [
                        {border: [false, false, false, false], text: 'Catoni Style Bedside Cabinet - High', style: 'textotablaboldlargecatoni'},
                        {text: 'B01', style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'},
                        {text: 'B02', style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'},
                        {text: 'B03', style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'},
                        {text: 'B04', style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'},
                    ],
                    [
                        {border: [false, false, false, false], ul: [
                            { text: 'Height 885 mm - Width 401 mm - Depth 401 mm'},
                            { text: 'Material Body: Melamine - Top Plate: High Pressure Laminate (HPL) - Edges: Aluminium'},
                            { text: 'For additional technical specifications see separate tech specs'},
                            { text: 'For colour and handles see separate tech specs'},
                        ],  style:'textolista',},
                        { image: "images/Catoni11.png", width: 40, height: 70, alignment: 'center'},
                        { image: "images/Catoni12.png", width: 40, height: 70, alignment: 'center'},
                        { image: "images/Catoni13.png", width: 40, height: 70, alignment: 'center'},
                        { image: "images/Catoni14.png", width: 40, height: 70, alignment: 'center'},
                    ],
                    [
                        {text: 'LIST PRICE', style: 'textotablacolorcatoni', fillColor: '#546ce4'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(prices[0].Price), style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(prices[1].Price), style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: "$" + Intl.NumberFormat("en-IN").format(prices[2].Price), style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(prices[3].Price), style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'}, 
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
        "\n",
        {
            table: {
                widths: [50, "*", 60, 60, 60, 60],
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
        },
        { text: '\n', style: 'parrafo' },
        { text: '● = standard', style: 'textotablacatoni' },
        { text: '= - not available', style: 'textotablacatoni' },
        { text: '\n', style: 'parrafo' },
        { text: 'Configurations samples', style: 'textotablaboldlargecatoni' },
        {
            table: {
                widths: [80, 80, 80, 80, 80, "*"],
                body: [
                    [
                        {text: 'B01 with sliding tray (SLP), accessory bar holder (PAD) & simple base (L3)', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'B01 with fixed strip (BAN) & simple base (L3)', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'B01 with two half doors (A6) & simple base (L3)', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'B01 with colour contrast for fixed shelf', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'B02 with plastic cover (CAP)', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'B02 with colour contrast', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
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