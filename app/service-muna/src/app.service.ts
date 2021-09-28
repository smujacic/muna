import { Injectable } from '@nestjs/common';

const x = ['a', 'e', 'i', 'o', 'u'];

@Injectable()
export class MunaService {
  guessWord(data: any) {
    const wordLength = data.word.length;

    if (wordLength > 100) {
      return {
        response:
          'The maximum length of the string is limited to 100 characters.',
      };
    }

    const first = this.checkCharacter(data.word, 0, 1);

    if (first === true) {
      const second = this.checkCharacter(data.word, 1, 2);

      if (second === true) {
        let i = data.word.length;
        let total = 0;
        let counter = 0;

        while (i > 0) {
          const checkCharacter = this.checkCharacter(
            data.word,
            counter,
            counter + 1,
          );

          if (
            checkCharacter === false &&
            data.word.slice(counter, counter + 1) === 'b'
          ) {
            return {
              response:
                this.checkAfterLetter('b', data.word) === true
                  ? 'Bravo'
                  : 'Best luck next time',
            };
          } else {
            total++;
          }

          i--;
          counter++;
        }

        return {
          response: total === wordLength ? 'Bravo' : 'Best luck next time',
        };
      }
    } else {
      return {
        response: data.word.slice(-1) === '!' ? 'Bravo' : 'Best luck next time',
      };
    }
    return { response: 'Best luck next time' };
  }

  checkCharacter(word: string, characterStart: number, characterEnd: number) {
    const character =
      characterStart === null
        ? word.slice(characterEnd)
        : word.slice(characterStart, characterEnd);

    return x.includes(character) === true ? true : false;
  }

  checkAfterLetter(letter: string, word: string) {
    let response = true;

    word
      .split(letter)[1]
      .split('aguette')
      .forEach((item: string) => {
        if (item.length !== 0) {
          response = false;
        }
      });

    return response;
  }
}
