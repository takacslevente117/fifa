
let x;
let cards = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRENWrIIR1lj7SSbVCwAdto9lzEFPPZFLamRw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRENWrIIR1lj7SSbVCwAdto9lzEFPPZFLamRw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRENWrIIR1lj7SSbVCwAdto9lzEFPPZFLamRw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRENWrIIR1lj7SSbVCwAdto9lzEFPPZFLamRw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRENWrIIR1lj7SSbVCwAdto9lzEFPPZFLamRw&usqp=CAU',
    'https://cpad.ask.fm/667/563/860/710003021-1r36mer-g997c6l7fhmqkkp/original/szkecig.jpg',
    'https://cpad.ask.fm/667/563/860/710003021-1r36mer-g997c6l7fhmqkkp/original/szkecig.jpg',
    'https://cpad.ask.fm/667/563/860/710003021-1r36mer-g997c6l7fhmqkkp/original/szkecig.jpg',
    'https://cpad.ask.fm/667/563/860/710003021-1r36mer-g997c6l7fhmqkkp/original/szkecig.jpg',
    'https://cpad.ask.fm/667/563/860/710003021-1r36mer-g997c6l7fhmqkkp/original/szkecig.jpg',
    'https://www.superfitt.hu/wp-content/uploads/2021/08/kathi-bela.jpg',
    'https://www.superfitt.hu/wp-content/uploads/2021/08/kathi-bela.jpg',
    'https://www.superfitt.hu/wp-content/uploads/2021/08/kathi-bela.jpg',
    'https://www.superfitt.hu/wp-content/uploads/2021/08/kathi-bela.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/4/41/%D0%92%D0%B8%D0%BA%D1%82%D0%BE%D1%80_%D0%9E%D1%80%D0%B1%D0%B0%D0%BD_%2818-01-2022%29.jpg',
    'https://www.famousbirthdays.com/headshots/csenge-forstner-9.jpg',
    'https://www.famousbirthdays.com/headshots/csenge-forstner-9.jpg',
    'https://www.famousbirthdays.com/headshots/csenge-forstner-9.jpg',
    'https://www.famousbirthdays.com/headshots/csenge-forstner-9.jpg',
    'https://www.famousbirthdays.com/headshots/csenge-forstner-9.jpg',
    'https://www.famousbirthdays.com/headshots/csenge-forstner-9.jpg',
    'https://www.famousbirthdays.com/headshots/csenge-forstner-9.jpg',
    'https://www.famousbirthdays.com/headshots/csenge-forstner-9.jpg',
    'https://www.famousbirthdays.com/headshots/csenge-forstner-9.jpg',
    'https://ocdn.eu/images/pulscms/NjY7MDA_/e4b3fcc9bdd31e00bfdf1dafe7775f40.jpg',
    'https://ocdn.eu/images/pulscms/NjY7MDA_/e4b3fcc9bdd31e00bfdf1dafe7775f40.jpg',
    'https://ocdn.eu/images/pulscms/NjY7MDA_/e4b3fcc9bdd31e00bfdf1dafe7775f40.jpg',
    'https://ocdn.eu/images/pulscms/NjY7MDA_/e4b3fcc9bdd31e00bfdf1dafe7775f40.jpg',
    'https://coub-attachments.akamaized.net/coub_storage/coub/simple/cw_timeline_pic/399ef47671a/7fec4250986dcd74cd3fb/med_1495556942_image.jpg',
    'https://i1.sndcdn.com/artworks-nPeHaEKTPNQPhym3-Aybvmg-t500x500.jpg',
    'https://i1.sndcdn.com/artworks-nPeHaEKTPNQPhym3-Aybvmg-t500x500.jpg',
    'https://i1.sndcdn.com/artworks-nPeHaEKTPNQPhym3-Aybvmg-t500x500.jpg',
    'https://yt3.googleusercontent.com/ytc/AGIKgqPGAgbD0qGmMcgurwo7m34xCHua66YI-gzLwsAuW44=s900-c-k-c0x00ffffff-no-rj',
    'https://yt3.googleusercontent.com/ytc/AGIKgqPGAgbD0qGmMcgurwo7m34xCHua66YI-gzLwsAuW44=s900-c-k-c0x00ffffff-no-rj',
    'https://yt3.googleusercontent.com/ytc/AGIKgqPGAgbD0qGmMcgurwo7m34xCHua66YI-gzLwsAuW44=s900-c-k-c0x00ffffff-no-rj',
    'https://yt3.googleusercontent.com/ytc/AGIKgqPGAgbD0qGmMcgurwo7m34xCHua66YI-gzLwsAuW44=s900-c-k-c0x00ffffff-no-rj',
    'https://yt3.googleusercontent.com/ytc/AGIKgqPGAgbD0qGmMcgurwo7m34xCHua66YI-gzLwsAuW44=s900-c-k-c0x00ffffff-no-rj',
    'https://yt3.googleusercontent.com/ytc/AGIKgqPGAgbD0qGmMcgurwo7m34xCHua66YI-gzLwsAuW44=s900-c-k-c0x00ffffff-no-rj',
    'https://coub-attachments.akamaized.net/coub_storage/coub/simple/cw_image/1ca5b54524e/552585270b49c85627a25/1542956252_00031.jpg',
    'https://coub-attachments.akamaized.net/coub_storage/coub/simple/cw_image/1ca5b54524e/552585270b49c85627a25/1542956252_00031.jpg',
    'https://coub-attachments.akamaized.net/coub_storage/coub/simple/cw_image/1ca5b54524e/552585270b49c85627a25/1542956252_00031.jpg',
    'https://coub-attachments.akamaized.net/coub_storage/coub/simple/cw_image/1ca5b54524e/552585270b49c85627a25/1542956252_00031.jpg',
    'https://preview.redd.it/q97jf24ylba71.jpg?width=419&format=pjpg&auto=webp&s=c31e3c8100ab1d199fb6a226ab7fa02491594ff1',
    'https://preview.redd.it/q97jf24ylba71.jpg?width=419&format=pjpg&auto=webp&s=c31e3c8100ab1d199fb6a226ab7fa02491594ff1',
    'https://preview.redd.it/q97jf24ylba71.jpg?width=419&format=pjpg&auto=webp&s=c31e3c8100ab1d199fb6a226ab7fa02491594ff1',
    'https://i.redd.it/qxn1c24ylba71.jpg',
    'https://i.redd.it/qxn1c24ylba71.jpg',
    'https://i.redd.it/qxn1c24ylba71.jpg',
    'https://i.redd.it/qxn1c24ylba71.jpg',
    'https://preview.redd.it/u2ozf24ylba71.jpg?width=419&format=pjpg&auto=webp&s=0d69fbaec522cdc24867c9ca26ea5227841b6d25',
    'https://preview.redd.it/zvl43v4ylba71.jpg?width=419&format=pjpg&auto=webp&s=565b59f72d4f8a7aa4739463230707d5912e34bc',
    'https://preview.redd.it/zvl43v4ylba71.jpg?width=419&format=pjpg&auto=webp&s=565b59f72d4f8a7aa4739463230707d5912e34bc',
    'https://preview.redd.it/zvl43v4ylba71.jpg?width=419&format=pjpg&auto=webp&s=565b59f72d4f8a7aa4739463230707d5912e34bc',
    'https://preview.redd.it/zvl43v4ylba71.jpg?width=419&format=pjpg&auto=webp&s=565b59f72d4f8a7aa4739463230707d5912e34bc',
    'https://cdn.borsonline.hu/2022/04/pt5JjqU6O9Ncd3ObtBSjcrPfV6mXhNkoiqYAC1VqJKE/fill/750/1334/no/1/aHR0cHM6Ly9jbXNjZG4uYXBwLmNvbnRlbnQucHJpdmF0ZS9jb250ZW50L2QyM2IzMDUyNjhhYTRlODI5MmFkZTEwN2VhYjRhNjcx.jpg',
    'https://168.hu//data/kepek_230131/nagy-alekosz-facebook_fit_1200x10000.jpg',
    'https://168.hu//data/kepek_230131/nagy-alekosz-facebook_fit_1200x10000.jpg',
    'https://168.hu//data/kepek_230131/nagy-alekosz-facebook_fit_1200x10000.jpg',
    'https://yt3.googleusercontent.com/ytc/AGIKgqNW2qiReZNzhB33qIHFOru6m-j2-GbT3oMe__R-vg=s900-c-k-c0x00ffffff-no-rj',
    'https://yt3.googleusercontent.com/ytc/AGIKgqNW2qiReZNzhB33qIHFOru6m-j2-GbT3oMe__R-vg=s900-c-k-c0x00ffffff-no-rj',
    'https://yt3.googleusercontent.com/ytc/AGIKgqNW2qiReZNzhB33qIHFOru6m-j2-GbT3oMe__R-vg=s900-c-k-c0x00ffffff-no-rj',
    'https://yt3.googleusercontent.com/ytc/AGIKgqNW2qiReZNzhB33qIHFOru6m-j2-GbT3oMe__R-vg=s900-c-k-c0x00ffffff-no-rj',
    'https://yt3.googleusercontent.com/ytc/AGIKgqNW2qiReZNzhB33qIHFOru6m-j2-GbT3oMe__R-vg=s900-c-k-c0x00ffffff-no-rj',
    'https://yt3.googleusercontent.com/ytc/AGIKgqNW2qiReZNzhB33qIHFOru6m-j2-GbT3oMe__R-vg=s900-c-k-c0x00ffffff-no-rj',
    'https://yt3.googleusercontent.com/ytc/AGIKgqNW2qiReZNzhB33qIHFOru6m-j2-GbT3oMe__R-vg=s900-c-k-c0x00ffffff-no-rj',
    'https://yt3.googleusercontent.com/ytc/AGIKgqNW2qiReZNzhB33qIHFOru6m-j2-GbT3oMe__R-vg=s900-c-k-c0x00ffffff-no-rj',
    'https://yt3.googleusercontent.com/ytc/AGIKgqNW2qiReZNzhB33qIHFOru6m-j2-GbT3oMe__R-vg=s900-c-k-c0x00ffffff-no-rj',
    'https://yt3.googleusercontent.com/ytc/AGIKgqNW2qiReZNzhB33qIHFOru6m-j2-GbT3oMe__R-vg=s900-c-k-c0x00ffffff-no-rj',
    'https://yt3.googleusercontent.com/ytc/AGIKgqNW2qiReZNzhB33qIHFOru6m-j2-GbT3oMe__R-vg=s900-c-k-c0x00ffffff-no-rj',
    'https://yt3.googleusercontent.com/ytc/AGIKgqNW2qiReZNzhB33qIHFOru6m-j2-GbT3oMe__R-vg=s900-c-k-c0x00ffffff-no-rj',
    'https://yt3.googleusercontent.com/ytc/AGIKgqNW2qiReZNzhB33qIHFOru6m-j2-GbT3oMe__R-vg=s900-c-k-c0x00ffffff-no-rj',
    'https://balazskicks.com/cdn/shop/products/image_5c53f80e-0f67-4220-8fc7-41c7caa87cf9_1200x630.webp?v=1653504036',
    'https://ocdn.eu/images/pulscms/MWI7MDA_/e4b8a8ebc109645fa1797303e4f3f0b3.jpg',
    'https://ocdn.eu/images/pulscms/MWI7MDA_/e4b8a8ebc109645fa1797303e4f3f0b3.jpg',
    'https://ocdn.eu/images/pulscms/MWI7MDA_/e4b8a8ebc109645fa1797303e4f3f0b3.jpg',
    'https://ocdn.eu/pulscms-transforms/1/ARVk9kpTURBXy8yYmE0MzFmZmJiYjgyNjBhMzlhYTVmZTZjNTU1YTljZi5wbmeTlQPMywDNAWfNAhuTBc0BaM0B9JMFzQFozQH03gACoTABoTEA',
    'https://ocdn.eu/pulscms-transforms/1/ARVk9kpTURBXy8yYmE0MzFmZmJiYjgyNjBhMzlhYTVmZTZjNTU1YTljZi5wbmeTlQPMywDNAWfNAhuTBc0BaM0B9JMFzQFozQH03gACoTABoTEA',
    'https://ocdn.eu/pulscms-transforms/1/ARVk9kpTURBXy8yYmE0MzFmZmJiYjgyNjBhMzlhYTVmZTZjNTU1YTljZi5wbmeTlQPMywDNAWfNAhuTBc0BaM0B9JMFzQFozQH03gACoTABoTEA',
    'https://ocdn.eu/pulscms-transforms/1/ARVk9kpTURBXy8yYmE0MzFmZmJiYjgyNjBhMzlhYTVmZTZjNTU1YTljZi5wbmeTlQPMywDNAWfNAhuTBc0BaM0B9JMFzQFozQH03gACoTABoTEA',
    'https://ocdn.eu/pulscms-transforms/1/ARVk9kpTURBXy8yYmE0MzFmZmJiYjgyNjBhMzlhYTVmZTZjNTU1YTljZi5wbmeTlQPMywDNAWfNAhuTBc0BaM0B9JMFzQFozQH03gACoTABoTEA',
    'https://buy.agoramodels.com/site/assets/files/2218/prime-8.0x700.png',
    'https://buy.agoramodels.com/site/assets/files/2218/prime-8.0x700.png',
    'https://pestisracok.hu/wp-content/uploads/2021/05/FletoGeriKMvagott2-1000x600.jpg',
    'https://pestisracok.hu/wp-content/uploads/2021/05/FletoGeriKMvagott2-1000x600.jpg',
    'https://pestisracok.hu/wp-content/uploads/2021/05/FletoGeriKMvagott2-1000x600.jpg',
    'https://pestisracok.hu/wp-content/uploads/2021/05/FletoGeriKMvagott2-1000x600.jpg',
];

