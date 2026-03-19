const fs = require("fs");

// Asegúrate de que exista la carpeta metadata
if (!fs.existsSync("metadata")) {
    fs.mkdirSync("metadata");
}

const total = 1000;
const ipfsImage = "https://ipfs.io/ipfs/bafybeigag2agtuzf6utiymbdt727dyzyv5sramhri7zie7gl5sfcze6x2i";

for (let i = 0; i < total; i++) {
    let number = i.toString().padStart(3, "0");

    let metadata = {
        name: `Golden Care Ticket #${number}`,
        symbol: "GCR",
        description: "Golden Care Raffle Ticket. This NFT represents a numbered entry into the Golden Care charity raffle.",
        image: ipfsImage, // <--- Aquí ya está tu link de IPFS
        attributes: [
            {
                trait_type: "Ticket Number",
                value: number
            }
        ],
        properties: {
            files: [
                {
                    uri: ipfsImage,
                    type: "image/png"
                }
            ],
            category: "image"
        }
    };

    fs.writeFileSync(
        `metadata/${number}.json`,
        JSON.stringify(metadata, null, 2)
    );
}

console.log("✅ 1000 archivos de metadata actualizados con IPFS.");