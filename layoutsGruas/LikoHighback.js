const dbSlings = require('../controllers/slingsforadults')

async function getLikoOriginalHighback()
{
    const res = await dbSlings.getSlingsForAdults()
    const salida3  = res[2]
    const salida4 = res[3]
    const salida5 = res[4]

    var accesories = []
    var pSItems = 0

    accesories[pSItems] =[
        {border: [true, true, true, false], text: "35200105", style: 'textotabla'},
        {border: [true, true, true, false], text: "polyester, M", style: 'textotablaboldblack'},
        {border: [true, true, true, true], image: "images/LikoHighback9.png", width: 70, height: 120, alignment: 'center', rowSpan: 28},
        {border: [true, true, true, false], text: "$272", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: "35200106", style: 'textotabla'},
        {border: [true, false, true, false], text: "polyester, L", style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: "$326", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: "35200107", style: 'textotabla'},
        {border: [true, false, true, false], text: "polyester, XL max 300 kg (660 lbs) (No shortening position)", style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: "$365", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: "", style: "textotabla"},
        {border: [true, false, true, false], text: "", style: "textotabla"},
        {border: [true, false, true, false], text: "", style: "textotabla"},
        {border: [true, false, true, false], text: "", style: "textotabla"},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: "", style: "textotabla"},
        {border: [true, false, true, false], text: "", style: "textotabla"},
        {border: [true, false, true, false], text: "", style: "textotabla"},
        {border: [true, false, true, false], text: "", style: "textotabla"},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: "35210115", style: 'textotabla'},
        {border: [true, false, true, false], text: "polyester, reinforced leg supp, M-Slim (slim adult)", style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: "$285", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: "35200115", style: 'textotabla'},
        {border: [true, false, true, false], text: "polyester, reinforced leg supp, M", style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: "$294", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: "35200116", style: 'textotabla'},
        {border: [true, false, true, false], text: "polyester, reinforced leg supp, L", style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: "$306", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: "35200117", style: 'textotabla'},
        {border: [true, false, true, false], text: "polyester, reinforced leg supp, XL max 500 kg (1100 lbs)(No shortening position)", style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: "$376", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: "", style: "textotabla"},
        {border: [true, false, true, false], text: "", style: "textotabla"},
        {border: [true, false, true, false], text: "", style: "textotabla"},
        {border: [true, false, true, false], text: "", style: "textotabla"},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: "", style: "textotabla"},
        {border: [true, false, true, false], text: "", style: "textotabla"},
        {border: [true, false, true, false], text: "", style: "textotabla"},
        {border: [true, false, true, false], text: "", style: "textotabla"},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: "35210305", style: 'textotabla'},
        {border: [true, false, true, false], text: "net polyester, M-Slim (slim adult)", style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: "$306", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: "35200305", style: 'textotabla'},
        {border: [true, false, true, false], text: "net polyester, M", style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: "$285", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: "35200306", style: 'textotabla'},
        {border: [true, false, true, false], text: "net polyester, L", style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: "$292", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: "35200307", style: 'textotabla'},
        {border: [true, false, true, false], text: "net polyester, XL max 500 kg (1100 lbs)(No shortening position)", style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: "$369", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: "", style: "textotabla"},
        {border: [true, false, true, false], text: "", style: "textotabla"},
        {border: [true, false, true, false], text: "", style: "textotabla"},
        {border: [true, false, true, false], text: "", style: "textotabla"},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: "", style: "textotabla"},
        {border: [true, false, true, false], text: "", style: "textotabla"},
        {border: [true, false, true, false], text: "", style: "textotabla"},
        {border: [true, false, true, false], text: "", style: "textotabla"},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: "35210315", style: 'textotabla'},
        {border: [true, false, true, false], text: "net polyester, reinforced leg supp, M-Slim (slim adult)", style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: "$349", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: "35200315", style: 'textotabla'},
        {border: [true, false, true, false], text: "net polyester, reinforced leg supp, M", style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: "$354", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: "35200316", style: 'textotabla'},
        {border: [true, false, true, false], text: "net polyester, reinforced leg supp, L", style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: "$363", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: "35200317", style: 'textotabla'},
        {border: [true, false, true, false], text: "net polyester, reinforced leg supp, XL max 500 kg (1100 lbs)(No shortening position)", style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: "$388", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: "", style: "textotabla"},
        {border: [true, false, true, false], text: "", style: "textotabla"},
        {border: [true, false, true, false], text: "", style: "textotabla"},
        {border: [true, false, true, false], text: "", style: "textotabla"},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: "", style: "textotabla"},
        {border: [true, false, true, false], text: "", style: "textotabla"},
        {border: [true, false, true, false], text: "", style: "textotabla"},
        {border: [true, false, true, false], text: "", style: "textotabla"},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: "35210405", style: 'textotabla'},
        {border: [true, false, true, false], text: "plastic coated net (bath), M-Slim (slim adult)", style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: "$306", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: "35200405", style: 'textotabla'},
        {border: [true, false, true, false], text: "plastic coated net (bath), M", style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: "$281", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: "35200406", style: 'textotabla'},
        {border: [true, false, true, false], text: "plastic coated net (bath), L", style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: "$326", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: "35200407", style: 'textotabla'},
        {border: [true, false, true, false], text: "plastic coated net (bath), XL (No shortening position) max 500 kg (1100 lbs)", style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: "$342", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, true], text: "35200418", style: 'textotabla'},
        {border: [true, false, true, true], text: "plastic coated net (bath), reinforced leg supports, XXL max 500 kg (1100 lbs) (No shortening position)", style: 'textotablaboldblack'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: "$888", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, true], text: "31590006", style: 'textotabla'},
        {border: [true, false, true, true], text: "Lath, 43 cm (17 in)", style: 'textotablaboldblack'},
        {border: [true, false, true, true], image: "images/LikoHighback6.png", width: 70, height: 15, alignment: 'center'},
        {border: [true, false, true, true], text: "$15", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    /*for(var i=0; i<4; i++)
    {
        if(i === 0 && salida3.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, true], text: salida3[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida3[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/LikoHighback2.png", width: 70, height: 70, alignment: 'center', rowSpan: salida3.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida3[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida3[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/LikoHighback1.png", width: 80, height: 70, alignment: 'center', rowSpan: 4},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 3)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida3[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida3[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
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
        }
        
    }

    for(var i=4; i<7; i++)
    {
        if(i === 0 && salida3.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, true], text: salida3[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida3[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/LikoHighback2.png", width: 50, height: 70, alignment: 'center', rowSpan: 3},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 4)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida3[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida3[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/LikoHighback2.png", width: 50, height: 70, alignment: 'center', rowSpan: 3},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 6)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida3[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida3[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
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
        }
        
    }

    for(var i=7; i<10; i++)
    {
        if(i === 0 && salida3.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, true], text: salida3[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida3[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/LikoHighback3.png", width: 50, height: 70, alignment: 'center', rowSpan: 3},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 7)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida3[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida3[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/LikoHighback3.png", width: 50, height: 70, alignment: 'center', rowSpan: 3},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 9)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida3[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida3[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
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
        }
        
    }*/


    /*for(var i=10; i<13; i++)
    {
        if(i === 0 && salida3.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, true], text: salida3[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida3[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/LikoHighback4.png", width: 50, height: 70, alignment: 'center', rowSpan: 3},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 10)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida3[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida3[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/LikoHighback4.png", width: 50, height: 70, alignment: 'center', rowSpan: 3},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 12)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida3[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida3[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
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
        }
        
    }

    for(var i=13; i<16; i++)
    {
        if(i === 0 && salida3.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, true], text: salida3[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida3[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/LikoHighback5.png", width: 50, height: 70, alignment: 'center', rowSpan: 3},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 13)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida3[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida3[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/LikoHighback5.png", width: 50, height: 70, alignment: 'center', rowSpan: 3},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 15)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida3[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida3[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
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
        }
        
    }

    accesories[pSItems] =[
        {border: [true, true, true, true], text: salida3[16].Part, style: 'textotabla'},
        {border: [true, true, true, true], text: salida3[16].Item_Long_Desc, style: 'textotablaboldblack'},
        {border: [true, true, true, true], text: ""},
        {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida3[16].Price), style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    for(var i=17; i<21; i++)
    {
        if(i === 17)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida3[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida3[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, false], image: "images/LikoHighback6.png", width: 80, height: 20, alignment: 'center', rowSpan: 4},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
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
        }
        
    }*/
    /*TERMINA CICLO*/

    var accesories2 = []
    var pSItems = 0

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida4.length; i++)
    {
        if(i === 0 && salida4.length === 1)
        {
            accesories2[pSItems] =[
                {border: [true, true, true, true], text: salida4[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida4[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/LikoHighback8.png", width: 70, height: 50, alignment: 'center', rowSpan: salida4.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida4[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories2[pSItems] =[
                {border: [true, true, true, false], text: salida4[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida4[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/LikoHighback8.png", width: 70, height: 50, alignment: 'center', rowSpan: salida4.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida4[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida4.length-1)
        {
            accesories2[pSItems] =[
                {border: [true, false, true, true], text: salida4[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida4[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida4[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories2[pSItems] =[
                {border: [true, false, true, false], text: salida4[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida4[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida4[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    var accesories3 = []
    var pSItems = 0

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida5.length; i++)
    {
        if(i === 0 && salida5.length === 1)
        {
            accesories3[pSItems] =[
                {border: [true, true, true, true], text: salida5[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida5[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/LikoHighback7.png", width: 70, height: 50, alignment: 'center', rowSpan: salida5.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories3[pSItems] =[
                {border: [true, true, true, false], text: salida5[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida5[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/LikoHighback7.png", width: 70, height: 50, alignment: 'center', rowSpan: salida5.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida5.length-1)
        {
            accesories3[pSItems] =[
                {border: [true, false, true, true], text: salida5[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida5[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories3[pSItems] =[
                {border: [true, false, true, false], text: salida5[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida5[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    const fecha = new Date();
    fecha.toLocaleDateString()

    var s1 = []
    if(accesories.length > 0)
    {
        s1 = [
            "\n",
            "\n",
            "\n",
            {
                table: {
                    widths: [190, "*", 130],
                    body: [
                        [
                            {text: [
                                {text: 'LIKO ORIGINAL HIGHBACK SLING™, MOD 200/210', style: 'textotablacolorlarge'},
                                {text: "Liko Original Highback Sling™, Mod 200/210", style: {fontSize: 0}, tocItem: "likohighback200"}
                            ], fillColor: '#5bbccc',  alignment: 'center', colSpan: 3},
                            {},
                            {}
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
            {
                table: {
                    widths: [80, "*", 60],
                    body: [
                        [
                            {border: [true, false, true, false], text: 'PART #', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                            {border: [true, false, true, false], text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                            {border: [true, false, true, false], text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
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

    var s2 = []
    if(salida4.length>0)
    {
        s2 = [
            "\n",
            {
                table: {
                    widths: [190, "*", 130],
                    body: [
                        [
                            {text: [
                                {text: 'LIKO SILHOUETTESLING™, MOD 22', style: 'textotablacolorlarge'},
                                {text: "Liko Silhouettesling™, Mod 22", style: {fontSize: 0}, tocItem: "likosilhouettesling22"}
                            ], fillColor: '#5bbccc',  alignment: 'center', colSpan: 3},
                            {},
                            {}
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
            {
                table: {
                    widths: [80, "*", 60],
                    body: [
                        [
                            {border: [true, false, true, false], text: 'PART #', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                            {border: [true, false, true, false], text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                            {border: [true, false, true, false], text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
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
        ]
    }

    var s3 = []
    if(salida5.length>0)
    {
        s3 = [
            "\n",
            {
                table: {
                    widths: [190, "*", 130],
                    body: [
                        [
                            {text: [
                                {text: 'LIKO SOFT ORIGINAL HIGHBACK SLING™, MOD 26', style: 'textotablacolorlarge'},
                                {text: "Liko Soft Original Highback Sling™, Mod 26", style: {fontSize: 0}, tocItem: "likosoftoriginal"}
                            ], fillColor: '#5bbccc',  alignment: 'center', colSpan: 3},
                            {},
                            {}
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
            {
                table: {
                    widths: [80, "*", 60],
                    body: [
                        [
                            {border: [true, false, true, false], text: 'PART #', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                            {border: [true, false, true, false], text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                            {border: [true, false, true, false], text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
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
            {
                table: {
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
            },
        ]
    }

    var likoOriginalHighback = [
        s1,
        s2,
        s3,
        {text: '', pageBreak: 'after'  },
    ]

    return likoOriginalHighback;
}

module.exports = {
    getLikoOriginalHighback : getLikoOriginalHighback,
}