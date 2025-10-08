import { Header } from "./header";

export const Footer = () => {
    return(
        <div className="flex flex-col text-center gap-4">
            <Header/>
            <span className="font-[Montserrat] text-gray-400 font-semibold text-[16px]">Мирсаидов Давлатжон, Студент П-44</span>
        </div>
    )
}
