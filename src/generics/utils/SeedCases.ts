import { CaseDTO, GunDTO, GunRarity } from "../../dataTransferObject/DTOs";
import { GunArray01 } from "./Guns";
import ShineCase from "../../images/cases/case.png"

export function SeedCases() {
    let cases: CaseDTO[] = [
        {
            description: "Rifle Case",
            caseImage: ShineCase,
            caseValue: 350.00,
            caseGuns: GunArray01
        },
        {
            description: "Rifle Case",
            caseImage: ShineCase,
            caseValue: 350.00,
            caseGuns: GunArray01
        },
        {
            description: "Rifle Case",
            caseImage: ShineCase,
            caseValue: 350.00,
            caseGuns: GunArray01
        },
        {
            description: "Rifle Case",
            caseImage: ShineCase,
            caseValue: 350.00,
            caseGuns: GunArray01
        },
        {
            description: "Rifle Case",
            caseImage: ShineCase,
            caseValue: 350.00,
            caseGuns: GunArray01
        },
    ]

    return cases
}