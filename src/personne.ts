import { Contry } from "./contry";
import type { Personne } from './types';

const me: Personne = {
    Name: "Maxime",
    Age: 21,
    Nationality: Contry.France
};

function Display(pers: Personne) {
    console.log(`
        Hello, I'm ${pers.Name},
        I'm ${pers.Age} years old and,
        I come from ${pers.Nationality}
    `);
}

export default Display;