const dbSabina = require('../controllers/sabina')

var ruta = "/Users/alexishernandezolvera/Desktop/GTC/PROYECTOS/hillrom-pdf-layouts/"

async function getSabina()
{
    const res = await dbSabina.getSabina()
    const salida1 = res[0]
    const salida2 = res[1]
    const salida3  = res[2]
    const salida4  = res[3]
    const salida5  = res[4]
    const salida6  = res[5]
    const salida7  = res[6]
    const salida8  = res[7]
    const salida9  = res[8]
    const salida10  = res[9]
    const salida11 = res[10]
    const salida12  = res[11]
    const salida13  = res[12]
    const salida14  = res[13]

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
    for(var i=0; i<salida3.length; i++)
    {
        if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida3[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida3[i].Item_Long_Desc, style: 'textotabla'},
                {border: [true, false, true, false], image: "images/Sabina2.png", width: 30, height: 60, alignment: 'center', rowSpan: 5},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida3[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida3[i].Item_Long_Desc, style: 'textotabla'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] =[
        {text: salida4[0].Part, style: 'textotabla'},
        {text: salida4[0].Item_Long_Desc, style: 'textotabla'},
        {text: ""},
        {text: "$" + Intl.NumberFormat("en-IN").format(salida4[0].Price), style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    //console.log((salida4[0].Item_Long_Desc).length)

    /*ESTO VA EN UN CICLO*/
    for(var i = 0; i< salida5.length; i++)
    {
        //Para cortar cadena en 2
        var cadena1 = "";
        var cadena2 = "";
        var guion;
        for(var j = 0; j < (salida5[i].Item_Long_Desc).length; j++)
        {
            if((salida5[i].Item_Long_Desc).charAt(j) !== "-")
            {
                cadena1 = cadena1 + (salida5[i].Item_Long_Desc).charAt(j)
            }
            else 
            {
                guion = j
                j = (salida5[i].Item_Long_Desc).length
            }
        }
        for(var k = guion + 2; k < (salida5[i].Item_Long_Desc).length; k++ )
        {
            cadena2 = cadena2 + (salida5[i].Item_Long_Desc).charAt(k)
        }
        //console.log(cadena1)
        //console.log(cadena2)

        if(i === 0)
        {
            accesories[pSItems] =[
                {text: salida5[i].Part, style: 'textotabla'},
                {text: [
                    {text: cadena1 + "\n", style: "textotablaboldblack"},
                    {text: cadena2, style: "textotabla"}
                ]},
                {image: "images/Sabina3.png", width: 40, height: 30, alignment: 'center'},
                {text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {text: salida5[i].Part, style: 'textotabla'},
                {text: [
                    {text: cadena1 + "\n", style: "textotablaboldblack"},
                    {text: cadena2, style: "textotabla"}
                ]},
                {},
                {text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    for(var i = 0; i< salida6.length; i++)
    {
        //Para cortar cadena en 2
        var cadena1 = "";
        var cadena2 = "";
        var guion;
        for(var j = 0; j < (salida6[i].Item_Long_Desc).length; j++)
        {
            if((salida6[i].Item_Long_Desc).charAt(j) !== "-")
            {
                cadena1 = cadena1 + (salida6[i].Item_Long_Desc).charAt(j)
            }
            else 
            {
                guion = j
                j = (salida6[i].Item_Long_Desc).length
            }
        }
        for(var k = guion + 2; k < (salida6[i].Item_Long_Desc).length; k++ )
        {
            cadena2 = cadena2 + (salida6[i].Item_Long_Desc).charAt(k)
        }
        //console.log(cadena1)
        //console.log(cadena2)

        if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida6[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: [
                    {text: cadena1 + "\n", style: "textotablaboldblack"},
                    {text: cadena2, style: "textotabla"}
                ]},
                {border: [true, true, true, false], image: "images/Sabina4.png", width: 30, height: 20, alignment: 'center', rowSpan: 2},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++

            accesories[pSItems] =[
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: ""},
            ]
        
            pSItems++
        }
        else if(i===1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida6[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: [
                    {text: cadena1 + "\n", style: "textotablaboldblack"},
                    {text: cadena2, style: "textotabla"}
                ]},
                {border: [true, true, true, false], image: "images/Sabina4-2.png", width: 30, height: 30, alignment: 'center', rowSpan: 2},
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
        else {
            //console.log("SI ENTRE")
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida6[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: [
                    {text: cadena1 + "\n", style: "textotablaboldblack"},
                    {text: cadena2, style: "textotabla"}
                ]},
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
    for(var i = 0; i< salida7.length; i++)
    {
        //Para cortar cadena en 2
        var cadena1 = "";
        var cadena2 = "";
        var guion;
        for(var j = 0; j < (salida7[i].Item_Long_Desc).length; j++)
        {
            if((salida7[i].Item_Long_Desc).charAt(j) !== "-")
            {
                cadena1 = cadena1 + (salida7[i].Item_Long_Desc).charAt(j)
            }
            else 
            {
                guion = j
                j = (salida7[i].Item_Long_Desc).length
            }
        }
        for(var k = guion + 2; k < (salida7[i].Item_Long_Desc).length; k++ )
        {
            cadena2 = cadena2 + (salida7[i].Item_Long_Desc).charAt(k)
        }
        //console.log(cadena1)
        //console.log(cadena2)

        if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida7[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: [
                    {text: cadena1 + "\n", style: "textotablaboldblack"},
                    {text: cadena2, style: "textotabla"}
                ]},
                {border: [true, true, true, false], image: "images/Sabina5.png", width: 50, height: 30, alignment: 'center', rowSpan: salida7.length*2},
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
        else {
            //console.log("SI ENTRE")
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida7[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: [
                    {text: cadena1 + "\n", style: "textotablaboldblack"},
                    {text: cadena2, style: "textotabla"}
                ]},
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
    for(var i = 0; i< salida8.length; i++)
    {
        //Para cortar cadena en 2
        var cadena1 = "";
        var cadena2 = "";
        var guion;
        for(var j = 0; j < (salida8[i].Item_Long_Desc).length; j++)
        {
            if((salida8[i].Item_Long_Desc).charAt(j) !== "-")
            {
                cadena1 = cadena1 + (salida8[i].Item_Long_Desc).charAt(j)
            }
            else 
            {
                guion = j
                j = (salida8[i].Item_Long_Desc).length
            }
        }
        for(var k = guion + 2; k < (salida8[i].Item_Long_Desc).length; k++ )
        {
            cadena2 = cadena2 + (salida8[i].Item_Long_Desc).charAt(k)
        }
        //console.log(cadena1)
        //console.log(cadena2)

        if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida8[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: [
                    {text: cadena1 + "\n", style: "textotablaboldblack"},
                    {text: cadena2, style: "textotabla"}
                ]},
                {border: [true, true, true, false], image: "images/Sabina6.png", width: 50, height: 30, alignment: 'center', rowSpan: salida8.length*2},
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
        else {
            //console.log("SI ENTRE")
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida8[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: [
                    {text: cadena1 + "\n", style: "textotablaboldblack"},
                    {text: cadena2, style: "textotabla"}
                ]},
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
    /*TERMINA CICLO*/

    accesories[pSItems] =[
        {text: [
            {text: 'SUPPORT VEST MOD 91', style: "textotablaboldblack"},
            {text: 'Support Vest Mod 91', style: {fontSize: 0}, tocItem: "safetyvestmod91"},
        ], fillColor: '#dbdbdb', colSpan: 4},
        {},
        {},
        {},
    ]
    pSItems++

    /*ESTO VA EN UN CICLO*/
    for(var i = 0; i< salida9.length; i++)
    {
        if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida9[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: [
                    {text: salida9[i].Item_Long_Desc, style: "textotabla"},
                ]},
                {border: [true, true, true, false], image: "images/Sabina7.png", width: 60, height: 50, alignment: 'center', rowSpan: salida9.length*2},
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
        else {
            //console.log("SI ENTRE")
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida9[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: [
                    {text: salida9[i].Item_Long_Desc, style: "textotabla"},
                ]},
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
    for(var i = 0; i< salida10.length; i++)
    {
        if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida10[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: [
                    {text: salida10[i].Item_Long_Desc, style: "textotabla"},
                ]},
                {border: [true, true, true, false], image: "images/Sabina8.png", width: 60, height: 20, alignment: 'center', rowSpan: salida10.length*2},
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
        else {
            //console.log("SI ENTRE")
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida10[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: [
                    {text: salida10[i].Item_Long_Desc, style: "textotabla"},
                ]},
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

    /*ESTO VA EN UN CICLO*/
    for(var i = 0; i< salida11.length; i++)
    {
        if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida11[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: [
                    {text: salida11[i].Item_Long_Desc, style: "textotabla"},
                ]},
                {border: [true, true, true, true], image: "images/Sabina9.png", width: 60, height: 30, alignment: 'center', rowSpan: salida11.length*2},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida11[i].Price), style: 'textotabla', alignment: 'center'},
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
        else if(i === salida11.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida11[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: [
                    {text: salida11[i].Item_Long_Desc, style: "textotabla"},
                ]},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida11[i].Price), style: 'textotabla', alignment: 'center'},
            ]
            pSItems++

            accesories[pSItems] =[
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: ""},
            ]
        
            pSItems++
        }
        else {
            //console.log("SI ENTRE")
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida11[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: [
                    {text: salida11[i].Item_Long_Desc, style: "textotabla"},
                ]},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida11[i].Price), style: 'textotabla', alignment: 'center'},
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

    var accesories2 = []
    var pSItems = 0

    accesories2[pSItems] =[
        {text: [
            {text: 'SAFETY VEST MOD 93', style: "textotablaboldblack"},
            {text: 'Support Vest Mod 93', style: {fontSize: 0}, tocItem: "safetyvestmod93"},
        ], fillColor: '#dbdbdb', colSpan: 4,},
        {},
        {},
        {},
    ]
    pSItems++

    /*ESTO VA EN UN CICLO*/
    for(var i = 0; i< salida12.length; i++)
    {
        if(i === 0)
        {
            accesories2[pSItems] =[
                {border: [true, true, true, false], text: salida12[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: [
                    {text: salida12[i].Item_Long_Desc, style: "textotabla"},
                ]},
                {border: [true, true, true, true], image: "images/Sabina10.png", width: 60, height: 50, alignment: 'center', rowSpan: salida12.length*2},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida12[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++

            accesories2[pSItems] =[
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
            ]
        
            pSItems++
        }
        else if(i === salida12.length-1)
        {
            accesories2[pSItems] =[
                {border: [true, false, true, false], text: salida12[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: [
                    {text: salida11[i].Item_Long_Desc, style: "textotabla"},
                ]},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida12[i].Price), style: 'textotabla', alignment: 'center'},
            ]
            pSItems++

            accesories2[pSItems] =[
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: ""},
            ]
        
            pSItems++
        }
        else {
            accesories2[pSItems] =[
                {border: [true, false, true, false], text: salida12[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: [
                    {text: salida12[i].Item_Long_Desc, style: "textotabla"},
                ]},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida12[i].Price), style: 'textotabla', alignment: 'center'},
            ]
            pSItems++

            accesories2[pSItems] =[
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    accesories2[pSItems] =[
        {text: [
            {text: 'COMFORT VEST MOD 95', style: "textotablaboldblack", },
            {text: 'Comfort Vest Mod 95', style: {fontSize: 0}, tocItem: "confortvestmod95"},
        ], fillColor: '#dbdbdb', colSpan: 4},
        {},
        {},
        {},
    ]
    pSItems++

    /*ESTO VA EN UN CICLO*/
    for(var i = 0; i< salida13.length; i++)
    {
        if(i === 0)
        {
            accesories2[pSItems] =[
                {border: [true, true, true, false], text: salida13[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: [
                    {text: salida13[i].Item_Long_Desc, style: "textotabla"},
                ]},
                {border: [true, true, true, true], image: "images/Sabina11.png", width: 60, height: 50, alignment: 'center', rowSpan: salida13.length*2},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida13[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++

            accesories2[pSItems] =[
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
            ]
        
            pSItems++
        }
        else if(i === salida13.length-1)
        {
            accesories2[pSItems] =[
                {border: [true, false, true, false], text: salida13[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: [
                    {text: salida13[i].Item_Long_Desc, style: "textotabla"},
                ]},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida13[i].Price), style: 'textotabla', alignment: 'center'},
            ]
            pSItems++

            accesories2[pSItems] =[
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: ""},
            ]
        
            pSItems++
        }
        else {
            accesories2[pSItems] =[
                {border: [true, false, true, false], text: salida13[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: [
                    {text: salida13[i].Item_Long_Desc, style: "textotabla"},
                ]},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida13[i].Price), style: 'textotabla', alignment: 'center'},
            ]
            pSItems++

            accesories2[pSItems] =[
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    accesories2[pSItems] =[
        {text: [
            {text: 'SOLO SUPPORT VEST', style: "textotablaboldblack"},
            {text: 'Solo Support Vest', style: {fontSize: 0}, tocItem: "safetyvestmod911"},
        ], fillColor: '#dbdbdb', colSpan: 4},
        {},
        {},
        {},
    ]
    pSItems++

    for(var i = 0; i< salida14.length; i++)
    {
        if(i === 0)
        {
            accesories2[pSItems] =[
                {border: [true, true, true, false], text: salida14[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: [
                    {text: salida14[i].Item_Long_Desc, style: "textotabla"},
                ]},
                {border: [true, true, true, true], image: "images/Sabina12.png", width: 60, height: 60, alignment: 'center', rowSpan: salida14.length*2},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida14[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++

            accesories2[pSItems] =[
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
            ]
        
            pSItems++
        }
        else if(i === salida14.length-1)
        {
            accesories2[pSItems] =[
                {border: [true, false, true, false], text: salida14[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: [
                    {text: salida14[i].Item_Long_Desc, style: "textotabla"},
                ]},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida14[i].Price), style: 'textotabla', alignment: 'center'},
            ]
            pSItems++

            accesories2[pSItems] =[
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: ""},
            ]
        
            pSItems++
        }
        else {
            accesories2[pSItems] =[
                {border: [true, false, true, false], text: salida14[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: [
                    {text: salida14[i].Item_Long_Desc, style: "textotabla"},
                ]},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida14[i].Price), style: 'textotabla', alignment: 'center'},
            ]
            pSItems++

            accesories2[pSItems] =[
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: ""},
            ]
        
            pSItems++
        }
        
    }

    var sabina = [
        "\n",
        "\n",
        "\n",
        {
            table: {
                widths: ["*"],
                body: [
                    [
                        {text: [
                            {text:'SABINA', style: 'textotablacolorlarge' },
                            {text: "Sabina", tocItem: "sabina", style: {fontSize: 0}}
                        ], fillColor: '#5bbccc',  alignment: 'center'},
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
                widths: [80, 70, "*", 80, 60],
                body: [
                    [
                        {text: '\n\n\n\n\n\n\n\n' + salida1[0].KitName, style: 'textotablaboldblack', alignment: 'center', rowSpan: 5},
                        {text: salida1[0].Id_Item, style: 'textotablacatoni'},
                        {text: [
                            {text: salida1[0].Item_Long_Desc + "\n", style: "textotablaboldblack"},
                            {text: salida1[0].Specifications, style: "textotabla"},
                        ]},
                        { image: "images/Sabina1.png", width: 70, height: 70, alignment: 'center'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(salida1[0].Price), style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {},
                        {text: 'Option', style: 'textotablaboldblack', fillColor: '#dbdbdb', colSpan: 4},
                        {}, 
                        {}, 
                        {}, 
                    ],
                    [
                        {},
                        {border: [true, false, true, false], text: salida2[0].Id_Item, style: 'textotabla'},
                        {border: [true, false, true, false], text: salida2[0].Item_Long_Desc, style: 'textotabla'}, 
                        {border: [true, false, true, false], text: ''},
                        {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida2[0].Price), style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {},
                        {border: [true, false, true, false], text: salida2[1].Id_Item, style: 'textotabla'},
                        {border: [true, false, true, false], text: salida2[1].Item_Long_Desc, style: 'textotabla'}, 
                        {border: [true, false, true, false], text: ''},
                        {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida2[1].Price), style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {},
                        {border: [true, false, true, true], text: salida2[2].Id_Item, style: 'textotabla'},
                        {border: [true, false, true, true], text: salida2[2].Item_Long_Desc, style: 'textotabla'}, 
                        {border: [true, false, true, true], text: ''},
                        {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida2[2].Price), style: 'textotabla', alignment: 'center'}, 
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
        {text: "ACCESORIES", style: "textotablaboldlarge"},
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
        "\n",
        "\n",
        "\n",
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
        },
        {text: '', pageBreak: 'after'  },
    ]

    return sabina;
}

module.exports = {
    getSabina : getSabina,
}