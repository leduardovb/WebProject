import { GunDTO } from "../../dataTransferObject/DTOs";
import AkInvernal from "../../images/guns/akInvernal.png";
import AkEmperatriz from "../../images/guns/akImperatriz.png";
import MDragaoChines from "../../images/guns/m4DragaoChines.png";
import SGCyrex from "../../images/guns/sgAsimov.png";
import AWPRaposa from "../../images/guns/awpRaposa.png";
import { ClassifiedRarity, ConsumerRarity, ConvertRarity } from "./GunRaritys";

export const GunArray01: GunDTO[] = [
  {
    description: "Ak-47 - Frontside Misty",
    gunImage: AkInvernal,
    gunValue: 240.0,
    gunRarity: ClassifiedRarity,
  },
  {
    description: "Ak-47 - The Empress",
    gunImage: AkEmperatriz,
    gunValue: 450.0,
    gunRarity: ConvertRarity,
  },
  {
    description: "M4A4 - 龍王 (Dragon King)",
    gunImage: MDragaoChines,
    gunValue: 100.0,
    gunRarity: ClassifiedRarity,
  },
  {
    description: "SG 553 - Cyrex",
    gunImage: SGCyrex,
    gunValue: 83.0,
    gunRarity: ClassifiedRarity,
  },
  {
    description: "Ak-47 Campo",
    gunImage: SGCyrex,
    gunValue: 13.0,
    gunRarity: ConsumerRarity,
  },
  {
    description: "AWP - Hyper Beast",
    gunImage: AWPRaposa,
    gunValue: 438.0,
    gunRarity: ConvertRarity,
  },
];