document.getElementById("RollButton").onclick = function () {
    x = Math.floor(Math.random() * 85) + 1;
    document.getElementById("fifaCard").src = cards[x];
    document.getElementById("RollResetButton").style.display = 'block';
    document.getElementById("RollquicksellButton").style.display = 'block';
    document.getElementById("RollButton").style.display = 'none';

}

document.getElementById("RollResetButton").onclick = function () {
    document.getElementById("fifaCard").src = "https://www.fifplay.com/img/fifa/23/packs/fifa-23-pack.png";
    document.getElementById("RollResetButton").style.display = 'none';
    document.getElementById("RollButton").style.display = 'block';
    document.getElementById("RollquicksellButton").style.display = 'none';
    let image = document.createElement('img');
    image.src = cards[x];
    image.width = 100;
    image.height = 150;
    image.style.marginRight = 20;
    image.style.marginBottom = 20;
    document.getElementById("collections").appendChild(image);
}

document.getElementById("RollquicksellButton").onclick = function () {
    document.getElementById("fifaCard").src = "https://www.fifplay.com/img/fifa/23/packs/fifa-23-pack.png";
    document.getElementById("RollResetButton").style.display = 'none';
    document.getElementById("RollButton").style.display = 'block';
    document.getElementById("RollquicksellButton").style.display = 'none';
}

