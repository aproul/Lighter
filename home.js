const flame = document.querySelector('.flame');
const switchButton = document.getElementById('switch');
const body = document.body;

const words = [
    "آتش", 
    "api", 
    "fire", 
    "fuego", 
    "ogień", 
    "огонь", 
    "火",
    "आगि",
    "nina",
    "yanğın",
    "آس",
    "sua",
    "zjarrit"
];

const characters = document.querySelectorAll('.character');

const getRandomOrangeShade = () => {
    const red = Math.floor(Math.random() * 156) + 100; // 100-255 for red
    const green = Math.floor(Math.random() * 80); // 0-127 for green
    const blue = 0; // keep blue at 0 for orange shades
    return `rgb(${red}, ${green}, ${blue})`;
};

characters.forEach(character => {
    character.addEventListener('click', () => {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        character.textContent = randomWord; // Change the button text to the random word
        character.style.backgroundColor = getRandomOrangeShade(); // Use random orange shade
        setTimeout(() => {
            character.style.backgroundColor = ''; // Revert to original color
        }, 2000); // Wait for 3 seconds
    });
});

// Show flame and change background color on mouse down
switchButton.addEventListener('mousedown', () => {
    flame.style.height = '80px';
    flame.style.opacity = '1';
    body.style.backgroundColor = '#FDFD96'; // Change background to yellow
});

// Hide flame and revert background color on mouse up
switchButton.addEventListener('mouseup', () => {
    flame.style.height = '0';
    flame.style.opacity = '0';
    body.style.backgroundColor = '#cdcdcd';
});

// Hide flame and revert background color if mouse leaves the switch
switchButton.addEventListener('mouseleave', () => {
    flame.style.height = '0';
    flame.style.opacity = '0';
    body.style.backgroundColor = '#cdcdcd';
});
