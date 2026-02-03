import bg1 from "../assets/kayu_1.jpeg";
import bg2 from "../assets/kayu_2.jpeg";
import bg3 from "../assets/kayu_3.jpeg";
import bg4 from "../assets/kayu_4.jpeg";
import bg5 from "../assets/truk_1.jpeg";
import bg6 from "../assets/truk_2.jpeg";
import bg7 from "../assets/truk_3.jpeg"


interface produkProops {
    // text: string;
    img: string;
}

export const Produk = () => {

    const produkData: produkProops[] = [
        { img: bg1.src },
        { img: bg2.src },
        { img: bg3.src },
        { img: bg4.src },
        { img: bg5.src },
        { img: bg6.src },
        { img: bg7.src },
    ]

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto items-center my-5 px-10">
                {produkData.map((item, index) => {
                    const isLast = index === produkData.length - 1
                    const isOdd = produkData.length % 3 === 1

                    return (
                        <div key={index} className={`max-w-4xl rounded-lg overflow-hidden shadow-lg border hover:border-green-500 transition hover:-translate-y-1 hover:scale-105 duration-300 ${isLast && isOdd ? "md:col-span-3 flex justify-center mx-auto" : ""}`
                        }>
                            <img src={item.img} alt="gambar produk" className={`w-full aspect-square object-cover ${isLast && isOdd ? "md:max-w-96" : ""}`} />
                        </div>
                    )
                })}
            </div >
        </>
    )
}