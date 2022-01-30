const dbProgressa = require('../controllers/progressa')

async function getProgressa()
{
    const res = await dbProgressa.getDataProgressa()
    const prices = res[0]
    const patientSiderail = res[1]
    const mobility  = res[2]
    const permanentPole = res[3]
    const transportShelf = res[4]
    const accumaxSurfaces = res[5]
    const therapyIntegrated = res[6]
    const pulmonaryIntegrated = res[7]
    const accesoriesData = res[8]

    var options =[]
    var pSItems = 0;
    options[pSItems] = [
        {text: 'OPTION CODE', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'PROGRESSA', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'PRO-885', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'PRO-875', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'PRO-800', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'PRO-585', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'PRO-555', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'PRO-285', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'PRO-255', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'PRO-205', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
    ]
    pSItems++

    options[pSItems] = [
        {text: "Patient Siderail Com", style: 'textotablabold', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]},
    ]

    pSItems++

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
            j = i*8
        }
        var precios = []
        var preciosCount = 0
        var countC=0
        var printCaracter = []
        while(j< patientSiderail.length && countC<8)
        {
           precios[preciosCount] = patientSiderail[j].Price
           printCaracter[preciosCount] = patientSiderail[j].Print_Character
           preciosCount++
           j++
           countC++
        }
        var data = {
            Id_Item: patientSiderail[j-1].Id_Item,
            Item_Long_Desc: patientSiderail[j-1].Item_Long_Desc,
            Prices: precios,
            Print_Character: printCaracter
        }

        var precio1;
        var precio2;
        var precio3;
        var precio4;
        var precio5;
        var precio6;
        var precio7;
        var precio8;

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

        if(data.Print_Character[6] !== null)
        {
            if(data.Print_Character[6] === "*")
            {
                precio7 = "●"
            }
            else {
                precio7 = "-"
            }
        }
        else {
            precio7 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[6])
        }

        if(data.Print_Character[7] !== null)
        {
            if(data.Print_Character[7] === "*")
            {
                precio8 = "●"
            }
            else {
                precio8 = "-"
            }
        }
        else {
            precio8 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[7])
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
            {text: precio7, style: 'textotabla', alignment: 'center'},
            {text: precio8, style: 'textotabla', alignment: 'center'}
        ]

        pSItems++

        //console.log(data)

        if(j >= patientSiderail.length)
        {
            patientSiderailFlag = true
        }
        i++
    }   
    
    options[pSItems] = [
        {text: 'Mobility', style: 'textotablabold', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]},
    ]

    pSItems ++

    i=0;
    var mobilityFlag = false
    while(mobilityFlag === false)
    {
        var j;
        if(i===0)
        {
            j=0
        }
        else {
            j = i*8
        }
        var precios = []
        var preciosCount = 0
        var countC=0
        var printCaracter = []
        while(j< mobility.length && countC<8)
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
        var precio4;
        var precio5;
        var precio6;
        var precio7;
        var precio8;

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

        if(data.Print_Character[6] !== null)
        {
            if(data.Print_Character[6] === "*")
            {
                precio7 = "●"
            }
            else {
                precio7 = "-"
            }
        }
        else {
            precio7 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[6])
        }

        if(data.Print_Character[7] !== null)
        {
            if(data.Print_Character[7] === "*")
            {
                precio8 = "●"
            }
            else {
                precio8 = "-"
            }
        }
        else {
            precio8 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[7])
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
            {text: precio7, style: 'textotabla', alignment: 'center'},
            {text: precio8, style: 'textotabla', alignment: 'center'}
        ]

        pSItems++

        //console.log(data)

        if(j >= mobility.length)
        {
            mobilityFlag = true
        }
        i++
    }   

    options[pSItems] = [
        {text: 'Permanent IV Pole', style: 'textotablabold', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]},
    ]

    pSItems++

    i=0;
    var permanentPoleFlag = false
    while(permanentPoleFlag === false)
    {
        var j;
        if(i===0)
        {
            j=0
        }
        else {
            j = i*8
        }
        var precios = []
        var preciosCount = 0
        var countC=0
        var printCaracter = []
        while(j< permanentPole.length && countC<8)
        {
           precios[preciosCount] = permanentPole[j].Price
           printCaracter[preciosCount] = permanentPole[j].Print_Character
           preciosCount++
           j++
           countC++
        }
        var data = {
            Id_Item: permanentPole[j-1].Id_Item,
            Item_Long_Desc: permanentPole[j-1].Item_Long_Desc,
            Prices: precios,
            Print_Character: printCaracter
        }

        var precio1;
        var precio2;
        var precio3;
        var precio4;
        var precio5;
        var precio6;
        var precio7;
        var precio8;

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

        if(data.Print_Character[6] !== null)
        {
            if(data.Print_Character[6] === "*")
            {
                precio7 = "●"
            }
            else {
                precio7 = "-"
            }
        }
        else {
            precio7 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[6])
        }

        if(data.Print_Character[7] !== null)
        {
            if(data.Print_Character[7] === "*")
            {
                precio8 = "●"
            }
            else {
                precio8 = "-"
            }
        }
        else {
            precio8 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[7])
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
            {text: precio7, style: 'textotabla', alignment: 'center'},
            {text: precio8, style: 'textotabla', alignment: 'center'}
        ]

        pSItems++

        //console.log(data)

        if(j >= permanentPole.length)
        {
            permanentPoleFlag = true
        }
        i++
    }   

    options[pSItems] = [
        {text: 'Transport Shelf', style: 'textotablabold', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]},
    ]

    pSItems++

    i=0;
    var transportShelfFlag = false
    while(transportShelfFlag === false)
    {
        var j;
        if(i===0)
        {
            j=0
        }
        else {
            j = i*8
        }
        var precios = []
        var preciosCount = 0
        var countC=0
        var printCaracter = []
        while(j< transportShelf.length && countC<8)
        {
           precios[preciosCount] = transportShelf[j].Price
           printCaracter[preciosCount] = transportShelf[j].Print_Character
           preciosCount++
           j++
           countC++
        }
        var data = {
            Id_Item: transportShelf[j-1].Id_Item,
            Item_Long_Desc: transportShelf[j-1].Item_Long_Desc,
            Prices: precios,
            Print_Character: printCaracter
        }

        var precio1;
        var precio2;
        var precio3;
        var precio4;
        var precio5;
        var precio6;
        var precio7;
        var precio8;

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

        if(data.Print_Character[6] !== null)
        {
            if(data.Print_Character[6] === "*")
            {
                precio7 = "●"
            }
            else {
                precio7 = "-"
            }
        }
        else {
            precio7 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[6])
        }

        if(data.Print_Character[7] !== null)
        {
            if(data.Print_Character[7] === "*")
            {
                precio8 = "●"
            }
            else {
                precio8 = "-"
            }
        }
        else {
            precio8 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[7])
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
            {text: precio7, style: 'textotabla', alignment: 'center'},
            {text: precio8, style: 'textotabla', alignment: 'center'}
        ]

        pSItems++

        //console.log(data)

        if(j >= transportShelf.length)
        {
            transportShelfFlag = true
        }
        i++
    }  

    var surfaces = []
    pSItems = 0

    surfaces[pSItems] = [
        {text: "SURFACES", style: 'textotablabold', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    surfaces[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'PART #', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
    ]

    pSItems++

    surfaces[pSItems] = [
        {text: "Accumax Surfaces", style: 'textotablabold', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

     /*ESTO VA EN UN CICLO*/
    
    for(var i=0; i<accumaxSurfaces.length; i++)
    {
        surfaces[pSItems] = [
            {text: accumaxSurfaces[i].KitName, style: 'textotabla', alignment: 'center'},
            {text: accumaxSurfaces[i].Item_Long_Desc, style: 'textotabla'},
            {text: accumaxSurfaces[i].Part, style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(accumaxSurfaces[i].Price), style: 'textotabla', alignment: 'center'}, 
        ]
    
        pSItems++
    }
    /*TERMINA CICLO*/

    surfaces[pSItems] = [
        {text: "Therapy Integrated Surfaces (Royal Blue)", style: 'textotablabold', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<therapyIntegrated.length; i++)
    {
        surfaces[pSItems] = [
            {text: therapyIntegrated[i].KitName, style: 'textotabla', alignment: 'center'},
            {text: therapyIntegrated[i].Item_Long_Desc, style: 'textotabla'},
            {text: therapyIntegrated[i].Part, style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(therapyIntegrated[i].Price), style: 'textotabla', alignment: 'center'}, 
        ]
    
        pSItems++
    }
    /*TERMINA CICLO*/

    surfaces[pSItems] = [
        {text: "Pulmonary Integrated Surfaces (Raspberry)", style: 'textotablabold', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<pulmonaryIntegrated.length; i++)
    {
        surfaces[pSItems] = [
            {text: pulmonaryIntegrated[i].KitName, style: 'textotabla', alignment: 'center'},
            {text: pulmonaryIntegrated[i].Item_Long_Desc, style: 'textotabla'},
            {text: pulmonaryIntegrated[i].Part, style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(pulmonaryIntegrated[i].Price), style: 'textotabla', alignment: 'center'}, 
        ]
    
        pSItems++
    }
    /*TERMINA CICLO*/

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

    const fecha = new Date();
    fecha.toLocaleDateString()

    var progressa = [
        "\n",
        "\n",
        "\n",
        { text: 'Hospital Beds - Critical Care/ICU', style: 'header' },
            '\n',
        { text: 'Progressa™ Bed System\n', style: 'subheader', tocItem: 'progressa' },
        { text: 'Country of origin: USA\n', style: 'parrafo' },
        { text: '\n', style: 'parrafo' },
        { text:'Standard features:\n', style: 'textosubrayado', decoration: 'underline'},
        {
            columns: [
                {
                    style:'textolista',
                    ul: [
                        { text: 'FlexAfoot™ Retractable Foot Control'},
                        { text: '30/45 Degree Head of Bed Alarm'},
                        { text: 'In-Bed Scale'},
                        { text: 'Three Mode Bed Exit Alarm (PPM)'},
                        { text: 'Standard Head and Foot Panel'},
                        { text: 'Night Light'},
                        { text: 'Hands Free Emergency CPR, Trendelenburg'}
                        ]
                },
                {
                    style:'textolista',
                    ul: [
                        { text: 'Caregiver Pendant'},
                        { text: 'Obstacle Detect System at Both Sides of the Bed'},
                        { text: 'Drainage Bag Holders'},
                        { text: 'Four IV Sockets'},
                        { text: 'Patient Controls Backlighting'},
                        { text: 'Bed Controls'},
                        ]				
                },
                {
                    style:'textolista',
                    ul: [
                        { text: 'Line Managers'},
                        { text: 'Oxygen Tank Holder Module'},
                        { text: 'Both Siderails with Point-of-Care Touch Screen'},
                        { text: '6" Urethane Central Locking Caster System'},
                        { text: 'Maximum Patient Weight: 500 lbs'},
                        { text: 'Safe Working Load: 650 lbs'},
                        ]				
                },
            ]
        },
        "\n",
        {
            columns: [
                {
                    width: 50,
                    text: ''
                },
                {
                    width: "*",
                    table: {
                        body: [
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'PROGRESSA', style: 'textotablacolor', colSpan: 8, fillColor: '#546ce4',  alignment: 'center'},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                            ],
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'P7500', style: 'textotablaboldblack', colSpan: 8, alignment: 'center'},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                            ],
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'PRO-885', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                                {text: 'PRO-875', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                                {text: 'PRO-800', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                                {text: 'PRO-585', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                                {text: 'PRO-555', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                                {text: 'PRO-285', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                                {text: 'PRO-255', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                                {text: 'PRO-205', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                            ],
                            [
                                {text: 'Pulmonary Surface (Powered Air)', style: 'textotabla'},
                                {text: '●', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'},
                            ],
                            [
                                {text: 'Therapy Surface (Powered Air)', style: 'textotabla'},
                                {text: '-', style: 'textotabla', alignment: 'center'},
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'},
                            ],
                            [
                                {text: 'Prevention Surface (Non-powered Air)', style: 'textotabla'},
                                {text: '-', style: 'textotabla', alignment: 'center'},
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '●', style: 'textotabla', alignment: 'center'},
                            ],
                            [
                                {text: 'Chair Egress Frame Design', style: 'textotabla'},
                                {text: '●', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'},
                            ],
                            [
                                {text: 'Dining Chair Frame Design', style: 'textotabla'},
                                {text: '-', style: 'textotabla', alignment: 'center'},
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '●', style: 'textotabla', alignment: 'center'},
                            ],
                            [
                                {text: 'StayInPlace Patient Migration Management System', style: 'textotabla'},
                                {text: '●', style: 'textotabla', alignment: 'center'},
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'},
                            ],
                            [
                                {text: 'Rotation (permanently installed)', style: 'textotabla'},
                                {text: '●', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'},
                            ],
                            [
                                {text: 'Percussion/Vibration (permanently installed)', style: 'textotabla'},
                                {text: '●', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
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
                                {text: "$" + Intl.NumberFormat("en-IN").format(prices[5].Price), style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                                {text: "$" + Intl.NumberFormat("en-IN").format(prices[6].Price), style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                                {text: "$" + Intl.NumberFormat("en-IN").format(prices[7].Price), style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
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
        {
            columns: [
                [
                    { image: "images/1.png", width: 120, height: 120, alignment: 'center'},
                    { text: 'Hands Free Emergency CPR', style: 'textolista', alignment: 'center'}
                ],
                [
                    { image: "images/2.png", width: 120, height: 120, alignment: 'center'},
                    { text: 'Hands Free Emergency CPR', style: 'textolista', alignment: 'center'}
                ],
                [
                    { image: "images/3.png", width: 120, height: 120, alignment: 'center'},
                    { text: 'Hands Free Emergency CPR', style: 'textolista', alignment: 'center'}
                ],
            ]
        },
        {text: '', pageBreak: 'after'  },
        "\n",
        "\n",
        "\n",
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
        },
        { text: '\n', style: 'parrafo' },
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
        },
        {text: '', pageBreak: 'after'  },
    ]

    return progressa;
}

module.exports = {
    getProgressa : getProgressa,
}