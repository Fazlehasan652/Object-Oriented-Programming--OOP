class TailwindButtonGenerator{
    static createButton(color, text,size){
        const button =`
        <button class="bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-${size} px-${size} mx-${size} rounded ">${text}</button>
        `

        return button
    }
}