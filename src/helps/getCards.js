
export const getCards = async() =>{
    let nums = [];
    for (let i = 0; i < 5; i++) {
    const randomNumber = Math.floor(Math.random() * 800) + 1;
    nums.push(randomNumber);
    }
    const url = `https://rickandmortyapi.com/api/character/${nums.join(',')}`;
    const response = await fetch(url);
    const results = await response.json();
    return results;
}