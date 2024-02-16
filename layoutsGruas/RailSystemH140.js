const dbRailSystem = require('../controllers/railsystem')

async function getRailSystemH140(pdfZone)
{
    const res = await dbRailSystem.getRailSystem(pdfZone)
    const salida10 = res[9]
    const salida11 = res[10]

    var accesories0 = []
    pSItems = 0;

    if(salida10.length > 0)
    {
        for(var i=0; i<salida10.length; i++)
        {
            if(i === 0 && salida10.length === 1)
            {
                accesories0[pSItems] =[
                    {border: [true, true, true, true], text: salida10[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida10[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, true], image: "images/RailSystemH1002.png", width: 80, height: 25, alignment: 'center', rowSpan: salida10.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida10[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories0[pSItems] =[
                    {border: [true, true, true, false], text: salida10[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida10[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, true], image: "images/RailSystemH1002.png", width: 80, height: 25, alignment: 'center', rowSpan: salida10.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida10[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida10.length-1)
            {
                accesories0[pSItems] =[
                    {border: [true, false, true, true], text: salida10[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida10[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida10[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories0[pSItems] =[
                    {border: [true, false, true, false], text: salida10[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida10[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida10[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    var accesories = []
    var pSItems = 0

    if(salida11.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida11.length; i++)
        {
            if(i === 0 && salida11.length === 1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, true], text: salida11[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida11[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false],  text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida11[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida11[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida11[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida11[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida11.length-1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, true], text: salida11[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida11[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida11[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida11[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida11[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida11[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    const fecha = new Date();
    fecha.toLocaleDateString()

    var table1 = [];

    if(salida10.length > 0)
    {
        table1 = [
            {
                table: {
                    widths: [80, "*", 80, 60],
                    body: accesories0
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

    var table2 = [];
    if(salida11.length > 0)
    {
        table2 = [
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
            }
        ]
    }

    var railSystemH140 = [
        "\n",
        "\n",
        "\n",
        {
            table: {
                widths: ["*"],
                body: [
                    [
                        {text: 'Rail System H140', style: 'textotablacolorlarge', fillColor: '#03857d',  alignment: 'center', tocItem: "railsystemh140"},
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
                        {border: [true, false, true, false], text: 'PART #', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                        {border: [true, false, true, false], text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                        {border: [true, false, true, false], text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
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
        table1,
        table2, 
        {text: '', pageBreak: 'after'  },
    ]

    return railSystemH140;
}

module.exports = {
    getRailSystemH140 : getRailSystemH140,
}