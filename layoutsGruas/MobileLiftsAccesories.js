const dbMobileLiftAccesories = require('../controllers/mobileliftaccesories')

async function getMobileLiftAccesories()
{
    const res = await dbMobileLiftAccesories.getMobileLiftAccesories()
    const salida1 = res[0]
    const salida2 = res[1]
    const salida3  = res[2]
    const salida4 = res[3]
    const salida5 = res[4]
    const salida6 = res[5]
    const salida7 = res[6]
    const salida8 = res[7]
    const salida9 = res[8]
    const salida10 = res[9]

    var accesories = []
    var pSItems = 0

    /*ESTO VA EN UN CICLO*/
    /*for(var i=0; i<accesoriesData.length; i++)
    {
        accesories[pSItems] = [
            {text: accesoriesData[i].KitName, style: 'textotabla', alignment: 'center'},
            {text: accesoriesData[i].Item_Long_Desc, style: 'textotabla'},
            {text: accesoriesData[i].Part, style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(accesoriesData[i].Price), style: 'textotabla', alignment: 'center'}, 
        ]
    
        pSItems++
    }*/
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida1.length; i++)
    {
        if(i === 0 && salida1.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, true], text: salida1[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida1[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/MobileLift.png", width: 50, height: 80, alignment: 'center', rowSpan: salida1.length + 1},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida1[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++

            accesories[pSItems] =[
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: salida1[i].Specifications, style: 'textotabla'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida1[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida1[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/MobileLift.png", width: 50, height: 80, alignment: 'center', rowSpan: salida1.length + 1},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida1[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida1.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida1[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida1[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida1[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++

            accesories[pSItems] =[
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: salida1[i].Specifications, style: 'textotabla'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: ""},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida1[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida1[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida1[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    for(var i=0; i<salida8.length; i++)
    {
        if(i === 0 && salida8.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida8[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida8[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/MobileLift7.png", width: 30, height: 40, alignment: 'center', rowSpan: salida8.length+1},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida8[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++

            accesories[pSItems] =[
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: salida8[i].Specifications, style: 'textotabla'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: ""},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida8[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida8[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/MobileLift7.png", width: 30, height: 40, alignment: 'center', rowSpan: salida8.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida8[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++

            accesories[pSItems] =[
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
            ]
        
            pSItems++
        }
        else if(i === salida8.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida8[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida8[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida8[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++

            accesories[pSItems] =[
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: salida8[i].Specifications, style: 'textotabla'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: ""},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida8[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida8[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida8[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++

            accesories[pSItems] =[
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
            ]
        
            pSItems++
        }
        
    }

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida2.length; i++)
    {
        if(i === 0 && salida2.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida2[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida2[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, false], image: "images/MobileLift1-1.png", width: 50, height: 80, alignment: 'center', rowSpan: salida2.length+1},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida2[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++

            accesories[pSItems] =[
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: salida2[i].Specifications, style: 'textotabla'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida2[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida2[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, false], image: "images/MobileLift1-1.png", width: 50, height: 80, alignment: 'center', rowSpan: salida2.length+1},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida2[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida2.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida2[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida2[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida2[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++

            accesories[pSItems] =[
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: salida2[i].Specifications, style: 'textotabla'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: ""},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida2[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida2[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida2[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida3.length; i++)
    {
        if(i === 0 && salida3.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida3[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida3[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, false], image: "images/MobileLift1.png", width: 50, height: 80, alignment: 'center', rowSpan: salida3.length+1},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++

            accesories[pSItems] =[
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: salida3[i].Specifications, style: 'textotabla'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida3[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida3[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/MobileLift1.png", width: 50, height: 80, alignment: 'center', rowSpan: salida3.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++

            accesories[pSItems] =[
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
            ]
        
            pSItems++
        }
        else if(i === salida3.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida3[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida3[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++

            accesories[pSItems] =[
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: salida3[i].Specifications, style: 'textotabla'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: ""},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida3[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida3[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++

            accesories[pSItems] =[
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida4.length; i++)
    {
        if(i === 0 && salida4.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida4[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida4[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, false], image: "images/MobileLift2.png", width: 60, height: 30, alignment: 'center', rowSpan: salida4.length+1},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida4[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++

            accesories[pSItems] =[
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: salida4[i].Specifications, style: 'textotabla'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: ""},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida4[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida4[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/MobileLift2.png", width: 60, height: 30, alignment: 'center', rowSpan: salida4.length+1},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida4[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++

            accesories[pSItems] =[
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
            ]
        
            pSItems++
        }
        else if(i === salida4.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida4[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida4[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida4[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++

            accesories[pSItems] =[
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: salida4[i].Specifications, style: 'textotabla'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: ""},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida4[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida4[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida4[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++

            accesories[pSItems] =[
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida5.length; i++)
    {
        if(i === 0 && salida5.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida5[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida5[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, false], image: "images/MobileLift3.png", width: 60, height: 30, alignment: 'center', rowSpan: salida5.length+1},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++

            accesories[pSItems] =[
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: salida5[i].Specifications, style: 'textotabla'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: ""},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida5[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida5[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/MobileLift3.png", width: 60, height: 30, alignment: 'center', rowSpan: salida5.length+1},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++

            accesories[pSItems] =[
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
            ]
        
            pSItems++
        }
        else if(i === salida5.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida5[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida5[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++

            accesories[pSItems] =[
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: salida5[i].Specifications, style: 'textotabla'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: ""},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida5[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida5[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++

            accesories[pSItems] =[
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida6.length; i++)
    {
        if(i === 0 && salida6.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida6[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida6[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, false], image: "images/MobileLift4.png", width: 60, height: 50, alignment: 'center', rowSpan: salida6.length+1},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++

            accesories[pSItems] =[
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: salida6[i].Specifications, style: 'textotabla'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida6[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida6[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/MobileLift4.png", width: 60, height: 50, alignment: 'center', rowSpan: salida6.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++

            accesories[pSItems] =[
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
            ]
        
            pSItems++
        }
        else if(i === salida6.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida6[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida6[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++

            accesories[pSItems] =[
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: salida6[i].Specifications, style: 'textotabla'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: ""},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida6[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida6[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++

            accesories[pSItems] =[
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida7.length; i++)
    {
        if(i === 0 && salida7.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida7[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida7[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/MobileLift5.png", width: 60, height: 50, alignment: 'center', rowSpan: salida7.length+1},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida7[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++

            accesories[pSItems] =[
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: salida7[i].Specifications, style: 'textotabla'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: ""},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida7[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida7[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/MobileLift5.png", width: 60, height: 50, alignment: 'center', rowSpan: salida7.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida7[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++

            accesories[pSItems] =[
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
            ]
        
            pSItems++
        }
        else if(i === salida7.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida7[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida7[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida7[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++

            accesories[pSItems] =[
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: salida7[i].Specifications, style: 'textotabla'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: ""},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida7[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida7[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida7[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++

            accesories[pSItems] =[
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

     /*ESTO VA EN UN CICLO*/
     for(var i=0; i<salida9.length; i++)
     {
         if(i === 0 && salida9.length === 1)
         {
             accesories[pSItems] =[
                 {border: [true, true, true, false], text: salida9[i].Part, style: 'textotabla'},
                 {border: [true, true, true, false], text: salida9[i].Item_Long_Desc, style: 'textotablaboldblack'},
                 {border: [true, true, true, true], image: "images/MobileLift8.png", width: 60, height: 40, alignment: 'center', rowSpan: salida9.length+1},
                 {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida9[i].Price), style: 'textotabla', alignment: 'center'},
             ]
         
             pSItems++
 
             accesories[pSItems] =[
                 {border: [true, false, true, true], text: ""},
                 {border: [true, false, true, true], text: salida9[i].Specifications, style: 'textotabla'},
                 {border: [true, false, true, true], text: ""},
                 {border: [true, false, true, true], text: ""},
             ]
         
             pSItems++
         }
         else if(i === 0)
         {
             accesories[pSItems] =[
                 {border: [true, true, true, false], text: salida9[i].Part, style: 'textotabla'},
                 {border: [true, true, true, false], text: salida9[i].Item_Long_Desc, style: 'textotablaboldblack'},
                 {border: [true, true, true, true], image: "images/MobileLift8.png", width: 60, height: 40, alignment: 'center', rowSpan: salida9.length},
                 {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida9[i].Price), style: 'textotabla', alignment: 'center'},
             ]
         
             pSItems++
 
             accesories[pSItems] =[
                 {border: [true, false, true, false], text: ""},
                 {border: [true, false, true, false], text: ""},
                 {border: [true, false, true, false], text: ""},
                 {border: [true, false, true, false], text: ""},
             ]
         
             pSItems++
         }
         else if(i === salida9.length-1)
         {
             accesories[pSItems] =[
                 {border: [true, false, true, false], text: salida9[i].Part, style: 'textotabla'},
                 {border: [true, false, true, false], text: salida9[i].Item_Long_Desc, style: 'textotablaboldblack'},
                 {border: [true, false, true, false], text: ""},
                 {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida9[i].Price), style: 'textotabla', alignment: 'center'},
             ]
         
             pSItems++
 
             accesories[pSItems] =[
                 {border: [true, false, true, true], text: ""},
                 {border: [true, false, true, true], text: salida9[i].Specifications, style: 'textotabla'},
                 {border: [true, false, true, true], text: ""},
                 {border: [true, false, true, true], text: ""},
             ]
         
             pSItems++
         }
         else {
             accesories[pSItems] =[
                 {border: [true, false, true, false], text: salida9[i].Part, style: 'textotabla'},
                 {border: [true, false, true, false], text: salida9[i].Item_Long_Desc, style: 'textotablaboldblack'},
                 {border: [true, false, true, false], text: ""},
                 {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida9[i].Price), style: 'textotabla', alignment: 'center'},
             ]
         
             pSItems++
 
             accesories[pSItems] =[
                 {border: [true, false, true, false], text: ""},
                 {border: [true, false, true, false], text: ""},
                 {border: [true, false, true, false], text: ""},
                 {border: [true, false, true, false], text: ""},
             ]
         
             pSItems++
         }
         
     }
     /*TERMINA CICLO*/

     /*ESTO VA EN UN CICLO*/
     for(var i=0; i<salida10.length; i++)
     {
         if(i === 0 && salida10.length === 1)
         {
             accesories[pSItems] =[
                 {border: [true, true, true, false], text: salida10[i].Part, style: 'textotabla'},
                 {border: [true, true, true, false], text: salida10[i].Item_Long_Desc, style: 'textotablaboldblack'},
                 {border: [true, true, true, true], image: "images/MobileLift9.png", width: 60, height: 40, alignment: 'center', rowSpan: salida10.length+1},
                 {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida10[i].Price), style: 'textotabla', alignment: 'center'},
             ]
         
             pSItems++
 
             accesories[pSItems] =[
                 {border: [true, false, true, true], text: ""},
                 {border: [true, false, true, true], text: salida10[i].Specifications, style: 'textotabla'},
                 {border: [true, false, true, true], text: ""},
                 {border: [true, false, true, true], text: ""},
             ]
         
             pSItems++
         }
         else if(i === 0)
         {
             accesories[pSItems] =[
                 {border: [true, true, true, false], text: salida10[i].Part, style: 'textotabla'},
                 {border: [true, true, true, false], text: salida10[i].Item_Long_Desc, style: 'textotablaboldblack'},
                 {border: [true, true, true, true], image: "images/MobileLift9.png", width: 60, height: 40, alignment: 'center', rowSpan: salida10.length},
                 {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida10[i].Price), style: 'textotabla', alignment: 'center'},
             ]
         
             pSItems++
 
             accesories[pSItems] =[
                 {border: [true, false, true, false], text: ""},
                 {border: [true, false, true, false], text: ""},
                 {border: [true, false, true, false], text: ""},
                 {border: [true, false, true, false], text: ""},
             ]
         
             pSItems++
         }
         else if(i === salida10.length-1)
         {
             accesories[pSItems] =[
                 {border: [true, false, true, false], text: salida10[i].Part, style: 'textotabla'},
                 {border: [true, false, true, false], text: salida10[i].Item_Long_Desc, style: 'textotablaboldblack'},
                 {border: [true, false, true, false], text: ""},
                 {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida10[i].Price), style: 'textotabla', alignment: 'center'},
             ]
         
             pSItems++
 
             accesories[pSItems] =[
                 {border: [true, false, true, true], text: ""},
                 {border: [true, false, true, true], text: salida10[i].Specifications, style: 'textotabla'},
                 {border: [true, false, true, true], text: ""},
                 {border: [true, false, true, true], text: ""},
             ]
         
             pSItems++
         }
         else {
             accesories[pSItems] =[
                 {border: [true, false, true, false], text: salida10[i].Part, style: 'textotabla'},
                 {border: [true, false, true, false], text: salida10[i].Item_Long_Desc, style: 'textotablaboldblack'},
                 {border: [true, false, true, false], text: ""},
                 {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida10[i].Price), style: 'textotabla', alignment: 'center'},
             ]
         
             pSItems++
 
             accesories[pSItems] =[
                 {border: [true, false, true, false], text: ""},
                 {border: [true, false, true, false], text: ""},
                 {border: [true, false, true, false], text: ""},
                 {border: [true, false, true, false], text: ""},
             ]
         
             pSItems++
         }
         
     }
     /*TERMINA CICLO*/

    const fecha = new Date();
    fecha.toLocaleDateString()

    var mobileLiftAccesories = [
        "\n",
        "\n",
        "\n",
        { text: 'MOBILE LIFTS - ACCESSORIES', style: 'header' },
        "\n",
        {
            table: {
                widths: ["*"],
                body: [
                    [
                        {text:[
                            {text: 'Mobile Lifts Accessories', style: 'textotablacolorlarge'},
                            {text: "Accesories for Mobile Lifts", tocItem: "accesoriesmobilelifts", style: {fontSize: 0}}
                        ] , fillColor: '#5bbccc',  alignment: 'center'},
                    ]
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
            table: {
                widths: [80, "*", 60],
                body: [
                    [
                        {border: [true, false, true, false], text: 'KITNAME', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                        {border: [true, false, true, false], text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                        {border: [true, false, true, false], text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                    ]
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
            table: {
                widths: [80, "*", 80, 60],
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

    return mobileLiftAccesories;
}

module.exports = {
    getMobileLiftAccesories : getMobileLiftAccesories,
}