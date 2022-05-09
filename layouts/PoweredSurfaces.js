const dbPoweredSurfaces = require('../controllers/poweredsurfaces')

async function getPoweredSurfaces()
{
    const res = await dbPoweredSurfaces.getPoweredSurfaces()
    const overlay2Data = res[0]
    const foamBase2Data = res[1]
    const fullAir2Data = res[2]
    const accellaTherapyData = res[3]
    const talleyFusionData = res[4]

    /*TERMINA CICLO*/

    var p290 =[]
    var pSItems = 0;
    p290[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'MODEL', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
        {text: 'PART #', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
    ]
    pSItems++

    p290[pSItems] = [
        {text: "Overlay", style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 5},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
    ]

    pSItems++

    if(overlay2Data.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<overlay2Data.length; i++)
        {
            p290[pSItems] = [
                {text: overlay2Data[i].KitName, style: 'textotabla', alignment: 'center'},
                {text: overlay2Data[i].Model, style: 'textotabla', alignment: 'center'},
                {text: overlay2Data[i].Item_Long_Desc, style: 'textotabla'},
                {text: overlay2Data[i].Part, style: 'textotabla', alignment: 'center'}, 
                {text: "$" + Intl.NumberFormat("en-IN").format(overlay2Data[i].Price), style: 'textotabla', alignment: 'center'}, 
            ]
        
            pSItems++
        }
        /*TERMINA CICLO*/
    }
    
    
    p290[pSItems] = [
        {text: 'Replacement with foam base', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 5},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
    ]

    pSItems ++

    if(foamBase2Data.length > 0 )
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<foamBase2Data.length; i++)
        {
            p290[pSItems] = [
                {text: foamBase2Data[i].KitName, style: 'textotabla', alignment: 'center'},
                {text: foamBase2Data[i].Model, style: 'textotabla', alignment: 'center'},
                {text: foamBase2Data[i].Item_Long_Desc, style: 'textotabla'},
                {text: foamBase2Data[i].Part, style: 'textotabla', alignment: 'center'}, 
                {text: "$" + Intl.NumberFormat("en-IN").format(foamBase2Data[i].Price), style: 'textotabla', alignment: 'center'}, 
            ]
        
            pSItems++
        }
        /*TERMINA CICLO*/
    }

    p290[pSItems] = [
        {text: 'Replacement with full air', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 5},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
    ]

    pSItems++

    if(fullAir2Data.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<fullAir2Data.length; i++)
        {
            p290[pSItems] = [
                {text: fullAir2Data[i].KitName, style: 'textotabla', alignment: 'center'},
                {text: fullAir2Data[i].Model, style: 'textotabla', alignment: 'center'},
                {text: fullAir2Data[i].Item_Long_Desc, style: 'textotabla'},
                {text: fullAir2Data[i].Part, style: 'textotabla', alignment: 'center'}, 
                {text: "$" + Intl.NumberFormat("en-IN").format(fullAir2Data[i].Price), style: 'textotabla', alignment: 'center'}, 
            ]
        
            pSItems++
        }
        /*TERMINA CICLO*/
    }
    
    var accellaTherapy =[]
    var pSItems = 0;

    accellaTherapy[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'MODEL', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
        {text: 'PART #', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
    ]
    pSItems++

    if(accellaTherapyData.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<accellaTherapyData.length; i++)
        {
            accellaTherapy[pSItems] = [
                {text: accellaTherapyData[i].KitName, style: 'textotabla', alignment: 'center'},
                {text: accellaTherapyData[i].Model, style: 'textotabla', alignment: 'center'},
                {text: accellaTherapyData[i].Item_Long_Desc, style: 'textotabla'},
                {text: accellaTherapyData[i].Part, style: 'textotabla', alignment: 'center'}, 
                {text: "$" + Intl.NumberFormat("en-IN").format(accellaTherapyData[i].Price), style: 'textotabla', alignment: 'center'}, 
            ]
        
            pSItems++
        }
        /*TERMINA CICLO*/
    }

    var talleyFusion =[]
    var pSItems = 0;
    
    talleyFusion[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'MODEL', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
        {text: 'PART #', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
    ]
    pSItems++

    if(talleyFusionData.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<talleyFusionData.length; i++)
        {
            talleyFusion[pSItems] = [
                {text: talleyFusionData[i].KitName, style: 'textotabla', alignment: 'center'},
                {text: talleyFusionData[i].Model, style: 'textotabla', alignment: 'center'},
                {text: talleyFusionData[i].Item_Long_Desc, style: 'textotabla'},
                {text: talleyFusionData[i].Part, style: 'textotabla', alignment: 'center'}, 
                {text: "$" + Intl.NumberFormat("en-IN").format(talleyFusionData[i].Price), style: 'textotabla', alignment: 'center'}, 
            ]
        
            pSItems++
        }
        /*TERMINA CICLO*/
    }

    var table1 =[]

    if(overlay2Data.length > 0 || foamBase2Data.length > 0 || fullAir2Data.length > 0)
    {
        table1 = [
            {
                table: {
                    widths: [50, 40, "*", 60, 50],
                    body: p290
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
    if(accellaTherapyData.length > 0)
    {
        table2 = [
            {
                table: {
                    widths: [50, 40, "*", 60, 50],
                    body: accellaTherapy
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
    if(talleyFusionData.length > 0)
    {
        table3 = [
            {
                table: {
                    widths: [50, 40, "*", 60, 50],
                    body: talleyFusion
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

    var poweredSurfaces = [
        "\n",
        "\n",
        "\n",
        { text: 'Powered Surfaces', style: 'header'},
        { text: 'Covers / Accessories', style: { fontSize: 0}, tocItem: 'poweredSurfaces'},
        { text: 'Country of origin: France', style: 'parrafo' },
        "\n",
        {
            columns: [
                [
                    { text: 'P290\n', style: 'subheader' },
                    {
                        style:'parrafo',
                        ul: [
                            { text: 'Maximum Patient Weight 250 kg'},
                            { text: 'For additional technical specifications see separate tech specs'},
                        ]
                    },
                ],
                [
                    { image: "images/PoweredSurfaces2.png", width: 60, height: 60, alignment: 'center'},
                ]
            ]
            
        },
        table1,
        "\n",
        {
            columns: [
                [
                    { text: 'Accella Therapy\n', style: 'subheader' },
                    {
                        style:'parrafo',
                        ul: [
                            { text: 'Maximum Patient Weight 250 kg'},
                            { text: 'For additional technical specifications see separate tech specs'},
                        ]
                    },
                ],
                [
                    { image: "images/PoweredSurfaces3.png", width: 60, height: 60, alignment: 'center'},
                ]
            ]
            
        },
        table2,
        "\n",
        {text: "*Only compatible with Hill-Rom 900 Accella. Beds with a reference starting with CS900B41XXXXX", style: "textotabla"},
        "\n",
        {
            columns: [
                [
                    { text: 'TALLEY FUSION HYBRID\n', style: 'subheader' },
                    {
                        style:'parrafo',
                        ul: [
                            { text: 'Maximum Patient Weight 250 kg'},
                            { text: 'For additional technical specifications see separate tech specs'},
                        ]
                    },
                ],
                [
                    { image: "images/PoweredSurfaces4.png", width: 100, height: 60, alignment: 'center'},
                ]
            ]
            
        },
        table3,
        {text: '', pageBreak: 'after'  },
    ]

    return poweredSurfaces;
}

module.exports = {
    getPoweredSurfaces : getPoweredSurfaces,
}