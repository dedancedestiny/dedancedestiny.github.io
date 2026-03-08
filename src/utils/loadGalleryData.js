import Papa from "papaparse";

export const loadGalleryData = async () => {
  const response = await fetch("/data/hero-gallery.csv");
  const csvText = await response.text();

  return new Promise((resolve) => {
    Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => resolve(result.data),
    });
  });
};