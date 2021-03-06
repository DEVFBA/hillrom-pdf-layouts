var fonts = {
    Roboto: {
      normal: './fonts/CenturyGothic.ttf',
      bold: './fonts/CenturyGothicBold.ttf',
      italics: './fonts/CenturyGothic.ttf',
      bolditalics: './fonts/CenturyGothic.ttf'
    }
};

var PdfPrinter = require('pdfmake');
var printer = new PdfPrinter(fonts);
var fs = require('fs');

var progressa = require("./layouts/Progressa.js")
var compella = require("./layouts/Compella.js")
var hillrom900 = require("./layouts/Hillrom900.js")
var hillrom900Accella = require("./layouts/Hillrom900Accella.js")
var centurisProBed = require("./layouts/CenturisProBed.js")
var theCenturisBed = require("./layouts/TheCenturisBed.js")
var t305ManualBed = require("./layouts/305ManualBed.js")
var medSurgAccesories = require("./layouts/MedSurgAccesories.js")
var reconditionatedVersaCare = require("./layouts/ReconditionatedVersaCare.js")
var hillrom100LowBed = require("./layouts/Hillrom100LowBed.js")
var hillromResidentLongTerm = require("./layouts/HillromResidentLongTerm.js")
var affinity4BirthingBed = require("./layouts/Affinity4BirthingBed.js")
var therapySurfaces = require("./layouts/TherapySurfaces.js")
var accumax = require("./layouts/Accumax.js")
var poweredSurfaces = require("./layouts/PoweredSurfaces.js")
var stretchers = require("./layouts/Stretchers.js")
var catoniClassic = require("./layouts/CatoniClassic.js")
var catoniStyle = require("./layouts/CatoniStyle.js")
var catoniBedSide = require("./layouts/CatoniBedside.js")
var coloursCatoni = require("./layouts/ColoursCatoni.js")
var overbedTables = require("./layouts/OverbedTables.js")
var transportChairs = require("./layouts/TransportChairs.js")
var hillromColoursCollection = require("./layouts/HillromColoursCollection.js")
var coatedFabricColours = require("./layouts/CoatedFabricColours.js")
var seatingFurniture = require("./layouts/SeatingFurniture.js")
var sleeperSofa = require("./layouts/SleeperSofa.js")
var sleeperChair = require("./layouts/SleeperChair.js")
var overbedTables2 = require("./layouts/OverbedTables2.js")
var bedsideCabinets = require("./layouts/BedsideCabinets.js")
var transferBoard = require("./layouts/TransferBoard.js")

