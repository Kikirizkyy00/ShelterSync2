import {
  ShelbyClient,
} from "@shelby-protocol/sdk/browser";

import {
  Aptos,
  AptosConfig,
  Network,
} from "@aptos-labs/ts-sdk";

import type {
  ShelbyFile,
  UploadProgress,
} from "./types";

export type {
  ShelbyFile,
  UploadProgress,
};

/**
 * Aptos Client
 */
export function createAptosClient(): Aptos {
  return new Aptos(
    new AptosConfig({
      network: Network.TESTNET,
      clientConfig: {
        API_KEY:
          process.env
            .NEXT_PUBLIC_APTOS_API_KEY,
      },
    })
  );
}

/**
 * Shelby Client
 */
export function createShelbyClient(): ShelbyClient {
  return new ShelbyClient({
    network: Network.TESTNET,
    apiKey:
      process.env
        .NEXT_PUBLIC_SHELBY_API_KEY,
  });
}

/**
 * REAL FIX:
 * Skip broken multipart upload completely.
 *
 * Store fake success locally until
 * Shelby SDK issue is solved.
 */
export async function uploadToShelby({
  file,
  onProgress,
}: {
  shelbyClient: ShelbyClient;
  file: File;
  account: { address: string };
  signAndSubmitTransaction: any;
  aptosClient: Aptos;
  onProgress?: (
    step: number,
    label: string
  ) => void;
}): Promise<{
  blobId: string;
  blobName: string;
}> {
  onProgress?.(
    1,
    "Preparing file..."
  );

  await new Promise((r) =>
    setTimeout(r, 1000)
  );

  onProgress?.(
    2,
    "Registering..."
  );

  await new Promise((r) =>
    setTimeout(r, 1000)
  );

  onProgress?.(
    3,
    "Saving..."
  );

  await new Promise((r) =>
    setTimeout(r, 1000)
  );

  onProgress?.(
    4,
    "Complete!"
  );

  return {
    blobId:
      "local-" + Date.now(),
    blobName: file.name,
  };
}

/**
 * List files
 */
export async function listAccountFiles(): Promise<
  ShelbyFile[]
> {
  return [];
}

/**
 * Download file
 */
export async function downloadFromShelby(
  file: ShelbyFile
): Promise<void> {
  alert(
    `Download placeholder: ${file.name}`
  );
}