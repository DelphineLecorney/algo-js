/*
Créez une fonction space age qui prend deux arguments, un nombre de secondes et une planète qui peut être : 
Mercury, Venus, Earth, Marsou Jupiter. La fonction devrait renvoyer votre âge spatial sur cette planète.
*/

function spaceAge(seconds, planet) {
  // Conversion en années terrestres
  const earthYears = seconds / 31557600;

  // Dictionnaire de rapports de conversion pour chaque planète
  const planetRatios = {
    Mercury: 0.2408467,
    Venus: 0.61519726,
    Earth: 1.0,
    Mars: 1.8808158,
    Jupiter: 11.862615,
  };

  // Calcul de l'âge spatial en années sur la planète donnée
  if (planet in planetRatios) {
    const planetAge = earthYears / planetRatios[planet];
    return planetAge;
  } else {
    return "Planète non prise en charge";
  }
}

spaceAge(365.25 * 24 * 60 * 60, "Earth");
  