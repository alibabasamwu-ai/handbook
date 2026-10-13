const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, AlignmentType, BorderStyle, ShadingType, VerticalAlign, HeadingLevel } = require('docx');
const fs = require('fs');

/**
 * 根据抓取的 JSON 数据生成 Word 报告
 * @param {Array} data 商机数据数组
 * @param {string} dateString 报告日期
 */
async function generateDocx(data, dateString) {
    const tableBorder = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
    const cellBorders = { top: tableBorder, bottom: tableBorder, left: tableBorder, right: tableBorder };

    const rows = [
        new TableRow({
            tableHeader: true,
            children: ["客户名字", "国家", "金额", "阶段", "跟进人", "进展总结"].map(text => 
                new TableCell({
                    borders: cellBorders,
                    shading: { fill: "D5E8F0", type: ShadingType.CLEAR },
                    verticalAlign: VerticalAlign.CENTER,
                    children: [new Paragraph({ 
                        alignment: AlignmentType.CENTER,
                        children: [new TextRun({ text, bold: true, size: 20 })]
                    })]
                })
            )
        }),
        ...data.map(item => new TableRow({
            children: [item.name, item.country, item.amount, item.stage, item.owner, item.summary].map(text => 
                new TableCell({
                    borders: cellBorders,
                    children: [new Paragraph({ children: [new TextRun({ text, size: 18 })] })]
                })
            )
        }))
    ];

    const doc = new Document({
        styles: {
            default: { document: { run: { font: "Arial", size: 20 } } }
        },
        sections: [{
            properties: { page: { margin: { top: 720, right: 720, bottom: 720, left: 720 } } },
            children: [
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    heading: HeadingLevel.TITLE,
                    children: [new TextRun({ text: `每日商机进展分析报告 (${dateString})`, bold: true, size: 36 })]
                }),
                new Paragraph({ spacing: { before: 200, after: 200 } }),
                new Table({
                    columnWidths: [1500, 1000, 1000, 1500, 1000, 3360],
                    rows: rows
                })
            ]
        }]
    });

    const buffer = await Packer.toBuffer(doc);
    fs.writeFileSync(`OKKI_Daily_Report_${dateString.replace(/-/g, '')}.docx`, buffer);
}
