const dbRailSystem = require('../controllers/railsystem')

async function getRailSystemH100()
{
    const res = await dbRailSystem.getRailSystem()
    const salida8 = res[7]
    const salida9 = res[8]
    const salida10 = res[9]
    const salida11 = res[10]
    const salida12 = res[11]

    var accesories = []
    var pSItems = 0

    
    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida8.length; i++)
    {
        if(i === 0 && salida8.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, true], text: salida8[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida8[i].Item_Long_Desc, style: 'textotabla'},
                {border: [true, true, true, true], image: "images/RailSystemH100.png", width: 80, height: 25, alignment: 'center', rowSpan: salida8.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida8[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida8[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida8[i].Item_Long_Desc, style: 'textotabla'},
                {border: [true, true, true, true], image: "images/RailSystemH100.png", width: 80, height: 25, alignment: 'center', rowSpan: salida8.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida8[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida8.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida8[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida8[i].Item_Long_Desc, style: 'textotabla'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida8[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida8[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida8[i].Item_Long_Desc, style: 'textotabla'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida8[i].Price), style: 'textotabla', alignment: 'center'},
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
                {border: [true, true, true, true], text: salida9[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida9[i].Item_Long_Desc, style: 'textotabla'},
                {border: [true, false, true, true], text: ""},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida9[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida9[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida9[i].Item_Long_Desc, style: 'textotabla'},
                {border: [true, true, true, false], text: ""},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida9[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida9.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida9[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida9[i].Item_Long_Desc, style: 'textotabla'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida9[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida9[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida9[i].Item_Long_Desc, style: 'textotabla'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida9[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    var accesories2 = []
    pSItems = 0;

    for(var i=0; i<salida10.length; i++)
    {
        if(i === 0 && salida10.length === 1)
        {
            accesories2[pSItems] =[
                {border: [true, true, true, true], text: salida10[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida10[i].Item_Long_Desc, style: 'textotabla'},
                {border: [true, true, true, true], image: "images/RailSystemH1002.png", width: 80, height: 25, alignment: 'center', rowSpan: salida10.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida10[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories2[pSItems] =[
                {border: [true, true, true, false], text: salida10[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida10[i].Item_Long_Desc, style: 'textotabla'},
                {border: [true, true, true, true], image: "images/RailSystemH1002.png", width: 80, height: 25, alignment: 'center', rowSpan: salida10.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida10[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida10.length-1)
        {
            accesories2[pSItems] =[
                {border: [true, false, true, true], text: salida10[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida10[i].Item_Long_Desc, style: 'textotabla'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida10[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories2[pSItems] =[
                {border: [true, false, true, false], text: salida10[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida10[i].Item_Long_Desc, style: 'textotabla'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida10[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    const fecha = new Date();
    fecha.toLocaleDateString()

    var railSystemH100 = [
        {image: "images/BaxterEncabezado.png", width: 537, height: 30, alignment: "center"},
        "\n",
        {
            table: {
                widths: ["*"],
                body: [
                    [
                        {text: 'Rail System H100', style: 'textotablacolorlarge', fillColor: '#5bbccc',  alignment: 'center'},
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
                        {border: [true, false, true, false], text: 'PART #', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
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
        "\n",
        {
            table: {
                widths: ["*"],
                body: [
                    [
                        {text: 'Rail System H140', style: 'textotablacolorlarge', fillColor: '#5bbccc',  alignment: 'center'},
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
                        {border: [true, false, true, false], text: 'PART #', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
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

    return railSystemH100;
}

module.exports = {
    getRailSystemH100 : getRailSystemH100,
}