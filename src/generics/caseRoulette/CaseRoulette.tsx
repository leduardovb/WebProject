import { useCallback, useEffect, useRef, useState } from "react";
import { CaseDTO, GunDTO } from "../../dataTransferObject/DTOs";
import { generateItemQuantityToRoulette } from "../utils/GenerateItemsQuantityToRoulette";
import { SeedCases } from "../utils/SeedCases";
import {
  Container,
  GunCard,
  GunImage,
  Roulette,
  RouletteLine,
  Shadow,
} from "./CaseRouletteBase";

type Props = {
  caseProps: CaseDTO;
};

function CaseRoulette() {
  //const { caseProps: skinsCase } = props;
  const [items, setItems] = useState<GunDTO[]>([]);
  const [roundLeft, setRandomLeft] = useState<string>("");
  const [isRouletteAnimation, setIsRouletteAnimation] = useState<boolean>(true);
  const roulette = useRef<HTMLDivElement>(null);
  const rouletteLine = useRef<HTMLHRElement>(null);
  const skinsCase: CaseDTO = SeedCases()[0];

  const generateItems = useCallback(() => {
    let rouletteItems: GunDTO[] = [];
    const randomLeftPosSkinWinner: number = Math.floor(
      Math.random() * 1000 + 6800
    );
    skinsCase.caseGuns.forEach((value: GunDTO) => {
      const gunRouletteQuantity: number = generateItemQuantityToRoulette(
        value.gunRarity
      );
      const gunArray: GunDTO[] = new Array(gunRouletteQuantity);
      gunArray.fill(value);
      gunArray.forEach((item: GunDTO) => {
        rouletteItems.push(item);
      });
    });
    rouletteItems.sort((a, b) => {
      if (a.description > b.description) {
        return 1;
      } else if (a.description < b.description) {
        return -1;
      }
      return 0;
    });

    if (rouletteItems.length < 30) {
      rouletteItems = rouletteItems.concat(rouletteItems);
    }

    setRandomLeft(String(`-${randomLeftPosSkinWinner}px`));
    setItems(rouletteItems);
  }, []);

  function getSkinWinner() {
    if (roulette !== null && roulette.current !== null) {
      const skins: HTMLCollection = roulette.current.children;
      const rouletteLine: DOMRect | undefined = getRouletteLinePosition();

      if (rouletteLine) {
        const skinCardWidth: number = 260;
        for (let index = 0; index < skins.length; index++) {
          const coords = skins[index].getBoundingClientRect();

          if (coords.x >= rouletteLine.x - skinCardWidth && coords.x <= 681) {
            console.log(skins[index]);
          }
        }
      }
    }
  }

  function getRouletteLinePosition() {
    if (rouletteLine !== null && rouletteLine.current) {
      return rouletteLine.current.getBoundingClientRect();
    }
  }

  useEffect(() => {
    generateItems();
  }, [generateItems]);

  useEffect(() => {
    setTimeout(() => {
      setIsRouletteAnimation(false);
    }, 5000);
  }, []);

  useEffect(() => {
    if (!isRouletteAnimation) getSkinWinner();
  }, [isRouletteAnimation]);

  return (
    <Container>
      <Roulette
        ref={roulette}
        left={roundLeft}
        isRouletteAnimation={isRouletteAnimation}
      >
        {items.length > 0 ? (
          <>
            {items.map((item: GunDTO, index: number) => {
              return (
                <GunCard
                  key={index}
                  id={String(index)}
                  borderColor={item.gunRarity.color}
                >
                  <GunImage src={item.gunImage} />
                </GunCard>
              );
            })}
          </>
        ) : (
          <></>
        )}
      </Roulette>
      <RouletteLine ref={rouletteLine} />
    </Container>
  );
}

export default CaseRoulette;
