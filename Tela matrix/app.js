const lattersContainers = document.querySelectorAll('.latters')
const latters = document.querySelectorAll('p')

const matrixCharacters = [
    "א", "ב", "ג", "ד", "ה", "ז", "ח", "כ", "ל", "מ", "נ", "ע", "פ", "צ", "ק", "ר", "ש", "ת",
    "カ", "キ", "ク", "ケ", "コ", "サ", "シ", "ス", "セ", "ソ", "タ", "チ", "ツ", "テ", "ト", "ナ", "ニ", "ヌ", "ネ",
    "ハ", "ヒ", "フ", "ヘ", "ホ", "マ", "ミ", "ム", "メ", "モ", "ヤ", "ユ", "ヨ", "ラ", "リ", "ル", "レ", "ロ",
    "ワ", "ヲ", "ン"
  ]

setInterval(() => {
    const randomCharacter = Math.floor(Math.random() * matrixCharacters.length)

    lattersContainers.forEach(lattersContainer => {
        const lattersContainerChildreen = Array.from(lattersContainer.children)
        const randomLatter = Math.floor(Math.random() * lattersContainerChildreen.length)
        lattersContainerChildreen[randomLatter].textContent = matrixCharacters[randomCharacter]
    })
    //latters[randomLatter].textContent = matrixCharacters[randomCharacter]
}, 40)



setInterval(() => {
    const randomContainerLatter = Math.floor(Math.random() * lattersContainers.length)
    lattersContainers[randomContainerLatter].style.animation = 'latters-animation 15s forwards infinite'
}, 500)



/*

 א ב ג ד ה ו ז ח ט י כ ל מ נ ס ע פ צ ק ר ש ת

カ キ ク ケ コ サ シ ス セ ソ タ チ ツ テ ト ナ ニ ヌ ネ ノ
ハ ヒ フ ヘ ホ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ
ワ ヲ ン

*/