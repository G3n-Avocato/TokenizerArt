# IPFS and Metadata

## IPFS

The NFT artwork is stored using IPFS instead of being stored directly on the blockchain.  
IPFS provides content-addressed storage.  

A file stored on IPFS receives a unique Content Identifier (CID).

The CID allows the content to be referenced independently of a traditional centralized URL. An IPFS URI uses this CID to reference the content using the `ipfs://` scheme.  

## NFT Image
The NFT artwork is stored on IPFS.

Image URI:
```text
ipfs://bafybeib63tvpe6pkxqr2xmzssghpfs6x4t4moxzgtgj7sbioetcqqco2i4
```

## Metadata
The NFT metadata is also stored on IPFS.

Metadata URI:
```text
ipfs://bafkreigf6ulfoio4zfylbugifko22woryuwiysvhacmc25s4sc736n4a2y
```

The CID is the content identifier contained in the IPFS URI.
## Metadata Structure
The metadata JSON contains the information required to describe the NFT.

A simplified example is:

```json
{
    "name": "PipBoy42",
    "description": "...",
    "artist": "name",
    "image": "ipfs://IMAGE_CID"
}
```
The `image` field references the artwork stored on IPFS.

## Relationship Between the Contract and IPFS
The smart contract does not store the complete image or metadata.

Instead, the NFT stores a URI pointing to the metadata:

```text
    tokenURI(tokenId)
        |
        v
    ipfs://METADATA_CID
        |
        v
    metadata.json
        |
        v
    ipfs://IMAGE_CID
        |
        v
    NFT artwork
```

## Stockage IPFS with Pinata 

```text
Create your image.png
        |
        v
Upload on IPFS Pinata
        |
        v
Gives you first CID for image
        |
        v
fill the file metadata.json with ("image" : "ipfs://CID_image")  
        |
        v
Upload the file metadata.json on IPFS Pinata
        |
        v
Give you second CID for metadata.json
        |
        v
To mint your NFT with fct safeMint(to, "ipfs://CID_metadata")
```  
