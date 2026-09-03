// Centralized assets catalogue for the virtual CV website
// All images are served from public/images/ via BASE_URL for GitHub Pages compatibility

const BASE = import.meta.env.BASE_URL;

export const siteImages = {
  // Photo de profil Rekik Ayoub
  profile: `${BASE}images/profile.jpg`,

  // Images des projets
  wearOsHygiene: `${BASE}images/wearos_hygiene.jpg`,
  iotDashboard: `${BASE}images/iot_dashboard.jpg`,
  ecosystemPfe: `${BASE}images/ecosystem_pfe.jpg`,
  hospitalHygiene: `${BASE}images/hospital_hygiene.jpg`,
};

export default siteImages;
