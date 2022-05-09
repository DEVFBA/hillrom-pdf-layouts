const dbRailSystem = require('../controllers/railsystem')

async function getAssemblyParts(pdfZone)
{
    const res = await dbRailSystem.getRailSystem(pdfZone)
    const salida21 = res[20]
    const salida22 = res[21]
    const salida23  = res[22]
    const salida24 = res[23]
    const salida25 = res[24]
    const salida26 = res[25]
    const salida27 = res[26]
    const salida28 = res[27]
    const salida29 = res[28]
    const salida30 = res[29]
    const salida31 = res[30]
    const salida32 = res[31]
    const salida33 = res[32]
    const salida34 = res[33]
    const salida35 = res[34]
    const salida36 = res[35]
    const salida37 = res[36]
    const salida38 = res[37]
    const salida39 = res[38]
    const salida40 = res[39]
    const salida41 = res[40]
    const salida42 = res[41]
    const salida43 = res[42]
    const salida44 = res[43]
    const salida45 = res[44]
    const salida46 = res[45]
    const salida47 = res[46]
    const salida48 = res[47]
    const salida49 = res[48]
    const salida50 = res[49]
    const salida51 = res[50]

    var accesories = []
    var pSItems = 0

    if(salida21.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida21.length; i++)
        {
            if(i === 0 && salida21.length === 1)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, true], text: salida21[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida21[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts1.png", width: 60, height: 20, alignment: 'center', rowSpan: salida21.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida21[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida21[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida21[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts1.png", width: 60, height: 20, alignment: 'center', rowSpan: salida21.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida21[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida21.length-1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, true], text: salida21[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida21[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida21[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida21[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida21[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida21[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }

    if(salida22.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida22.length; i++)
        {
            if(i === 0 && salida22.length === 1)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, true], text: salida22[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida22[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts2.png", width: 60, height: 20, alignment: 'center', rowSpan: salida22.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida22[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida22[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida22[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts2.png", width: 60, height: 20, alignment: 'center', rowSpan: salida22.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida22[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida22.length-1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, true], text: salida22[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida22[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida22[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida22[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida22[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida22[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida23.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida23.length; i++)
        {
            if(i === 0 && salida23.length === 1)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, true], text: salida23[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida23[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts3.png", width: 60, height: 20, alignment: 'center', rowSpan: salida23.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida23[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida23[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida23[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts3.png", width: 60, height: 20, alignment: 'center', rowSpan: salida23.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida23[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida23.length-1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, true], text: salida23[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida23[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida23[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida23[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida23[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida23[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida24.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida24.length; i++)
        {
            if(i === 0 && salida24.length === 1)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, true], text: salida24[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida24[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts4.png", width: 40, height: 20, alignment: 'center', rowSpan: salida24.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida24[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida24[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida24[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts4.png", width: 40, height: 20, alignment: 'center', rowSpan: salida24.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida24[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida24.length-1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, true], text: salida24[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida24[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida24[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida24[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida24[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida24[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida25.length > 0)
    {
         /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida25.length; i++)
        {
            if(i === 0 && salida25.length === 1)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, true], text: salida25[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida25[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts5.png", width: 40, height: 20, alignment: 'center', rowSpan: salida25.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida25[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida25[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida25[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts5.png", width: 40, height: 20, alignment: 'center', rowSpan: salida25.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida25[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida25.length-1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, true], text: salida25[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida25[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida25[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida25[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida25[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida25[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida26.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida26.length; i++)
        {
            if(i === 0 && salida26.length === 1)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, true], text: salida26[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida26[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts6.png", width: 40, height: 40, alignment: 'center', rowSpan: salida26.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida26[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida26[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida26[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts6.png", width: 40, height: 40, alignment: 'center', rowSpan: salida26.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida26[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida26.length-1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, true], text: salida26[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida26[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida26[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida26[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida26[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida26[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida27.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida27.length; i++)
        {
            if(i === 0 && salida27.length === 1)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, true], text: salida27[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida27[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts7.png", width: 35, height: 60, alignment: 'center', rowSpan: salida27.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida27[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida27[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida27[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts7.png", width: 35, height: 60, alignment: 'center', rowSpan: salida27.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida27[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida27.length-1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, true], text: salida27[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida27[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida27[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida27[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida27[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida27[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
     
    if(salida28.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida28.length; i++)
        {
            if(i === 0 && salida28.length === 1)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, true], text: salida28[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida28[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts8.png", width: 35, height: 60, alignment: 'center', rowSpan: salida28.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida28[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida28[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida28[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts8.png", width: 35, height: 60, alignment: 'center', rowSpan: salida28.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida28[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida28.length-1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, true], text: salida28[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida28[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida28[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida28[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida28[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida28[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida29.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida29.length; i++)
        {
            if(i === 0 && salida29.length === 1)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, true], text: salida29[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida29[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts9.png", width: 30, height: 30, alignment: 'center', rowSpan: salida29.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida29[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida29[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida29[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts9.png", width: 30, height: 30, alignment: 'center', rowSpan: salida29.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida29[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida29.length-1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, true], text: salida29[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida29[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida29[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida29[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida29[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida29[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
    /*TERMINA CICLO*/
    }
    
    if(salida30.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida30.length; i++)
        {
            if(i === 0 && salida30.length === 1)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, true], text: salida30[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida30[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts11.png", width: 30, height: 20, alignment: 'center', rowSpan: salida30.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida30[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida30[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida30[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts11.png", width: 30, height: 20, alignment: 'center', rowSpan: salida30.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida30[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida30.length-1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, true], text: salida30[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida30[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida30[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida30[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida30[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida30[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
    /*TERMINA CICLO*/
    }
    
    if(salida31.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida31.length; i++)
        {
            if(i === 0 && salida31.length === 1)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, true], text: salida31[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida31[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts12.png", width: 60, height: 20, alignment: 'center', rowSpan: salida31.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida31[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida31[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida31[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts12.png", width: 60, height: 20, alignment: 'center', rowSpan: salida31.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida31[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida31.length-1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, true], text: salida31[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida31[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida31[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida31[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida31[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida31[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
    /*TERMINA CICLO*/
    }
    
    if(salida32.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida32.length; i++)
        {
            if(i === 0 && salida32.length === 1)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, true], text: salida32[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida32[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts13.png", width: 60, height: 20, alignment: 'center', rowSpan: salida32.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida32[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida32[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida32[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts13.png", width: 60, height: 20, alignment: 'center', rowSpan: salida32.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida32[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida32.length-1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, true], text: salida32[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida32[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida32[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida32[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida32[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida32[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida33.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida33.length; i++)
        {
            if(i === 0 && salida33.length === 1)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, true], text: salida33[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida33[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts14.png", width: 70, height: 30, alignment: 'center', rowSpan: salida33.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida33[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida33[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida33[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts14.png", width: 70, height: 30, alignment: 'center', rowSpan: salida33.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida33[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida33.length-1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, true], text: salida33[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida33[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida33[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida33[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida33[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida33[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida34.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida34.length; i++)
        {
            if(i === 0 && salida34.length === 1)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, true], text: salida34[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida34[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts15.png", width: 20, height: 20, alignment: 'center', rowSpan: salida34.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida34[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida34[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida34[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts15.png", width: 20, height: 20, alignment: 'center', rowSpan: salida34.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida34[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida34.length-1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, true], text: salida34[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida34[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida34[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida34[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida34[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida34[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }

        /*TERMINA CICLO*/
    }
    


    var accesories2 = []
    var pSItems = 0

    if(salida35.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida35.length; i++)
        {
            if(i === 0 && salida35.length === 1)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, true], text: salida35[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida35[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts16.png", width: 20, height: 30, alignment: 'center', rowSpan: salida35.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida35[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida35[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida35[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, false], image: "images/AssemblyParts16.png", width: 20, height: 30, alignment: 'center', rowSpan: salida35.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida35[i].Price), style: 'textotabla', alignment: 'center'},
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
            else if(i === salida35.length-1)
            {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida35[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida35[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida35[i].Price), style: 'textotabla', alignment: 'center'},
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
                    {border: [true, false, true, false], text: salida35[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida35[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida35[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
    }
    
    if(salida36.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida36.length; i++)
        {
            if(i === 0 && salida36.length === 1)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, true], text: salida36[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida36[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts17.png", width: 70, height: 40, alignment: 'center', rowSpan: salida36.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida36[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida36[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida36[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts17.png", width: 70, height: 40, alignment: 'center', rowSpan: salida36.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida36[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

            
            }
            else if(i === salida36.length-1)
            {
                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: salida36[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida36[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida36[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida36[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida36[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida36[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida37.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida37.length; i++)
        {
            if(i === 0 && salida37.length === 1)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, true], text: salida37[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida37[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts18.png", width: 40, height: 30, alignment: 'center', rowSpan: salida37.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida37[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida37[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida37[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts18.png", width: 40, height: 30, alignment: 'center', rowSpan: salida37.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida37[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida37.length-1)
            {
                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: salida37[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida37[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida37[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida37[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida37[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida37[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida38.length > 0)
    {
         /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida38.length; i++)
        {
            if(i === 0 && salida38.length === 1)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, true], text: salida38[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida38[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts19.png", width: 40, height: 30, alignment: 'center', rowSpan: salida38.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida38[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida38[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida38[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts19.png", width: 40, height: 30, alignment: 'center', rowSpan: salida38.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida38[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida38.length-1)
            {
                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: salida38[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida38[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida38[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida38[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida38[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida38[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    var accesories3 = []
    var pSItems = 0

    if(salida39.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida39.length; i++)
        {
            if(i === 0 && salida39.length === 1)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, true], text: salida39[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida39[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts20.png", width: 40, height: 30, alignment: 'center', rowSpan: salida39.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida39[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida39[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida39[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts20.png", width: 40, height: 30, alignment: 'center', rowSpan: salida39.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida39[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida39.length-1)
            {
                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: salida39[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida39[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida39[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida39[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida39[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida39[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida40.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida40.length; i++)
        {
            if(i === 0 && salida40.length === 1)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, true], text: salida40[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida40[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts21.png", width: 40, height: 30, alignment: 'center', rowSpan: salida40.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida40[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida40[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida40[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts21.png", width: 40, height: 30, alignment: 'center', rowSpan: salida40.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida40[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida40.length-1)
            {
                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: salida40[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida40[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida40[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida40[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida40[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida40[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida41.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida41.length; i++)
        {
            if(i === 0 && salida41.length === 1)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, true], text: salida41[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida41[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts26.png", width: 70, height: 30, alignment: 'center', rowSpan: salida41.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida41[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida41[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida41[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts26.png", width: 70, height: 30, alignment: 'center', rowSpan: salida41.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida41[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida41.length-1)
            {
                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: salida41[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida41[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida41[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida41[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida41[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida41[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida42.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida42.length; i++)
        {
            if(i === 0 && salida42.length === 1)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, true], text: salida42[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida42[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts25.png", width: 30, height: 60, alignment: 'center', rowSpan: salida42.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida42[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida42[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida42[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts25.png", width: 30, height: 60, alignment: 'center', rowSpan: salida42.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida42[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida42.length-1)
            {
                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: salida42[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida42[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida42[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida42[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida42[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida42[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida43.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida43.length; i++)
        {
            if(i === 0 && salida43.length === 1)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, true], text: salida43[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida43[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts24.png", width: 45, height: 60, alignment: 'center', rowSpan: salida43.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida43[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida43[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida43[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts24.png", width: 45, height: 60, alignment: 'center', rowSpan: salida43.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida43[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida43.length-1)
            {
                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: salida43[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida43[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida43[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida43[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida43[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida43[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida44.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida44.length; i++)
        {
            if(i === 0 && salida44.length === 1)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, true], text: salida44[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida44[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts23.png", width: 40, height: 30, alignment: 'center', rowSpan: salida44.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida44[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida44[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida44[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts23.png", width: 40, height: 30, alignment: 'center', rowSpan: salida44.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida44[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida44.length-1)
            {
                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: salida44[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida44[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida44[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida44[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida44[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida44[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
     
    if(salida45.length > 0)
    {
         /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida45.length; i++)
        {
            if(i === 0 && salida45.length === 1)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, true], text: salida45[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida45[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts22.png", width: 45, height: 30, alignment: 'center', rowSpan: salida45.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida45[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida45[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida45[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts22.png", width: 45, height: 30, alignment: 'center', rowSpan: salida45.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida45[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida45.length-1)
            {
                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: salida45[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida45[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida45[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida45[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida45[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida45[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
   
    if(salida46.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida46.length; i++)
        {
            if(i === 0 && salida46.length === 1)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, true], text: salida46[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida46[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts27.png", width: 70, height: 50, alignment: 'center', rowSpan: salida46.length + salida47.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida46[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida46[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida46[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts27.png", width: 70, height: 50, alignment: 'center', rowSpan: salida46.length + salida47.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida46[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida46.length-1)
            {
                accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida46[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida46[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida46[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida46[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida46[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida46[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida47.length > 0)
    {   
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida47.length; i++)
        {
            if(i === 0 && salida47.length === 1)
            {
                accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida47[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida47[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida47[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida47[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida47[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida47[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida47.length-1)
            {
                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: salida47[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida47[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida47[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida47[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida47[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida47[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
     
    if(salida48.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida48.length; i++)
        {
            if(i === 0 && salida48.length === 1)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, true], text: salida48[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida48[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts28.png", width: 40, height: 25, alignment: 'center', rowSpan: salida48.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida48[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida48[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida48[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts28.png", width: 40, height: 25, alignment: 'center', rowSpan: salida48.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida48[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida48.length-1)
            {
                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: salida48[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida48[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida48[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida48[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida48[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida48[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida49.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida49.length; i++)
        {
            if(i === 0 && salida49.length === 1)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, true], text: salida49[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida49[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts29.png", width: 70, height: 50, alignment: 'center', rowSpan: salida49.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida49[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida49[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida49[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts29.png", width: 70, height: 50, alignment: 'center', rowSpan: salida49.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida49[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida49.length-1)
            {
                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: salida49[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida49[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida49[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida49[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida49[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida49[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida50.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida50.length; i++)
        {
            if(i === 0 && salida50.length === 1)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, true], text: salida50[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida50[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], text: ""},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida50[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida50[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida50[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, false], text: ""},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida50[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida50.length-1)
            {
                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: salida50[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida50[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida50[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida50[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida50[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida50[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida51.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida51.length; i++)
        {
            if(i === 0 && salida51.length === 1)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, true], text: salida51[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida51[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts30.png", width: 30, height: 20, alignment: 'center', rowSpan: salida51.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida51[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida51[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida51[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/AssemblyParts30.png", width: 30, height: 20, alignment: 'center', rowSpan: salida51.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida51[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida51.length-1)
            {
                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: salida51[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida51[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida50[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida51[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida51[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida51[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    const fecha = new Date();
    fecha.toLocaleDateString()

    var assembly = []
    if(salida21.length > 0 || salida22.length > 0 || salida23.length > 0 || salida24.length > 0 || salida25.length > 0
        || salida26.length > 0 || salida27.length > 0 || salida28.length > 0 || salida29.length > 0 || salida30.length > 0
        || salida31.length > 0 || salida32.length > 0 || salida33.length > 0 || salida34.length > 0)
    {
        assembly = [
            "\n",
            "\n",
            "\n",
            {
                table: {
                    widths: ["*"],
                    body: [
                        [
                            {text: 'Assembly Parts', style: 'textotablacolorlarge', fillColor: '#5bbccc',  alignment: 'center'},
                        ],
                        [
                            {text: [
                                {text:'Ceiling Mounted Rail System', style: 'textotablaboldlarge'},
                                {text:'Assembly Parts - Ceiling Mounted Rail System', style: {fontSize:  0}, tocItem: "ceilingmounted"},
                            ], fillColor: '#dbdbdb'},
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
        ]
    }

    var suspended = []
    if(salida35.length > 0 || salida36.length > 0 || salida37.length > 0 || salida38.length > 0)
    {
        suspended = [
            "\n",
            {
                table: {
                    widths: ["*"],
                    body: [
                        [
                            {text: [
                                {text:'Suspended Rail System', style: 'textotablaboldlarge'},
                                {text:'Assembly Parts - Suspended Rail System', style: {fontSize: 0}, tocItem: "suspendedrailsystem"},
                            ], fillColor: '#dbdbdb'},
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
                    headerRows: 1,
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
        ]
    }

    var suspended2 = []
    if(salida39.length > 0 || salida40.length > 0 || salida41.length > 0 || salida42.length > 0 || salida43.length > 0
        || salida39.length > 0 || salida39.length > 0 || salida39.length > 0 || salida39.length > 0 || salida39.length > 0
        || salida44.length > 0 || salida45.length > 0 || salida46.length > 0 || salida47.length > 0 || salida48.length > 0
        || salida49.length > 0 || salida50.length > 0 || salida51.length > 0)
    {
        suspended2 = [
            "\n",
            "\n",
            "\n",
            {
                table: {
                    widths: ["*"],
                    body: [
                        [
                            {text: 'Suspended Rail System', style: 'textotablaboldlarge', fillColor: '#dbdbdb'},
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
                    headerRows: 1,
                    widths: [80, "*", 80, 60],
                    body: accesories3
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

    var assemblyParts = [
        assembly,
        suspended,
        {text: '', pageBreak: 'after'  },
        suspended2,
        {text: '', pageBreak: 'after'  },
    ]

    return assemblyParts;
}

module.exports = {
    getAssemblyParts : getAssemblyParts,
}