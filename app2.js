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
var ruta = "/Users/alexishernandezolvera/Desktop/GTC/PROYECTOS/hillrom-pdf-layouts/"

var mobileLifts = require("./layoutsGruas/MobileLifts.js")
var viking = require("./layoutsGruas/Viking.js")
var sabina = require("./layoutsGruas/Sabina.js")
var mobileLiftsAccesories = require("./layoutsGruas/MobileLiftsAccesories.js")
var overheadLifts = require("./layoutsGruas/OverheadLifts.js")
var railSystemH70 = require("./layoutsGruas/RailSystemH70.js")
var railSystemH100 = require("./layoutsGruas/RailSystemH100.js")
var railSystemH140 = require("./layoutsGruas/RailSystemH140.js")
var assemblyParts = require("./layoutsGruas/AssemblyParts.js")
var railSwitchSystem = require("./layoutsGruas/RailSwitchSystem.js")
var freespanStraightRail = require("./layoutsGruas/FreespanStraightRail.js")
var freespanTraverse = require("./layoutsGruas/FreespanTraverse.js")
var freespanUltraTwin = require("./layoutsGruas/FreespanUltraTwin.js")
var freeStand = require("./layoutsGruas/FreeStand.js")
var freeSpirit = require("./layoutsGruas/FreeSpirit.js")
var liftingAccesories = require("./layoutsGruas/LiftingAccesories.js")
var slingsForChildren = require("./layoutsGruas/SlingsForChildren.js")
var slingsForAdults = require("./layoutsGruas/SlingsForAdults.js")
var accesoriesForSlings = require("./layoutsGruas/AccesoriesForSlings.js")
var likoOriginalHighback = require("./layoutsGruas/LikoHighback.js")
var likoConfortsling = require("./layoutsGruas/LikoConfortSling.js")
var likoMastervest = require("./layoutsGruas/LikoMastervest.js")
var likoLiftPants = require("./layoutsGruas/LikoLiftPants.js")
var likoStretchers = require("./layoutsGruas/LikoStretchers.js")
var likoFlexostretch = require("./layoutsGruas/LikoFlexostretch.js")
var reposheet = require("./layoutsGruas/Reposheet.js")
var manualAIDS = require("./layoutsGruas/ManualAids.js")

async function createDocument()
{
    var mobileLiftsLayout = await mobileLifts.getMobileLifts()
    var vikingLayout = await viking.getViking()
    var sabinaLayout = await sabina.getSabina()
    var mobileLiftsAccesoriesLayout = await mobileLiftsAccesories.getMobileLiftAccesories()
    var overheadLiftsLayout = await overheadLifts.getOverheadLifts()
    var railSystemH70Layout = await railSystemH70.getRailSystemH70()
    var railSystemH100Layout = await railSystemH100.getRailSystemH100()
    var railSystemH140Layout = await railSystemH140.getRailSystemH140()
    var assemblyPartsLayout = await assemblyParts.getAssemblyParts()
    var railSwitchSystemLayout = await railSwitchSystem.getRailSwitchSystem()
    var freespanStraightRailLayout = await freespanStraightRail.getFreespanStraightRail()
    var freespanTraverseLayout = await freespanTraverse.getFreespanTraverse()
    var freespanUltraTwinLayout = await freespanUltraTwin.getFreespanUltraTwin()
    var freeStandLayout = await freeStand.getFreeStand()
    var freeSpiritLayout = await freeSpirit.getFreeSpirit()
    var liftingAccesoriesLayout = await liftingAccesories.getLiftingAccesories()
    var slingsForChildrenLayout = await slingsForChildren.getSlingsForChildren()
    var slingsForAdultsLayout = await slingsForAdults.getSlingsForAdults()
    var accesoriesForSlingsLayout = await accesoriesForSlings.getAccesoriesForSlings()
    var likoOriginalHighbackLayout = await likoOriginalHighback.getLikoOriginalHighback()
    var likoConfortslingLayout = await likoConfortsling.getLikoConfortsling()
    var likoMastervestLayout = await likoMastervest.getLikoMastervest()
    var likoLiftPantsLayout = await likoLiftPants.getLikoLiftPants()
    var likoStretchersLayout = await likoStretchers.getLikoStretchers()
    var likoFlexostretchLayout = await likoFlexostretch.getLikoFlexostretch()
    var reposheetLayout = await reposheet.getReposheet()
    var manualAIDSLayout = await manualAIDS.getManualAIDS()

    const fecha = new Date();
    fecha.toLocaleDateString()

    var coverPage = [
        '\n\n',
        { image: "images/BaxterEncabezado.png", width: 570, height: 30, alignment: 'center'},
        '\n\n\n\n\n\n\n\n\n\n\n',
        { image: "images/Hillroom.png", width: 120, height: 47, alignment: 'center'},
        { text: 'LIKO PRICEBOOK 2021', style: 'header', alignment: "center" },
        { text: 'USD - NAME COUNTRY HERE', style: 'header', alignment: "center" },
        { image: "images/Cover2.png", width: 400, height: 250, alignment: 'center'},
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
        pageMargins: [ 30, 10, 30, 30 ],
        /*header: function(currentPage) 
        {
            if(currentPage > 2){
                return {
                    margin: [30, 20],
                    columns: [
                        [
                            {image: "images/Baxter.png", width: 90, height: 20},
                        ],
                        {
                            text: fecha.toLocaleDateString(), style: 'footer', alignment: 'right'
                        },
                        {
                            text: 'Mobile Lifts', style: 'footer', alignment: 'right',
                        },
                       
                    ],
                    columns: [
                        [
                            {image: "images/BaxterEncabezado.png", width: 537, height: 30, alignment: "center"},
                        ],
                        {
                            text: ""
                        },
                        {
                            text: ""
                        },
                       
                    ]
                }
            }
        },*/
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
                            text: '00 - Name country here - 2021 Liko Capital Price Book V06', style: 'footer', alignment: 'right'
                        },
                    ]
                }
            } 
        },
        content: [
            coverPage,
            index,
            mobileLiftsLayout,
            vikingLayout,
            sabinaLayout,
            mobileLiftsAccesoriesLayout,
            overheadLiftsLayout,
            railSystemH70Layout,
            railSystemH100Layout,
            railSystemH140Layout,
            assemblyPartsLayout,
            railSwitchSystemLayout,
            freespanStraightRailLayout,
            freespanTraverseLayout,
            freespanUltraTwinLayout,
            freeStandLayout,
            freeSpiritLayout,
            liftingAccesoriesLayout,
            slingsForChildrenLayout,
            slingsForAdultsLayout,
            accesoriesForSlingsLayout,
            likoOriginalHighbackLayout,
            likoConfortslingLayout,
            likoMastervestLayout,
            likoLiftPantsLayout,
            likoStretchersLayout,
            likoFlexostretchLayout,
            reposheetLayout,
            manualAIDSLayout
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
            textotablacolor: {
                fontSize: 9,
                color: '#ffffff',
                bold: true,
            },
            textotablacolornormal: {
                fontSize: 7,
                color: '#ffffff',
            },
            textotablacolorlarge: {
                fontSize: 13,
                color: '#ffffff',
                bold: true,
            },
            textotablacolorlargecatoni: {
                fontSize: 10,
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
    pdfDoc.pipe(fs.createWriteStream('document2.pdf'));
    pdfDoc.end();
}

createDocument()