 export function calculateFallDistance(time) {
    const gravity =9.8;
    const distance =0.5* gravity*Math.pow(time,2);
    return distance;
}
const fallenTime =3;//обьект падал 3 секунды
const fallenDistance= calculateFallDistance(fallenTime);
console.log(`Расстояние падения за ${fallenTime} секунд:${fallenDistance}метров`);