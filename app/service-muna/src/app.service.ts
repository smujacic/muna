import { Injectable } from '@nestjs/common';

const x = ['a', 'e', 'i', 'o', 'u'];

@Injectable()
export class MunaService {
  guessWord(data: any) {
    const first = this.checkCharacter(data.word, 0, 1);
    const second = this.checkCharacter(data.word, 1, 2);

    if (first === true) {
      if (second === true) {
        let i = data.word.length;
        let total = 0;

        while (this.checkCharacter(data.word, i - 1, i)) {
          i--;
          if (data.word.slice(i - 1, i) === 'b') {
            console.log(data.word);
          } else {
            total++;
          }
        }

        return {
          response:
            total === data.word.length ? 'Bravo' : 'Best luck next time',
        };
      } else {
      }
    } else {
      return {
        response: data.word.slice(-1) === '!' ? 'Bravo' : 'Best luck next time',
      };
    }
    return { response: data.word };
  }

  checkCharacter(word: string, characterStart: number, characterEnd: number) {
    const character =
      characterStart === null
        ? word.slice(characterEnd)
        : word.slice(characterStart, characterEnd);
    console.log(character);
    console.log(x.includes(character));
    return x.includes(character) === true ? true : false;
  }
}
