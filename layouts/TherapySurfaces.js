const dbTherapySurfaces = require('../controllers/therapysurfaces')

async function getTherapySurfaces()
{
    const res = await dbTherapySurfaces.getTherapySurfaces()
    const foamSurfaceData = res[0]
    const monodensityData = res[1]
    const bidensityData = res[2]
    const viscoelasticData = res[3]
    const extensionsData = res[4]
    const monodensity2Data = res[5]
    const bidensity2Data = res[6]
    const viscoelastic2Data = res[7]
    const usSurfacesData = res[8]
    const usSurfacesData2 = res[9]

    var foamSurface =[]
    var pSItems = 0;
    foamSurface[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
        {text: 'MODEL', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
        {text: 'SURFACE COVER', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
        {text: 'SIZE CODE', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'}, 
        {text: 'SIZE (L x W x H)', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
        {text: 'PART #', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'}, 
        {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
    ]
    pSItems++

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<foamSurfaceData.length; i++)
    {
        foamSurface[pSItems] = [
            {text: foamSurfaceData[i].KitName, style: 'textotabla', alignment: 'center'},
            {text: foamSurfaceData[i].Model, style: 'textotabla', alignment: 'center'},
            {text: foamSurfaceData[i].Item_Long_Desc, style: 'textotabla'},
            {text: foamSurfaceData[i].Size_Code, style: 'textotabla', alignment: 'center'},
            {text: foamSurfaceData[i].Size, style: 'textotabla', alignment: 'center'},
            {text: foamSurfaceData[i].Part, style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(foamSurfaceData[i].Price), style: 'textotabla', alignment: 'center'}, 
        ]
    
        pSItems++
    }
    /*TERMINA CICLO*/

    var foamSurfaces =[]
    pSItems = 0;
    foamSurfaces[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
        {text: 'MODEL', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
        {text: 'SURFACE COVER', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
        {text: 'SIZE CODE', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'}, 
        {text: 'SIZE (L x W x H)', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
        {text: 'PART #', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'}, 
        {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
    ]
    pSItems++

    foamSurfaces[pSItems] = [
        {border: [false, false, false, false], text: 'Monodensity', style: 'textotablaboldlarge',  alignment: 'left', colSpan: 7},
        {},
        {},
        {},
        {},
        {},
        {},
    ]
    pSItems++

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<monodensityData.length; i++)
    {
        foamSurfaces[pSItems] = [
            {text: monodensityData[i].KitName, style: 'textotabla', alignment: 'center'},
            {text: monodensityData[i].Model, style: 'textotabla', alignment: 'center'},
            {text: monodensityData[i].Item_Long_Desc, style: 'textotabla'},
            {text: monodensityData[i].Size_Code, style: 'textotabla', alignment: 'center'},
            {text: monodensityData[i].Size, style: 'textotabla', alignment: 'center'},
            {text: monodensityData[i].Part, style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(monodensityData[i].Price), style: 'textotabla', alignment: 'center'}, 
        ]
    
        pSItems++
    }
    /*TERMINA CICLO*/

    foamSurfaces[pSItems] = [
        {border: [false, false, false, false], text: 'Bidensity', style: 'textotablaboldlarge',  alignment: 'left', colSpan: 7},
        {},
        {},
        {},
        {},
        {},
        {},
    ]
    pSItems++

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<bidensityData.length; i++)
    {
        foamSurfaces[pSItems] = [
            {text: bidensityData[i].KitName, style: 'textotabla', alignment: 'center'},
            {text: bidensityData[i].Model, style: 'textotabla', alignment: 'center'},
            {text: bidensityData[i].Item_Long_Desc, style: 'textotabla'},
            {text: bidensityData[i].Size_Code, style: 'textotabla', alignment: 'center'},
            {text: bidensityData[i].Size, style: 'textotabla', alignment: 'center'},
            {text: bidensityData[i].Part, style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(bidensityData[i].Price), style: 'textotabla', alignment: 'center'}, 
        ]
    
        pSItems++
    }
    /*TERMINA CICLO*/

    foamSurfaces[pSItems] = [
        {border: [false, false, false, false], text: 'Viscoelastic', style: 'textotablaboldlarge',  alignment: 'left', colSpan: 7},
        {},
        {},
        {},
        {},
        {},
        {},
    ]
    pSItems++

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<viscoelasticData.length; i++)
    {
        foamSurfaces[pSItems] = [
            {text: viscoelasticData[i].KitName, style: 'textotabla', alignment: 'center'},
            {text: viscoelasticData[i].Model, style: 'textotabla', alignment: 'center'},
            {text: viscoelasticData[i].Item_Long_Desc, style: 'textotabla'},
            {text: viscoelasticData[i].Size_Code, style: 'textotabla', alignment: 'center'},
            {text: viscoelasticData[i].Size, style: 'textotabla', alignment: 'center'},
            {text: viscoelasticData[i].Part, style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(viscoelasticData[i].Price), style: 'textotabla', alignment: 'center'}, 
        ]
    
        pSItems++
    }
    /*TERMINA CICLO*/

    var extensions = []
    pSItems = 0

    extensions[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
        {text: 'MODEL', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
        {text: 'SIZE CODE', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'}, 
        {text: 'SIZE (L x W x H)', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
        {text: 'PART #', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
        {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'}, 
    ]

    pSItems++

     /*ESTO VA EN UN CICLO*/
     for(var i=0; i<extensionsData.length; i++)
     {
        extensions[pSItems] = [
             {text: extensionsData[i].KitName, style: 'textotabla', alignment: 'center'},
             {text: extensionsData[i].Model, style: 'textotabla', alignment: 'center'},
             {text: extensionsData[i].Item_Long_Desc, style: 'textotabla'},
             {text: extensionsData[i].Size_Code, style: 'textotabla', alignment: 'center'},
             {text: extensionsData[i].Size, style: 'textotabla', alignment: 'center'},
             {text: extensionsData[i].Part, style: 'textotabla', alignment: 'center'}, 
             {text: "$" + Intl.NumberFormat("en-IN").format(extensionsData[i].Price), style: 'textotabla', alignment: 'center'}, 
         ]
     
         pSItems++
     }
     /*TERMINA CICLO*/

    var surfaceCovers = []
    pSItems = 0

    surfaceCovers[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
        {text: 'MODEL', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
        {text: 'SIZE CODE', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'}, 
        {text: 'SIZE (L x W x H)', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
        {text: 'PART #', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
        {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'}, 
    ]

    pSItems++

    surfaceCovers[pSItems] = [
        {border: [false, false, false, false], text: "Monodensity", style: 'textotablaboldlarge', colSpan: 7},
        {},
        {},
        {},
        {},
        {},
        {},
    ]

    pSItems++

     /*ESTO VA EN UN CICLO*/
     for(var i=0; i<monodensity2Data.length; i++)
     {
        surfaceCovers[pSItems] = [
             {text: monodensity2Data[i].KitName, style: 'textotabla', alignment: 'center'},
             {text: monodensity2Data[i].Model, style: 'textotabla', alignment: 'center'},
             {text: monodensity2Data[i].Item_Long_Desc, style: 'textotabla'},
             {text: monodensity2Data[i].Size_Code, style: 'textotabla', alignment: 'center'},
             {text: monodensity2Data[i].Size, style: 'textotabla', alignment: 'center'},
             {text: monodensity2Data[i].Part, style: 'textotabla', alignment: 'center'}, 
             {text: "$" + Intl.NumberFormat("en-IN").format(monodensity2Data[i].Price), style: 'textotabla', alignment: 'center'}, 
         ]
     
         pSItems++
     }
    /*TERMINA CICLO*/

    surfaceCovers[pSItems] = [
        {border: [false, false, false, false], text: "Bidensity", style: 'textotablaboldlarge', colSpan: 7},
        {},
        {},
        {},
        {},
        {},
        {},
    ]

    pSItems++

     /*ESTO VA EN UN CICLO*/
    for(var i=0; i<bidensity2Data.length; i++)
    {
        surfaceCovers[pSItems] = [
             {text: bidensity2Data[i].KitName, style: 'textotabla', alignment: 'center'},
             {text: bidensity2Data[i].Model, style: 'textotabla', alignment: 'center'},
             {text: bidensity2Data[i].Item_Long_Desc, style: 'textotabla'},
             {text: bidensity2Data[i].Size_Code, style: 'textotabla', alignment: 'center'},
             {text: bidensity2Data[i].Size, style: 'textotabla', alignment: 'center'},
             {text: bidensity2Data[i].Part, style: 'textotabla', alignment: 'center'}, 
             {text: "$" + Intl.NumberFormat("en-IN").format(bidensity2Data[i].Price), style: 'textotabla', alignment: 'center'}, 
         ]
     
         pSItems++
    }
    /*TERMINA CICLO*/

    surfaceCovers[pSItems] = [
        {border: [false, false, false, false], text: "Viscoelastic", style: 'textotablaboldlarge', colSpan: 7},
        {},
        {},
        {},
        {},
        {},
        {},
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<viscoelastic2Data.length; i++)
    {
        surfaceCovers[pSItems] = [
             {text: viscoelastic2Data[i].KitName, style: 'textotabla', alignment: 'center'},
             {text: viscoelastic2Data[i].Model, style: 'textotabla', alignment: 'center'},
             {text: viscoelastic2Data[i].Item_Long_Desc, style: 'textotabla'},
             {text: viscoelastic2Data[i].Size_Code, style: 'textotabla', alignment: 'center'},
             {text: viscoelastic2Data[i].Size, style: 'textotabla', alignment: 'center'},
             {text: viscoelastic2Data[i].Part, style: 'textotabla', alignment: 'center'}, 
             {text: "$" + Intl.NumberFormat("en-IN").format(viscoelastic2Data[i].Price), style: 'textotabla', alignment: 'center'}, 
         ]
     
         pSItems++
    }
    /*TERMINA CICLO*/

    var usSurfaces = []
    pSItems = 0

    usSurfaces[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
        {text: 'PART #', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
        {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<usSurfacesData.length; i++)
    {
        usSurfaces[pSItems] = [
             {text: usSurfacesData[i].KitName, style: 'textotabla', alignment: 'center'},
             {text: usSurfacesData[i].Item_Long_Desc, style: 'textotabla'},
             {text: usSurfacesData[i].Part, style: 'textotabla', alignment: 'center'}, 
             {text: "$" + Intl.NumberFormat("en-IN").format(usSurfacesData[i].Price), style: 'textotabla', alignment: 'center'}, 
         ]
     
         pSItems++
    }

    usSurfaces[pSItems] = [
        {border: [false, false, false, false], text: ''},
        {border: [false, false, false, false], text: ''},
        {border: [false, false, false, false], text: ''},
        {border: [false, false, false, false], text: ''}, 
    ]

    pSItems++

    for(var i=0; i<usSurfacesData2.length; i++)
    {
        usSurfaces[pSItems] = [
             {text: usSurfacesData2[i].KitName, style: 'textotabla', alignment: 'center'},
             {text: usSurfacesData2[i].Item_Long_Desc, style: 'textotabla'},
             {text: usSurfacesData2[i].Part, style: 'textotabla', alignment: 'center'}, 
             {text: "$" + Intl.NumberFormat("en-IN").format(usSurfacesData2[i].Price), style: 'textotabla', alignment: 'center'}, 
         ]
     
         pSItems++
    }
    /*TERMINA CICLO*/

    var table1 = []
    if(foamSurfaceData.length > 0)
    {
        table1 = [
            {
                table: {
                    widths: [70, 40, "*", 60, 80, 50, 50],
                    body: foamSurface
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
    if(monodensityData.length > 0 || bidensityData.length > 0 || viscoelasticData.length > 0)
    {
        table2 = [
            {
                table: {
                    widths: [70, 40, "*", 60, 80, 50, 50],
                    body: foamSurfaces
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
    if(extensionsData.length > 0)
    {
        table3 = [
            {
                table: {
                    widths: [70, 40, "*", 60, 80, 50, 50],
                    body: extensions
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
    if(monodensity2Data.length > 0 || bidensity2Data.length > 0 || viscoelastic2Data.length > 0)
    {
        table4 = [
            {
                table: {
                    widths: [70, 40, "*", 60, 80, 50, 50],
                    body: surfaceCovers
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

    var table5 = []
    if(usSurfacesData.length > 0 || usSurfacesData2.length > 0)
    {
        table5 = [
            {
                table: {
                    widths: [70, '*', 70, 70],
                    body: usSurfaces
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

    var therapySurfaces = [
        "\n",
        "\n",
        "\n",
        { text: 'THERAPY SURFACES', style: 'header'},
        { text: 'NP50 / NP100 / NP150', style: { fontSize: 0}, tocItem: 'therapySurfaces'},
        { text: 'Country of origin: China\n', style: 'parrafo' },
        "\n",
        { text: 'FOAM SURFACE', style: 'textotablaboldlarge'},
        table1,
        "\n",
        { text: 'FOAM SURFACES', style: 'textotablaboldlarge'},
        { text: 'Country of origin: France\n', style: 'parrafo' },
        table2,
        '\n',
        { image: "images/TherapySurfaces.png", width: 500, height: 120, alignment: 'center'},
        {text: '', pageBreak: 'after'  },
        "\n",
        "\n",
        "\n",
        { text: 'Extension / Covers / US surfaces', style: { fontSize: 0}, tocItem: 'therapySurfaces2'},
        { text: 'EXTENSIONS', style: 'textotablaboldlarge' },
        table3,
        '\n',
        { text: 'SURFACE COVERS', style: 'textotablaboldlarge' },
        table4,
        '\n',
        { text: 'OTHER FOAM SURFACES', style: 'textotablaboldlarge' },
        { text: 'Country of origin: México\n', style: 'parrafo' },
        table5,
        {text: '', pageBreak: 'after'  },
    ]

    return therapySurfaces;
}

module.exports = {
    getTherapySurfaces : getTherapySurfaces,
}