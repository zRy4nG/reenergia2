import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function About() {
    const MenbersList = [
        {
            icon: 'https://i.imgur.com/YXBNpXU.png',
            name: "Ayslan Sena",
            function: "Desenvolvedor, Tech Lead",
        },
        {
            icon: 'https://i.imgur.com/Y2e5JWM.png',
            name: "Ryan Reis",
            function: "Desenvolvedor, Programador Frontend",
        },
        {
            icon: 'https://i.imgur.com/VG6xdHd.png',
            name: "J.Victor Reis",
            function: "Desenvolvedor, Programador Backend",
        },
        {
            icon: 'https://i.imgur.com/tatFErB.png',
            name: "P.Levy Ponciano",
            function: "Desenvolvedor, Copywriter",
        },
        {
            icon: 'https://i.imgur.com/zcnQdVf.png',
            name: "Lian Carvalho",
            function: "Desenvolvedor, Designer",
        },
        {
            icon: 'https://i.imgur.com/tGXQGrH.png',
            name: "Ryan Giló",
            function: "Testador",
        },
    ];

    const apoiadoreslist = [
        {
            icon: 'https://i.imgur.com/RjvHK0Z.png',
            name: "Felipe Bastos",
            function: "Professor e orientador",
        },
        {
            icon: 'https://i.imgur.com/236kzM2.png',
            name: "Andressa Bezerra",
            function: "Professor e orientador",
        },
        {
            icon: 'https://i.imgur.com/A7fiTuf.png',
            name: "Gabriel Jonas",
            function: "Professor e orientador",
        },
        {
            icon: 'https://i.imgur.com/91aDSTp.png',
            name: "Régis Nogueira",
            function: "Professor e orientador",
        },
    ];

  return (
    <>
      <Navbar />
        <section className="py-20 bg-[#F5F7F2]">
            <div className="container mx-auto px-4">
                <div className="mt-16 mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-6">
                        Nossa Equipe
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {MenbersList.map((energy, index) => {
                        return (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer">
                                <div className="flex">
                                    <div className={`inline-flex rounded-full`}>
                                        <Image
                                            className="rounded rounded-[10px] max-w-[120px] max-h-[120px]"
                                            src={energy.icon}
                                            width={120}
                                            height={120}
                                            alt="Picture of the author"
                                        />
                                    </div>
                                    <div className="ml-[15px]">
                                        <h3 className="text-xl font-bold text-black mb-1">
                                            {energy.name}
                                        </h3>
                                        <p className="text-[#555555] leading-relaxed">
                                            {energy.function}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
        <section className="py-20 bg-[#6C8B74]">
            <div className="container mx-auto px-4 mb-50">
                <div className="mt-10 mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#E8F6E6] mb-6">
                        Nossos Apoiadores
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {apoiadoreslist.map((energy, index) => {
                        return (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer">
                                <div className="flex">
                                    <div className={`inline-flex rounded-full`}>
                                        <Image
                                            className="rounded rounded-[10px] w-[120px] h-[120px]"
                                            src={energy.icon}
                                            width={120}
                                            height={120}
                                            alt="Picture of the author"
                                        />
                                    </div>
                                    <div className="ml-[15px]">
                                        <h3 className="text-xl font-bold text-black mb-1">
                                            {energy.name}
                                        </h3>
                                        <p className="text-[#555555] leading-relaxed">
                                            {energy.function}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    </>
  );
}





