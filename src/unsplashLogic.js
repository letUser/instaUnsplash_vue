import { unsplash } from "/src/unsplashconfig.js";
import { toJson } from "unsplash-js";

export let data = [];

export async function takePhotos(data) {
  data = await unsplash.photos.getRandomPhoto({ count: "30" }).then(toJson);
  return data;
}

export function clearPage(arr) {
  return arr.splice(0, arr.length);
}

export function setPagesQua(photoDataArr, pagesArr) {
  for (let i = 0; i < photoDataArr.length; i++) {
    if (i === 0) pagesArr.push(i + 1);
    else if (i % 10 === 0) pagesArr.push(i / 10 + 1);
  }
}

export function setPhotos(photoDataArr, photoPageArr, page) {
  page = page * 10;
  for (let i = page - 10; i < page; i++) {
    photoPageArr.push(photoDataArr[i].urls.small);
  }
}