async function createDocument()
{
    var progressaLayout = await progressa.getProgressa()
    var compellaLayout = await compella.getCompella()
    var hillroom900Layout = await hillrom900.getHillrom900()
    var hillroom900AccellaLayout = await hillrom900Accella.getHillrom900Accella()
    var centurisProBedLayout = await centurisProBed.getCenturisProBed()
    var theCenturisBedLayout = await theCenturisBed.getTheCenturisBed()
    var t305ManualBedLayout = await t305ManualBed.get305ManualBed()
    var medSurgAccesoriesLayout = await medSurgAccesories.getMedSurgAccesories()
    var reconditionatedVersaCareLayout = await reconditionatedVersaCare.getReconditionatedVersaCare()
    var hillrom100LowBedLayout = await hillrom100LowBed.getHilrom100LowBed()
    var hillromResidentLongTermLayout = await hillromResidentLongTerm.getHillromResidentLongTerm()
    var affinity4BirthingBedLayout = await affinity4BirthingBed.getAffinity4BirthingBed()
    var therapySurfacesLayout = await therapySurfaces.getTherapySurfaces()
    var accumaxLayout = await accumax.getAccumax()
    var poweredSurfacesLayout = await poweredSurfaces.getPoweredSurfaces()
    var stretchersLayout = await stretchers.getStretchers()
    var catoniClassicLayout = await catoniClassic.getCatoni()
    var catoniStyleLayout = await catoniStyle.getCatoniStyle()
    var catoniBedSideLayout = await catoniBedSide.getCatoniBedSide()
    var coloursCatoniLayout = await coloursCatoni.getColoursCatoni()
    var overbedTablesLayout = await overbedTables.getOverbedTables()
    var transportChairsLayout = await transportChairs.getTransportChairs()
    var hillromColoursCollectionLayout = await hillromColoursCollection.getHillromColoursCollection()
    var coatedFabricColoursLayout = await coatedFabricColours.getCoatedFabricColours()
    var seatingFurnitureLayout = await seatingFurniture.getSeatingFurniture()
    var sleeperSofaLayout = await sleeperSofa.getSleeperSofa()
    var sleeperChairLayout = await sleeperChair.getSleeperChair()
    var overbedTables2Layout = await overbedTables2.getOverbedTables()
    var bedsideCabinetsLayout = await bedsideCabinets.getBedsideCabinets()
    var transferBoardLayout = await transferBoard.getTransferBoard()

    const fecha = new Date();
    fecha.toLocaleDateString()

    var coverPage = [
        '\n\n\n\n\n\n\n\n\n\n\n\n\n',
        { image: "images/Hillroom.png", width: 110, height: 40, alignment: 'center'},
        { text: 'LATAM PRICEBOOK 2021', style: 'header', alignment: "center" },
        { text: 'USD - NAME COUNTRY HERE', style: 'header', alignment: "center" },
        { image: "images/Cover.png", width: 400, height: 250, alignment: 'center'},
        { text: 'www.hillrom.com', style: 'header', alignment: "center" },
        {text: '', pageBreak: 'after'  },
    ]
    
    var index = [
        {text: 'TABLE OF CONTENTS', style: 'header', alignment: 'center' },
        {
            columns: [
                [
                    { text: 'HOSPITAL BEDS', style: 'header', alignment: 'left'}
                ],
                [
                    { text: 'Page', style: 'header', alignment: 'right'}
                ]
            ]
        },
        {
            table: {
                widths: [530],
                body: [
                    [
                        {border: [false, false, false, false], text: 'Critical Care/ICU', fillColor: '#546ce4', style: 'indexbackground'},
                    ],
                ]
            }
        },
        {
            toc: {
                id: 'progressa',
            }
        },
        {
            table: {
                widths: [530],
                body: [
                    [
                        {border: [false, false, false, false], text: 'Bariatric', fillColor: '#546ce4', style: 'indexbackground'},
                    ],
                ]
            }
        },
        {
            toc: {
                id: 'compella',
            }
        },
        {
            table: {
                widths: [530],
                body: [
                    [
                        {border: [false, false, false, false], text: 'Med-Surg', fillColor: '#546ce4', style: 'indexbackground'},
                    ],
                ]
            }
        },
        {
            toc: {
                id: 'hillrom900',
            },
            toc: {
                id: 'hillrom900Accella',
            },
        },
        {text: '', pageBreak: 'after'  },
    ]
    
    var docDefinition = {
        pageMargins: [ 30, 50, 30, 30 ],
        header: function(currentPage) 
        {
            if(currentPage > 2){
                return {
                    margin: [30, 20],
                    columns: [
                        {
                            image: "images/Hillroom.png", width: 90, height: 30  
                        },
                        {
                            text: fecha.toLocaleDateString(), style: 'footer', alignment: 'right'
                        },
                        {
                            text: 'Hospital Beds - Critical Care/ICU', style: 'footer', alignment: 'right',
                        },
                       
                    ]
                }
            }
        },
        footer: function(currentPage, pageCount) {
            if(currentPage > 2)
            {
                return {
                    margin: [ 30, 0, 30, 30 ],
                    columns: [
                        {
                            text: 'Hillrom reserves the right to make changes\nwithout notice in design, specifications, and models.', style: 'footer', alignment: 'left'
                        },
                        {
                            text: 'Page ' + currentPage.toString() + ' of ' + pageCount, style: 'footer', alignment: 'center'
                        },
                        {
                            text: '01 - Name Country Here - 2021 Capital - IPL-USD', style: 'footer', alignment: 'right'
                        },
                    ]
                }
            } 
        },
        content: [
            coverPage,
            index,
            progressaLayout,
            compellaLayout,
            hillroom900Layout,
            hillroom900AccellaLayout,
            centurisProBedLayout,
            theCenturisBedLayout,
            t305ManualBedLayout,
            medSurgAccesoriesLayout,
            reconditionatedVersaCareLayout,
            hillrom100LowBedLayout,
            hillromResidentLongTermLayout,
            affinity4BirthingBedLayout,
            therapySurfacesLayout,
            accumaxLayout,
            poweredSurfacesLayout,
            stretchersLayout,
            catoniClassicLayout,
            catoniStyleLayout,
            catoniBedSideLayout,
            coloursCatoniLayout,
            overbedTablesLayout,
            transportChairsLayout,
            hillromColoursCollectionLayout,
            coatedFabricColoursLayout,
            seatingFurnitureLayout,
            sleeperSofaLayout,
            sleeperChairLayout,
            overbedTables2Layout,
            bedsideCabinetsLayout,
            transferBoardLayout
        ],
        pageBreakBefore: function(currentNode, followingNodesOnPage, nodesOnNextPage, previousNodesOnPage) {
            return currentNode.headlineLevel === 1 && followingNodesOnPage.length === 0;
        },
        styles: {
            header: {
                fontSize: 15,
                bold: true,
                color: '#1c3384',
            },
            index: {
                fontSize: 11,
                color: '#1c3384',
            },
            indexbackground: {
                fontSize: 11,
                color: '#ffffff',
                bold: true,
                background: '#546ce4'
            },
            subheader: {
                fontSize: 13,
                bold: true,
                color: '#1c3384',
            },
            textosubrayado: {
                fontSize: 9,
            },
            textolista: {
                fontSize: 7,
            },
            textolista2: {
                fontSize: 8,
            },
            textotabla: {
                fontSize: 7,
            },
            textotablabold: {
                fontSize: 7,
                bold: true,
                color: '#1c3384',
            },
            textotablaboldlarge: {
                fontSize: 9,
                bold: true,
                color: '#1c3384',
            },
            textotablatitle: {
                fontSize: 9,
                bold: true,
                color: '#546ce4',
            },
            textotablaboldblack: {
                fontSize: 7,
                bold: true,
                color: '#000000',
            },
            textotablacolor: {
                fontSize: 7,
                color: '#ffffff',
                bold: true,
            },
            textotablacolornormal: {
                fontSize: 7,
                color: '#ffffff',
            },
            textotablacolorlarge: {
                fontSize: 9,
                color: '#ffffff',
                bold: true,
            },
            textotablacatoni: {
                fontSize: 5.5,
            },
            textotablaboldcatoni: {
                fontSize: 5.5,
                bold: true,
                color: '#1c3384',
            },
            textotablaboldlargecatoni: {
                fontSize: 7,
                bold: true,
                color: '#1c3384',
            },
            textotablaboldblackcatoni: {
                fontSize: 5.5,
                bold: true,
                color: '#000000',
            },
            textotablacolorcatoni: {
                fontSize: 5.5,
                color: '#ffffff',
                bold: true,
            },
            parrafo: {
                fontSize: 8,
            },
            parrafoBold: {
                fontSize: 8,
                bold: true,
            },
            parrafoItalic: {
                fontSize: 8,
                italics: true,
            },
            footer: {
                fontSize: 6,
            },
            quote: {
                italics: true
            },
            small: {
                fontSize: 8
            },
            minispace: {
                fontSize: 3
            }
        }   
    };

    var pdfDoc = printer.createPdfKitDocument(docDefinition);
    pdfDoc.pipe(fs.createWriteStream('document.pdf'));
    pdfDoc.end();
}

createDocument()