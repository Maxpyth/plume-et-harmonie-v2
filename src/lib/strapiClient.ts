// lib/strapiClient.ts

const API_URL: string = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:1337";
const API_TOKEN: string | undefined = process.env.STRAPI_API_TOKEN;

if (!API_TOKEN) {
  throw new Error("⚠️ Missing STRAPI_API_TOKEN in environment variables");
}

/**
 * Type générique pour les réponses Strapi
 */
export interface StrapiResponse<T> {
  data: T[];
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
/**
 * Réponse Strapi pour un single type
 */
export interface StrapiSingleResponse<T> {
  data: T;
  meta: Record<string, unknown>;
}

/**
 * Type pour un format d'image (small, medium, large, thumbnail)
 */
export interface MediaFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

/**
 * Type pour un media Strapi
 */
export interface Media {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    large?: MediaFormat;
    medium?: MediaFormat;
    small?: MediaFormat;
    thumbnail?: MediaFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: Record<string, unknown> | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}


/**
 * Type pour une Section (composant personnalisé)
 */
export interface Section {
  id: number;
  Titre: string;
  Couleur_de_fond: "clair" | "foncé" | string; // si tu veux typer plus strictement
}

/**
 * Exemple de type pour ton `home-page` (à adapter selon ton contenu Strapi)
 */
export interface HomePage {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Titre_ordinateur: string;
  Sous_titre_ordinateur: string;
  Titre_mobile: string;
  Sous_titre_mobile: string;

    // Champs personnalisés
  Section: Section[]; // tableau de sections
  section2: Section[] | null; // ou un autre type si section2 ≠ Section

  // Champ media
  image_header: Media;

}


/**
 * Requête générique vers Strapi
 */
export async function fetchFromStrapi<T>(
  path: string,
  options: RequestInit = {},
  revalidate: number = 60 // ISR par défaut
): Promise<T> {
  const url = new URL(path, API_URL);

  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      "Content-Type": "application/json",
    },
    next: { revalidate }, // spécifique App Router
    ...options,
  });

  if (!res.ok) {
    console.error(`❌ Strapi fetch error: ${res.status} ${res.statusText}`);
    throw new Error(`Failed to fetch from Strapi: ${res.status}`);
  }

  return res.json() as Promise<T>;
}

/**
 * Fonction dédiée : récupérer la home page (single type)
 */
export async function getHomePage(): Promise<StrapiSingleResponse<HomePage>> {
  return fetchFromStrapi<StrapiSingleResponse<HomePage>>("/api/home-page?populate=*");
}