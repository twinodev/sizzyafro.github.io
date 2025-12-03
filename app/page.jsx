import Team from "@Components/team";
export const metadata = {
title: {
        absolute: "Sizzy Afro Dances"
    }
}

const Index = () => {
    return (
        <section className = "w-full  md:flex flex-col m-5 flex-center">
            <h1 className="text-orange-500 text-center font-bold text-[min(7vw,70px)] ">
                Sizzy Afro Dances</h1>
            <h3 className="text-center text-[min(4vw,40px)] text-blue-400">
                Embracing the Culture and Rythm</h3>
            <p className="text-center text-[min(3vw,30px)]">
                Your One Dance teacher, Choreographer and Dance class Host
            </p>
            <h1 className="text-center font-bold text-[min(4vw,40px)] text-blue-400">Our Team</h1>
              <div className="md:flex block justify-center">
                <Team/>
                <Team/>
                <Team/>
            </div>
        </section>
    )
}

export default Index;