const dbAffinity = require('../controllers/affinity4birthingbed')

async function getAffinity4BirthingBed()
{
    const res = await dbAffinity.getAffinity()
    const prices = res[0]
    const straight = res[1]
    const surfaceFoot = res[2]
    const additionalOptions = res[3]
    const replacementSurfacesHead = res[4]
    const replacementSurfacesFoot = res[5]
    const replacementSurfacesFoot35 = res[6]
    const accesoriesData = res[7]

    var options =[]
    var pSItems = 0;
    options[pSItems] = [
        {text: 'OPTION CODE', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'AF400', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
        {text: 'AF450', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'AF500', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
        {text: 'AF550', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'AF600', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
        {text: 'AF650', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'AF700', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
        {text: 'AF750', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
    ]
    pSItems++

    options[pSItems] = [
        {text: "Seat Cut", style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
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

    if(straight.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        var i=0;
        var straightLayout = false
        while(straightLayout === false)
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
            while(j< straight.length && countC<8)
            {
            precios[preciosCount] = straight[j].Price
            printCaracter[preciosCount] = straight[j].Print_Character
            preciosCount++
            j++
            countC++
            }
            var data = {
                Id_Item: straight[j-1].Id_Item,
                Item_Long_Desc: straight[j-1].Item_Long_Desc,
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

            if(j >= straight.length)
            {
                straightLayout = true;
            }
            i++
        }   
        /*TERMINA CICLO*/
    }
    
 
    options[pSItems] = [
        {text: 'Mattress Foot Section', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
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

    if(surfaceFoot.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        var i=0;
        var surfaceFootLayout = false
        while(surfaceFootLayout === false)
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
            while(j< surfaceFoot.length && countC<8)
            {
            precios[preciosCount] = surfaceFoot[j].Price
            printCaracter[preciosCount] = surfaceFoot[j].Print_Character
            preciosCount++
            j++
            countC++
            }
            var data = {
                Id_Item: surfaceFoot[j-1].Id_Item,
                Item_Long_Desc: surfaceFoot[j-1].Item_Long_Desc,
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

            if(j >= surfaceFoot.length)
            {
                surfaceFootLayout = true
            }
            i++
        }   
        /*TERMINA CICLO*/
    }

    options[pSItems] = [
        {text: 'Additionnal Options', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
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

    if(additionalOptions.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        var i=0;
        var additionalOptionsLayout = false
        while(additionalOptionsLayout === false)
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
            while(j< additionalOptions.length && countC<8)
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

            if(j >= additionalOptions.length)
            {
                additionalOptionsLayout = true
            }
            i++
        }   
        /*TERMINA CICLO*/
    }

    var surfaces = []
    pSItems = 0

    surfaces[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'PART #', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
        {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
    ]

    pSItems++

    surfaces[pSItems] = [
        {text: 'Replacement Surfaces, 5" Head Section', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems ++

    if(replacementSurfacesHead.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<replacementSurfacesHead.length; i++)
        {
            surfaces[pSItems] = [
                {text: replacementSurfacesHead[i].KitName, style: 'textotabla', alignment: 'center'},
                {text: replacementSurfacesHead[i].Item_Long_Desc, style: 'textotabla'},
                {text: replacementSurfacesHead[i].Part, style: 'textotabla', alignment: 'center'}, 
                {text: "$" + Intl.NumberFormat("en-IN").format(replacementSurfacesHead[i].Price), style: 'textotabla', alignment: 'center'}, 
            ]
        
            pSItems++
        }
        /*TERMINA CICLO*/
    }

    surfaces[pSItems] = [
        {text: 'Replacement Surfaces, 4.5" Foot Section', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems ++

    if(replacementSurfacesFoot.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<replacementSurfacesFoot.length; i++)
        {
            surfaces[pSItems] = [
                {text: replacementSurfacesFoot[i].KitName, style: 'textotabla', alignment: 'center'},
                {text: replacementSurfacesFoot[i].Item_Long_Desc, style: 'textotabla'},
                {text: replacementSurfacesFoot[i].Part, style: 'textotabla', alignment: 'center'}, 
                {text: "$" + Intl.NumberFormat("en-IN").format(replacementSurfacesFoot[i].Price), style: 'textotabla', alignment: 'center'}, 
            ]
        
            pSItems++
        }
        /*TERMINA CICLO*/
    }

     surfaces[pSItems] = [
        {text: 'Replacement Surfaces, 3.5" Foot Section', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems ++

    if(replacementSurfacesFoot35.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<replacementSurfacesFoot35.length; i++)
        {
            surfaces[pSItems] = [
                {text: replacementSurfacesFoot35[i].KitName, style: 'textotabla', alignment: 'center'},
                {text: replacementSurfacesFoot35[i].Item_Long_Desc, style: 'textotabla'},
                {text: replacementSurfacesFoot35[i].Part, style: 'textotabla', alignment: 'center'}, 
                {text: "$" + Intl.NumberFormat("en-IN").format(replacementSurfacesFoot35[i].Price), style: 'textotabla', alignment: 'center'}, 
            ]
        
            pSItems++
        }
        /*TERMINA CICLO*/
    }

    var accesories = []
    pSItems = 0

    accesories[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'PART #', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
        {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
    ]

    pSItems++

    if(accesoriesData.length >0 )
    {
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
    }

    var table1 = []
    if(prices.length > 0)
    {
        table1 = [
            {
                table: {
                    widths: ["*", 38, 38, 38, 38, 38, 38, 38, 38],
                    body: [
                        [
                            {border: [false, false, false, false], text: ''},
                            {text: 'AFFINITY4', style: 'textotablacolorlarge', colSpan: 8, fillColor: '#546ce4',  alignment: 'center'},
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
                            {text: 'P3700', style: 'textotablaboldblacklarge', colSpan: 8,  alignment: 'center'},
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
                            {text: 'AF400', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                            {text: 'AF450', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                            {text: 'AF500', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                            {text: 'AF550', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                            {text: 'AF600', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                            {text: 'AF650', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                            {text: 'AF700', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                            {text: 'AF750', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                        ],
                        [
                            {text: 'Prevention (Foam) Surface', style: 'textotabla'},
                            {text: '●', style: 'textotabla', alignment: 'center'},
                            {text: '●', style: 'textotabla', alignment: 'center'}, 
                            {text: '-', style: 'textotabla', alignment: 'center'},
                            {text: '-', style: 'textotabla', alignment: 'center'}, 
                            {text: '●', style: 'textotabla', alignment: 'center'},
                            {text: '●', style: 'textotabla', alignment: 'center'}, 
                            {text: '-', style: 'textotabla', alignment: 'center'},
                            {text: '-', style: 'textotabla', alignment: 'center'}, 
                        ],
                        [
                            {text: 'Air Package (Lumbar & Seat)', style: 'textotabla'},
                            {text: '-', style: 'textotabla', alignment: 'center'},
                            {text: '-', style: 'textotabla', alignment: 'center'}, 
                            {text: '●', style: 'textotabla', alignment: 'center'},
                            {text: '●', style: 'textotabla', alignment: 'center'}, 
                            {text: '-', style: 'textotabla', alignment: 'center'},
                            {text: '-', style: 'textotabla', alignment: 'center'}, 
                            {text: '●', style: 'textotabla', alignment: 'center'},
                            {text: '●', style: 'textotabla', alignment: 'center'}, 
                        ],
                        [
                            {text: 'Nurse Call, lighting, Entertainment & UTV', style: 'textotabla'},
                            {text: '-', style: 'textotabla', alignment: 'center'},
                            {text: '●', style: 'textotabla', alignment: 'center'}, 
                            {text: '-', style: 'textotabla', alignment: 'center'},
                            {text: '●', style: 'textotabla', alignment: 'center'}, 
                            {text: '-', style: 'textotabla', alignment: 'center'},
                            {text: '●', style: 'textotabla', alignment: 'center'}, 
                            {text: '-', style: 'textotabla', alignment: 'center'},
                            {text: '●', style: 'textotabla', alignment: 'center'}, 
                        ],
                        [
                            {text: 'Lift-Off Foot Section', style: 'textotabla'},
                            {text: '●', style: 'textotabla', alignment: 'center'},
                            {text: '●', style: 'textotabla', alignment: 'center'},
                            {text: '●', style: 'textotabla', alignment: 'center'},
                            {text: '●', style: 'textotabla', alignment: 'center'}, 
                            {text: '-', style: 'textotabla', alignment: 'center'},
                            {text: '-', style: 'textotabla', alignment: 'center'}, 
                            {text: '-', style: 'textotabla', alignment: 'center'},
                            {text: '-', style: 'textotabla', alignment: 'center'},  
                        ],
                        [
                            {text: 'Stow and Go Foot Section', style: 'textotabla'},
                            {text: '-', style: 'textotabla', alignment: 'center'},
                            {text: '-', style: 'textotabla', alignment: 'center'}, 
                            {text: '-', style: 'textotabla', alignment: 'center'},
                            {text: '-', style: 'textotabla', alignment: 'center'}, 
                            {text: '●', style: 'textotabla', alignment: 'center'},
                            {text: '●', style: 'textotabla', alignment: 'center'}, 
                            {text: '●', style: 'textotabla', alignment: 'center'},
                            {text: '●', style: 'textotabla', alignment: 'center'}, 
                        ],
                        [
                            {text: 'Plastic Blow Molded Head Panel* - (STD)', style: 'textotabla'},
                            {text: '●', style: 'textotabla', alignment: 'center'},
                            {text: '●', style: 'textotabla', alignment: 'center'}, 
                            {text: '●', style: 'textotabla', alignment: 'center'},
                            {text: '●', style: 'textotabla', alignment: 'center'}, 
                            {text: '●', style: 'textotabla', alignment: 'center'},
                            {text: '●', style: 'textotabla', alignment: 'center'}, 
                            {text: '●', style: 'textotabla', alignment: 'center'}, 
                            {text: '●', style: 'textotabla', alignment: 'center'}, 
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
            }        
        ]   
    }
    else {
        table1 = [
            {
                table: {
                    widths: ["*", 38, 38, 38, 38, 38, 38, 38, 38],
                    body: [
                        [
                            {border: [false, false, false, false], text: ''},
                            {text: 'AFFINITY4', style: 'textotablacolorlarge', colSpan: 8, fillColor: '#546ce4',  alignment: 'center'},
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
                            {text: 'P3700', style: 'textotablaboldblacklarge', colSpan: 8,  alignment: 'center'},
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
                            {text: 'AF400', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                            {text: 'AF450', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                            {text: 'AF500', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                            {text: 'AF550', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                            {text: 'AF600', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                            {text: 'AF650', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                            {text: 'AF700', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                            {text: 'AF750', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                        ],
                        [
                            {text: 'Prevention (Foam) Surface', style: 'textotabla'},
                            {text: '●', style: 'textotabla', alignment: 'center'},
                            {text: '●', style: 'textotabla', alignment: 'center'}, 
                            {text: '-', style: 'textotabla', alignment: 'center'},
                            {text: '-', style: 'textotabla', alignment: 'center'}, 
                            {text: '●', style: 'textotabla', alignment: 'center'},
                            {text: '●', style: 'textotabla', alignment: 'center'}, 
                            {text: '-', style: 'textotabla', alignment: 'center'},
                            {text: '-', style: 'textotabla', alignment: 'center'}, 
                        ],
                        [
                            {text: 'Air Package (Lumbar & Seat)', style: 'textotabla'},
                            {text: '-', style: 'textotabla', alignment: 'center'},
                            {text: '-', style: 'textotabla', alignment: 'center'}, 
                            {text: '●', style: 'textotabla', alignment: 'center'},
                            {text: '●', style: 'textotabla', alignment: 'center'}, 
                            {text: '-', style: 'textotabla', alignment: 'center'},
                            {text: '-', style: 'textotabla', alignment: 'center'}, 
                            {text: '●', style: 'textotabla', alignment: 'center'},
                            {text: '●', style: 'textotabla', alignment: 'center'}, 
                        ],
                        [
                            {text: 'Nurse Call, lighting, Entertainment &', style: 'textotabla'},
                            {text: '-', style: 'textotabla', alignment: 'center'},
                            {text: '●', style: 'textotabla', alignment: 'center'}, 
                            {text: '-', style: 'textotabla', alignment: 'center'},
                            {text: '●', style: 'textotabla', alignment: 'center'}, 
                            {text: '-', style: 'textotabla', alignment: 'center'},
                            {text: '●', style: 'textotabla', alignment: 'center'}, 
                            {text: '-', style: 'textotabla', alignment: 'center'},
                            {text: '●', style: 'textotabla', alignment: 'center'}, 
                        ],
                        [
                            {text: 'Lift-Off Foot Section', style: 'textotabla'},
                            {text: '●', style: 'textotabla', alignment: 'center'},
                            {text: '●', style: 'textotabla', alignment: 'center'},
                            {text: '●', style: 'textotabla', alignment: 'center'},
                            {text: '●', style: 'textotabla', alignment: 'center'}, 
                            {text: '-', style: 'textotabla', alignment: 'center'},
                            {text: '-', style: 'textotabla', alignment: 'center'}, 
                            {text: '-', style: 'textotabla', alignment: 'center'},
                            {text: '-', style: 'textotabla', alignment: 'center'},  
                        ],
                        [
                            {text: 'Stow and Go Foot Section', style: 'textotabla'},
                            {text: '-', style: 'textotabla', alignment: 'center'},
                            {text: '-', style: 'textotabla', alignment: 'center'}, 
                            {text: '-', style: 'textotabla', alignment: 'center'},
                            {text: '-', style: 'textotabla', alignment: 'center'}, 
                            {text: '●', style: 'textotabla', alignment: 'center'},
                            {text: '●', style: 'textotabla', alignment: 'center'}, 
                            {text: '●', style: 'textotabla', alignment: 'center'},
                            {text: '●', style: 'textotabla', alignment: 'center'}, 
                        ],
                        [
                            {text: 'Plastic Blow Molded Head Panel* - (', style: 'textotabla'},
                            {text: '●', style: 'textotabla', alignment: 'center'},
                            {text: '●', style: 'textotabla', alignment: 'center'}, 
                            {text: '●', style: 'textotabla', alignment: 'center'},
                            {text: '●', style: 'textotabla', alignment: 'center'}, 
                            {text: '●', style: 'textotabla', alignment: 'center'},
                            {text: '●', style: 'textotabla', alignment: 'center'}, 
                            {text: '●', style: 'textotabla', alignment: 'center'}, 
                            {text: '●', style: 'textotabla', alignment: 'center'}, 
                        ],
                        [
                            {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4'},
                            {text: "NO-DATA", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                            {text: "NO-DATA", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                            {text: "NO-DATA", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                            {text: "NO-DATA", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                            {text: "NO-DATA", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                            {text: "NO-DATA", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                            {text: "NO-DATA", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                            {text: "NO-DATA", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
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
    if(straight.length > 0 || surfaceFoot.length > 0 || additionalOptions.length > 0)
    {
        table2 = [
            {
                table: {
                    widths: [70, "*", 38, 38, 38, 38, 38, 38, 38, 38],
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
    if(replacementSurfacesHead.length > 0 || replacementSurfacesFoot.length > 0 || replacementSurfacesFoot35.length > 0)
    {
        table3 = [
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
            }
        ]
    }

    var table4 = []
    if(accesoriesData.length > 0)
    {
        table4 = [
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
            }
        ]
    }
     
    const fecha = new Date();
    fecha.toLocaleDateString()

    var affinity4 = [
        "\n",
        "\n",
        "\n",
        { text: 'Affinity™ 4 Birthing Bed', style: 'header', tocItem: 'affinity4BirthingBed'},
        { text: 'Maternity', style: 'subheader'},
        { text: 'Country of origin: USA\n', style: 'parrafo' },
        { text: '\n', style: 'parrafo' },
        { text:'Standard features:\n', style: 'textosubrayado', decoration: 'underline'},
        {
            columns: [
                {
                    style:'textolista',
                    ul: [
                            { text: 'V-Cut or Straight Cut Surface'},
                            { text: 'Removable Foot Section'},
                            { text: 'Battery Back-up'},
                            { text: 'Powered Foot Section'},
                            { text: 'Four Wheel Dual Locking Castors'},
                            { text: 'Safe Working Load 227 kg'},
                        ]
                },
                {
                    style:'textolista',
                    ul: [
                            { text: 'Automatic Nightlight'},
                            { text: 'Lock-out controls'},
                            { text: 'Manual Trend-like positioning'},
                            { text: 'Instant CPR'},
                            { text: 'Instant Labor Grips'},
                            { text: '3 Funnel Drapes'},
                        ]				
                },
                {
                    style:'textolista',
                    ul: [
                            { text: 'Siderail Controls'},
                            { text: 'IV Pole'},
                            { text: 'Hinged Foot Section Surface'},
                            { text: 'Central Brake and Steer'},
                            { text: 'Fluid Basin'},
                        ]				
                },
                {
                    style:'textolista',
                    ul: [
                            { text: 'Automatic Seat Tilt (15 degrees)'},
                            { text: 'Forward locking steer castor'},
                            { text: '100V-120V or 230V'},
                            { text: 'OneStep® Siderail Release'},
                            { text: '150 mm Castors (6 inches)'},
                        ]				
                },
            ]
        },
        "\n",
        table1,
        "\n",
        table2,
        { text: '\n', style: 'parrafo' },
        { text: '● = standard', style: 'parrafo' },
        { text: '= - not available', style: 'parrafo' },
        "\n",
        {
            columns: [
                [
                    { text: "Country Code Options - Determines Power Cord and Voltage Decals", style: 'textotablabold' },
                    { text: "C - Australia Power Cord (for 230 volts with International Decals)", style: 'textolista' },
                    { text: '\n', style: 'minispace' },
                    { text: "D - United Kingdom Power Cord (for 230 volts with International Decals)", style: 'textolista' },
                    { text: '\n', style: 'minispace' },
                    { text: "E - Denmark Power Cord (for 230 volts with International Decals)", style: 'textolista' },
                    { text: '\n', style: 'minispace' },
                    { text: "F - Continental Europe Power Cord (for 230 volts with International Decals)", style: 'textolista' },
                    { text: '\n', style: 'minispace' },
                    { text: "K - North American Power Cord (for 120 volts with English Decals)", style: 'textolista' },
                    { text: '\n', style: 'minispace' },
                    { text: "L - Switzerland Power Cord (for 230 volts with International Decals)", style: 'textolista' },
                    { text: '\n', style: 'minispace' },
                    { text: "P - North American/Japan Power Cord (for 110 volts International Decals)", style: 'textolista' },
                    { text: '\n', style: 'minispace' },
                    { text: "Q - China Power Cord (for 230 volts with International Decals)", style: 'textolista' },
                    { text: '\n', style: 'minispace' },
                    { text: "S - Israel Power Cord (for 230 volts with International Decals)", style: 'textolista' },
                    { text: '\n', style: 'minispace' },
                    { text: "T - Argentina Power Cord (for 230 volts with International Decals)", style: 'textolista' },
                ],
                [
                    { image: "images/Affinity4BirthingBed.png", width: 230, height: 160, alignment: 'center'},
                ]
            ]
        },
        {
            columns: [
                [
                    { text: "* Wood Grain Laminate Options:", style: 'textotablabold' },
                    { text: "734- Natural Maple", style: 'textolista' },
                    { text: '\n', style: 'minispace' },
                    { text: "705 - Wild Cherry", style: 'textolista' },
                    { text: '\n', style: 'minispace' },
                    { text: "935 - Shaker Cherry", style: 'textolista' },
                    { text: '\n', style: 'minispace' },
                    { text: "70T - Montana Walnut", style: 'textolista' },
                    { text: '\n', style: 'minispace' },
                    { text: "WM9 - Honey Maple", style: 'textolista' },
                    { text: '\n', style: 'minispace' },
                    { text: "MOK - Medium Oak", style: 'textolista' },
                ],
                [
                    { text: "* Colour Laminate Options:", style: 'textotablabold' },
                    { text: "293 - Almond Leather", style: 'textolista' },
                    { text: '\n', style: 'minispace' },
                    { text: "655 - Natural Legacy", style: 'textolista' },
                    { text: '\n', style: 'minispace' },
                    { text: "157 - Antique White", style: 'textolista' },
                    { text: '\n', style: 'minispace' },
                    { text: "462 - White Nebula", style: 'textolista' },
                    { text: '\n', style: 'minispace' },
                    { text: "M07 - Light Neutral", style: 'textolista' },
                ],
                [
                    { text: "** Finish Options:", style: 'textotablabold' },
                    { text: "31M - Natural Maple", style: 'textolista' },
                    { text: '\n', style: 'minispace' },
                    { text: "T9M - Wild Cherry", style: 'textolista' },
                    { text: '\n', style: 'minispace' },
                    { text: "H4M - Dark Cherry", style: 'textolista' },
                    { text: '\n', style: 'minispace' },
                    { text: "CCM - Colonial Cherry", style: 'textolista' },
                    { text: '\n', style: 'minispace' },
                    { text: "MWM - Montana Walnut", style: 'textolista' },
                    { text: '\n', style: 'minispace' },
                    { text: "HMM - Honey Maple", style: 'textolista' },
                    { text: '\n', style: 'minispace' },
                    { text: "R30 - Light Oak", style: 'textolista' },
                    { text: '\n', style: 'minispace' },
                    { text: "82O - Medium Oak", style: 'textolista' },
                ]
            ]
        },
        
        {text: '', pageBreak: 'after'  },
        "\n",
        "\n",
        "\n",
        { text: 'SURFACES', style: 'textotablaboldlarge' },
        table3,
        '\n',
        { text: 'ACCESORIES', style: 'textotablaboldlarge' },
        table4,
        {text: '', pageBreak: 'after'  },
    ]

    return affinity4;
}

module.exports = {
    getAffinity4BirthingBed : getAffinity4BirthingBed,
}