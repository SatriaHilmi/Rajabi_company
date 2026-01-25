import bg1 from "../assets/kayu_1.jpeg";
import bg2 from "../assets/kayu_2.jpeg";
import bg3 from "../assets/kayu_3.jpeg";
import bg4 from "../assets/kayu_4.jpeg";

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
    ]

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-auto items-center my-5 px-10">
                {produkData.map((item, index) => (
                    <div className="max-w-4xl rounded-lg overflow-hidden shadow-lg border hover:border-green-500 transition hover:-translate-y-1 hover:scale-105 duration-300" key={index}>
                        <img src={item.img} alt="gambar produk" className="w-full aspect-square object-cover" />
                        {/* <div className="p-3 text-center">
                            <p className="font-semibold text-sm md:text-md">{item.text}</p>
                        </div> */}
                    </div>
                ))}
            </div>
        </>
    )
}