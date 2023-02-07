import Layout from "../Layout"
import { usestate, useEffect } from "react"

export default function HomeIndex() { 
    const [pets, setPets] = usestate([])


    async function getPets() {
        const res = await fetch("https://milliax.github.io/raw/web_dev/pets.json");
        const response = await res.json();
    
        console.log(response)
        // setPets(response)
        // fetch("https://milliax.github.io/raw/web_dev/pets.json")
        //     .then(e => {
        //         console.log(e)
        //         return e.json()
        //     })
        //     .then(response => {
        //         console.log(response)
        //     })
        // A();
        // B();
        //�L����L�XA
        // �A�L�@�� �|�L�XB

        // javascript
        // �b�o�ӵ{����
        // �L�@��L�XB �A�L�@��L�XA
    }

    useEffect(() => {
        // fetch("https://milliax.github.io/raw/web_dev/pets.json")       
        getPets()
        //eslint-disable-next-line
    }, [])

    return (
        <Layout>
            <div className="grid grid-cols-2 gap-5 py-5 bg green-100 place-items-center">
                {pets.map((pet) => (
                    <div key={pet.name} className="w-44 h-32 bg-red-100 flex pt-3 pb-1 flex-col justify-between rounded-md shadow-md cursor-default select-none">
                        <div className="flex justify-center">
                            <img src={pet.imageURL} alt={`${pet.name}���Ӥ�`} className="w-28 h-28 object-cover rounded-lg"/>
                        </div>
                        <div className="w-full text-center">
                            {pet.name} {pet.breed}
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

// function A() {  
//     return setTimeout(() => {
//         console.log("A")
//     }, 2000)
// }
// function B() {  
//     return setTimeout(() => {
//         console.log("B")
//     }, 2000)
// }