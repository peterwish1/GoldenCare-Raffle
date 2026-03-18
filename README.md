# Golden Care Raffle 🎗️ - Solana cNFT Infrastructure

## Overview
Este repositorio contiene el framework técnico para la **Gran Rifa Benéfica Golden Care**. Utilizamos la tecnología de **Compressed NFTs (cNFTs)** de Solana para emitir boletos digitales de bajo costo, permitiendo que el 99% de los fondos recaudados se destinen directamente a ayudas médicas y tratamientos de salud en Venezuela.

Basado en el estándar de [Metaplex Digital Asset RPC API](https://github.com/metaplex-foundation/digital-asset-rpc-infrastructure).

## ¿Por qué usamos Compressed NFTs?
Emitir 1,000 boletos como NFTs tradicionales sería costoso. Al usar el programa **Bubblegum** de Metaplex, comprimimos los datos en un "Árbol de Merkle" on-chain. Esto nos permite:
- Escalar la rifa a miles de participantes con costos mínimos.
- Garantizar la transparencia total: cada boleto es único, verificable y seguro en la blockchain de Solana.
- Mantener la integridad de los sorteos mediante pruebas criptográficas.

## Configuración del Entorno (Devnet)
Para probar el flujo de emisión de tickets en la red de prueba:

1. Configura tu `rpcUrl` en el archivo `index.ts`. Puedes usar el de ZAN.top o los de Metaplex:
   `https://api.zan.top/node/v1/solana/devnet/TU_API_KEY`
   o
   `https://rpc-devnet.aws.metaplex.com/`

2. **Nota sobre los Tokens (Solana Faucet):**
   Si el airdrop falla por falta de fondos en el servidor, asegúrate de haber fondeado tu wallet manualmente (recomendamos usar el faucet de **PocketDefi**).

3. Para ejecutar el flujo de prueba:
   `ts-node ./index.ts`

## Créditos y Tecnología
- **Protocolo:** Metaplex (Bubblegum Program).
- **Red:** Solana Devnet.
- **Propósito:** Recaudación de fondos para causas médicas (Golden Care Project).

---
*Desarrollado con pasión desde Venezuela utilizando Bodhi Linux.*