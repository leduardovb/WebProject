import { GunDTO } from "../../dataTransferObject/DTOs";
import AkInvernal from "../../images/guns/akInvernal.svg"
import AkEmperatriz from "../../images/guns/akEmperatriz.svg"
import MDragaoChines from "../../images/guns/m4DragaoChines.svg"
import SGCyrex from "../../images/guns/sgAsimov.svg"
import AWPRaposa from "../../images/guns/awpRaposa.svg"
import { ClassifiedRarity, ConvertRarity } from "./GunRaritys";

export const GunArray01: GunDTO[] = [
    {
        description: "Ak-47 - Frontside Misty",
        gunImage: AkInvernal,
        gunValue: 240.00,
        gunRarity: ClassifiedRarity
    },
    {
        description: "Ak-47 - The Empress",
        gunImage: AkEmperatriz,
        gunValue: 450.00,
        gunRarity: ConvertRarity
    },
    {
        description: "M4A4 - 龍王 (Dragon King)",
        gunImage: MDragaoChines,
        gunValue: 100.00,
        gunRarity: ClassifiedRarity
    },
    {
        description: "SG 553 - Cyrex",
        gunImage: SGCyrex,
        gunValue: 83.00,
        gunRarity: ClassifiedRarity
    },
    {
        description: "AWP - Hyper Beast",
        gunImage: AWPRaposa,
        gunValue: 438.00,
        gunRarity: ConvertRarity
    },
]