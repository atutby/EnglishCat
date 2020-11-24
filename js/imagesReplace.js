/**
 *  Этот код
 * находит все тэги img на странице и заменяет в их src
 * '/images/' на 'https://atutby.github.io/images/'
 */

let regexp = /\/images\//gm;

let href = "https://atutby.github.io/images/";

let i = 0;
let imgs, repl;
do {
  imgs = document.getElementsByTagName("img");

  repl = imgs[i].getAttribute("src").replace(regexp, href);

  imgs[i].setAttribute("src", repl);

  i++;
} while (document.getElementsByTagName("img")[i]);
