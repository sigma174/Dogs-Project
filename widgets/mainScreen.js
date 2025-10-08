import dogs from "../img/Main.png";
import Image from "next/image";

export const MainScreen = () => {
    return(
        <div className="flex justify-center w-full">
            <Image src={ dogs }></Image>
        </div>
    )
}