const dbStretchers = require('../controllers/stretchers')

async function getStretchers()
{
    const res = await dbStretchers.getDataStretchers()
    const prices = res[0]
    const deckWidth = res[1]
    const surfaceData  = res[2]
    const pushHandlesData = res[3]
    const ivPoleType = res[4]
    const ivPoleTransport = res[5]
    const steering = res[6]
    const brakePedals = res[7]
    const surface2Data = res[8]
    const hidraulicControl = res[9]
    const siderails = res[10]
    const bumperColour = res[11]
    const additionalOptions = res[12]
    const surfacesData = res[13]
    const accesoriesData = res[14]
    const accesoriesData2 = res[15]
    const accesoriesData3 = res[16]

    var options =[]
    var pSItems = 0;
    options[pSItems] = [
        {text: 'OPTION CODE', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'P8000', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'P8005', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'P8010', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'P8040', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'P8050', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
    ]
    pSItems++

    options[pSItems] = [
        {text: "Deck width", style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/

    var i=0;
    var deckWidthFlag = false
    while(deckWidthFlag === false)
    {
        var j;
        if(i===0)
        {
            j=0
        }
        else {
            j = i*5
        }
        var precios = []
        var preciosCount = 0
        var countC=0
        var printCaracter = []
        while(j< deckWidth.length && countC<5)
        {
           precios[preciosCount] = deckWidth[j].Price
           printCaracter[preciosCount] = deckWidth[j].Print_Character
           preciosCount++
           j++
           countC++
        }
        var data = {
            Id_Item: deckWidth[j-1].Id_Item,
            Item_Long_Desc: deckWidth[j-1].Item_Long_Desc,
            Prices: precios,
            Print_Character: printCaracter
        }

        var precio1;
        var precio2;
        var precio3;
        var precio4;
        var precio5;

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
        
        options[pSItems] = [
            {text: data.Id_Item, style: 'textotabla', alignment: 'center'},
            {text: data.Item_Long_Desc, style: 'textotabla'},
            {text: precio1, style: 'textotabla', alignment: 'center'}, 
            {text: precio2, style: 'textotabla', alignment: 'center'}, 
            {text: precio3, style: 'textotabla', alignment: 'center'}, 
            {text: precio4, style: 'textotabla', alignment: 'center'}, 
            {text: precio5, style: 'textotabla', alignment: 'center'}, 
        ]

        pSItems++

        //console.log(data)

        if(j >= deckWidth.length)
        {
            deckWidthFlag = true
        }
        i++
    }   
    /*TERMINA CICLO*/
    
    options[pSItems] = [
        {text: 'Surface', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 7},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
    ]

    pSItems ++

    /*ESTO VA EN UN CICLO*/
    i=0;
    var surfaceFlag = false
    while(surfaceFlag === false)
    {
        var j;
        if(i===0)
        {
            j=0
        }
        else {
            j = i*5
        }
        var precios = []
        var preciosCount = 0
        var countC=0
        var printCaracter = []
        while(j< surfaceData.length && countC<5)
        {
           precios[preciosCount] = surfaceData[j].Price
           printCaracter[preciosCount] = surfaceData[j].Print_Character
           preciosCount++
           j++
           countC++
        }
        var data = {
            Id_Item: surfaceData[j-1].Id_Item,
            Item_Long_Desc: surfaceData[j-1].Item_Long_Desc,
            Prices: precios,
            Print_Character: printCaracter
        }

        var precio1;
        var precio2;
        var precio3;
        var precio4;
        var precio5;

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
        
        options[pSItems] = [
            {text: data.Id_Item, style: 'textotabla', alignment: 'center'},
            {text: data.Item_Long_Desc, style: 'textotabla'},
            {text: precio1, style: 'textotabla', alignment: 'center'}, 
            {text: precio2, style: 'textotabla', alignment: 'center'}, 
            {text: precio3, style: 'textotabla', alignment: 'center'}, 
            {text: precio4, style: 'textotabla', alignment: 'center'}, 
            {text: precio5, style: 'textotabla', alignment: 'center'}, 
        ]

        pSItems++

        //console.log(data)

        if(j >= surfaceData.length)
        {
            surfaceFlag = true
        }
        i++
    }   
    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: 'Push handles (standard colour: grey/with O2 tank holder colour: blue)', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 7},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    i=0;
    var pushHandlesFlag = false
    while(pushHandlesFlag === false)
    {
        var j;
        if(i===0)
        {
            j=0
        }
        else {
            j = i*5
        }
        var precios = []
        var preciosCount = 0
        var countC=0
        var printCaracter = []
        while(j< pushHandlesData.length && countC<5)
        {
           precios[preciosCount] = pushHandlesData[j].Price
           printCaracter[preciosCount] = pushHandlesData[j].Print_Character
           preciosCount++
           j++
           countC++
        }
        var data = {
            Id_Item: pushHandlesData[j-1].Id_Item,
            Item_Long_Desc: pushHandlesData[j-1].Item_Long_Desc,
            Prices: precios,
            Print_Character: printCaracter
        }

        var precio1;
        var precio2;
        var precio3;
        var precio4;
        var precio5;

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
        
        options[pSItems] = [
            {text: data.Id_Item, style: 'textotabla', alignment: 'center'},
            {text: data.Item_Long_Desc, style: 'textotabla'},
            {text: precio1, style: 'textotabla', alignment: 'center'}, 
            {text: precio2, style: 'textotabla', alignment: 'center'}, 
            {text: precio3, style: 'textotabla', alignment: 'center'}, 
            {text: precio4, style: 'textotabla', alignment: 'center'}, 
            {text: precio5, style: 'textotabla', alignment: 'center'}, 
        ]

        pSItems++

        //console.log(data)

        if(j >= pushHandlesData.length)
        {
            pushHandlesFlag = true
        }
        i++
    }   
    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: 'IV pole type/location', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 7},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    i=0;
    var ivPoleTypeFlag = false
    while(ivPoleTypeFlag === false)
    {
        var j;
        if(i===0)
        {
            j=0
        }
        else {
            j = i*5
        }
        var precios = []
        var preciosCount = 0
        var countC=0
        var printCaracter = []
        while(j< ivPoleType.length && countC<5)
        {
           precios[preciosCount] = ivPoleType[j].Price
           printCaracter[preciosCount] = ivPoleType[j].Print_Character
           preciosCount++
           j++
           countC++
        }
        var data = {
            Id_Item: ivPoleType[j-1].Id_Item,
            Item_Long_Desc: ivPoleType[j-1].Item_Long_Desc,
            Prices: precios,
            Print_Character: printCaracter
        }

        var precio1;
        var precio2;
        var precio3;
        var precio4;
        var precio5;

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
        
        options[pSItems] = [
            {text: data.Id_Item, style: 'textotabla', alignment: 'center'},
            {text: data.Item_Long_Desc, style: 'textotabla'},
            {text: precio1, style: 'textotabla', alignment: 'center'}, 
            {text: precio2, style: 'textotabla', alignment: 'center'}, 
            {text: precio3, style: 'textotabla', alignment: 'center'}, 
            {text: precio4, style: 'textotabla', alignment: 'center'}, 
            {text: precio5, style: 'textotabla', alignment: 'center'}, 
        ]

        pSItems++

        //console.log(data)

        if(j >= ivPoleType.length)
        {
            ivPoleTypeFlag = true
        }
        i++
    }   
    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: 'IV pole transport push handles (not available with handbrake - HB)', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 7},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    i=0;
    var ivPoleTransportFlag = false
    while(ivPoleTransportFlag === false)
    {
        var j;
        if(i===0)
        {
            j=0
        }
        else {
            j = i*5
        }
        var precios = []
        var preciosCount = 0
        var countC=0
        var printCaracter = []
        while(j< ivPoleTransport.length && countC<5)
        {
           precios[preciosCount] = ivPoleTransport[j].Price
           printCaracter[preciosCount] = ivPoleTransport[j].Print_Character
           preciosCount++
           j++
           countC++
        }
        var data = {
            Id_Item: ivPoleTransport[j-1].Id_Item,
            Item_Long_Desc: ivPoleTransport[j-1].Item_Long_Desc,
            Prices: precios,
            Print_Character: printCaracter
        }

        var precio1;
        var precio2;
        var precio3;
        var precio4;
        var precio5;

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
        
        options[pSItems] = [
            {text: data.Id_Item, style: 'textotabla', alignment: 'center'},
            {text: data.Item_Long_Desc, style: 'textotabla'},
            {text: precio1, style: 'textotabla', alignment: 'center'}, 
            {text: precio2, style: 'textotabla', alignment: 'center'}, 
            {text: precio3, style: 'textotabla', alignment: 'center'}, 
            {text: precio4, style: 'textotabla', alignment: 'center'}, 
            {text: precio5, style: 'textotabla', alignment: 'center'}, 
        ]

        pSItems++

        //console.log(data)

        if(j >= ivPoleTransport.length)
        {
            ivPoleTransportFlag = true
        }
        i++
    }   
    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: 'Steering', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 7},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

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
            j = i*5
        }
        var precios = []
        var preciosCount = 0
        var countC=0
        var printCaracter = []
        while(j< steering.length && countC<5)
        {
           precios[preciosCount] = steering[j].Price
           printCaracter[preciosCount] = steering[j].Print_Character
           preciosCount++
           j++
           countC++
        }
        var data = {
            Id_Item: steering[j-1].Id_Item,
            Item_Long_Desc: steering[j-1].Item_Long_Desc,
            Prices: precios,
            Print_Character: printCaracter
        }

        var precio1;
        var precio2;
        var precio3;
        var precio4;
        var precio5;

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
        
        options[pSItems] = [
            {text: data.Id_Item, style: 'textotabla', alignment: 'center'},
            {text: data.Item_Long_Desc, style: 'textotabla'},
            {text: precio1, style: 'textotabla', alignment: 'center'}, 
            {text: precio2, style: 'textotabla', alignment: 'center'}, 
            {text: precio3, style: 'textotabla', alignment: 'center'}, 
            {text: precio4, style: 'textotabla', alignment: 'center'}, 
            {text: precio5, style: 'textotabla', alignment: 'center'}, 
        ]

        pSItems++

        //console.log(data)

        if(j >= steering.length)
        {
            steeringFlag = true
        }
        i++
    }   
    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: 'Brake Pedals', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 7},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    i=0;
    var brakePedalsFlag = false
    while(brakePedalsFlag === false)
    {
        var j;
        if(i===0)
        {
            j=0
        }
        else {
            j = i*5
        }
        var precios = []
        var preciosCount = 0
        var countC=0
        var printCaracter = []
        while(j< brakePedals.length && countC<5)
        {
           precios[preciosCount] = brakePedals[j].Price
           printCaracter[preciosCount] = brakePedals[j].Print_Character
           preciosCount++
           j++
           countC++
        }
        var data = {
            Id_Item: brakePedals[j-1].Id_Item,
            Item_Long_Desc: brakePedals[j-1].Item_Long_Desc,
            Prices: precios,
            Print_Character: printCaracter
        }

        var precio1;
        var precio2;
        var precio3;
        var precio4;
        var precio5;

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
        
        options[pSItems] = [
            {text: data.Id_Item, style: 'textotabla', alignment: 'center'},
            {text: data.Item_Long_Desc, style: 'textotabla'},
            {text: precio1, style: 'textotabla', alignment: 'center'}, 
            {text: precio2, style: 'textotabla', alignment: 'center'}, 
            {text: precio3, style: 'textotabla', alignment: 'center'}, 
            {text: precio4, style: 'textotabla', alignment: 'center'}, 
            {text: precio5, style: 'textotabla', alignment: 'center'}, 
        ]

        pSItems++

        //console.log(data)

        if(j >= brakePedals.length)
        {
            brakePedalsFlag = true
        }
        i++
    }   
    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: 'Surface', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 7},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    i=0;
    var surface2Flag = false
    while(surface2Flag === false)
    {
        var j;
        if(i===0)
        {
            j=0
        }
        else {
            j = i*5
        }
        var precios = []
        var preciosCount = 0
        var countC=0
        var printCaracter = []
        while(j< surface2Data.length && countC<5)
        {
           precios[preciosCount] = surface2Data[j].Price
           printCaracter[preciosCount] = surface2Data[j].Print_Character
           preciosCount++
           j++
           countC++
        }
        var data = {
            Id_Item: surface2Data[j-1].Id_Item,
            Item_Long_Desc: surface2Data[j-1].Item_Long_Desc,
            Prices: precios,
            Print_Character: printCaracter
        }

        var precio1;
        var precio2;
        var precio3;
        var precio4;
        var precio5;

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
        
        options[pSItems] = [
            {text: data.Id_Item, style: 'textotabla', alignment: 'center'},
            {text: data.Item_Long_Desc, style: 'textotabla'},
            {text: precio1, style: 'textotabla', alignment: 'center'}, 
            {text: precio2, style: 'textotabla', alignment: 'center'}, 
            {text: precio3, style: 'textotabla', alignment: 'center'}, 
            {text: precio4, style: 'textotabla', alignment: 'center'}, 
            {text: precio5, style: 'textotabla', alignment: 'center'}, 
        ]

        pSItems++

        //console.log(data)

        if(j >= surface2Data.length)
        {
            surface2Flag = true
        }
        i++
    }   
    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: 'Hydraulic control pedals', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 7},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    i=0;
    var hidraulicControlFlag = false
    while(hidraulicControlFlag === false)
    {
        var j;
        if(i===0)
        {
            j=0
        }
        else {
            j = i*5
        }
        var precios = []
        var preciosCount = 0
        var countC=0
        var printCaracter = []
        while(j< hidraulicControl.length && countC<5)
        {
           precios[preciosCount] = hidraulicControl[j].Price
           printCaracter[preciosCount] = hidraulicControl[j].Print_Character
           preciosCount++
           j++
           countC++
        }
        var data = {
            Id_Item: hidraulicControl[j-1].Id_Item,
            Item_Long_Desc: hidraulicControl[j-1].Item_Long_Desc,
            Prices: precios,
            Print_Character: printCaracter
        }

        var precio1;
        var precio2;
        var precio3;
        var precio4;
        var precio5;

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
        
        options[pSItems] = [
            {text: data.Id_Item, style: 'textotabla', alignment: 'center'},
            {text: data.Item_Long_Desc, style: 'textotabla'},
            {text: precio1, style: 'textotabla', alignment: 'center'}, 
            {text: precio2, style: 'textotabla', alignment: 'center'}, 
            {text: precio3, style: 'textotabla', alignment: 'center'}, 
            {text: precio4, style: 'textotabla', alignment: 'center'}, 
            {text: precio5, style: 'textotabla', alignment: 'center'}, 
        ]

        pSItems++

        //console.log(data)

        if(j >= hidraulicControl.length)
        {
            hidraulicControlFlag = true
        }
        i++
    }   
    /*TERMINA CICLO*/

    var options2 = []
    pSItems = 0

    options2[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'P8000', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'P8005', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'P8010', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'P8040', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'P8050', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
    ]

    pSItems++

    options2[pSItems] = [
        {text: 'Siderails', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems ++

     /*ESTO VA EN UN CICLO*/
    i=0;
    var siderailsFlag = false
    while(siderailsFlag === false)
    {
        var j;
        if(i===0)
        {
            j=0
        }
        else {
            j = i*5
        }
        var precios = []
        var preciosCount = 0
        var countC=0
        var printCaracter = []
        while(j< siderails.length && countC<5)
        {
           precios[preciosCount] = siderails[j].Price
           printCaracter[preciosCount] = siderails[j].Print_Character
           preciosCount++
           j++
           countC++
        }
        var data = {
            Id_Item: siderails[j-1].Id_Item,
            Item_Long_Desc: siderails[j-1].Item_Long_Desc,
            Prices: precios,
            Print_Character: printCaracter
        }

        var precio1;
        var precio2;
        var precio3;
        var precio4;
        var precio5;

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
        
        options2[pSItems] = [
            {text: data.Id_Item, style: 'textotabla', alignment: 'center'},
            {text: data.Item_Long_Desc, style: 'textotabla'},
            {text: precio1, style: 'textotabla', alignment: 'center'}, 
            {text: precio2, style: 'textotabla', alignment: 'center'}, 
            {text: precio3, style: 'textotabla', alignment: 'center'}, 
            {text: precio4, style: 'textotabla', alignment: 'center'}, 
            {text: precio5, style: 'textotabla', alignment: 'center'}, 
        ]

        pSItems++

        //console.log(data)

        if(j >= siderails.length)
        {
            siderailsFlag = true
        }
        i++
    }   
    /*TERMINA CICLO*/

    options2[pSItems] = [
        {text: 'Bumper colour (with Light Neutral Bellows)', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems ++

    /*ESTO VA EN UN CICLO*/
    i=0;
    var bumperColourFlag = false
    while(bumperColourFlag === false)
    {
        var j;
        if(i===0)
        {
            j=0
        }
        else {
            j = i*5
        }
        var precios = []
        var preciosCount = 0
        var countC=0
        var printCaracter = []
        while(j< bumperColour.length && countC<5)
        {
           precios[preciosCount] = bumperColour[j].Price
           printCaracter[preciosCount] = bumperColour[j].Print_Character
           preciosCount++
           j++
           countC++
        }
        var data = {
            Id_Item: bumperColour[j-1].Id_Item,
            Item_Long_Desc: bumperColour[j-1].Item_Long_Desc,
            Prices: precios,
            Print_Character: printCaracter
        }

        var precio1;
        var precio2;
        var precio3;
        var precio4;
        var precio5;

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
        
        options2[pSItems] = [
            {text: data.Id_Item, style: 'textotabla', alignment: 'center'},
            {text: data.Item_Long_Desc, style: 'textotabla'},
            {text: precio1, style: 'textotabla', alignment: 'center'}, 
            {text: precio2, style: 'textotabla', alignment: 'center'}, 
            {text: precio3, style: 'textotabla', alignment: 'center'}, 
            {text: precio4, style: 'textotabla', alignment: 'center'}, 
            {text: precio5, style: 'textotabla', alignment: 'center'}, 
        ]

        pSItems++

        //console.log(data)

        if(j >= bumperColour.length)
        {
            bumperColourFlag = true
        }
        i++
    }   
     /*TERMINA CICLO*/

     options2[pSItems] = [
        {text: 'Additional options', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems ++

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
            j = i*5
        }
        var precios = []
        var preciosCount = 0
        var countC=0
        var printCaracter = []
        while(j< additionalOptions.length && countC<5)
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
        var precio4;
        var precio5;

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
        
        options2[pSItems] = [
            {text: data.Id_Item, style: 'textotabla', alignment: 'center'},
            {text: data.Item_Long_Desc, style: 'textotabla'},
            {text: precio1, style: 'textotabla', alignment: 'center'}, 
            {text: precio2, style: 'textotabla', alignment: 'center'}, 
            {text: precio3, style: 'textotabla', alignment: 'center'}, 
            {text: precio4, style: 'textotabla', alignment: 'center'}, 
            {text: precio5, style: 'textotabla', alignment: 'center'}, 
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

    var surfaces = []
    pSItems = 0

    surfaces[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'PART #', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'P8000', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'P8005', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'P8010', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'P8040', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'P8050', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    i=0;
    var surfacesFlag = false
    while(surfacesFlag === false)
    {
        var j;
        if(i===0)
        {
            j=0
        }
        else {
            j = i*5
        }
        var precios = []
        var preciosCount = 0
        var countC=0
        var printCaracter = []
        while(j< surfacesData.length && countC<5)
        {
           precios[preciosCount] = surfacesData[j].Price
           printCaracter[preciosCount] = surfacesData[j].Print_Character
           preciosCount++
           j++
           countC++
        }
        var data = {
            Kit_Name: surfacesData[j-1].KitName,
            Item_Long_Desc: surfacesData[j-1].Item_Long_Desc,
            Part: surfacesData[j-1].Part,
            Prices: precios,
            Print_Character: printCaracter
        }

        var precio1;
        var precio2;
        var precio3;
        var precio4;
        var precio5;

        precio1 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[0])
        precio2 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[1])
        precio3 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[2])
        precio4 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[3])
        precio5 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[4])
        
        surfaces[pSItems] = [
            {text: data.Kit_Name, style: 'textotabla', alignment: 'center'},
            {text: data.Item_Long_Desc, style: 'textotabla'},
            {text: data.Part, style: 'textotabla', alignment: 'center'}, 
            {text: precio1, style: 'textotabla', alignment: 'center'}, 
            {text: precio2, style: 'textotabla', alignment: 'center'}, 
            {text: precio3, style: 'textotabla', alignment: 'center'}, 
            {text: precio4, style: 'textotabla', alignment: 'center'}, 
            {text: precio5, style: 'textotabla', alignment: 'center'}, 
        ]

        pSItems++

        //console.log(data)

        if(j >= surfacesData.length)
        {
            surfacesFlag = true
        }
        i++
    }   
    /*TERMINA CICLO*/

    var accesories = []
    pSItems = 0

    accesories[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'PART #', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<accesoriesData.length; i++)
    {
        accesories[pSItems] = [
            {text: accesoriesData[i].KitName, style: 'textotabla', alignment: 'center'},
            {text: accesoriesData[i].Item_Long_Desc, style: 'textotabla'},
            {text: accesoriesData[i].Part, style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(accesoriesData[i].Price), style: 'textotabla', alignment: 'center'}, 
        ]
    
        pSItems++
    }
    /*TERMINA CICLO*/

    accesories[pSItems] = [
        {text: 'Following for OB/GYN only:', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<accesoriesData2.length; i++)
    {
        accesories[pSItems] = [
            {text: accesoriesData2[i].KitName, style: 'textotabla', alignment: 'center'},
            {text: accesoriesData2[i].Item_Long_Desc, style: 'textotabla'},
            {text: accesoriesData2[i].Part, style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(accesoriesData2[i].Price), style: 'textotabla', alignment: 'center'}, 
        ]
    
        pSItems++
    }
    /*TERMINA CICLO*/

    accesories[pSItems] = [
        {text: 'Following for Surgical only:', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<accesoriesData3.length; i++)
    {
        accesories[pSItems] = [
            {text: accesoriesData3[i].KitName, style: 'textotabla', alignment: 'center'},
            {text: accesoriesData3[i].Item_Long_Desc, style: 'textotabla'},
            {text: accesoriesData3[i].Part, style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(accesoriesData3[i].Price), style: 'textotabla', alignment: 'center'}, 
        ]
    
        pSItems++
    }
    /*TERMINA CICLO*/

    const fecha = new Date();
    fecha.toLocaleDateString()

    var stretchers = [
        "\n",
        "\n",
        "\n",
        { text: 'Stretchers', style: 'header'},
        { text: 'Procedural / Transport / Surgical / Electric / Trauma / OB-GYN', style: { fontSize: 0}, tocItem: 'stretchers'},
        { text: 'Country of origin: México\n', style: 'parrafo' },
        { text: '\n', style: 'parrafo' },
        {
            columns: [
                {
                    style:'textolista',
                    ul: [
                            { text: 'Safe Working Load 317,5 kg'},
                        ]
                },
                
            ]
        },
        {
            columns: [
                {
                    width: 80,
                    text: ''
                },
                {
                    width: "*",
                    table: {
                        widths: ["*", 40, 40, 40, 40, 40],
                        body: [
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'STRETCHER', style: 'textotablacolor', colSpan: 5, fillColor: '#546ce4',  alignment: 'center'},
                                {},
                                {},
                                {},
                                {},
                            ],
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'P8000', style: 'textotablaboldblack', alignment: 'center'},
                                {text: 'P8005', style: 'textotablaboldblack', alignment: 'center'},
                                {text: 'P8010', style: 'textotablaboldblack', alignment: 'center'},
                                {text: 'P8040', style: 'textotablaboldblack', alignment: 'center'},
                                {text: 'P8050', style: 'textotablaboldblack', alignment: 'center'},
                            ],
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'Procedural', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                                {text: 'Transport', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                                {text: 'Surgical', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                                {text: 'Trauma', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                                {text: 'OB/GYN', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                                
                            ],
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'PS', style: 'textotablaboldblack',  alignment: 'center'},
                                {text: 'TN', style: 'textotablaboldblack',  alignment: 'center'},
                                {text: 'SS', style: 'textotablaboldblack',  alignment: 'center'},
                                {text: 'TS', style: 'textotablaboldblack',  alignment: 'center'},
                                {text: 'OS', style: 'textotablaboldblack',  alignment: 'center'},
                            ],
                            [
                                {text: 'Trendelenburg / Reverse Trendelenburg', style: 'textotabla'},
                                {text: '●', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '●', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '●', style: 'textotabla', alignment: 'center'},
                            ],
                            [
                                {text: 'OneStep TuckAway siderails for zero-gap transfers', style: 'textotabla'},
                                {text: '●', style: 'textotabla', alignment: 'center'},
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '●', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '●', style: 'textotabla', alignment: 'center'},
                            ],
                            [
                                {text: 'Fold-down siderails', style: 'textotabla'},
                                {text: '-', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'},
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'},
                            ],
                            [
                                {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4'},
                                {text: "$" + Intl.NumberFormat("en-IN").format(prices[0].Price), style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                                {text: "$" + Intl.NumberFormat("en-IN").format(prices[1].Price), style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                                {text: "$" + Intl.NumberFormat("en-IN").format(prices[2].Price), style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                                {text: "$" + Intl.NumberFormat("en-IN").format(prices[3].Price), style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
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
                },
            ]
        },
        "\n",
        {
            table: {
                widths: [50, "*", 30, 30, 30, 30, 30],
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
        {text: '', pageBreak: 'after'  },
        "\n",
        "\n",
        "\n",
        {
            table: {
                widths: [50, "*", 30, 30, 30, 30, 30],
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
        { text: '● = standard', style: 'parrafo' },
        { text: '= - not available', style: 'parrafo' },
        "\n",
        { image: "images/Stretchers.png", width: 370, height: 160, alignment: 'center'},
        {text: '', pageBreak: 'after'  },
        '\n',
        '\n',
        '\n',
        { text: 'SURFACES', style: 'textotablaboldlarge' },
        { text: 'Fire Code Compliance: Surfaces comply with North American Federal Regulations: (16CFR1632, 16CFR1633 and CAN/CGSB-4.1 No. 27.7)\n Country of Origin: USA', style: 'parrafo' },
        {
            table: {
                widths: [60, "*", 50, 30, 30, 30, 30, 30],
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
        },
        '\n',
        { text: 'ACCESORIES', style: 'textotablaboldlarge' },
        {
            table: {
                widths: [80, "*", 80, 80],
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
        },
        {text: '', pageBreak: 'after'  },
    ]

    return stretchers;
}

module.exports = {
    getStretchers : getStretchers,
}