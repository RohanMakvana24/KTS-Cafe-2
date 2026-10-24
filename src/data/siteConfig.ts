/**
 * KT’s Cafe — Site & Location Configuration
 *
 * Store verified business information here. Unverified values are intentionally set to `null`
 * to prevent fabricated business claims, fake reviews, or dead interactive controls.
 */

export interface SiteConfig {
  cafeName: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  verifiedAddress: string;
  landmark: string;
  googleMapsDestinationUrl: string;
  googleMapsEmbedUrl: string;
  googleReviewUrl: string | null;
  verifiedPhoneNumber: string;
  verifiedWhatsAppNumber: string;
  instagramHandle: string;
  instagramUrl: string;
  verifiedEmail: string | null;
  formSubmissionEndpoint: string | null;
}

export const SITE_CONFIG: SiteConfig = {
  cafeName: "KT’s Cafe",
  city: "Rajkot",
  state: "Gujarat",
  country: "India",
  postalCode: "360001",

  // Verified landmark & address in Rajkot
  landmark: "Opp. Imperial Palace Hotel, Dr. Yagnik Road",
  verifiedAddress: "Opp. Imperial Palace Hotel, Dr. Yagnik Road, Jagnath Plot, Rajkot, Gujarat 360001",

  // Confirmed Google Maps destination & embed centered on Dr. Yagnik Road Rajkot
  googleMapsDestinationUrl: "https://www.google.com/maps/search/?api=1&query=KT%27s+Cafe+Opp+Imperial+Palace+Dr+Yagnik+Road+Rajkot+Gujarat",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=Opp.+Imperial+Palace+Hotel,+Dr.+Yagnik+Road,+Rajkot,+Gujarat+360001&t=&z=16&ie=UTF8&iwloc=&output=embed",

  // Google review link placeholder (requires verified Google business CID)
  googleReviewUrl: null,

  // Verified contact phone & WhatsApp
  verifiedPhoneNumber: "+91 97277 47744",
  verifiedWhatsAppNumber: "919727747744",
  instagramHandle: "@kts_cafe",
  instagramUrl: "https://www.instagram.com/kts_cafe/",

  verifiedEmail: null,
  formSubmissionEndpoint: null,
};

